import {Children, cloneElement} from 'react';
import PropTypes from 'prop-types';
import {navigate} from '../../history/history';

const Link = ({ to, children}) => {
  return cloneElement(Children.only(children),{
    onClick: () => navigate(to)
  });
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
}

export default Link;

