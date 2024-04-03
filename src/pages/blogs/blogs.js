import Styles from './blogs.module.scss';
import {Heading, Image, Text, Tag, Meta, Layout } from '../../components';
import {BlogCard} from '../../components/common/blogCard/blogCard';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();

    const handleNavigation = (page) => {
        window.scrollTo(0, 0);
        if(page === 'ai-in-marketing') {
            navigate('/blogs/ai-in-marketing');
        }
        if(page === 'magician-of-web-development-services') {
            navigate('/blogs/magician-of-web-development-services');
        }
    }
    return (
        <Layout title1="Our" title2="Articles" description="Navigating the Digital Landscape: Your Guide to Online Growth" mainClass={Styles.blogPage} >
            <Meta title="Blogs | Upspot" description="Unlock success with upspot, a reputed IT company in indore. We provide site design, development, and digital marketing services. call us at 7773882021." pageUrl='about' />

            <div className={`section d-none d-sm-block ${Styles.blogPage}`}>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-md-12 col-lg-4'>
                            <Text variant={'xxl'} color={'red'} strong={'regular'}>About us</Text>
                            <Heading headingText={'We are Defining a New Era of Performance-Driven Brand Building'} headingType={'h2'} strong={'bold'} className={'mb-4'} />
                            <Image src="./images/About-vector.png" className={'w-75'} />
                        </div>
                        <div className='col-md-12 col-lg-7 mt-5'>
                            <div><Text variant={'md'} strong={'regular'}>We are UpSpot, our mission is to empower clients with a comprehensive 360-degree brand experience through our Martech solutions. With over 7 years of expertise, we deliver strategic graphic creations, web development, paid advertisements, SEO services, website design, and graphic design solutions. Our commitment to excellence has positioned UpSpot as a highly sought-after provider of Martech solutions in India.</Text></div>
                            <div className='mt-3'><Text variant={'md'} strong={'regular'}>Our business rests on three key foundations: Start Up, Move Up, and Keep Up. In the Start Up phase, we focus on helping businesses establish a solid foundation with services like website design, web development, branding, logo design, and SEO.</Text></div>
                            <div className='mt-3'><Text variant={'md'} strong={'regular'}>Once the foundation is set, we progress to the Move Up stage, where we boost brand success through paid advertising and social media marketing. We adapt to meet additional needs, ensuring our clients achieve their goals.</Text></div>
                            <div className='mt-3'><Text variant={'md'} strong={'regular'}>The Keep Up phase marks the conclusion of brand growth, where we continually work to maintain optimal website efficiency and ongoing progress. We are dedicated to supporting our clients' journey and ensuring their sustained success.</Text></div>
                            <div className='mt-3'><Text variant={'md'} strong={'regular'}>We are lucky enough to create something beautiful almost every other day, build brands and design websites for talented people from all around the world. We love our work and we are sure you will too!</Text></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`section ${Styles.blogPage} mb-5`}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 col-lg-9 text-center'>
                            <Text variant={'xxl'} color={'red'} strong={'regular'}>Taking You Forward.</Text>
                            <Heading headingText={"Here's what happens when creativity, data and technology collide. We always believe that the best work is yet to come…"} headingType={'h2'} strong={'bold'} />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-10 col-lg-4'>
                            <BlogCard theme={'light'} heading={'AI in Marketing'} src={'images/blog1.png'} cardHandler={() => handleNavigation('ai-in-marketing')}>
                                <Tag theme={'light'} text={'‘Digital Marketing’ is the buzzword among the alpha businesses.It has made the pillar of marketing more systematic, affordable, relevant and tech-oriented. The topography of digital marketing is rapidly evolving these days, with a combination of technology...'} />
                            </BlogCard>
                        </div>
                        <div className='col-md-10 col-lg-4'>
                            <BlogCard theme={'light'} heading={' Magician of Web Development Services'} src={'images/blog2-card.png'} cardHandler={() => handleNavigation('magician-of-web-development-services')}>
                                <Tag theme={'light'} text={'In the recent contemporary era, websites are no longer a sign of rich businesses. Perhaps its a basic amenity for the commencement of business, to cater to the cutting edge competition.....'} />
                            </BlogCard>
                        </div>
                        {/*<div className='col-md-10 col-lg-4 d-none d-sm-block'>
                            <BlogCard theme={'light'} heading={'Veeba'} src={'images/client-logo/13.png'} cardHandler={() => handleNavigation('magician-of-web-development-services')}>
                                <Tag theme={'light'} text={'Packaging'} />
                                <Tag theme={'light'} text={'Marketing'} />
                                <Tag theme={'light'} text={'TVC Ads'} />
                            </BlogCard>
    </div>*/}
                    </div>
                    {/* <div className='mt-5'>
                        <Button variant={'secondary'} className={'mx-auto'}>View all <Icon className={'icon-Right-arrow'} /></Button>
                    </div> */}
                </div>
            </div>
        </Layout>
    )
}

export default Blogs