import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, pageUrl = '' }) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? 'Missing you already' : title;
    };
  
    document.addEventListener('visibilitychange', handleVisibilityChange);
  
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="digital marketing agency in indore, digital marketing company, web development company, best seo company, social media marketing agency, ecommerce website development, website designing services, paid marketing, marketplace product management, graphic designer near me, graphic designing services" />
      <link rel="canonical" href={`https://upspot.in/${pageUrl}`} />
      <script type='javascript'>
        {JSON.stringify({
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
              "@type": "ListItem", 
              "position": 1, 
              "name": "Upspot",
              "item": "https://upspot.in/"  
            },{
              "@type": "ListItem", 
              "position": 2, 
              "name": "Services",
              "item": "https://upspot.in/service"  
            },{
              "@type": "ListItem", 
              "position": 3, 
              "name": "About us",
              "item": "https://upspot.in/about"  
            },{
              "@type": "ListItem", 
              "position": 4, 
              "name": "Contact Us",
              "item": "https://upspot.in/contact"  
            }]
          }          
        )
      }
      </script>
      <script type='javascript'>
      {
        JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "How can digital marketing help my business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Digital marketing enhances online visibility, targets specific audiences, and delivers cost-effective results. It builds brand awareness, fosters customer engagement, and provides valuable insights for data-driven decisions, ensuring success in the digital age. Embrace digital marketing to stay competitive and connect with a global audience."
              }
            },{
              "@type": "Question",
              "name": "Is doing SEO important for websites?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO is important because search engines aren't perfect. If you don't take steps to counter their failings, then your website will pay the price. For example, if a site doesn't have a proper link structure, then search engines may not crawl and index the site properly which can lower rankings."
              }
            },{
              "@type": "Question",
              "name": "How does social media Marketing work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Social media marketing means using social media platforms like Instagram, Twitter and Facebook to promote your brand and sell your product or service. If your business comes out with a new item and you plan to promote the launch on social media, that's social media marketing. Determine a clear view of your target audience. Locate your customers on social media. Build out a content strategy. Determine your desired outcomes. Define metrics to measure success."
              }
            },{
              "@type": "Question",
              "name": "How can I create my website for free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wix, Weebly and WordPress are web designers that offer their administrations free of charge notwithstanding a subdomain.  Start creating your free site or store by picking a template. Add your content, products and business info to make it yours. Use built-in marketing to let people know you're open for business. Manage everything — reviews, orders, social — from 1 dashboard, on any device."
              }
            },{
              "@type": "Question",
              "name": "What will be the biggest web design trends this year?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not everyone wants a flashy website filled with bold colours and whimsical animations. That's why minimalism is one of the top web design trends for 2023. Minimalist designs use limited colour palettes and only as many design elements as necessary to get the point, And thanks to the evolution of technology and the more-is-more spirit of 2023, web designers will bring some outrageously tangible elements to the digital design sphere. “It's all about textures in typography, abstract imagery, shapes, videos and backgrounds” says Huri."
              }
            },{
              "@type": "Question",
              "name": "When will my listings be imported into Marketplace Management?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Your postings will be brought into Commercial centre Administration to smooth out and streamline your web based selling process. By incorporating your item postings on a solitary stage, you can effectively oversee stock, estimating, and item data across different commercial centres. This joining guarantees that your postings are consistently modern, decreasing manual endeavours and limiting blunders. With Commercial centre Administration, you can contact a more extensive crowd, further develop perceivability, and expand deals potential, giving a consistent and viable way to deal with selling across numerous web-based commercial centres."
              }
            },{
              "@type": "Question",
              "name": "How effective is paid marketing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contrasted and natural advertising, paid showcasing offers quicker results and more granular focusing on capacities. For instance, you can focus on a blog to a particular crowd through a catchphrase technique, however you might in any case contact individuals who aren't keen on your contributions."
              }
            }]
          
          }
        )
      }
      </script>
      <script type='javascript'>
        {
          JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Upspot",
              "image": "https://upspot.in/images/Logo.svg",
              "@id": "",
              "url": "https://upspot.in",
              "telephone": "+91 77738 82021",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "302, Govardhan shikhar building",
                "addressLocality": "indore",
                "postalCode": "452016",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 22.721510,
                "longitude": 75.914860
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "11:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/ketanshah01/",
                "https://twitter.com/upspotindia",
                "https://www.instagram.com/upspotindia/",
                "https://www.linkedin.com/company/upspotdotin/",
                "https://upspot.in"
              ] 
            }
            
          )
        }
      </script>
    </Helmet>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Meta.defaultProps = {
  title: "Digital Marketing Agency in Indore | Upspot",
  description: "UpSpot: Your Premier Digital Marketing Agency in Indore! Elevate your online presence with our expert SEO, social media, PPC, and web design services. Let's boost your business together.",
}

export default Meta;
