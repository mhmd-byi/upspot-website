import React from 'react';
import { Text, Layout, Image, ServiceEnquiry, Meta } from '../../../components';
import { getBasePath } from '../../../helper';

const SoftwareWebDevelopment = () => {
    const basePath = getBasePath();
    return (
        <Layout title1="Software/Web" title2="Development" description="Comprehensive Solutions: Empowering Your Success">
            <Meta title="Web Design & Software Development company in Indore | Upspot" description="Customise your website with Upspot, your trusted web design, software development, and e-commerce website creation partner in Indore." pageUrl='software-web-development'/>

            <div className='section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-12 col-lg-6'>
                            <Text>The responsive websites that we develop and the host is compatible with all the devices. We provide comprehensive website development solutions, solid content, catchy infographics, brand projections, social media integrations and SEO optimization. Just give us your requirement, we will do the rest to bring you the web presence.</Text>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <Image src={`${basePath}images/SoftwareWeb.svg`} className={'w-100 img3'} />
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Web Development'} description={'Web development consists of two words Web and development. Web means websites, web pages or anything that works over the internet and Development refers to building the application from scratch.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Website Creation'} description={'We believe in designing a website in a way that is functional and offers a good user friendly experience.'} />
                        </div>
                       <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'E-commerce website'} description={'Development and designing an ecommerce website require lots of creativity to showcase and sell your products directly landing ultimately to your payment gateways.'} />
                       </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Enterprise Resource Planning (ERP)'} description={'As required in this era of digital transformation companies need to ensure accurate planning and real time control of process and resources in order to succeed. For this purpose a business can implement an ERP.'} />
                       </div>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default SoftwareWebDevelopment