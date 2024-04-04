import React from 'react';
import Styles from './excerpt.module.scss';
import PropTypes from 'prop-types'

const Excerpt = ({theme, text}) => {
    return (
        <div className={`${Styles[theme]} ${Styles.excerpt}`}>{text}</div>
    )
}

Excerpt.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
}

export default Excerpt