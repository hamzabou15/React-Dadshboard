import React from 'react'
import { useRef, useEffect } from "react"
import './Menu.scss'
import { Link } from 'react-router-dom'
import { DimensionHeight } from '../../App';

interface MenuProps {
    menuHeight: DimensionHeight;
    setMenuHeight: React.Dispatch<React.SetStateAction<DimensionHeight>>;
}

const Menu: React.FC<MenuProps> = ({ menuHeight, setMenuHeight }) => {


    let menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (menuRef.current) {
            const divHeight = menuRef.current.clientHeight;
            // Ensure the object format matches DimensionHeight
            setMenuHeight({ height: divHeight });
            console.log(divHeight);
        }
    }, [setMenuHeight]);

    return (
        <div className='menu' ref={menuRef}>
            <img className='logo' src="/logoChart.svg" alt="" />
            <img className='logo1' src="/logoChart1.svg" alt="" />

            <div className='item'>
                <span className='title'>main</span>
                <Link to={'/'} >
                    <a href='/' className='list_item'>
                        <img src="/home.svg" alt="" />
                        <span className='listItemTitle'>Dashboard</span>
                    </a>
                </Link>
            </div>
            <div className='item'>
                <span className='title'>Lists</span>
                <Link to={'/users'} >
                    <a className='list_item'>
                        <img src="/user.svg" alt="" />
                        <span className='listItemTitle'>Team</span>
                    </a>
                </Link>

                <a href='/' className='list_item'>
                    <img src="/product.svg" alt="" />
                    <span className='listItemTitle'>Products</span>
                </a>
                <a href='/' className='list_item'>
                    <img src="/order.svg" alt="" />
                    <span className='listItemTitle'>Orders</span>
                </a>
            </div>
            <div className='item'>
                <span className='title'>general</span>
                <a href='/' className='list_item'>
                    <img src="/element.svg" alt="" />
                    <span className='listItemTitle'>Elements</span>
                </a>
                <a href='/' className='list_item'>
                    <img src="/note.svg" alt="" />
                    <span className='listItemTitle'>Notes</span>
                </a>
                <a href='/' className='list_item'>
                    <img src="/form.svg" alt="" />
                    <span className='listItemTitle'>Forms</span>
                </a>
                <a href='/' className='list_item'>
                    <img src="/calendar.svg" alt="" />
                    <span className='listItemTitle'>Calendar</span>
                </a>
            </div>
            <div className='item'>
                <span className='title'>maintenance</span>
                <a href='/' className='list_item'>
                    <img src="/setting.svg" alt="" />
                    <span className='listItemTitle'>Settings</span>
                </a>
                <a href='/' className='list_item'>
                    <img src="/backup.svg" alt="" />
                    <span className='listItemTitle'>Backups</span>
                </a>
            </div>
            <div className='item'>
                <span className='title'>analytics</span>
                <a href='/' className='list_item'>
                    <img src="/chart.svg" alt="" />
                    <span className='listItemTitle'>Charts</span>
                </a>
                <a href='/' className='list_item'>
                    <img src="/log.svg" alt="" />
                    <span className='listItemTitle'>Logs</span>
                </a>
            </div>
        </div>
    )
}

export default Menu