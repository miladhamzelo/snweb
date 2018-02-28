import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';

const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2,
    },
  });

const Spinner = () => (
    <CircularProgress className={classes.progress} style={{ color: purple[500] }} />
);

export default Spinner;