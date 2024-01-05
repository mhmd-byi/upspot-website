import React from 'react';
import { Text, Layout, Image, Heading } from '../../../components';
import { getBasePath } from '../../../helper';

const ChokhiDhani = () => {
    const basePath = getBasePath();
    return (
        <Layout pageTitle={false}>
            <div>
                <Image src={`${basePath}images/chokhi-dhani.png`} className={'w-100'} />
            </div>
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'ABOUT THE COMPANY & CHALLENGE'} className={'mb-3 text-center'} />
                            <Text>Chokhi Dhani is a famous Indian hospitality service known for its great resorts and hotels all over India. They wanted to start promoting themselves online, so they decided to have their own website and manage their social media accounts. They also wanted to create beautiful photos and videos to attract people looking for a stay at their lovely resorts.</Text>
                            <div className='mt-3'>
                                <Text>The main goal was to get people interested in their resorts and services online. The hospitality and tourism industry is tough, so we needed to do a lot of research to stand out.</Text>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'OUR APPROACH'} className={'mb-3 text-center'} />
                            <Text>To start with we have started posting images on social media with graphics and designs to make people know about the resort and the services they are offering. The next immediate step is to create their website so that people after knowing the brand will land to our website for more information. </Text>
                            <div className='mt-3'>
                                <Text>After the website part is done we ultimately go for SEO as SEO is an important part for the website to optimise a website's technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant and popular towards user search queries, and as a consequence, search engines rank them better.</Text>
                            </div>
                            <div className='mt-3'>
                                <Text>Than we started making good content, helped them to pitch more and more client with the compelling photos and videos.</Text>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'THE RESULTS'} className={'mb-3 text-center'} />
                            <Text>The concerted efforts yielded tangible results. Engagement with Chokhi Dhani's content and posts increased significantly, driving traffic to the website for further exploration. The website became a valuable resource for individuals seeking information about the brand's exquisite offerings.</Text>
                            <div className='mt-3'>
                                <Text>In summary, the strategic combination of social media engagement, website development, SEO optimization, and compelling content creation successfully elevated Chokhi Dhani's online presence in the highly competitive hospitality and tourism industry.</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </Layout>
    )
}

export default ChokhiDhani