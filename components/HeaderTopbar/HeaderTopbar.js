import React from 'react'
import Link from 'next/link'


const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-5 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi ti-location-pin"></i>New York, United States, NY, 10005</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-7 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link href="/contact">Support</Link></li>
                                <li><Link href="/terms">Terms & Conditions</Link></li>
                                <li className='lan-sec'>
                                    <select name="" id="">
                                        <option value="">English</option>
                                        <option value="">Spain</option>
                                        <option value="">France</option>
                                        <option value="">Italy</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;