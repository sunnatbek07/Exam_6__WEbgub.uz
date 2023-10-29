import React from 'react'
import Intro from './Intro'
import IntroBottom from './Intro/IntroBottom';
import Courses from './Courses';
import Learn from './Learn';
import Categories from './Categories';

const Layout = () => {
    return (
        <>
            <Intro />
            <IntroBottom />
            <Courses />
            <Learn />
            <Categories />
        </>
    )
}

export default Layout