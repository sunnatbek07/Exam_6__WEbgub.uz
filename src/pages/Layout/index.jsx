import React from 'react'
import Intro from './Intro'
import IntroBottom from './Intro/IntroBottom';
import Courses from './Courses';
import Learn from './Learn';

const Layout = () => {
    return (
        <>
            <Intro />
            <IntroBottom />
            <Courses />
            <Learn />
        </>
    )
}

export default Layout