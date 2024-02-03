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
      <link rel="canonical" href={`https://www.upspot.in/${pageUrl}`} />
      <meta name="google-site-verification" content="MTT38BQ6YN-7W9i0vhil4EHN_pZBqsJ1EH0upIFRb74" />
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
