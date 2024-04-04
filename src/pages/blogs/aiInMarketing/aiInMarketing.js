import React from "react";
import { Text, Layout, Image, Meta, Heading } from "../../../components";
import Styles from "./about.module.scss";
import { getBasePath } from "../../../helper";

const AiInMarketing = () => {
  const basePath = getBasePath();
  return (
    <Layout
      title1="Upspot"
      title2="Embraced by AI in Marketing"
      // description="Comprehensive Solutions: Empowering Your Success"
    >
      <Meta
        title="Ai in Marketing "
        description="Upspot Embraced by AI in Marketing"
        pageUrl="blogs/ai-in-marketing"
      />
      <div className={`section ${Styles.aboutPage}`}>
        <div className="container">
          <div className="col-md-12 col-lg-12 mt-5 mb-3">
            <div>
              <Text variant={"md"} strong={"regular"}>
                ‘Digital Marketing’ is the buzzword among the alpha
                businesses.It has made the pillar of marketing more systematic,
                affordable, relevant and tech-oriented. The topography of
                digital marketing is rapidly evolving these days, with a
                combination of technology being used in lieu of traditional and
                outdated marketing, as there is emergence of new technologies
                and this is resulting in the shift of a huge consumer base.
              </Text>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 mb-5">
            <div>
              <Text variant={"md"} strong={"regular"}>
                Upspot being the leading{" "}
                <a href="https://upspot.in/">
                  digital marketing agency
                </a>
                , always stays ahead of the new-gen evolutions. This being the
                reason that we are embracing the power of AI in marketing, and
                making our venture a MarTech business.
              </Text>
            </div>
          </div>
          <div className="row ">
            <Heading
              headingText={"What is AI in Marketing?"}
              headingType={"h2"}
              strong={"bold"}
              className={"mb-4"}
            />
            <Image src="../../../images/blog1.png" className={"w-100"} />
          </div>
          <div className="col-md-12 col-lg-12 mt-5">
            <div>
              <Text variant={"md"} strong={"regular"}>
                The use of artificial intelligence technology like analytical
                tools, machine learning, large- language models (LLMs), content
                generation and real- time personalisation in process marketing
                is referred to as AI.
              </Text>
            </div>
            <div className="mt-3">
              <Text variant={"md"} strong={"regular"}>
                Upspot, being one amongst leading companies in central India for
                digital marketing and web development services, believes in
                leveraging the power of digital marketing by engulfing the
                potential of AI to provide more relevance, precision and
                accuracy to the data gathered by humans and make the marketing
                more result oriented for its customers.
              </Text>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 mt-5 mb-5">
            <div>
              <Heading
                headingText={"Why use AI in Digital Marketing?"}
                headingType={"h2"}
                strong={"bold"}
                className={"mb-4"}
              />
              <Text variant={"md"} strong={"regular"}>
                Using AI in marketing unfreezes a huge number of opportunities
                and untapped benefits for archaic and modern businesses.
              </Text>
            </div>
          </div>
          <div className="row justify-content-between mt-3">
            <div className="col-md-12 col-lg-4">
              <Heading
                headingText={"Rectification of Data Analysis and Insights"}
                headingType={"h4"}
                strong={"bold"}
                className={"mb-4"}
              />
            </div>
            <div className="col-md-12 col-lg-7">
              <div>
                <Text variant={"md"} strong={"regular"}>
                  Upspot uses AI to re-analyse the data posterior to human
                  analysis as AI takes micros and nanos to process a large
                  number of data that too with high accuracy and rectifies the
                  glitches that occurred while human processing. It analyses
                  historical behaviour of customers comprising their tastes and
                  preferrences and provides detailed insight of the data.
                </Text>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt-3">
            <div className="col-md-12 col-lg-4">
              <Heading
                headingText={"Customised Marketing Campaigns"}
                headingType={"h4"}
                strong={"bold"}
                className={"mb-4"}
              />
            </div>
            <div className="col-md-12 col-lg-7">
              <div>
                <Text variant={"md"} strong={"regular"}>
                  Upspot conducts hyper- targeted marketing campaigns with the
                  help of AI. The AI makes product/ service fit segmentation and
                  runs the personalised campaigns, due to this the targeted
                  customer feel inclusive and eventually this brings huge
                  engagement brands working with Upspot.
                </Text>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt-3">
            <div className="col-md-12 col-lg-4">
              <Heading
                headingText={"Programmatic Advertising"}
                headingType={"h4"}
                strong={"bold"}
                className={"mb-4"}
              />
            </div>
            <div className="col-md-12 col-lg-7">
              <div>
                <Text variant={"md"} strong={"regular"}>
                  With the use of AI, Upspot generates most efficient ads for
                  the businesses which give them a better ROI for their
                  investment on marketing, as AI abided-manifestos ensure
                  maximum reach by targeting the right cluster of people.
                </Text>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt-3">
            <div className="col-md-12 col-lg-4">
              <Heading
                headingText={"Enhanced Customer Experiences"}
                headingType={"h4"}
                strong={"bold"}
                className={"mb-4"}
              />
            </div>
            <div className="col-md-12 col-lg-7">
              <div>
                <Text variant={"md"} strong={"regular"}>
                  Upspot avails AI powered chatbots to assist the customer 24/7,
                  this increases the reliability of business in the mind of the
                  customer and frames the goodwill of the enterprise working
                  with the Upspot.
                </Text>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt-3">
            <div className="col-md-12 col-lg-4">
              <Heading
                headingText={"Automate the Business"}
                headingType={"h4"}
                strong={"bold"}
                className={"mb-4"}
              />
            </div>
            <div className="col-md-12 col-lg-7">
              <div>
                <Text variant={"md"} strong={"regular"}>
                  Upspot, has automated many businesses in its tenure till now
                  with its special AI Enterprise Resource Planning (ERP)
                  ideation and business consultation process which includes all
                  the core work of the businesses covering all the 7Ps of
                  marketing i.e. product, price, promotion, place, people,
                  process and physical evidence . This helps the entrepreneurs
                  to scale up their businesses in competitive cost and time.
                  This ensures that the businesses attain a lot of effectiveness
                  and efficiency.
                </Text>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 mt-5 mb-5">
            <div>
              <Heading
                headingText={"Moat of Upspot"}
                headingType={"h2"}
                strong={"bold"}
                className={"mb-4"}
              />
            </div>
          </div>
          <div className="row justify-content-between mt-3">
            <div className="col-md-12 col-lg-4">
              <Heading
                headingText={"AI-Powered Web Development Services"}
                headingType={"h4"}
                strong={"bold"}
                className={"mb-4"}
              />
            </div>
            <div className="col-md-12 col-lg-7">
              <div>
                <Text variant={"md"} strong={"regular"}>
                  Website is the core of all the pragmatic approaches in the
                  digital marketing arena. Upspot understands the value of a
                  user- friendly, non- complex and visual aesthetics of the
                  website of the businesses. Such creations not only attract the
                  traffic but convert them into the customers as it provides
                  flawless experience to the users.
                </Text>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt-3">
            <div className="col-md-12 col-lg-4">
              <Heading
                headingText={"Premier SEO Mastery"}
                headingType={"h4"}
                strong={"bold"}
                className={"mb-4"}
              />
            </div>
            <div className="col-md-12 col-lg-7">
              <div>
                <Text variant={"md"} strong={"regular"}>
                  SEO is the major tool to increase the online visibility of the
                  website. Upspot being the pioneer in the SEO services keeps on
                  updating its knowledge for the trend with the help of AI, it
                  helps its clients to rank higher in search results and this
                  results in the increase of viral coefficient of the business.
                </Text>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt-3 mb-5">
            <div className="col-md-12 col-lg-4">
              <Heading
                headingText={"Social Media Marketing Dynamics"}
                headingType={"h4"}
                strong={"bold"}
                className={"mb-4"}
              />
            </div>
            <div className="col-md-12 col-lg-7">
              <div>
                <Text variant={"md"} strong={"regular"}>
                  In this alpha gen era, social media is a new sword to
                  penetrate the market. Upspot being the kingpin of this space
                  ensures the highly targeted campaigns at an affordable cost
                  through competitive analysis, audience segmentation and
                  consumer behaviour approach.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AiInMarketing;
