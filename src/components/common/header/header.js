import React from 'react';
import Styles from './header.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from '../../shared/image';
import { NavLink } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { getBasePath } from '../../../helper';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const basePath = getBasePath();
    const pathname = location.pathname;
    const segments = pathname.split('/');
    const childSegment = segments[1]; 

    const handleNavigation = (page) => {
        window.scrollTo(0, 0);

        if(page === 'Home') {
            navigate('/');
        }
        if(page === 'About') {
            navigate('/about');
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
        if(page === 'blogs'){
            navigate('/blogs');
        }
        if(page === 'ai-in-marketing'){
            navigate('/blogs/ai-in-marketing');
        }
        if(page === 'magician-of-web-development-services'){
            navigate('/blogs/magician-of-web-development-services');
        }
    };
    

    return (
        <>
        {['lg'].map((expand) => (
        <Navbar key={expand} expand={'lg'} className={`p-0 ${Styles.navigation}`}>
            <Container fluid className={`p-0 ${Styles.navContainer}`}>
            <Navbar.Brand onClick={() => handleNavigation('Home')} className={Styles.logo}><Image src={`${basePath}images/Logo.svg`} alt='Logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Image src={`${basePath}images/Logo.svg`} alt='Logo' onClick={() => handleNavigation('Home')} />
                </Offcanvas.Title>
                </Offcanvas.Header>
                    <Offcanvas.Body className={Styles.responsiveMenu}>
                        <Nav className={`justify-content-end align-items-center flex-grow-1 pe-3 pt-3 pb-2 ${Styles.menus}`}>
                            <Nav.Link onClick={() => handleNavigation('Home')} className={location.pathname === '/' ? Styles.active : ""}><Image src={`${basePath}images/home.png`} /> Home</Nav.Link>
                            <Nav.Link onClick={() => handleNavigation('About')} className={location.pathname === '/about' ? Styles.active : ""}><Image src={`${basePath}images/about.png`} /> About us</Nav.Link>
                            <NavDropdown title="Services" className={`${Styles.serviceMenu} ${childSegment === 'service' ? Styles.active : ""}`} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                <div className='row'>
                                    <div className={`col-md-4 ${Styles.serviceSubMenu}`}>
                                        <NavDropdown.Item onClick={() => handleNavigation('software-web-development')}>Software/Web Development</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleNavigation('social-media-optimization')}>Social Media Optimization</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleNavigation('seo-services')}>Seo Services</NavDropdown.Item>
                                    </div>
                                    <div className={`col-md-4 ${Styles.serviceSubMenu}`}>
                                        <NavDropdown.Item onClick={() => handleNavigation('paid-marketing')}>Paid Marketing</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleNavigation('marketplace-management')}>Marketplace Management</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleNavigation('whatsapp-services')}>WhatsApp Services</NavDropdown.Item>
                                    </div>
                                    <div className={`col-md-4 ${Styles.serviceSubMenu}`}>
                                        <NavDropdown.Item onClick={() => handleNavigation('content-marketing')}>Content Marketing</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleNavigation('editing')}>Video and Photo Shoots/ Editing</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleNavigation('graphics-designs')}>Graphics Designs</NavDropdown.Item>
                                        {/* <NavDropdown.Item onClick={() => handleNavigation('saas')}>Software as a Service(SaaS)</NavDropdown.Item> */}
                                    </div>
                                </div>
                            </NavDropdown>
                            <Nav.Link onClick={() => handleNavigation('blogs')} className={location.pathname === '/blogs' ? Styles.active : ""}><Image src={`${basePath}images/blogs-header-icon.png`} /> Blogs</Nav.Link>
                            {/* <Nav.Link onClick={() => handleNavigation('Portfolio')} className={location.pathname === '/portfolio' ? Styles.active : ""}><Image src={`${basePath}images/portfolio.png`} /> Portfolio</Nav.Link> */}
                            <Nav.Link onClick={() => handleNavigation('Careers')} className={location.pathname === '/careers' ? Styles.active : ""}><Image src={`${basePath}images/career.png`} /> Careers</Nav.Link>
                            <Nav.Link onClick={() => handleNavigation('Contact')} className={location.pathname === '/contact' ? Styles.active : ""}><Image src={`${basePath}images/contact.png`} /> Contact us</Nav.Link>
                            {/* <Nav.Link href="#action2"><Image src='images/boost.png' alt='Boost' className={Styles.boost} /></Nav.Link> */}

                            <div><Image src={`${basePath}images/certified-partner.png`} alt='Certified Partner' className={Styles.certified} /></div>

                            <div className={Styles.contactDetails}>
                                <NavLink href='tel:+917773882021' title='Phone' className={Styles.phone}><Image src={`${basePath}images/phone.svg`} /> +91 77738 82021</NavLink>
                                <NavLink href='mailto:coffee@upspot.in' title='Email'><Image src={`${basePath}images/mail.svg`} /> coffee@upspot.in</NavLink>
                            </div>
                        </Nav>
                        {/* <button className={Styles.eBtn}>E-Card</button> */}
                    </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>
        ))} 
        </>
    )
}

export default Header