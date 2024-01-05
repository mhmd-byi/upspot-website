import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render ListGroup
 * @param {string} className
 * @param {any} children

 */ 

const ListGroup = ({className, children}) => {
    return (
        <ul className={className}>{children}</ul>
    )
}

ListGroup.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
}

export default ListGroup