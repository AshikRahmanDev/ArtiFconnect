import React from 'react'
import { Banner } from '../components/Banner'
import { Services } from '../components/Services'
import { AboutOurCompany } from '../components/AboutOurCompany'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <AboutOurCompany/>
    </div>
  )
}

export default Home