import React from 'react';
import { Text, Layout, Image, ServiceEnquiry, Meta } from '../../../components';
import { getBasePath } from '../../../helper';

const MarketplaceManagement = () => {
    const basePath = getBasePath();
    return (
        <Layout title1="Marketplace" title2="Management" description="Comprehensive Solutions: Empowering Your Success">
            <Meta title="Marketplace Management Services | E-commerce Expertise" description="Elevate your e-commerce success with Upspot's Marketplace Management Services. Our experts maximise your reach and sales on popular online marketplaces." pageUrl='marketplace-management'/>
            <div className='section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-12 col-lg-6'>
                            <Text>Enter the expertise of marketplace management! Your brand will be promoted on Meesho, Shopsy, Jio Mart, Amazon, Flipkart, and more! Our e-commerce experts help your brand reach its full online potential. Impress clients and outperform rivals! Navigate online markets without difficulty. For your brand to remain competitive, we comprehend algorithms and trends. </Text>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <Image src={`${basePath}images/MarketplaceManagement.svg`} className={'w-100 img3'} />
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Amazon'} description={'Do you have multiple products to sell? And your main purpose is to sell the product. So look no further, choose amazon as it is an ecommerce platform that sells directly to your consumers.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Flipkart'} description={"With more than 10 crore registered customers, Flipkart's online marketplace offers more scope for growth than you ever imagined. To sell your product online this is one of the best sources to sell online."} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Jio Mart'} description={'Easily sell your products on Jio Mart with our marketplace management services. Just a few clicks and your products will be available to a broader audience.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Meesho'} description={'Meesho, the fastest-growing online retailer in India, is dedicated to make eCommerce available to everyone. Their goal is to enable 100 million Indian small enterprises, particularly independent business owners, to prosper online. We will manage every aspect of your Meesho selling account if you choose our services, assuring your success on the site.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Myntra'} description={"Your one-stop shop for all fashion and lifestyle necessities is Myntra. Myntra ensures a seamless and enjoyable buying experience for clients countrywide as India's largest fashion e-commerce site. Give us the responsibility of managing your Myntra account, and we'll handle it expertly."} />
                        </div>                        
                    </div>
                </div>
            </div>            
        </Layout>
    )
}

export default MarketplaceManagement