import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';

const Spinner = () => (
  <div className="spinContainer">
    <CircularProgress style={{ color: purple[500], width: 100, height: 100 }} />
  </div>
);

export default Spinner;