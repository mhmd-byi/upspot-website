import React from 'react';
import { Heading, Text, Icon, ListGroup, ListItem } from '../../../components';
import Styles from './services.module.scss';
import PropTypes from 'prop-types'
import ServicesCard from '../services-card';
import { useNavigate } from 'react-router-dom';

const Services = ({content, bgWhite}) => {
    const navigate = useNavigate();

    const handleNavigation = (page) => {
        window.scrollTo(0, 0);
        if(page === 'software-web-development') {
            navigate('/service/software-web-development');
        }
        if(page === 'social-media-optimization') {
            navigate('/service/social-media-optimization');
        }
        if(page === 'seo-services') {
            navigate('/service/seo-services');
        }
        if(page === 'paid-marketing') {
            navigate('/service/paid-marketing');
        }
        if(page === 'marketplace-management') {
            navigate('/service/marketplace-management');
        }
        if(page === 'whatsapp-services') {
            navigate('/service/whatsapp-services');
        }
        if(page === 'content-marketing') {
            navigate('/service/content-marketing');
        }
        if(page === 'graphics-designs') {
            navigate('/service/graphics-designs');
        }
        if(page === 'editing') {
            navigate('/service/editing');
        }
        if(page === 'saas') {
            navigate('/service/saas');
        }
    };
    return (
        <div className={`section pb-0 ${Styles.services} ${bgWhite ? Styles.bgWhite : ""}`}>
            {content ? (
                <div className='container'>
                    <div className={`row align-items-center justify-content-center t-center-m`}>
                        <div className='col-md-12 col-lg-6 text-center'>
                            <Text variant={'xxl'} color={'red'} strong={'regular'}>Our Services</Text>
                            <Heading headingText={"Elevate Your Brand's Impact with Strategic MarTech Services"} headingType={'h2'} strong={'bold'} />
                        </div>
                        {/* <div className='col-md-4'>
                            <Button variant={'secondary'} className={Styles.serviceView}>View All <Icon className={'icon-Right-arrow'} /></Button>
                        </div> */}
                    </div>
                </div>
            ) : null}
            <div className={Styles.grid}>
                <ServicesCard serviceName={'Software/Web Development'} icon={'icon-CodeBracket'} clickHandler={() => handleNavigation('software-web-development')}>
                    <ListGroup>
                        <ListItem><Icon className={'icon-check'} /> Web development</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Website Designing</ListItem>
                        <ListItem><Icon className={'icon-check'} /> App Development</ListItem>
                        <ListItem><Icon className={'icon-check'} /> ERP Software Development</ListItem>
                    </ListGroup>
                </ServicesCard>
                <ServicesCard serviceName={'Social Media Optimization'} icon={'icon-Social-media'} clickHandler={() => handleNavigation('social-media-optimization')}>
                    <ListGroup>
                        <ListItem><Icon className={'icon-check'} /> Brands Strategy Planning</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Online Branding</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Design Solutions</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Social Channel Management</ListItem>
                    </ListGroup>
                </ServicesCard>
                <ServicesCard serviceName={'Seo Services'} icon={'icon-Seo'} clickHandler={() => handleNavigation('seo-services')}>
                    <ListGroup>
                        <ListItem><Icon className={'icon-check'} /> On-Page SEO</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Off-Page SEO</ListItem>
                    </ListGroup>
                </ServicesCard>
                <ServicesCard serviceName={'Paid Marketing'} icon={'icon-Marketing'} clickHandler={() => handleNavigation('paid-marketing')}>
                    <ListGroup>
                        <ListItem><Icon className={'icon-check'} /> Affiliate Marketing</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Google Ads</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Pinterest Ads</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Meta Ads</ListItem>
                        <ListItem><Icon className={'icon-check'} /> LinkedIn Ads</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Youtube Ads</ListItem>
                    </ListGroup>
                </ServicesCard>
                <ServicesCard serviceName={'Marketplace Management'} icon={'icon-BuildingOffice'} clickHandler={() => handleNavigation('marketplace-management')}>
                    <ListGroup>
                        <ListItem><Icon className={'icon-check'} /> Amazon</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Flipkart</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Jio Mart</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Meesho</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Myntra</ListItem>
                    </ListGroup>
                </ServicesCard>
                <ServicesCard serviceName={'WhatsApp Services'} icon={'icon-Calling'} clickHandler={() => handleNavigation('whatsapp-services')}>
                    <ListGroup>
                        <ListItem><Icon className={'icon-check'} /> Greentick</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Whatsapp API</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Store Catalogue</ListItem>
                    </ListGroup>
                </ServicesCard>
                <ServicesCard serviceName={'Content Marketing'} icon={'icon-Edit'} clickHandler={() => handleNavigation('content-marketing')}>
                    <ListGroup>
                        <ListItem><Icon className={'icon-check'} /> Content Ideation</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Trend Research</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Content Scripting</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Content Shoot</ListItem>
                    </ListGroup>
                </ServicesCard>
                <ServicesCard serviceName={'Video & Photo shoots/Editing'} icon={'icon-Graphics'} clickHandler={() => handleNavigation('editing')}>
                    <ListGroup>
                        <ListItem><Icon className={'icon-check'} /> Photo Editing</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Video Editing</ListItem>
                        <ListItem><Icon className={'icon-check'} /> All Type Of Photo Video Shoot</ListItem>
                    </ListGroup>
                </ServicesCard>
                <ServicesCard serviceName={'Graphics Designs'} icon={'icon-Product'} clickHandler={() => handleNavigation('graphics-designs')}>
                    <ListGroup>
                        <ListItem><Icon className={'icon-check'} /> Packaging Design</ListItem>
                        <ListItem><Icon className={'icon-check'} /> LOGO Designs</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Brochure Designing</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Social Flyers</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Motion Flyers</ListItem>
                    </ListGroup>
                </ServicesCard>
                {/* <ServicesCard serviceName={'Software as a Service(SaaS)'} icon={'icon-Printer'} clickHandler={() => handleNavigation('saas')}>
                    <ListGroup>
                        <ListItem><Icon className={'icon-check'} /> Mini Website</ListItem>
                        <ListItem><Icon className={'icon-check'} /> Music Distribution </ListItem>
                    </ListGroup>
                </ServicesCard> */}
            </div>
        </div>
    )
}

Services.defaultProps = {
    content: true,
}
Services.prototype = {
    content: PropTypes.bool,
    bgWhite: PropTypes.bool
}

export default Services