import React from 'react'
import SliderCarousel from './components/SliderCarousel'
import Links from './components/Links'
import Processor from './components/Processor'
import VideoSection from './components/VideoSection'
import PictureDiv from './components/PictureDiv'
import ImagesSection from './components/ImagesSection'
import "./style.scss"
import Visual from './components/Visual'
import CompSec from './components/CompSec'
import PCabout from './components/PCabout'
const Home = () => {
    return (
        <>
            <SliderCarousel />
            <Links />
            <Visual/>
            <Processor />
            <PCabout/>
            <VideoSection />
            <CompSec/>
            <PictureDiv />
            <ImagesSection />
        </>
    )
}

export default Home
