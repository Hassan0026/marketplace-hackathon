import React from 'react'
import Hero from "../components/Hero"
import Sec1 from "../components/Sec1"
import Sec2 from '../components/Sec2'
import Sec3 from '../components/Sec3'
import Sec4 from '../components/Sec4'
import Sec5 from '../components/Sec5'
import Sec6 from '../components/Sec6'
import ProductCards from '@/components/Products/page'
const page = () => {
  return (
    <div>
    <Hero />
    <Sec1 />
    <Sec2 />
    <Sec3 />
    <Sec4 />
    <Sec5 />
    <Sec6 />
    <ProductCards />
    </div>
  )
}

export default page
