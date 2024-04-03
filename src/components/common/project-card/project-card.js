import React from "react";
import Styles from "./project-card.module.scss";
import PropTypes from "prop-types";
import { Button, Heading, Icon, Image } from "../../shared";

const ProjectCard = ({ theme, heading, children, cardHandler, src }) => {
  return (
    <div
      className={`${Styles[theme]} ${Styles.projectCard}`}
      onClick={cardHandler}
    >
      <div className="row justify-content-between align-items-center">
        <div className="col-md-12">
          <Image src={src} className={"w-100 m-t-3"} />
        </div>
        <div className="col-md-12 mt-5">
          <Heading
            headingType={"h3"}
            headingText={heading}
            strong={"semiBold"}
          />
          <div className={Styles.labels}>{children}</div>
          <Button variant={"simple"}>
            View Details <Icon className={"icon-Right-arrow"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  theme: PropTypes.string,
  heading: PropTypes.string,
  children: PropTypes.any,
  cardHandler: PropTypes.func,
  src: PropTypes.string,
};

export default ProjectCard;
