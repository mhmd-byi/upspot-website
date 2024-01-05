import React from 'react';
import { Layout, Services } from '../../components';

const Service = () => {
    return (
        <Layout title1={'Our'} title2={'Services'} description={'Comprehensive Solutions: Empowering Your Success'}>
            <Services content={false} bgWhite={true} />
        </Layout>
    )
}

export default Service