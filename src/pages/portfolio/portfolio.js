import React from 'react';
import Styles from './portfolio.module.scss';
import { Button, Icon, Layout, Heading, Image, Text } from '../../components';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Portfolio = () => {
    return (
        <Layout title1="Our" title2="Projects" description="From Vision to Reality: Presenting Our Notable Projects" mainClass={Styles.portfolio} >
            <div className={`section pb-0`}>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-md-12 col-lg-5'>
                            <Text variant={'xxl'} color={'red'} strong={'regular'}>Featured Projects</Text>
                            <Heading headingText={'Featured Projects Spotlight: Shining Examples of Our Expertise'} headingType={'h2'} strong={'bold'} />
                        </div>
                        <div className='col-md-12 col-lg-7 mt-5'>
                            <div><Text variant={'md'} strong={'regular'}>Welcome to the Featured Projects Spotlight, where we showcase shining examples of our expertise and dedication. These projects exemplify the seamless fusion of creativity and strategy that sets us apart. Step into a world where possibilities become realities, and brands thrive in a dynamic digital landscape. Delve into our spotlight and witness the impact of our collaborative brilliance.</Text></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`section ${Styles.gallery}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Tabs
                                defaultActiveKey="All"
                                id="justify-tab-example"
                                className="mb-5"
                                justify
                                >
                                <Tab eventKey="All" title="All">
                                    <div className={Styles.grid}>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d2.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d2.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d2.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d2.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d2.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d2.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d2.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d2.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d2.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Design" title="Design">
                                <div className={Styles.grid}>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d1.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d1.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d1.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d1.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d1.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d1.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d1.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d1.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                        <div className={Styles.gridBox}>
                                            <Image src='images/d1.png' className={'w-100'} />
                                            <Heading headingType={'h4'} headingText={'Movie Apps Mobile'} />
                                            <Button variant={'simple'}>View Details <Icon className={'icon-Right-arrow'} /></Button>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="SocailMedia" title="Socail Media">
                                    Content for Socail Media 
                                </Tab>
                                <Tab eventKey="Strategy" title="Strategy">
                                    Content for Strategy 
                                </Tab>
                                <Tab eventKey="Video" title="Video">
                                    Content for Video
                                </Tab>
                                <Tab eventKey="Website" title="Website">
                                    Content for Website
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Portfolio