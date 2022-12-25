import React from 'react'
import { Link } from 'react-router-dom'
import './Propertice.css'

import cardimg1 from './../../img/cardimg1.png'
import cardimg2 from './../../img/card2.png'
import cardimg3 from './../../img/card3.png'

import cardOne from '../../img/card_one.png'
import Navbar from '../homePage/Navbar'
function Propertice() {
    return (
        <div>
            <div className="navigator_Propertice">
                <Navbar />
                <header>
                    <div className="header">
                        <span>
                            <h1>Propertice</h1>
                            <span><Link to='/'>Home</Link>/<Link to='/'>Properties</Link></span>
                        </span>
                    </div>
                </header>

                <section>
                    <div className="cards">
                        <div className="card_one">
                            <div className="cardLeft">
                                <div className="card_header">
                                    <div className="card_header_left">
                                        <img src={cardOne} alt="" /><h4>Jenny Wilson</h4>
                                    </div>
                                    <div className="card_header_right">
                                        <i class="fas fa-share-nodes"></i>
                                        <i class="fa-regular fa-heart"></i>
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>

                                <div className="card_body">
                                    <h4>
                                        92 ALLIUM PLACE, ORLANDO FL 32827
                                    </h4>
                                    <p>
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
                                        <br /><br />
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit... readmore.
                                    </p>
                                </div>
                                <div className="card_footer">
                                    <h1>$ 590,693</h1>
                                </div>
                            </div>
                            <div className="cardRight">
                                <img src={cardimg1} alt="" />
                            </div>
                        </div>
                        <div className="card_one">
                            <div className="cardRight">
                                <img src={cardimg2} alt="" />
                            </div>
                            <div className="cardLeft">
                                <div className="card_header">
                                    <div className="card_header_left">
                                        <img src={cardOne} alt="" /><h4>Jenny Wilson</h4>
                                    </div>
                                    <div className="card_header_right">
                                        <i class="fas fa-share-nodes"></i>
                                        <i class="fa-regular fa-heart"></i>
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>

                                <div className="card_body">
                                    <h4>
                                        92 ALLIUM PLACE, ORLANDO FL 32827
                                    </h4>
                                    <p>
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
                                        <br /><br />
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit... readmore.
                                    </p>
                                </div>
                                <div className="card_footer">
                                    <h1>$ 590,693</h1>
                                </div>
                            </div>

                        </div>

                        <div className="card_one">
                            <div className="cardLeft">
                                <div className="card_header">
                                    <div className="card_header_left">
                                        <img src={cardOne} alt="" /><h4>Jenny Wilson</h4>
                                    </div>
                                    <div className="card_header_right">
                                        <i class="fas fa-share-nodes"></i>
                                        <i class="fa-regular fa-heart"></i>
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>

                                <div className="card_body">
                                    <h4>
                                        92 ALLIUM PLACE, ORLANDO FL 32827
                                    </h4>
                                    <p>
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
                                        <br /><br />
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit... readmore.
                                    </p>
                                </div>
                                <div className="card_footer">
                                    <h1>$ 590,693</h1>
                                </div>
                            </div>
                            <div className="cardRight">
                                <img src={cardimg3} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Propertice