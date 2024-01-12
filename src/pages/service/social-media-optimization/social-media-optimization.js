import React from 'react';
import { Text, Layout, Image, ServiceEnquiry, Meta } from '../../../components';
import { getBasePath } from '../../../helper';

const SocialMediaOptimization = () => {
    const basePath = getBasePath();
    return (
        <Layout title1="Social Media" title2="Optimization" description="Comprehensive Solutions: Empowering Your Success">
            <Meta title="Social Media Marketing in Indore | Social Media Management  " description=" Leading social media marketing agency in Indore. Elevate your brand with expert social media management at Upspot. Call us at 77738 82021." pageUrl='service/social-media-optimizations'/>
            <div className='section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-12 col-lg-6'>
                            <Text>Drive organic engagement with social media tools. Schedule posts, create designs, and manage your social campaigns all from one platform. UpSpot gives you everything you need to connect with your audience. Keep your brand's creative assets consistent across all social media channels. </Text>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <Image src={`${basePath}images/SocialMedia.svg`} className={'w-100 img3'} />
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Brands Strategy Planning'} description={"Preparing a framework of brand strategy that determines how businesses present themselves to customers and stand out among competitors. Your business's brand is more than just its name, logo, fonts, and colours."} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Online Branding'} description={'Online branding also known as internet branding is a technique that uses the advancement of the internet to build your presence online. It helps to build credibility and trust with your audience.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Design Solutions'} description={'A product is bought to be used. It has to satisfy certain criteria, not only functional, but also psychological and aesthetic. We create that perfect design for you so that people stop and take notice.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Social Channel Management'} description={'Attain the best solution in digital marketing and support in industry. Our social media management services build brand awareness and loyalty for your brand to increase website exposure.'} />
                        </div>
                    </div>
                </div>
            </div>     
        </Layout>
    )
}

export default SocialMediaOptimization