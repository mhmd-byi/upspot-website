import React, {useRef, useState} from 'react';
import Styles from './contact.module.scss';
import { Button, Layout } from '../../components';
import { Heading, Image, Text, Meta } from '../../components';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();
    const [resultMessage, setResultMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();   
        emailjs.sendForm('service_d3bpcgg', 'template_sv8vnea', e.target, '6jKy2CT9esg2_ap_Q')
          .then((result) => {
            console.log(result.text);
            setResultMessage("Thank you for your message! We'll get in touch soon.");
          }, (error) => {
            console.log(error.text);
          });
          e.target.reset()
    };
    
    return (
        <Layout title1="Contact" title2="Us" description="Drop Us a Line: We'd Love to Hear from You" mainClass={Styles.contact} >
            <Meta
                title="Contact Upspot: Get in Touch with Our Team "
                description="Have questions or inquiries? Reach out to Upspot's dedicated team. We're here to assist you. Contact us for expert digital solutions and friendly support."
                pageUrl='contact'
            />
            {/* <div className={`section`}>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-md-12 col-lg-4'>
                            <Text variant={'xxl'} color={'red'} strong={'regular'}>Contact us</Text>
                            <Heading headingText={'Contact Us: Reach Out for Expert Solutions'} headingType={'h2'} strong={'bold'} />
                        </div>
                        <div className='col-md-12 col-lg-7 mt-5'>
                            <div><Text variant={'md'} strong={'regular'}>We welcome the opportunity to connect with you! If you have any inquiries, project ideas, or require expert solutions for your business needs, feel free to get in touch with our dedicated team. Our experienced professionals are here to assist you every step of the way. Whether it's web development, design services, digital marketing strategies, or any other assistance, we are eager to hear from you. Reach out to us today, and let's embark on a journey towards achieving your goals together. Your success is our priority, and we look forward to providing you with the best possible solutions tailored to your specific requirements.</Text></div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className={`section ${Styles.formSection}`}>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-md-12 text-center'>
                            <Heading headingText={"Let's Start a Conversation"} headingType={'h2'} strong={'bold'} />
                        </div>
                    </div>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-md-7'>
                            <form ref={form} className={Styles.form} onSubmit={sendEmail}>
                                <div className='row'>
                                    <div className='col-md-6 mt-4'>
                                        <label htmlFor="first_name">First Name</label>
                                        <input type='text' name="first_name" id="first_name" required />
                                    </div>
                                    <div className='col-md-6 mt-4'>
                                        <label htmlFor="last_name">Last Name</label>
                                        <input type="text" name="last_name" id="last_name" required />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md-6 mt-4">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" required />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label htmlFor="phone">Phone</label>
                                        <input type='number' name="phone" id="phone" required />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md-12 mt-4">
                                        <label htmlFor="message">Write a query</label>
                                        <textarea type="text" name="message" id="message" rows={5}></textarea>
                                    </div>
                                </div>
                                <Button variant={'secondary'} type="submit" className={'mt-5 mx-auto'}>Submit</Button>
                                <div className='mt-4 text-center'><Text color={'green'}>{resultMessage}</Text></div>
                            </form>
                        </div>
                        <div className='col-md-4'>
                            <Image src='images/contact.svg' className={'w-100 m-t-3'} />
                        </div>
                    </div>
                    <div className={Styles.contactDetails}>
                        <Text><Link to={'mailto:coffee@upspot.in'}>coffee@upspot.in</Link> <Text className={Styles.sep}>|</Text> <Link to={'tel:+917773882021'}>+91 77738 82021</Link></Text>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact