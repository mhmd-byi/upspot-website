import React from 'react';
import { Text, Layout, Image, Heading } from '../../../components';
import { getBasePath } from '../../../helper';

const DesiDhaba = () => {
    const basePath = getBasePath();
    return (
        <Layout pageTitle={false}>
            <div>
                <Image src={`${basePath}images/desi-dhaba.png`} className={'w-100'} />
            </div>
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'ABOUT THE COMPANY & CHALLENGE'} className={'mb-3 text-center'} />
                            <Text>Desi Dhaba is an Indian-style restaurant that cherishes and celebrates cultural traditions through its delectable dishes. Their menu is a delightful fusion of flavours, offering exceptional taste at affordable prices. Whether you crave mouthwatering parathas, paneer delights, or a variety of vegetarian dishes, Desi Dhaba promises to transport you to the vibrant fields of Punjab with each meal. They take immense pride in their Rasoi, inspired by the rich traditions of Indian and Punjabi hospitality.</Text>
                            <div className='mt-3'>
                                <Text>While Desi Dhaba excelled in delivering excellent food, outstanding service, and warm hospitality, they faced a crucial missing element – a distinctive logo. A logo plays a pivotal role in brand recognition, and they recognized its importance.</Text>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'OUR APPROACH'} className={'mb-3 text-center'} />
                            <Text>Our first step was to work on enhancing their brand identity. For a dhaba like theirs, building a strong brand image was essential. Following this, we focused on creating packaging designs to cater to customers who preferred to enjoy their meals at home. These packaging solutions were designed for easy carrying and convenience. </Text>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'THE RESULTS'} className={'mb-3 text-center'} />
                            <Text>The outcomes were highly favourable, with customers returning for both the delectable cuisine and the distinctive presentation that set them apart in the fiercely competitive food industry.</Text>
                        </div>
                    </div>
                </div>
            </div>          
        </Layout>
    )
}

export default DesiDhaba