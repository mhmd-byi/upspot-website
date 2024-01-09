import Styles from "./rp.module.scss";
import { Layout, Text, Meta } from "../../components";

const RP = () => {
  return (
    <Layout
      title1="Refund"
      title2="Policy"
      description="as on 2nd January, 2024"
      mainClass={Styles.tncPage}
    >
    <Meta title="Refund Policy"  pageUrl='pp'/>
      <div className={`section d-none d-sm-block ${Styles.aboutUs}`}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-12 col-lg-12 mt-5">
              
              <div>
                <Text variant={"md"} strong={"regular"}>
                  We are not serving any type of refunds as of now.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RP;
