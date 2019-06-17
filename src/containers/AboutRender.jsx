import React from 'react'

import Header from '../components/Header';
import HeaderBackground from '../containers/HeaderBackground';
import HeaderTitle from '../containers/HeaderTitle';

// 'top-txt-container'
const AboutRender = (props) => {
    return (
        <React.Fragment>
            <HeaderBackground url_image={props.image_background} height={props.height}/>
            <Header />
            <HeaderTitle title={props.name} class={props.class} description={props.description} />
        </React.Fragment>
    )
}

export default AboutRender
