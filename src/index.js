import 'babel-polyfill';
import 'moment/locale/es'
import express from 'express';
import renderer from './helpers/renderer';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import createStore from './helpers/createStore';

const app = express();

app.use('/api', proxy('http://localhost:5000', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}))
app.use('/public', express.static('public'));
app.get('*', (req,res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
        if(promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        
        if(context.url) {
            return res.redirect(301, context.url);
        }
        if(context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(3000, () => {
    console.log(`Escuchando en puerto 3000`);
});