import Styles from "./tnc.module.scss";
import { Heading, Layout, Text, Meta } from "../../components";

const PP = () => {
  return (
    <Layout
      title1="Privacy"
      title2="Policy"
      description="as on 2nd January, 2024"
      mainClass={Styles.tncPage}
    >
    <Meta title="Privacy Policy"  pageUrl='pp'/>
      <div className={`section d-none d-sm-block ${Styles.aboutUs}`}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-12 col-lg-12 mt-5">
              <Heading
                headingText={
                  "White Oceans Internet Private Limited Privacy Policy."
                }
                headingType={"h1"}
                strong={"bold"}
                className={"mb-4"}
              />
              <div>
                <Text variant={"md"} strong={"regular"}>
                  This Privacy Policy describes how your personal information is
                  collected, used, and shared when you visit or make a purchase
                  from (the “Site”).
                </Text>
              </div>
              <Heading
                headingText={"PERSONAL INFORMATION WE COLLECT"}
                headingType={"h2"}
                strong={"bold"}
                className={"mb-4 mt-4"}
              />
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  When you visit the Site, we automatically collect certain
                  information about your device, including information about
                  your web browser, IP address, time zone, and some of the
                  cookies that are installed on your device. Additionally, as
                  you browse the Site, we collect information about the
                  individual web pages or products that you view, what websites
                  or search terms referred you to the Site, and information
                  about how you interact with the Site. We refer to this
                  automatically-collected information as “Device Information.”
                </Text>
              </div>
              <Heading
                headingText={
                  "We collect Device Information using the following technologies:"
                }
                headingType={"h2"}
                strong={"bold"}
                className={"mb-4 mt-4"}
              />
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  – “Cookies” are data files that are placed on your device or
                  computer and often include an anonymous unique identifier. For
                  more information about cookies, and how to disable cookies,
                  visit http://www.allaboutcookies.org.
                </Text>
              </div>
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  – “Log files” track actions occurring on the Site, and collect
                  data including your IP address, browser type, Internet service
                  provider, referring/exit pages, and date/time stamps.
                </Text>
              </div>
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  – “Web beacons,” “tags,” and “pixels” are electronic files
                  used to record information about how you browse the Site.
                  Additionally, when you make a purchase or attempt to make a
                  purchase through the Site, we collect certain information from
                  you, including your name, billing address, shipping address,
                  payment information (including credit card, debit card), email
                  address, and phone number. We refer to this information as
                  “Order Information.”
                </Text>
              </div>
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  When we talk about “Personal Information” in this Privacy
                  Policy, we are talking both about Device Information and Order
                  Information
                </Text>
              </div>
              <Heading
                headingText={"HOW DO WE USE YOUR PERSONAL INFORMATION?"}
                headingType={"h2"}
                strong={"bold"}
                className={"mb-4 mt-4"}
              />
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  We use the Order Information that we collect generally to
                  fulfill any orders placed through the Site (including
                  processing your payment information, arranging for shipping,
                  and providing you with invoices and/or order confirmations).
                  Additionally, we use this Order Information to:
                </Text>
              </div>
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  Communicate with you;
                </Text>
              </div>
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  Screen our orders for potential risk or fraud; and
                </Text>
              </div>
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  When in line with the preferences you have shared with us,
                  provide you with information or advertising relating to our
                  products or services.
                </Text>
              </div>
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  We use the Device Information that we collect to help us
                  screen for potential risk and fraud (in particular, your IP
                  address), and more generally to improve and optimize our Site
                  (for example, by generating analytics about how our customers
                  browse and interact with the Site, and to assess the success
                  of our marketing and advertising campaigns).
                </Text>
              </div>
              <Heading
                headingText={"SHARING YOUR PERSONAL INFORMATION"}
                headingType={"h2"}
                strong={"bold"}
                className={"mb-4 mt-4"}
              />
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  We share your Personal Information with third parties to help
                  us use your Personal Information, as described above. We use
                  Google Analytics to help us understand how our customers use
                  the Site–you can read more about how Google uses your Personal
                  Information here:
                  https://www.google.com/intl/en/policies/privacy/. You can also
                  opt-out of Google Analytics here:
                  https://tools.google.com/dlpage/gaoptout.
                </Text>
              </div>
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  Finally, we may also share your Personal Information to comply
                  with applicable laws and regulations, to respond to a
                  subpoena, search warrant or other lawful request for
                  information we receive, or to otherwise protect our rights.
                </Text>
              </div>
              <Heading
                headingText={"BEHAVIOURAL ADVERTISING"}
                headingType={"h2"}
                strong={"bold"}
                className={"mb-4 mt-4"}
              />
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  As described above, we use your Personal Information to
                  provide you with targeted advertisements or marketing
                  communications we believe may be of interest to you. For more
                  information about how targeted advertising works, you can
                  visit the Network Advertising Initiative’s (“NAI”) educational
                  page at
                  http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
                </Text>
              </div>
              <Heading
                headingText={"DO NOT TRACK"}
                headingType={"h2"}
                strong={"bold"}
                className={"mb-4 mt-4"}
              />
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  Please note that we do not alter our Site’s data collection
                  and use practices when we see a Do Not Track signal from your
                  browser.
                </Text>
              </div>
              <Heading
                headingText={"DATA RETENTION"}
                headingType={"h2"}
                strong={"bold"}
                className={"mb-4 mt-4"}
              />
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  When you place an order through the Site, we will maintain
                  your Order Information for our records unless and until you
                  ask us to delete this information.
                </Text>
              </div>
              <Heading
                headingText={"CHANGES"}
                headingType={"h2"}
                strong={"bold"}
                className={"mb-4 mt-4"}
              />
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  We may update this privacy policy from time to time in order
                  to reflect, for example, changes to our practices or for other
                  operational, legal or regulatory reasons.
                </Text>
              </div>
              <Heading
                headingText={"CONTACT US"}
                headingType={"h2"}
                strong={"bold"}
                className={"mb-4 mt-4"}
              />
              <div className="mt-3">
                <Text variant={"md"} strong={"regular"}>
                  For more information about our privacy practices, if you have
                  questions, or if you would like to make a complaint, please
                  contact us by e-mail at coffee@upspot.in or by mail using the
                  details provided below:
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PP;
