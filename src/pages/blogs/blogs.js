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

            <div className={`section ${Styles.blogPage} mb-5`}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 col-lg-9 text-center'>
                            <Heading headingText={"Latest Articles"} className="mb-3" headingType={'h2'} strong={'bold'} />
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