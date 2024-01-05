import React from 'react';
import { Text, Layout, Image, Heading } from '../../../components';
import { getBasePath } from '../../../helper';

const Veeba = () => {
    const basePath = getBasePath();
    return (
        <Layout pageTitle={false}>
            <div>
                <Image src={`${basePath}images/veeba.png`} className={'w-100'} />
            </div>
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'ABOUT THE COMPANY & CHALLENGE'} className={'mb-3 text-center'} />
                            <Text>Veeba stands out as a leading Condiments & Sauce company in India, renowned for its unwavering commitment to quality, innovation, and healthier product offerings in a crowded retail market. Their extensive distribution network spans across India, serving both General Trade and Modern Trade outlets, ensuring that consumers can savour the freshest and most authentic flavours in their homes. Veeba's dedication extends to sourcing the finest and most authentic global ingredients.</Text>
                            <div className='mt-3'>
                                <Text>While their ingredients were exceptionally fresh, the challenge lay in designing packaging that would preserve the freshness and appeal to customers. That's where our expertise came into play.</Text>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'OUR APPROACH'} className={'mb-3 text-center'} />
                            <Text>Our approach involved a thorough understanding of their products and crafting robust and user-friendly packaging to enhance the attractiveness of their condiments. After addressing the packaging, we leveraged Google Search Ads and Facebook Ads as primary paid advertising channels to drive relevant traffic to their website. Additionally, we created a compelling TV commercial (TVC) to promote their brand. </Text>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'THE RESULTS'} className={'mb-3 text-center'} />
                            <Text>The outcomes were highly positive. Customers embraced Veeba's products swiftly, with the packaging design receiving acclaim for its convenience and appeal. People not only purchased their products quickly but also appreciated the packaging's user-friendliness, which contributed to the overall success of the company.</Text>
                        </div>
                    </div>
                </div>
            </div>          
        </Layout>
    )
}

export default Veeba