import React from 'react';
import { Text, Layout, Image, ServiceEnquiry, Meta } from '../../../components';
import { getBasePath } from '../../../helper';

const Saas = () => {
    const basePath = getBasePath();
    return (
        <Layout title1="Software as a" title2="Service(SaaS)" description="Comprehensive Solutions: Empowering Your Success">
            <Meta title="Top Digital Marketing & Google Ads Company in Indore " description="Unlock success with Upspot's expert paid marketing solutions. Drive conversions today. Call us at 77738 82021 to supercharge your online presence." pageUrl='service/saas'/>
            <div className='section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-12 col-lg-6'>
                            <Text>Welcome to Software as a Service (SaaS) simplified! At UpSpot, we deliver cutting-edge cloud-based solutions to streamline your business. Say goodbye to complex installations and hello to seamless efficiency. Let's elevate your operations together with our user-friendly SaaS offerings.</Text>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <Image src={`${basePath}images/Saas.svg`} className={'w-100 img3'} />
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Mini Website'} description={"Introducing our latest offering: Mini Website - Your Personal Web Space! Now, creating your own personal website is easier than ever. Say goodbye to the hassle of preparing a virtual card; with our services, we'll handle everything for you. Let your website showcase your unique identity to the world!"} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Music Distribution'} description={'Utilise our platform to quickly distribute your music to a wide range of international music providers. Upload as many singles, EPs, and albums as you like to reach more people than before. Over a hundred well-known music streaming, download, and social media outlets, including Spotify, Apple Music, TikTok, Amazon, Deezer, Instagram, Tidal, and many others, will make your tracks available. Increase your audience and have the world hear your songs!'} />
                        </div>
                    </div>
                </div>
            </div>          
        </Layout>
    )
}

export default Saas