import React from 'react'
import { Link } from 'react-router-dom'
import StoreIOS from "../../Assets/shop/appstore.png"
import StoreGoogle from "../../Assets/shop/googleplay.png"
import DownloadImage from "../../Assets/shop/e-shop.png"

const Section5 = () => {
    return (
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
                            <img src={StoreIOS} alt='IOS' className='img-fluid me-3' />
                        </Link>
                        <Link to="/">
                            <img src={StoreGoogle} alt='Android' className='img-fluid me-3' />
                        </Link>
                    </div>
                    <div className='col-lg-6'>
                        <img src={DownloadImage} alt='e-shop' className='img-fluid' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section5
