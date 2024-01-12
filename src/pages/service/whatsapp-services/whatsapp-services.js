import React from 'react';
import { Text, Layout, Image, ServiceEnquiry, Meta } from '../../../components';
import { getBasePath } from '../../../helper';

const WhatsappServices = () => {
    const basePath = getBasePath();
    return (
        <Layout title1="Whatsapp" title2="Services" description="Comprehensive Solutions: Empowering Your Success">
            <Meta title="Professional WhatsApp Services | Boost Engagement & Sales" description="Explore expert WhatsApp services for businesses. Boost engagement, drive sales, and enhance your brand. Contact us for tailored marketing solutions." pageUrl='service/whatsapp-services'/>
            <div className='section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-12 col-lg-6'>
                            <Text>Greentick's cutting-edge WhatsApp services can help you grow your company. Our sophisticated Whatsapp API integration makes communication simple and opens up a world of possibilities for your company.</Text>
                            <div className='mt-3'><Text>You can easily engage with your clients using Green Ticks Whatsapp Services, giving them immediate assistance, updates, and individualised conversations. You may automate messages using our robust API, assuring timely delivery and improving customer interaction.</Text></div>
                            <div className='mt-3'><Text>With the help of our Store Catalogue function, you can display your goods and services right on Whatsapp in an eye-catching digital storefront. It's your online showroom, available to customers with just a tap, complete with product listings and promotions.</Text></div>
                            <div className='mt-3'><Text>Become one of the progressive companies that utilises Whatsapp Services by Greentick. With our cutting-edge solutions, embrace the future of communication and boost the success of your brand.</Text></div>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <Image src={`${basePath}images/WhatsappServices.svg`} className={'w-100 img3'} />
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Greentick'} description={"We offer an official Whatsapp green tick, the green check mark provided by Whatsapp itself, to showcase your brand's credibility and trustworthiness. Let us handle the process of purchasing it for you."} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Whatsapp API'} description={'With UpSpot you can manage your customer communication intuitively, professionally and in compliance with data protection laws. Why offer customer communication via whatsapp because it is the most used messaging app, official business account, automation.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Store Catalogue'} description={'Businesses can use WhatsApp Catalogue as a feature to present their goods and services in a well-organised and eye-catching way. It is a crucial tool for contemporary marketing and e-commerce tactics since it makes the purchasing process easier and increases customer engagement.'} />
                        </div>
                    </div>
                </div>
            </div>     
        </Layout>
    )
}

export default WhatsappServices