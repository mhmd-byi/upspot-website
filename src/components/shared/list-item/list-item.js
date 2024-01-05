import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render ListItem
 * @param {string} className
 * @param {any} children
 * @param {func} onClick

 */ 

const ListItem = ({className, children, onClick}) => {
    return (
        <li className={className} onClick={onClick}>{children}</li>
    )
}

ListItem.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func,
}

export default ListItem