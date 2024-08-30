import React from 'react'
import './TopBox.scss'

const TopBox = () => {
  return (
    <div className='top_box'>
        <h1>Top Deals</h1>
        <div className='listItems'>
            <div className='items'>
                <div className='user'>
                    <div className='image_container'>
                         <img src="https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                    </div>
                    <div className='userText'>
                        <span className='userName'>Rabie hajji</span>
                        <span className='email'>Rabie@gmail.com</span>
                    </div>
                </div>
                <span className='amount'>$3.668</span>
            </div>
            <div className='items'>
                <div className='user'>
                    <div className='image_container'>
                         <img src="https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                    </div>
                    <div className='userText'>
                        <span className='userName'>Rabie hajji</span>
                        <span className='email'>Rabie@gmail.com</span>
                    </div>
                </div>
                <span className='amount'>$3.668</span>
            </div>
            <div className='items'>
                <div className='user'>
                    <div className='image_container'>
                         <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                    <div className='userText'>
                        <span className='userName'> Brent Reeves</span>
                        <span className='email'>brent@gmail.com</span>
                    </div>
                </div>
                <span className='amount'>$3.120</span>
            </div>
            <div className='items'>
                <div className='user'>
                    <div className='image_container'>
                         <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                    <div className='userText'>
                        <span className='userName'>Adeline Watson</span>
                        <span className='email'>adeline@gmail.com</span>
                    </div>
                </div>
                <span className='amount'>$2.991</span>
            </div>
            <div className='items'>
                <div className='user'>
                    <div className='image_container'>
                         <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                    <div className='userText'>
                        <span className='userName'>Eva Nadal</span>
                        <span className='email'>Rabie@gmail.com</span>
                    </div>
                </div>
                <span className='amount'>$2.700</span>
            </div>
            <div className='items'>
                <div className='user'>
                    <div className='image_container'>
                         <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                    <div className='userText'>
                        <span className='userName'>Rabie hajji</span>
                        <span className='email'>Rabie@gmail.com</span>
                    </div>
                </div>
                <span className='amount'>$2.550</span>
            </div>
            <div className='items'>
                <div className='user'>
                    <div className='image_container'>
                         <img src="https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                    </div>
                    <div className='userText'>
                        <span className='userName'>Juan Harrington</span>
                        <span className='email'>juan@gmail.com</span>
                    </div>
                </div>
                <span className='amount'>$2.541</span>
            </div>
            <div className='items'>
                <div className='user'>
                    <div className='image_container'>
                         <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                    <div className='userText'>
                        <span className='userName'>Augusta McGee</span>
                        <span className='email'>augusta@gmail.com</span>
                    </div>
                </div>
                <span className='amount'>$2.142</span>
            </div>
        </div>
        <a className='viewAll'>View All</a>
    </div>
  )
}

export default TopBox