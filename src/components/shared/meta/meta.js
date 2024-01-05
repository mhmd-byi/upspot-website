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
      <link rel="canonical" href={`https://upspot.in/${pageUrl}`} />
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
