import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../actions';
import requireAuth from '../components/hocs/requireAuth';
import moment from 'moment';
import Spinner from '../components/Spinner';

class DashboardPage extends Component {
    componentWillMount() {
        this.props.fetchArticles();
    }
    // renderAdmins() {
    //     return this.props.admins.map(admin => {
    //         return <li key={admin.id}>{admin.name}</li>
    //     });
    // }
    renderPendingArticles() {

        const pending = this.props.blog.filter(article => {
            return article.status === false;
        });

        return pending.map(article => {
            return <li key={article._id}>
                {`${moment(article.createdAt).format('DD/MM/YYYY')} - `}
                {`${article.title.substring(0,20)}... - `}
                <Link className="outline button" to={`/admin/edit/${article._id}`}>Aprobar</Link>
            </li>
        })
    }
    render() {
        switch(this.props.blog){
            case null:
                return (
                    <Spinner />
            )
            default:
                return (
                <div className="row">
                    <div className="col">
                        <blockquote>
                            <h2>Notas pendientes</h2>
                            <ul className="panels">{this.renderPendingArticles()}</ul>
                        </blockquote>
                    </div>
                    <div className="col">
                        <blockquote className="primary">
                            {/* <ul>{this.renderAdmins()}</ul> */}
                        </blockquote>
                    </div>
                </div>
            )
        }
    }
};

function mapStateToProps({ blog }) {
    return { blog };
}

export default {
    component: connect(mapStateToProps, { fetchArticles })(requireAuth(DashboardPage)),
    loadData: ({ dispatch }) => dispatch(fetchArticles())
};