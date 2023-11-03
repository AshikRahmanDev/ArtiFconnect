import React from 'react'
import { Banner } from '../components/Banner'
import { Services } from '../components/Services'
import { AboutOurCompany } from '../components/AboutOurCompany'
import { TechnologySection } from '../components/TechnologySection'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <AboutOurCompany/>
      <TechnologySection/>
    </div>
  )
}

export default Home