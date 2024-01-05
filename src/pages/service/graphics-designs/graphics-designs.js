import React from 'react';
import { Text, Layout, Image, ServiceEnquiry, Meta } from '../../../components';
import { getBasePath } from '../../../helper';

const GraphicsDesigns = () => {
    const basePath = getBasePath();
    return (
        <Layout title1="Graphics" title2="Designs" description="Comprehensive Solutions: Empowering Your Success">
            <Meta title="Graphic Design in Indore | Expert Services | Upspot " description="Discover tailored graphic design services in Indore. From logos to visuals, we've got you covered. Contact us at 77738 82021. Elevate your brand today" pageUrl='graphics-designs'/>
            <div className='section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-12 col-lg-6'>
                            <Text>Our graphic design and creative services in Indore are intended to assist businesses in producing attention-grabbing visuals that draw in their target market. A number of services are available from us, such as graphic design, video production, animation, Packaging and more. With the help of our digital marketing services, our team of designers and creatives collaborate directly with businesses to create graphics that are consistent with your brand identity, messaging, increase engagement and conversions.</Text>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <Image src={`${basePath}images/GraphicsDesigns.svg`} className={'w-100 img3'} />
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Packaging Design'} description={"For the presentation and branding of a product, packaging design is essential. It incorporates brand messaging, utility, and aesthetics. The design should embody the brand's personality, speak to the desired audience, and be useful, educational, and environmentally responsible."} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'LOGO Designs'} description={'The creation of a distinctive and enduring visual emblem to represent a brand is known as logo design. It should be straightforward, easily remembered, timely, adaptable, and employ suitable colour and typography.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Brochure designing'} description={'We strive to create brochure designs that deliver a return on your investment, create interest and deliver better results. We have produced brochure designs for startup businesses along with multi-national companies.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Social Flyers'} description={'Social media marketing is gaining quite a popularity as an online marketing policy each day for businesses universally. Social media flyer samples aim at interested groups connected to a product and involve them through an advertisement.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Motion Flyers'} description={'Are you looking to create a Motion/ Animation Flyer for your upcoming events, parties, night clubs, or any occasion to attract HUGE attention? Then you are in the right place. We are Motion Graphic designers with 5 years of experience. We have created lots of motion/ animated flyers for events, parties, or any occasion. See the samples in the portfolio.'} />
                        </div>
                    </div>
                </div>
            </div>             
        </Layout>
    )
}

export default GraphicsDesigns