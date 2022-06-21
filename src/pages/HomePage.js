import React from 'react'
import Content from '../components/Content/Content'
import WorkSection from '../components/WorkSection/WorkSection'
import Features from '../components/Features/Features'
import Hero from '../components/Hero/Hero'
import Info from '../components/Info/Info'
import { contentData } from '../data/ContentData'

const HomePage = () => {
  return (
    <>
        <Hero />
        <Info id="about" />
        <Features id="services" />

        <div id="work">
            {contentData.map((content, index) => (
                <Content {...content} key={index} />
            ))}
            <WorkSection />
        </div>
    </>
    
  )
}

export default HomePage