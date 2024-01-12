import React from 'react';
import { Text, Layout, Image, ServiceEnquiry, Meta } from '../../../components';
import { getBasePath } from '../../../helper';

const Editing = () => {
    const basePath = getBasePath();
    return (
        <Layout title1="Video and Photo" title2="Shoots/ Editing" description="Comprehensive Solutions: Empowering Your Success">
            <Meta title="Top Editing Services in Indore | Upspot" description="Transform your content with our expert editing services in Indore. Precision, creativity, and prompt delivery are guaranteed. Contact us at 7773882021 for more." pageUrl='service/editing'/>
            <div className='section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-12 col-lg-6'>
                            <Text>At UpSpot, we are masters of Editing, bringing life to your visuals with stunning Photo Editing, captivating Video Editing, and awe-inspiring product shoots. Step into our realm of enchantment, where pixels, colours, and stories come alive with cinematic brilliance. Let's create something extraordinary together!</Text>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <Image src={`${basePath}images/Editing.svg`} className={'w-100 img3'} />
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Photo Editing'} description={'We transform ordinary images into captivating works of art. With skilled editors and tailored solutions, we enhance your visuals with retouching, colour correction, and more. Bring your creative vision to life by partnering with us.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Video Editing'} description={'Want to transform raw footage into compelling masterpieces? Our skilled editors use cutting-edge techniques to create captivating videos that resonate with your audience. Elevate your content and captivate your viewers with our expert video editing services'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'All Type Of Photo Video Shoot'} description={'For any kind of photo or video shoot, we are your one-stop shop. Beautiful photographs, event coverage, and advertising videos are just a few of the services provided by our talented pros. With the help of our photography and videography services, you may enhance your brand, event, or personal recollections.'} />
                        </div>
                    </div>
                </div>
            </div>           
        </Layout>
    )
}

export default Editing