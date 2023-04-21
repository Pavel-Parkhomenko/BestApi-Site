import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree } from './data'

function Home() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
    </div>
  )
}

export default Home
