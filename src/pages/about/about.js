import React, { useState, useRef } from 'react';
import Styles from './about.module.scss';
import { Layout } from '../../components';
import { Heading, Image, Text, Meta } from '../../components';
import ReactPlayer from 'react-player';

const About = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showContent, setContent] = useState(false);
    const playerRef = useRef(null);

    const handlePlayButtonClick = () => {
        setIsPlaying(!isPlaying);
    };

    const handleVideoClick = () => {
        if (playerRef.current) {
          if (isPlaying) {
            playerRef.current.getInternalPlayer().pause(); // Pause the video
          } else {
            playerRef.current.getInternalPlayer().play(); // Play the video
          }
          setIsPlaying(!isPlaying);
        }
    };    
  
    return (
        <Layout title1="Our" title2="Company" description="Navigating the Digital Landscape: Your Guide to Online Growth" mainClass={Styles.aboutPage} >
            <Meta title="About Us | Upspot" description="Unlock success with upspot, a reputed IT company in indore. We provide site design, development, and digital marketing services. call us at 7773882021." pageUrl='about' />

            <div className={`section d-none d-sm-block ${Styles.aboutUs}`}>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-md-12 col-lg-4'>
                            <Text variant={'xxl'} color={'red'} strong={'regular'}>About us</Text>
                            <Heading headingText={'We are Defining a New Era of Performance-Driven Brand Building'} headingType={'h2'} strong={'bold'} className={'mb-4'} />
                            <Image src="images/About-vector.png" className={'w-75'} />
                        </div>
                        <div className='col-md-12 col-lg-7 mt-5'>
                            <div><Text variant={'md'} strong={'regular'}>We are UpSpot, our mission is to empower clients with a comprehensive 360-degree brand experience through our Martech solutions. With over 7 years of expertise, we deliver strategic graphic creations, web development, paid advertisements, SEO services, website design, and graphic design solutions. Our commitment to excellence has positioned UpSpot as a highly sought-after provider of Martech solutions in India.</Text></div>
                            <div className='mt-3'><Text variant={'md'} strong={'regular'}>Our business rests on three key foundations: Start Up, Move Up, and Keep Up. In the Start Up phase, we focus on helping businesses establish a solid foundation with services like website design, web development, branding, logo design, and SEO.</Text></div>
                            <div className='mt-3'><Text variant={'md'} strong={'regular'}>Once the foundation is set, we progress to the Move Up stage, where we boost brand success through paid advertising and social media marketing. We adapt to meet additional needs, ensuring our clients achieve their goals.</Text></div>
                            <div className='mt-3'><Text variant={'md'} strong={'regular'}>The Keep Up phase marks the conclusion of brand growth, where we continually work to maintain optimal website efficiency and ongoing progress. We are dedicated to supporting our clients' journey and ensuring their sustained success.</Text></div>
                            <div className='mt-3'><Text variant={'md'} strong={'regular'}>We are lucky enough to create something beautiful almost every other day, build brands and design websites for talented people from all around the world. We love our work and we are sure you will too!</Text></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`section primaryLightBg ${Styles.videoSection}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={Styles.video}>
                                <div className={Styles.videoContainer} onClick={handlePlayButtonClick}></div>
                                <ReactPlayer
                                    url={'images/IntroVideo.mp4'}
                                    playing={isPlaying}
                                    controls={false}
                                    width="100%"
                                    height="auto"
                                    loop={true}
                                    onClick={handleVideoClick}
                                />
                                {!isPlaying && (
                                    <Image src='images/play.svg' className={Styles.play} onClick={handlePlayButtonClick} />
                                )}
                                
                                <div className={Styles.overview}>
                                    <div className='row justify-content-around'>
                                        <div className={`col-lg-2 col-6 text-center ${Styles.overviewBox}`}>
                                            <Heading headingText={'250+'} headingType={'h2'} strong={'bold'} />
                                            <Text variant={'sm'} color={'gray'} strong={'regular'}>Projects</Text>
                                        </div>
                                        <div className={`col-lg-2 col-6 text-center ${Styles.overviewBox}`}>
                                            <Heading headingText={'10+'} headingType={'h2'} strong={'bold'} />
                                            <Text variant={'sm'} color={'gray'} strong={'regular'}>Team</Text>
                                        </div>
                                        <div className={`col-lg-2 col-6 text-center ${Styles.overviewBox}`}>
                                            <Heading headingText={'07+'} headingType={'h2'} strong={'bold'} />
                                            <Text variant={'sm'} color={'gray'} strong={'regular'}>Years</Text>
                                        </div>
                                        <div className={`col-lg-2 col-6 text-center ${Styles.overviewBox}`}>
                                            <Heading headingText={'200+'} headingType={'h2'} strong={'bold'} />
                                            <Text variant={'sm'} color={'gray'} strong={'regular'}>Satisfied Clients</Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`section grayLightBg d-sm-none ${Styles.aboutUsMobile}`}>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-md-12 col-lg-4'>
                            <Text variant={'xxl'} color={'red'} strong={'regular'}>About us</Text>
                            <Heading headingText={'We are Defining a New Era of Performance-Driven Brand Building'} headingType={'h2'} strong={'bold'} className={'mb-4'} />
                            <Image src="images/About-vector.png" className={'w-75'} />
                        </div>
                        <div className='col-md-12 col-lg-7 mt-5'>
                            <div><Text variant={'md'} strong={'regular'}>We are UpSpot, our mission is to empower clients with a comprehensive 360-degree brand experience through our Martech solutions. With over 7 years of expertise, we deliver strategic graphic creations, web development, paid advertisements, SEO services, website design, and graphic design solutions. Our commitment to excellence has positioned UpSpot as a highly sought-after provider of Martech solutions in India. </Text></div>
                            {!showContent ? (<Text onClick={()=>setContent(!showContent)} className={Styles.readMore}>Read More..</Text>): ''}
                            
                            {showContent ? (
                                <>
                                    <div className='mt-3'><Text variant={'md'} strong={'regular'}>Our business rests on three key foundations: Start Up, Move Up, and Keep Up. In the Start Up phase, we focus on helping businesses establish a solid foundation with services like website design, web development, branding, logo design, and SEO.</Text></div>
                                    <div className='mt-3'><Text variant={'md'} strong={'regular'}>Once the foundation is set, we progress to the Move Up stage, where we boost brand success through paid advertising and social media marketing. We adapt to meet additional needs, ensuring our clients achieve their goals.</Text></div>
                                    <div className='mt-3'><Text variant={'md'} strong={'regular'}>The Keep Up phase marks the conclusion of brand growth, where we continually work to maintain optimal website efficiency and ongoing progress. We are dedicated to supporting our clients' journey and ensuring their sustained success.</Text></div>
                                    <div className='mt-3'><Text variant={'md'} strong={'regular'}>We are lucky enough to create something beautiful almost every other day, build brands and design websites for talented people from all around the world. We love our work and we are sure you will too!</Text></div>
                                </>
                            ): ''}
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${Styles.logos}`}>
                <div className='container mb-3'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 col-lg-8 text-center'>
                            <Text variant={'xxl'} color={'red'} strong={'regular'}>Whom Do We Work with?</Text>
                            <Heading headingText={'From startup to fast growing brands, Presenting the partners in our success story.'} headingType={'h2'} strong={'bold'} className={'mb-3'} />
                        </div>
                    </div>
                </div>
                <div className={Styles.logoGrid}>
                    <Image src='images/client-logo/1.png' />
                    <Image src='images/client-logo/2.png' />
                    <Image src='images/client-logo/3.png' />
                    <Image src='images/client-logo/4.png' />
                    <Image src='images/client-logo/5.png' />
                    <Image src='images/client-logo/6.png' />
                    <Image src='images/client-logo/7.png' />
                    <Image src='images/client-logo/8.png' />
                    <Image src='images/client-logo/9.png' />
                    <Image src='images/client-logo/10.png' />
                    <Image src='images/client-logo/11.png' />
                    <Image src='images/client-logo/12.png' />
                    <Image src='images/client-logo/13.png' />
                    {/* <Image src='images/client-logo/14.png' /> */}
                    <Image src='images/client-logo/15.png' />
                    <Image src='images/client-logo/16.png' />
                    <Image src='images/client-logo/17.png' />
                    <Image src='images/client-logo/18.png' />
                    <Image src='images/client-logo/19.png' />
                    <Image src='images/client-logo/20.png' />
                    <Image src='images/client-logo/21.png' />
                    <Image src='images/client-logo/22.png' />
                    <Image src='images/client-logo/23.png' />
                    <Image src='images/client-logo/24.png' />
                    <Image src='images/client-logo/25.png' />
                    <Image src='images/client-logo/26.png' />
                    {/* <Image src='images/client-logo/27.png' /> */}
                    <Image src='images/client-logo/28.png' />
                    <Image src='images/client-logo/29.png' />
                    <Image src='images/client-logo/30.png' />
                    <Image src='images/client-logo/31.png' />
                    <Image src='images/client-logo/32.png' />
                    <Image src='images/client-logo/33.png' />
                    <Image src='images/client-logo/34.png' />
                    <Image src='images/client-logo/35.png' />
                    <Image src='images/client-logo/36.png' />
                    <Image src='images/client-logo/37.png' />
                    <Image src='images/client-logo/38.png' />
                    <Image src='images/client-logo/39.png' />
                    <Image src='images/client-logo/40.png' />
                </div>
            </div>
        </Layout>
    )
}

export default About