import React from "react";
import { Text, Layout, Image, ServiceEnquiry, Meta } from "../../../components";
import { getBasePath } from "../../../helper";

const SeoServices = () => {
  const basePath = getBasePath();
  return (
    <Layout
      title1="Seo"
      title2="Services"
      description="Comprehensive Solutions: Empowering Your Success"
    >
      <Meta
        title="Best SEO Company in Indore | Top-rated SEO Agency | Upspot"
        description="Unlock your website's full potential with Upspot, the premier SEO agency in Indore. Our expert team delivers top-rated SEO services for your business success."
        pageUrl="service/seo-services"
      />
      <div className="section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 col-lg-6">
              <Text>
                Increase the quality and quantity of user visits to user visits
                to your website with our expertise in content, keyword research
                and much more. This helps your business garner the desired
                visibility.
              </Text>
            </div>
            <div className="col-md-12 col-lg-4">
              <Image
                src={`${basePath}images/SeoServices.svg`}
                className={"w-100 img3"}
              />
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-10 col-lg-5 mt-5">
              <ServiceEnquiry
                heading={"On-Page SEO"}
                description={
                  "It includes the identification of On-page optimization requirements and site structure. Custom meta data should be well written and implemented on every page of the site through all 4 layers- page title, meta description, image ALT text, meta keywords."
                }
              />
            </div>
            <div className="col-md-10 col-lg-5 mt-5">
              <ServiceEnquiry
                heading={"Off-Page SEO"}
                description={
                  "It includes building links and subsequently promoting it on variant social media platforms for it to come across the target audience."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SeoServices;
