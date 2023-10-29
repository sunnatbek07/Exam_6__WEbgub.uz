import React from 'react'
import Intro from './Intro'
import IntroBottom from './Intro/IntroBottom';
import Courses from './Courses';

const Layout = () => {
    return (
        <>
            <Intro />
            <IntroBottom />
            <Courses />
        </>
    )
}

export default Layout