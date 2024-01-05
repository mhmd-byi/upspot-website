import React, {useRef, useState} from 'react';
import Styles from './contact.module.scss';
import { Button, Layout } from '../../components';
import { Heading, Image, Text } from '../../components';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
    const form = useRef();
    const [resultMessage, setResultMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSubscribe = async () => {
      try {
        const response = await axios.post(
          'https://gmail.us21.list-manage.com/subscribe/post?u=819d2921ebbead069e806cffd&amp;id=76d7edb9bf&amp;f_id=005160e1f0',
          {
            email_address: email,
            status: 'subscribed',
          },
          {
            headers: {
              Authorization: `Bearer <your-api-key>`,
            },
          }
        );
  
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

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
            <div>
                {/* <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> */}
                <input type='text' name='EMAIL' id='id="mce-EMAIL"' />
                <button onClick={handleSubscribe}>Subscribe</button>
            </div>

            <div id="mc_embed_shell">
  
        <div id="mc_embed_signup">
            <form action="https://gmail.us21.list-manage.com/subscribe/post?u=819d2921ebbead069e806cffd&amp;id=76d7edb9bf&amp;f_id=005160e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
                    <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                    <div class="mc-field-group">
                        <label for="mce-EMAIL">Email <span class="asterisk">*</span></label>
                        <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="" />    
                    </div>
                    <div class="mc-field-group">
                        <label for="mce-FNAME">First Name </label>
                        <input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""/>
                    </div>
                    <div class="mc-field-group">
                        <label for="mce-LNAME">Last Name </label>
                        <input type="text" name="LNAME" class=" text" id="mce-LNAME" value="" />
                    </div>
                    <div class="mc-field-group">
                        <label for="mce-PHONE">Phone </label>
                        <input type="text" name="PHONE" class="REQ_CSS" id="mce-PHONE" value=""/>
                    </div>
                    <div class="mc-field-group">
                        <label for="mce-MESSAGE">Write a query </label>
                        <input type="text" name="MESSAGE" class=" text" id="mce-MESSAGE" value=""/>
                    </div>
                <div id="mce-responses" class="clear foot">
                    <div class="response" id="mce-error-response"></div>
                    <div class="response" id="mce-success-response"></div>
                </div>
                <div class="optionalParent">
                    <div class="clear foot">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe" />                        
                    </div>
                </div>
            </div>
        </form>
        </div></div>

        </Layout>
    )
}

export default Contact