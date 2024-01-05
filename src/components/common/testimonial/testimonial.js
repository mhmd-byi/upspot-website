import React, {useState} from 'react';
import { Button, Heading, Text, Icon, Image } from '../..';
import Styles from './testimonial.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonial = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
      swiperRef.slidePrev();
    };
  
    const nextHandler = () => {
      swiperRef.slideNext();
    };
  
    return (
        <div className={`section ${Styles.testimonial}`}>
            <div className='container'>
                <div className='row align-items-center justify-content-between t-center-m'>
                    <div className='col-md-6 col-lg-6'>
                        <Text variant={'xxl'} color={'red'} strong={'regular'}>Testimonial</Text>
                        <Heading headingText={"Bragging? Nah!"} headingType={'h2'} strong={'bold'} />
                        <Heading headingText={"Hear for yourself"} headingType={'h2'} strong={'bold'} />
                        {/* <Heading headingText={"Why UpSpot & our clients trust us"} headingType={'h2'} strong={'bold'} /> */}
                    </div>
                    <div className='col-md-4'>
                        <div className={Styles.btns}>
                            <Button onClick={prevHandler}><Icon className={'icon-chevron-left'} /></Button>
                            <Button onClick={nextHandler}><Icon className={'icon-chevron-right'} /></Button>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        loop={true}
                        onSwiper={(swiper) => setSwiperRef(swiper)}
                        className="testimonial"
                    >
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client1.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'Sarah Johnson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Marketing Manager</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client2.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'David Wilson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Sales Executive</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client1.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'Sarah Johnson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Marketing Manager</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client2.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'David Wilson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Sales Executive</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client1.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'Sarah Johnson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Marketing Manager</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client2.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'David Wilson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Sales Executive</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client1.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'Sarah Johnson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Marketing Manager</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client2.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'David Wilson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Sales Executive</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client1.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'Sarah Johnson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Marketing Manager</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client2.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'David Wilson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Sales Executive</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client1.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'Sarah Johnson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Marketing Manager</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.item}>
                                <div className={Styles.clientImg}>
                                    <Image src='images/client2.png' className={Styles.clientPic} />
                                    <Image src='images/play.png' className={Styles.play} />
                                </div>
                                <div className={Styles.details}>
                                    <Heading headingType={'h4'} headingText={'David Wilson'} />
                                    <Text variant={'sm'} color={'gray'} strong={'regular'}>Sales Executive</Text>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial