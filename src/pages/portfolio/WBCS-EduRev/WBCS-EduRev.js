import React from 'react';
import { Text, Layout, Image, Heading } from '../../../components';
import { getBasePath } from '../../../helper';

const WBCS = () => {
    const basePath = getBasePath();
    return (
        <Layout pageTitle={false}>
            <div>
                <Image src={`${basePath}images/wbcs-edu-rev.png`} className={'w-100'} />
            </div>
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'ABOUT THE COMPANY & CHALLENGE'} className={'mb-3 text-center'} />
                            <Text>EduRev is an online education platform that empowers students to learn at their own pace and convenience, especially those preparing for competitive exams. EduRev not only offers a wide range of learning resources but also assesses students' strengths and weaknesses, providing guidance on improvement. They are also dedicated to bringing the best teachers from all over India to ensure high-quality education, regardless of where students are located.</Text>
                            <div className='mt-3'>
                                <Text>EduRev's vision of making competitive exam preparation accessible to all students, even those unable to attend physical classes, led them to develop a personalised learning app.</Text>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'OUR APPROACH'} className={'mb-3 text-center'} />
                            <Text>We began by creating their website because a strong online presence starts with a well-designed website. Once the website was up and running, we focused on developing an app. The app would seamlessly transition students from the website to a more personalised and interactive learning experience.</Text>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <Heading headingType={'h2'} headingText={'THE RESULTS'} className={'mb-3 text-center'} />
                            <Text>The results were highly positive. Students now have the flexibility to learn from any location, tailored to their individual needs. The personalised touch offered by the app has made learning more engaging and accessible for students.</Text>
                        </div>
                    </div>
                </div>
            </div>          
        </Layout>
    )
}

export default WBCS