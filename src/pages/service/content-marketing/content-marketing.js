import React from 'react';
import { Text, Layout, Image, ServiceEnquiry, Meta } from '../../../components';
import { getBasePath } from '../../../helper';

const ContentMarketing = () => {
    const basePath = getBasePath();
    return (
        <Layout title1="Content" title2="Marketing" description="Comprehensive Solutions: Empowering Your Success">
            <Meta title="Content Marketing Services | Drive Engagement & Growth " description="Explore Upspot's Content Marketing Services. Drive engagement, attract audiences, and foster growth with our expert strategies. Learn more at Upspot." pageUrl='service/content-marketing'/>
            <div className='section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-12 col-lg-6'>
                            <Text>Our content marketing services in Indore are made to support businesses in engaging their target audience and establishing their authority. We produce premium, SEO-friendly content that is catered to the requirements and preferences of the intended audience for our clients. Through our digital marketing services in Indore, our team of writers and editors collaborate directly with businesses to establish a content marketing plan that boosts traffic, produces leads, and increases conversions.</Text>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <Image src={`${basePath}images/ContentMarketing.svg`} className={'w-100 img3'} />
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Content Ideation'} description={'A key component of content marketing is content ideation, which is the creation of original and captivating content concepts that appeal to the target audience. It influences the creation of valuable content that is in line with brand objectives and accomplishes marketing objectives through research and knowing consumer preferences.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Trend Research'} description={'In content marketing, trend research entails following changes in consumer and industry trends. Marketers produce pertinent and interesting content that appeals to a bigger audience and develops brand authority by recognizing popular themes and keywords.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Content Scripting'} description={'The creation of organised and engaging scripts for videos, podcasts, and presentations is essential to content marketing. The audience is engaged, and the overall quality is improved by ensuring focused, cohesive content that is in line with brand objectives. A strong script can help you present a message that is compelling and make the effect you want.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Content Shoot'} description={"In order to bring the creative idea to life, content shooting is crucial in content marketing. This involves capturing visual materials like photographs and videos. Professional photographers and videographers make sure that the imagery is of the highest calibre and supports the brand's messaging while also resonating with the audience. As a result, real and visually appealing material that increases the impact of content marketing efforts is produced."} />
                        </div>
                    </div>
                </div>
            </div>          
        </Layout>
    )
}

export default ContentMarketing