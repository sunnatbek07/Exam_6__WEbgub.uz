import React from 'react'
import Intro from './Intro'
import IntroBottom from './Intro/IntroBottom';
import Courses from './Courses';
import Learn from './Learn';
import Categories from './Categories';
import Wishes from './Wishes';
import Services from './Services';

const Layout = () => {
    return (
        <>
            <Intro />
            <IntroBottom />
            <Courses />
            <Learn />
            <Categories />
            <Wishes />
            <Services />
        </>
    )
}

export default Layout;