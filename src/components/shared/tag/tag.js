import React from 'react';
import Styles from './tag.module.scss';
import PropTypes from 'prop-types'

const Tag = ({theme, text}) => {
    return (
        <div className={`${Styles[theme]} ${Styles.tag}`}>{text}</div>
    )
}

Tag.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
}

export default Tag