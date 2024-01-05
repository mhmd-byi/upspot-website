import React from 'react';
import PropTypes from 'prop-types';
import { Button, Heading } from '../..';
import Styles from './services-card.module.scss';
import Icon from '../../shared/icon/icon';

/**
 * Render ServicesCard
 * @param {string} serviceName
 * @param {string} icon
 * @param {string} children
 * @param {string} clickHandler

 */ 

const ServicesCard = ({serviceName, icon, children, clickHandler}) => {
    return (
        <div className={`${Styles.servicesCard}`}>
            <Icon className={`${icon} ${Styles.mainIcon}`} />
            <div className={Styles.name}><Heading headingType={'h3'} headingText={serviceName} /> <Icon className={'icon-arrow-down'} /></div>
            <div className={Styles.serviceList}>
                <Heading headingType={'h3'} headingText={serviceName} className={'mb-3'} />
                {children}
                <Button onClick={clickHandler}>Explore <Icon className={'icon-arrow-up'} /></Button>
            </div>
        </div>
    )
}

ServicesCard.propTypes = {
    serviceName: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.any,
    clickHandler: PropTypes.func,
}

export default ServicesCard