import React from 'react';
import PropTypes from 'prop-types';
import { Button, Heading, Text } from '../..';
import Styles from './service-enquiry.module.scss';
import Icon from '../icon/icon';
import { useNavigate } from 'react-router-dom';

/**
 * Render ServiceEnquiry
 * @param {string} heading
 * @param {string} description

 */ 

const ServiceEnquiry = ({heading, description}) => {
    const navigate = useNavigate();
    const clickHandler = () => {
        window.scrollTo(0, 0);
        navigate('/contact');
    }
    return (
        <div className={`${Styles.serviceEnquiry}`}>
            <Heading headingType={'h3'} headingText={heading} className={'mb-3'} />
            <Text>{description}</Text>
            <Button variant={'simple'} onClick={clickHandler} className={'mt-3'}>Enquiry Now <Icon className={'icon-Right-arrow'} /></Button>
        </div>
    )
}

ServiceEnquiry.propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string,
}

export default ServiceEnquiry