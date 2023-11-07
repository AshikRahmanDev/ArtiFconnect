import React from 'react'
import { Banner } from '../../components/Banner'
import { Services } from '../../components/Services'
import { AboutOurCompany } from '../../components/AboutOurCompany'
import { TechnologySection } from '../../components/TechnologySection'
import { Portfolio } from '../../components/Portfolio'
import { Testimonial } from '../../components/Testimonial'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <AboutOurCompany/>
      <Portfolio/>
      <TechnologySection/>
      <Testimonial/>
    </div>
  )
}

export default Home