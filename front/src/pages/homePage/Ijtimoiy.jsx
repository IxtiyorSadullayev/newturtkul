import React from 'react';

const Ijtimoiy = () => {

    return (
        <>
            <div className="container ijtimoiy">
                <div className="ijtimoiy_email">
                    <i className="fa fa-envelope-open"></i>
                    <p>Email us at: <span>jonquin9999@gmail.com</span></p>
                </div>
                <div className="ijtimoiy_iconlar">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-dribbble"></i>
                    <i class="fab fa-tencent-weibo"></i>
                    <i className="fab fa-instagram"></i>
                    <div className="fab fa-vk"></div>
                    <i className="fa fa-phone"></i>
                    <span>93 712 38 22</span>
                </div>
            </div>

            <section className='bottom_border_text_link'>
                <ul>
                    <li className='text_link'>Home</li>
                    <li className='text_link'>About US</li>
                    <li className='text_link'>OUR AGENTS</li>
                    <li className='text_link'>PROPERTIES</li>
                    <li className='text_link'>GALLERY</li>
                    <li className='text_link'>BLOG</li>
                    <li className='text_link'>CONTACT US</li>
                    <li className='text_link'>SEARCH</li>
                    <button>Add Listing</button>
                </ul>
            </section>
        </>
    )
}
export default Ijtimoiy;