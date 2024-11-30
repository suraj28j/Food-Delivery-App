import React from 'react'
import Layout from '../../components/Layout'
import "../../styles/HomeStyle.css"
import Section1 from './Section1'

const Home = () => {
  return (
    <>
      <Layout>
         {/* Home Section Hero Button */}
         <Section1/>
      </Layout>
    </>
  )
}

export default Home
