import React from 'react';
import Styles from './footer.module.scss'
import { Heading, Image, ListGroup, ListItem, Text } from '../../shared';
import { getBasePath } from '../../../helper';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const basePath = getBasePath();
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    window.scrollTo(0, 0);

    if(page === 'Home') {
        navigate('/');
    }
    if(page === 'About') {
        navigate('/about');
    }
    if(page === 'Services') {
        navigate('/service');
    }
    if(page === 'Portfolio') {
        navigate('/portfolio');
    }
    if(page === 'Careers') {
        navigate('/careers');
    }
    if(page === 'Contact') {
        navigate('/contact');
    }
    if(page === 'Terms and Conditions') {
      navigate('/tnc');
    }
    if(page === 'Privacy Policy') {
      navigate('/pp');
    }
  }
  return (
    <div className={`${Styles.footer}`}>
      <Link to={'https://api.whatsapp.com/send?phone=7773882021'} target='_' className={Styles.whatsappChat}> <Image src={`${basePath}images/whatsapp.png`} /></Link>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-lg-4 col-md-12 mb-3'>
            <Image src={`${basePath}images/logo-white.svg`} />
            <div className='mt-3'>
              <Text variant={'sm'} color={'white'} strong={'regular'}>UpSpot is a MarTech solutions company that helps businesses leverage technology to achieve their goals. We bridge the gap between adopting the right marketing strategies and processing way too much ease with the core objective being agility and personalisation.</Text>
            </div>
          </div>
          <div className='col-lg-2 col-md-6'>
            <Heading headingType={'h3'} headingText={'Quick Links'} color={'primaryLight'} strong={'regular'} />
            <ListGroup className={Styles.footerMenu}>
              <ListItem onClick={() => handleNavigation('Home')}><Text variant={'md'} color={'white'} strong={'regular'}>Home</Text></ListItem>
              <ListItem onClick={() => handleNavigation('About')}><Text variant={'md'} color={'white'} strong={'regular'}>About us</Text></ListItem>
              <ListItem onClick={() => handleNavigation('Services')}><Text variant={'md'} color={'white'} strong={'regular'}>Services</Text></ListItem>
              {/* <ListItem onClick={() => handleNavigation('Portfolio')}><Text variant={'md'} color={'white'} strong={'regular'}>Portfolio</Text></ListItem> */}
              <ListItem onClick={() => handleNavigation('Careers')}><Text variant={'md'} color={'white'} strong={'regular'}>Careers</Text></ListItem>
              <ListItem onClick={() => handleNavigation('Contact')}><Text variant={'md'} color={'white'} strong={'regular'}>Contact us</Text></ListItem>
              <ListItem onClick={() => handleNavigation('Terms and Conditions')}><Text variant={'md'} color={'white'} strong={'regular'}>Terms and Conditions</Text></ListItem>
              <ListItem onClick={() => handleNavigation('Privacy Policy')}><Text variant={'md'} color={'white'} strong={'regular'}>Privacy Policy</Text></ListItem>
            </ListGroup>
          </div>
          <div className='col-lg-3 col-md-6'>
            <Heading headingType={'h3'} headingText={'Contact us'} color={'primaryLight'} strong={'regular'} />
            <div><Text variant={'sm'} color={'white'} strong={'regular'}>It's very easy to get in touch with us. Just use the contact form or pay us a visit for a coffee at the office.</Text></div>
            <div className='mt-2'><Text variant={'md'} color={'white'} strong={'regular'}><Link to="mailto:coffee@upspot.in">coffee@upspot.in</Link></Text></div>
            <div className='mt-2'><Text variant={'md'} color={'white'} strong={'regular'}><Link to="tel:+917773882021">+91 77738 82021</Link></Text></div>
            <ListGroup className={Styles.social}>
              <ListItem><NavLink to={'https://www.facebook.com/ketanshah01/'} target='_'><Image src={`${basePath}images/facebook.svg`} /></NavLink></ListItem>
              <ListItem><NavLink to={'https://www.instagram.com/upspotindia/'} target='_'><Image src={`${basePath}images/instagram.svg`} /></NavLink></ListItem>
              <ListItem><NavLink to={'https://twitter.com/upspotindia'} target='_'><Image src={`${basePath}images/x.svg`} /></NavLink></ListItem>
              <ListItem><NavLink to={'https://www.linkedin.com/company/upspotdotin/'} target='_'><Image src={`${basePath}images/linkedin.svg`} /></NavLink></ListItem>
            </ListGroup>
          </div>
        </div>
      </div>
      <div className={`mt-3 pt-3 text-center px-3 ${Styles.copyright}`}><Text variant={'md'} color={'white'} strong={'regular'}>Copyright © 2023 UpSpot. All Rights Reserved.</Text></div>
    </div>
  )
}

export default Footer