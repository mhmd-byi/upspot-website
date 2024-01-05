import React from 'react';
import Styles from './career.module.scss';
import { Button, Icon, Layout, Meta } from '../../components';
import { Heading, Text } from '../../components';

const Career = () => {
    return (
        <Layout title1="Career" title2="at UpSpot" description="Explore Exciting Career Opportunities" mainClass={Styles.career} >
            <Meta title="Join Upspot: Explore Exciting Career Opportunities" description="upspot offers rewarding career Explore diverse opportunities and be part of our innovative team. Join us in shaping the future. Check out available positions. " pageUrl='career'/>
            <div className={`section`}>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-md-12 col-lg-4'>
                            <Text variant={'xxl'} color={'red'} strong={'regular'}>Careers</Text>
                            <Heading headingText={'We seek bright individuals from diverse backgrounds who are curious, innovative, and strongly passionate about digital crafts.'} headingType={'h2'} strong={'bold'} />
                        </div>
                        <div className='col-md-12 col-lg-7 mt-5'>
                            <div><Text variant={'md'} strong={'regular'}>UpSpot is deeply committed to creating an inclusive, equal and diverse work culture, where the unique needs, perspectives and potential of all team members are respected. We believe diverse individuals bring different capabilities, experiences and innovation to the table.</Text></div>
                            <div className='mt-3'><Text variant={'md'} strong={'regular'}>We promote open communication. The mic is always up for grabs. Open seating, approachable leaders, and limitless growth opportunities bring our people closer to their passion. That's how we make hierarchies invisible, and people heard.</Text></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`section ${Styles.openPosition}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <Heading headingText={'Open Positions'} headingType={'h2'} strong={'bold'} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 mt-5'>
                            <div className={Styles.openingCard}>
                                <Heading headingText={'Social Media Manager'} headingType={'h3'} />
                                <div className='mt-2'><Text color={'gray'}>Positions: <Text color={'dark'}>1</Text></Text></div>
                                <div className='mt-2'><Text color={'gray'}>Experience: <Text color={'dark'}>1+ year</Text></Text></div>
                                <div className='mt-2'><Text color={'gray'}>Location: <Text color={'dark'}>Indore</Text></Text></div>
                                <Button variant={'simple'} className={'mt-4'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                            </div>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <div className={Styles.openingCard}>
                                <Heading headingText={'Project Manager'} headingType={'h3'} />
                                <div className='mt-2'><Text color={'gray'}>Positions: <Text color={'dark'}>1</Text></Text></div>
                                <div className='mt-2'><Text color={'gray'}>Experience: <Text color={'dark'}>1 year</Text></Text></div>
                                <div className='mt-2'><Text color={'gray'}>Location: <Text color={'dark'}>Indore</Text></Text></div>
                                <Button variant={'simple'} className={'mt-4'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                            </div>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <div className={Styles.openingCard}>
                                <Heading headingText={'Junior Graphic Designer '} headingType={'h3'} />
                                <div className='mt-2'><Text color={'gray'}>Positions: <Text color={'dark'}>1</Text></Text></div>
                                <div className='mt-2'><Text color={'gray'}>Experience: <Text color={'dark'}>Intern </Text></Text></div>
                                <div className='mt-2'><Text color={'gray'}>Location: <Text color={'dark'}>Indore</Text></Text></div>
                                <Button variant={'simple'} className={'mt-4'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                            </div>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <div className={Styles.openingCard}>
                                <Heading headingText={'Customer Relationship Manager ( CRM )'} headingType={'h3'} />
                                <div className='mt-2'><Text color={'gray'}>Positions: <Text color={'dark'}>1</Text></Text></div>
                                <div className='mt-2'><Text color={'gray'}>Experience: <Text color={'dark'}>1 year</Text></Text></div>
                                <div className='mt-2'><Text color={'gray'}>Location: <Text color={'dark'}>Indore</Text></Text></div>
                                <Button variant={'simple'} className={'mt-4'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`section ${Styles.joinTeam}`}>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 text-center'>
                            <Heading headingText={'Join Us and Work with Top Brands'} headingType={'h2'} strong={'bold'} className={'mb-3'} />
                            {/* <Text variant={'md'} strong={'regular'}>For any vacancy related query or for reaching us in person please mail us at <Link to='mailto:careers@upspot.in'>careers@upspot.in</Link> or pick up the phone and call us at <Link to='tel:+91-98765-43210'>+91-98765-43210</Link></Text> */}
                            {/* <Button variant={'simple'} className={'mt-4 mx-auto'}>View Details <Icon className={'icon-Right-arrow'} /></Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Career