import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import FileUpload from 'material-ui-icons/FileUpload';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit * 3        
    },
    inputControl: {
        fontSize: 15
    }
});

const LoginForm = ({ handleSubmit, classes }) => (
    <Paper className={classes.root} elevation={4}>
        <form onSubmit={handleSubmit} className={classes.container}>
            <FormControl fullWidth className={classes.formControl}>
                <h2>Panel de control | SNOnline</h2>
            </FormControl>
            <FormControl fullWidth  className={classes.formControl}>
                <InputLabel className={classes.inputControl} htmlFor="email">Email</InputLabel>
                <Input className={classes.inputControl} id="email" type="email" name="email" />
            </FormControl>
            <FormControl fullWidth  className={classes.formControl}>
                <InputLabel className={classes.inputControl} htmlFor="password">Contraseña</InputLabel>
                <Input className={classes.inputControl} id="password" type="password" name="password" />
            </FormControl>
            <FormControl fullWidth  className={classes.formControl}>
                <Button type="submit" color="primary" variant="raised">
                    Ingresar 
                    <FileUpload className={classes.rightIcon} />
                </Button>
            </FormControl>
        </form>
    </Paper>
);

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);