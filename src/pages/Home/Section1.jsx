import React from 'react'
import Burger from "../../Assets/hero/hero-2.png"

const Section1 = () => {
  return (
    <section className='hero_section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7 mb-5 mb-lg-0'>
                    <div className='position-relative'>
                        <img src={Burger} alt='hero' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1
