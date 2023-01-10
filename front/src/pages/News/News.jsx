import React from 'react'
import './News.css'
import card2 from '../../img/card2.png'
import NewsHeader from './NewsHeader'
import Ijtimoiy from '../homePage/Ijtimoiy'
import Navbar from '../homePage/Navbar'
function News() {
    return (
        <div>
            <div className="NewsNavHead">
                <Ijtimoiy />

            </div>
            <div className="NewsNav">
                <Navbar />
            </div>
            <NewsHeader />
            <div className="CardSection">
                <div className="Cards">
                    <div className="Card">
                        <img src={card2} alt="" />
                        <h3 className='CardHeaders'>92 ALLIUM PLACE, ORLANDO FL 32827</h3>
                        <div className="Summ">
                            <h4 className='CardHeaders'>$ 590,693</h4>
                        </div>

                        <hr />

                        <div className="img_name">
                            <div>
                                <img src="https://picsum.photos/42" alt="" />
                                <h4>Jenny Wilson</h4>
                            </div>

                            <div className="card_header_right">
                                <i class="fas fa-share-nodes"></i>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="Card">
                        <img src={card2} alt="" />
                        <h3 className='CardHeaders'>92 ALLIUM PLACE, ORLANDO FL 32827</h3>
                        <div className="Summ">
                            <h4 className='CardHeaders'>$ 590,693</h4>
                        </div>

                        <hr />

                        <div className="img_name">
                            <div>
                                <img src="https://picsum.photos/42" alt="" />
                                <h4>Jenny Wilson</h4>
                            </div>

                            <div className="card_header_right">
                                <i class="fas fa-share-nodes"></i>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="Card">
                        <img src={card2} alt="" />
                        <h3 className='CardHeaders'>92 ALLIUM PLACE, ORLANDO FL 32827</h3>
                        <div className="Summ">
                            <h4 className='CardHeaders'>$ 590,693</h4>
                        </div>

                        <hr />

                        <div className="img_name">
                            <div>
                                <img src="https://picsum.photos/42" alt="" />
                                <h4>Jenny Wilson</h4>
                            </div>

                            <div className="card_header_right">
                                <i class="fas fa-share-nodes"></i>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="Card">
                        <img src={card2} alt="" />
                        <h3 className='CardHeaders'>92 ALLIUM PLACE, ORLANDO FL 32827</h3>
                        <div className="Summ">
                            <h4 className='CardHeaders'>$ 590,693</h4>
                        </div>

                        <hr />

                        <div className="img_name">
                            <div>
                                <img src="https://picsum.photos/42" alt="" />
                                <h4>Jenny Wilson</h4>
                            </div>

                            <div className="card_header_right">
                                <i class="fas fa-share-nodes"></i>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="Card">
                        <img src={card2} alt="" />
                        <h3 className='CardHeaders'>92 ALLIUM PLACE, ORLANDO FL 32827</h3>
                        <div className="Summ">
                            <h4 className='CardHeaders'>$ 590,693</h4>
                        </div>

                        <hr />

                        <div className="img_name">
                            <div>
                                <img src="https://picsum.photos/42" alt="" />
                                <h4>Jenny Wilson</h4>
                            </div>

                            <div className="card_header_right">
                                <i class="fas fa-share-nodes"></i>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="Card">
                        <img src={card2} alt="" />
                        <h3 className='CardHeaders'>92 ALLIUM PLACE, ORLANDO FL 32827</h3>
                        <div className="Summ">
                            <h4 className='CardHeaders'>$ 590,693</h4>
                        </div>

                        <hr />

                        <div className="img_name">
                            <div>
                                <img src="https://picsum.photos/42" alt="" />
                                <h4>Jenny Wilson</h4>
                            </div>

                            <div className="card_header_right">
                                <i class="fas fa-share-nodes"></i>
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News