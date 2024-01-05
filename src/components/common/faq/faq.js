import React from 'react';
import { Heading, ListGroup, ListItem, Text } from '../../../components';
import Accordion from 'react-bootstrap/Accordion';
import Styles from './faq.module.scss'

const Faq = () => {
    return (
      <div className={`section ${Styles.faq}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5 t-center-m'>
              <Text variant={'xxl'} color={'red'} strong={'regular'}>FAQ's</Text>
              <Heading headingText={"Got Questions? We've Got Answers! Explore our FAQs"} headingType={'h2'} strong={'bold'} />
            </div>
            <div className='col-md-7'>
              <Accordion defaultActiveKey="0" className={Styles.accWrapper}>
              <Accordion.Item eventKey="0" className={Styles.accItem}>
                  <Accordion.Header className={Styles.header}>Q: How can digital marketing help my business?</Accordion.Header>
                  <Accordion.Body>Digital marketing enhances online visibility, targets specific audiences, and delivers cost-effective results. It builds brand awareness, fosters customer engagement, and provides valuable insights for data-driven decisions, ensuring success in the digital age. Embrace digital marketing to stay competitive and connect with a global audience.</Accordion.Body>
                </Accordion.Item>                
                <Accordion.Item eventKey="1" className={Styles.accItem}>
                  <Accordion.Header className={Styles.header}>Q: Is doing SEO important for websites?</Accordion.Header>
                  <Accordion.Body>SEO is important because search engines aren't perfect. If you don't take steps to counter their failings, then your website will pay the price. For example, if a site doesn't have a proper link structure, then search engines may not crawl and index the site properly which can lower rankings.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={Styles.accItem}>
                  <Accordion.Header className={Styles.header}>Q: How does social media Marketing work?</Accordion.Header>
                  <Accordion.Body>Social media marketing means using social media platforms like Instagram, Twitter and Facebook to promote your brand and sell your product or service. If your business comes out with a new item and you plan to promote the launch on social media, that's social media marketing.
                    <ListGroup>
                      <ListItem>Determine a clear view of your target audience.</ListItem>
                      <ListItem>Locate your customers on social media.</ListItem>
                      <ListItem>Build out a content strategy.</ListItem>
                      <ListItem>Determine your desired outcomes.</ListItem>
                      <ListItem>Define metrics to measure success.</ListItem>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className={Styles.accItem}>
                  <Accordion.Header className={Styles.header}>Q:  How can I create my website for free?</Accordion.Header>
                  <Accordion.Body>Wix, Weebly and WordPress are web designers that offer their administrations free of charge notwithstanding a subdomain.
                    <ListGroup>
                      <ListItem>Start creating your free site or store by picking a template.</ListItem>
                      <ListItem>Add your content, products and business info to make it yours.</ListItem>
                      <ListItem>Use built-in marketing to let people know you're open for business.</ListItem>
                      <ListItem>Manage everything — reviews, orders, social — from 1 dashboard, on any device.</ListItem>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className={Styles.accItem}>
                  <Accordion.Header className={Styles.header}>Q: What will be the biggest web design trends this year?</Accordion.Header>
                  <Accordion.Body>Not everyone wants a flashy website filled with bold colours and whimsical animations. That's why minimalism is one of the top web design trends for 2023. Minimalist designs use limited colour palettes and only as many design elements as necessary to get the point, And thanks to the evolution of technology and the more-is-more spirit of 2023, web designers will bring some outrageously tangible elements to the digital design sphere. “It's all about textures in typography, abstract imagery, shapes, videos and backgrounds” says Huri.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className={Styles.accItem}>
                  <Accordion.Header className={Styles.header}>Q: When will my listings be imported into Marketplace Management?</Accordion.Header>
                  <Accordion.Body>Your postings will be brought into Commercial centre Administration to smooth out and streamline your web based selling process. By incorporating your item postings on a solitary stage, you can effectively oversee stock, estimating, and item data across different commercial centres. This joining guarantees that your postings are consistently modern, decreasing manual endeavours and limiting blunders. With Commercial centre Administration, you can contact a more extensive crowd, further develop perceivability, and expand deals potential, giving a consistent and viable way to deal with selling across numerous web-based commercial centres.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className={Styles.accItem}>
                  <Accordion.Header className={Styles.header}>Q: How effective is paid marketing?</Accordion.Header>
                  <Accordion.Body>Contrasted and natural advertising, paid showcasing offers quicker results and more granular focusing on capacities. For instance, you can focus on a blog to a particular crowd through a catchphrase technique, however you might in any case contact individuals who aren't keen on your contributions.</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Faq