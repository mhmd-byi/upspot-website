import React, {useState} from 'react';
import { Header, Heading, Image, ProjectCard, Services, Text, Tag, Faq, Footer, Button, Icon, ListGroup, ListItem, Meta } from '../../components';
import { ClientLogo } from '../../components';
import { useNavigate } from 'react-router-dom';
import { InView } from "react-intersection-observer";
import Styles from './home.module.scss';
import 'animate.css';

const Home = () => {
    const [inView, setInView] = React.useState(false);
    const [mavericks, setMavericks] = useState(false);
    const [digitalspace, setDigitalspace] = useState(false);
    const [technocrats, setTechnocrats] = useState(false);

    const mavericksHover = () => {
        setMavericks(true);
    };    
    const mavericksMouseLeave = () => {
        setMavericks(false);
    };
    const digitalHover = () => {
        setDigitalspace(true);
    };    
    const digitalMouseLeave = () => {
        setDigitalspace(false);
    };
    const technocratsHover = () => {
        setTechnocrats(true);
    };    
    const technocratsMouseLeave = () => {
        setTechnocrats(false);
    };
    
    const navigate = useNavigate();

    const btnHandler = () => {
        window.scrollTo(0, 0);
        navigate('about');
    }

    const handleNavigation = (page) => {
        window.scrollTo(0, 0);
        if(page === 'chokhi-dhani') {
            navigate('/portfolio/chokhi-dhani');
        }
        if(page === 'wbcs-edu-rev') {
            navigate('/portfolio/wbcs-edu-rev');
        }
        if(page === 'desi-dhaba') {
            navigate('/portfolio/desi-dhaba');
        }
        if(page === 'veeba') {
            navigate('/portfolio/veeba');
        }
    }

    return (
        <div className={Styles.home}>
            <Meta title="Digital Marketing Agency in Indore | Upspot" description="upspot Your Premier Digital Marketing Agency in Indore! Elevate your online presence with our expert and web design services. call us at 7773882021." />

            <Header />

            <div className={`${Styles.banner} ${mavericks ? Styles.banner1 : ''} ${digitalspace ? Styles.banner2 : ''} ${technocrats ? Styles.banner3 : ''}`}>
                <div className={Styles.bannerContent}>
                    <h1><span>We Are</span> <strong className={Styles.mavericks} onMouseEnter={mavericksHover} onMouseLeave={mavericksMouseLeave}>MarTech Mavericks</strong><br/> <span>UpTrend in</span> <strong className={Styles.digitalspace} onMouseEnter={digitalHover} onMouseLeave={digitalMouseLeave}>Digitalspace</strong> <br/><strong className={Styles.technocrats} onMouseEnter={technocratsHover} onMouseLeave={technocratsMouseLeave}>Technocrats</strong> <span>of Multiverse</span></h1>
                </div>
            </div>

            {/* MarTech */}
            <div className={`section ${Styles.marTech}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md text-center mb-5'>
                            <Heading headingType={'h2'} headingText={'We Are Martech Mavericks'} strong={'bold'} color={'white'} />
                        </div>
                    </div>
                    <div className={`row d-block d-md-none ${Styles.mavericks}`}>
                        <div className='col-md text-center mb-3'>
                            <Image src='images/marTechVector.svg' className={'w-100'} />
                        </div>
                    </div>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-md-4 col-6'>
                            <InView onChange={setInView}>
                                <ListGroup className={Styles.leftList}>
                                    <ListItem className={`${inView ? 'animate__animated animate__fadeInLeft one animate__slow' : ''}`}><Text>Paid Marketing</Text> <Image src='images/bulb.svg' className={'d-none d-md-block'} /></ListItem>
                                    <ListItem className={`${inView ? 'animate__animated animate__fadeInLeft one animate__slow' : ''}`}><Text>Social Media Optimization</Text> <Image src='images/bulb.svg' className={'d-none d-md-block'} /></ListItem>
                                    <ListItem className={`${inView ? 'animate__animated animate__fadeInLeft one animate__slow' : ''}`}><Text>Motion Graphic Design</Text> <Image src='images/bulb.svg' className={'d-none d-md-block'} /></ListItem>
                                    <ListItem className={`${inView ? 'animate__animated animate__fadeInLeft two animate__slow' : ''}`}><Text>Search Engine Optimization</Text> <Image src='images/bulb.svg' className={'d-none d-md-block'} /></ListItem>
                                    <ListItem className={`${inView ? 'animate__animated animate__fadeInLeft three animate__slow' : ''}`}><Text>Photo & Videography</Text> <Image src='images/bulb.svg' className={'d-none d-md-block'} /></ListItem>
                                </ListGroup>
                            </InView>
                        </div>                        
                        <div className='col-md-4 col-6'>
                            <InView onChange={setInView}>
                                <ListGroup className={Styles.rightList}>
                                    <ListItem className={`${inView ? 'animate__animated animate__fadeInRight one animate__slower' : ''}`}><Image src='images/bulb.svg' /> <Text>Website Development</Text></ListItem>
                                    <ListItem className={`${inView ? 'animate__animated animate__fadeInRight two animate__slower' : ''}`}><Image src='images/bulb.svg' /> <Text>Application Development</Text></ListItem>
                                    <ListItem className={`${inView ? 'animate__animated animate__fadeInRight three animate__slower' : ''}`}><Image src='images/bulb.svg' /> <Text>Software as a Service</Text></ListItem>
                                    <ListItem className={`${inView ? 'animate__animated animate__fadeInRight four animate__slower' : ''}`}><Image src='images/bulb.svg' /> <Text>Green Tick Whatsapp Service</Text></ListItem>
                                    <ListItem className={`${inView ? 'animate__animated animate__fadeInRight five animate__slower' : ''}`}><Image src='images/bulb.svg' /> <Text>Software Developement</Text></ListItem>
                                </ListGroup>
                            </InView>
                        </div>
                    </div>
                </div>
            </div>

            {/* Problem and Solution */}
            <div className={`${Styles.section} ${Styles.doDont}`}>
                <div className='container'>
                    <div className={`row ${Styles.grid}`}>
                        <div className={`col-6 ${Styles.gridCol}`}>
                            <Heading headingType={'h3'} className={'mb-4'} headingText={'We create Websites & Mobile Apps that work. When it comes to your digital appearance, off-the-peg is off-limits!'} strong={'bold'} />
                            <video width="500" height="500" autoPlay muted loop>
                                <source src="images/Gif1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className={`col-6 ${Styles.gridCol}`}>
                            <Heading headingType={'h3'} className={'mb-4'} headingText={"Interactive video creation with unique and engaging concept using the latest technology."} strong={'bold'} />
                            <video width="500" height="500" autoPlay muted loop>
                                <source src="images/Gif2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clien Logos */}
            <ClientLogo />

            {/* About Us */}
            <div className='aboutUs section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-md-12 col-lg-7'>
                            <Text variant={'xxl'} color={'red'} strong={'regular'}>About us</Text>
                            <Heading headingText={'Where Creativity Meets Technology: Pioneering MarTech for Your Business Growth.'} headingType={'h2'} strong={'bold'} className={'mb-4'} />
                            <Text variant={'md'} strong={'regular'}>Start Up, Move Up, and Keep Up are the three key foundations on which our business is built. In order to build a strong foundation, the Start Up phase focuses on helping firms in their early stages by offering services like website design, web development, branding, logo design, and SEO to establish a solid foundation.</Text>
                            <Button variant={'simple'} className={'mt-3 homeAboutBtn'} onClick={btnHandler}>Read More <Icon className={'icon-Right-arrow'} /></Button>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <Image src="images/About-vector.png" className={'w-100 flip'} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <Services />

            {/* Featured Projects */}
            <div className={`section ${Styles.featuredProjects}`}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 col-lg-9 text-center'>
                            <Text variant={'xxl'} color={'red'} strong={'regular'}>Taking You Forward.</Text>
                            <Heading headingText={"Here's what happens when creativity, data and technology collide. We always believe that the best work is yet to come…"} headingType={'h2'} strong={'bold'} />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-10 col-lg-6'>
                            <ProjectCard theme={'dark'} heading={'Chokhi Dhani'} src={'images/chokhi-dhani.webp'} cardHandler={() => handleNavigation('chokhi-dhani')}>
                                <Tag theme={'dark'} text={'Website Design & Development'} />
                                <Tag theme={'dark'} text={'Branding & Packaging'} />
                                <Tag theme={'dark'} text={'Social Media Management'} />
                                <Tag theme={'dark'} text={'Photography & Videography'} />
                            </ProjectCard>
                        </div>
                        <div className='col-md-10 col-lg-6 d-none d-sm-block'>
                            <ProjectCard theme={'light'} heading={'Veeba'} src={'images/client-logo/13.png'} cardHandler={() => handleNavigation('veeba')}>
                                <Tag theme={'light'} text={'Packaging'} />
                                <Tag theme={'light'} text={'Marketing'} />
                                <Tag theme={'light'} text={'TVC Ads'} />
                            </ProjectCard>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-10 col-lg-6 m-t-3'>
                            <ProjectCard theme={'light'} heading={'WBCS EduRev'} src={'images/wbcs-edu.png'} cardHandler={() => handleNavigation('wbcs-edu-rev')}>
                                <Tag theme={'light'} text={'Website Designing & Development'} />
                                <Tag theme={'light'} text={'Application Development'} />
                            </ProjectCard>
                        </div>
                        <div className='col-md-10 col-lg-6 d-none d-sm-block'>
                            <ProjectCard theme={'dark'} heading={'Desi Dhaba'} src={'images/desi-dhaba.jpg'} cardHandler={() => handleNavigation('desi-dhaba')}>
                                <Tag theme={'dark'} text={'Branding & Packaging'} />
                                <Tag theme={'dark'} text={'Logo Designing'} />
                            </ProjectCard>
                        </div>
                    </div>
                    {/* <div className='mt-5'>
                        <Button variant={'secondary'} className={'mx-auto'}>View all <Icon className={'icon-Right-arrow'} /></Button>
                    </div> */}
                </div>
            </div>

            {/* Testimonial */}
            {/* <Testimonial /> */}

            {/* Faqs */}
            <Faq />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home