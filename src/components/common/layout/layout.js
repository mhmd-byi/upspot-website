import React from "react";
import PropTypes from 'prop-types';
import Styles from './layout.module.scss';
import Header from "../header/header";
import Footer from "../footer/footer";
import { Heading, Image, Text } from "../../shared";
import { getBasePath } from '../../../helper';

const Layout = ({layoutClass, mainClass, children, title1, title2, description, pageTitle}) => {
    const basePath = getBasePath();
    return (
        <div className={`${Styles.layout} ${layoutClass}`}>
            <Header />
                <div className={`${Styles.main} ${mainClass}`}>
                    {pageTitle ? (
                        <div className={`${Styles.pageTitle} text-center`}>
                            <div className="d-flex align-items-center justify-content-center flex-wrap mb-3">
                                <Heading headingType={'h1'} headingText={title1} color={'primary'} strong={'regular'} />
                                <Heading headingType={'h1'} headingText={title2} strong={'regular'} className={Styles.title2} />
                            </div>
                            <Text variant={'md'} strong={'regular'}>{description}</Text>
                            <div className={Styles.logo}><Image src={`${basePath}images/logoHalf.svg`} className={'w-100'} /></div>
                        </div>
                    ) : false}
                    {children}
                </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    pageTitle: true,
  }

Layout.prototype = {
    layoutClass: PropTypes.string,
    mainClass: PropTypes.string,
    children: PropTypes.any,
    title1: PropTypes.string,
    title2: PropTypes.string,
    description: PropTypes.string,
    pageTitle: PropTypes.bool,
}

export default Layout;