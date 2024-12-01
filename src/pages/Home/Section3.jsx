import React from 'react'
import { Link } from 'react-router-dom'

import Image1 from "../../Assets/menu/burger-11.jpg"
import Image2 from "../../Assets/menu/burger-12.jpg"
import Image3 from "../../Assets/menu/burger-13.jpg"
import Image4 from "../../Assets/menu/burger-14.jpg"
import Image5 from "../../Assets/menu/burger-15.jpg"
import Image6 from "../../Assets/menu/burger-16.jpg"
import Image7 from "../../Assets/menu/burger-17.jpg"
import Image8 from "../../Assets/menu/burger-18.jpg"

// Mock Data Cards
const mockData = [
    {
        id: "0001",
        image: Image1,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
        rating: 5,
        price: 99.15,
    },
    {
        id: "0002",
        image: Image2,
        title: "Ultimate Bacon",
        paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
        rating: 4.5,
        price: 99.32,
    },
    {
        id: "0003",
        image: Image3,
        title: "Black Sheep",
        paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
        rating: 4,
        price: 69.15,
    },
    {
        id: "0004",
        image: Image4,
        title: "Vegan Burger",
        paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
        rating: 3.5,
        price: 99.25,
    },
    {
        id: "0005",
        image: Image5,
        title: "Double Burger",
        paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
        rating: 3.0,
        price: 59.25,
    },
    {
        id: "0006",
        image: Image6,
        title: "Turkey Burger",
        paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
        rating: 3,
        price: 79.18,
    },
    {
        id: "0007",
        image: Image7,
        title: "Smokey House",
        paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
        rating: 2.5,
        price: 99.19,
    },
    {
        id: "0008",
        image: Image8,
        title: "Classic Burger",
        paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
        rating: 2.0,
        price: 89.12,
    },
    // Add more mock data objects as needed
];

const Section3 = () => {
    return (
        <div className='menu_section'>
            <div className='container'>

                <div className='row'>
                    <div className='col-md-8'>
                        <h2>OUR CRAZY BURGERS</h2>
                        <p className="para">
                            Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                            dolor primis libero tempus, blandit a cursus varius magna
                        </p>
                    </div>
                </div>

                <div className='row g-4'>
                    {
                        mockData.map((mockData, index) => (
                            <div className='col-md-3' key={index}>
                                <div className="card" style={{ minWidth: "18rem" }}>
                                    <img src={mockData.image} className="card-img-top" alt={mockData.id} />
                                    <div className="card-body ">
                                        <div className='rating d-flex justify-content-between align-items-center'>
                                            <div className='item_rating'>
                                                <p>{mockData.rating}</p>
                                            </div>
                                            <div className='wishlist'>
                                                <p><i className="bi bi-heart"></i></p>
                                            </div>
                                        </div>
                                        <h5 className="card-title">{mockData.title}</h5>
                                        <p className="card-text">{mockData.paragraph}</p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='menu_price'>
                                                <h5>$ {mockData.price}</h5>
                                            </div>
                                            <div className='add_to_cart'>
                                                <Link to="/">
                                                    <i className="bi bi-bag"></i> Add to Cart
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Section3
