import React from 'react'
import { Link } from 'react-router-dom'

const Section7 = () => {
    return (
        <section className='contact_section'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-sm-8 text-center'>
                        <h4>We Guarantee</h4>
                        <h2>30 Minutes Delivery!</h2>
                        <p>Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                            dolor primis libero tempus, blandit a cursus varius luctus neque
                            magna</p>
                        <Link to="/" className='btn order_now btn_red px-4 py-2 '>
                            Call: 999-888-7777
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section7
