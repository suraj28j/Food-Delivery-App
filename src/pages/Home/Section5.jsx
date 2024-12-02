import React from 'react'
import { Link } from 'react-router-dom'
import StoreIOS from "../../Assets/shop/appstore.png"
import StoreGoogle from "../../Assets/shop/googleplay.png"
import DownloadImage from "../../Assets/shop/e-shop.png"

import Brand1 from "../../Assets/brands/brand-11.png"
import Brand2 from "../../Assets/brands/brand-12.png"
import Brand3 from "../../Assets/brands/brand-13.png"
import Brand4 from "../../Assets/brands/brand-14.png"
import Brand5 from "../../Assets/brands/brand-15.png"
import Brand6 from "../../Assets/brands/brand-16.png"
import Brand7 from "../../Assets/brands/brand-17.png"
import Brand8 from "../../Assets/brands/brand-18.png"

const Section5 = () => {
    return (
        <>
            <section className='shop_section'>
                <div className='container'>
                    <div className='row align-items-center'>

                        <div className='col-lg-6 text-center text-lg-start mb-4 mb-lg-0'>
                            <h4>Download mobile App and</h4>
                            <h2>save up to 20%</h2>
                            <p>Aliquam a augue suscipit, luctus neque purus ipsum and neque
                                dolor primis libero tempus, blandit varius
                            </p>
                            <Link to="/">
                                <img src={StoreIOS} alt='IOS' className='img-fluid me-3 store' />
                            </Link>
                            <Link to="/">
                                <img src={StoreGoogle} alt='Android' className='img-fluid me-3 store' />
                            </Link>
                        </div>
                        <div className='col-lg-6'>
                            <img src={DownloadImage} alt='e-shop' className='img-fluid e-shop' />
                        </div>

                    </div>
                </div>
            </section>

            <section className='brand_section'>
                <div className='container'>
                    <div className='row'>

                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="2000">
                                    <div className='d-flex justify-content-between aglign-items-center'>
                                        <img src={Brand1} className="img-fluid" alt="Brand1" />
                                        <img src={Brand2} className="img-fluid" alt="Brand1" />
                                        <img src={Brand3} className="img-fluid" alt="Brand1" />
                                        <img src={Brand4} className="img-fluid" alt="Brand1" />
                                        <img src={Brand5} className="img-fluid" alt="Brand1" />
                                        <img src={Brand6} className="img-fluid" alt="Brand1" />
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <div className='d-flex justify-content-between aglign-items-center'>
                                        <img src={Brand3} className="img-fluid" alt="Brand1" />
                                        <img src={Brand4} className="img-fluid" alt="Brand1" />
                                        <img src={Brand5} className="img-fluid" alt="Brand1" />
                                        <img src={Brand6} className="img-fluid" alt="Brand1" />
                                        <img src={Brand7} className="img-fluid" alt="Brand1" />
                                        <img src={Brand8} className="img-fluid" alt="Brand1" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Section5
