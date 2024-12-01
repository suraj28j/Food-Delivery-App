import React from 'react'
import { Link } from 'react-router-dom'
import Pizza from "../../Assets/about/pizza.png"
import Salad from "../../Assets/about/salad.png"
import Delivery from "../../Assets/about/delivery-bike.png"


// Mock Data Cards
const mockData = [
    {
        image: Pizza,
        title: "Original",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
        image: Salad,
        title: "Qualty Foods",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
        image: Delivery,
        title: "Fastest Delivery",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    // Add more mock data objects as needed
];

const Section2 = () => {
    return (
        <>
            <div className='about_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-8 text-center'>
                            <h2>The burger tastes better when you eat it with your family</h2>
                            <p>Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                                auctor an tempus feugiat dolor lacinia cubilia curae integer
                                orci congue and metus integer primis in integer metus
                            </p>
                            <Link className='btn order_now btn_red'>Explore Full Menu</Link>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                </div>
            </div>
            
            <div className='about_wrapper'>
                <div className='container'>
                    <div className='row'>
                        {
                            mockData.map((cardData, index) => (
                                <div className='col-lg-4 mb-4 mb-md-0 ' key={index}>
                                    <div className='about_box text-center'>
                                        <div className="about_icon">
                                            <img src={cardData.image} alt='icon' className='img-fluid' />
                                        </div>
                                        <h4>{cardData.title}</h4>
                                        <p>{cardData.paragraph}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2
