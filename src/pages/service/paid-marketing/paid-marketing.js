import React from 'react';
import { Text, Layout, Image, ServiceEnquiry, Meta } from '../../../components';
import { getBasePath } from '../../../helper';

const PaidMarketing = () => {
    const basePath = getBasePath();
    return (
        <Layout title1="Paid" title2="Marketing" description="Comprehensive Solutions: Empowering Your Success">
            <Meta title="Top Digital Marketing & Google Ads Company in Indore " description="Unlock success with Upspot's expert paid marketing solutions. Drive conversions today. Call us at 77738 82021 to supercharge your online presence." pageUrl='service/paid-marketing'/>
            <div className='section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-12 col-lg-6'>
                            <Text>Here at UpSpot! We take the time to learn the dynamics of your business, enabling us to develop unique strategies that will align with your Google Ads campaign objectives. We’re a Google Ads Specialist that simply does things differently. We not only just advertise in google but also Meta Ads, Pinterest Ads, LinkedIn Ads and Youtube als. Key is transperancy.</Text>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <Image src={`${basePath}images/PaidMarketing.svg`} className={'w-100 img3'} />
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Affiliate Marketing'} description={"An Advertising model in which we will promote your brand product in return for a small commision on each sale.  You've probably seen headings marked “affiliate link” or “sponsored post” on many of the websites you visit. This is how Affiliate marketing looks from outside."} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Google Ads'} description={'Leverage PPC for your brand at just the right place that you are, We specialise in Keyword research and know the ones that will give your business the maximum ROI.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Pinterest Ads'} description={'Did you know Pinterest users spend twice as much shopping every month compared to non-pinners? Pinterest is unique among social platforms because its users are largely going there to discover new products and they respond well to ads.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Meta Ads'} description={'Meta ads allow you to place ads on Stories, Reels, feeds and other placements across Facebook and Instagram. The places where you can run your ads are called placements. Depending on the objective that you choose when you create your campaign, your ads can appear on Facebook, Messenger, Instagram and Meta Audience Network.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'LinkedIn Ads'} description={'LinkedIn is a social media for professionals, and their users are mostly using it to connect with other professionals for work-related topics. LinkedIn Ads is a powerful marketing tool for B2B companies to build leads, online recognition, share content, and more.'} />
                        </div>
                        <div className='col-md-10 col-lg-5 mt-5'>
                            <ServiceEnquiry heading={'Youtube Ads'} description={"You've spent months perfecting the scripts, storyboarding, finding the right to person to target. The end result? A Blockbuster video that's sure to rake in hundreds of views. With all that time invested in video you can't just stop embedding the video on the page of your website and your social media channels hoping someone will watch. In this situation running ads on youtube will surely promote your videos directly to consumers who have shown interest."} />
                        </div>
                    </div>
                </div>
            </div>             
        </Layout>
    )
}

export default PaidMarketing