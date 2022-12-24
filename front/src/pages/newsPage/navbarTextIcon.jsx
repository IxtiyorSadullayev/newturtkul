import React from 'react'
import './navbarMenu.css'

export default function NavbarTextIcon() {
    return (
        <div>
            <div className="tabler_icon">
                <div id='icon__table'>
                    <i className="fa fa-bars" id='icon_position'></i>
                    <i class="fa-solid fa-cube" id='icon_position'></i>
                    <span id='icon_position'>Sort by: Default Order</span>
                    <i class="fa-solid fa-chevron-down" id='icon_position'></i>
                </div>
                {/* text link  */}
                <li className='text__link_pos'>All Properties</li>
                <li className='text__link_pos'>For Buy</li>
                <li className='text__link_pos'>For Sale</li>
                <li className='text__link_pos'>For Rent</li>
            </div>
        </div>
    )
}