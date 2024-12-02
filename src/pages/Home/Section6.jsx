import React from 'react'
import User1 from "../../Assets/blog/review-author-1.jpg"
import User2 from "../../Assets/blog/review-author-2.jpg"
import User3 from "../../Assets/blog/review-author-3.jpg"
import User4 from "../../Assets/blog/review-author-5.jpg"

const Section6 = () => {
    return (
        <section className='blog_section'>
            <div className='container'>
                <div className='row'>

                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner mb-4">
                            <div className="carousel-item active" data-bs-interval="2500">
                                <div className='text-center'>
                                    <img src={User1} alt="User1" />
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                    <div className='item_rating mb-3'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2500">
                                <div className='text-center'>
                                    <img src={User2}  alt="User2" />
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                    <div className='item_rating mb-3'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2500">
                                <div className='text-center'>
                                    <img src={User3} alt="User3" />
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                    <div className='item_rating mb-3'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2500">
                                <div className='text-center'>
                                    <img src={User4} alt="User4" />
                                    <p>" Etiam sapien sem at sagittis congue augue massa varius
                                        sodales sapien undo tempus dolor egestas magna suscipit magna
                                        tempus aliquet porta sodales augue suscipit luctus neque "</p>
                                    <div className='item_rating mb-3'>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>BY AMELIE NEWLOVE</h5>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section6
