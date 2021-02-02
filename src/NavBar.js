import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as FaICONS from 'react-icons/fa';
import * as IoICONS from 'react-icons/io';
import * as AiICONS from 'react-icons/ai';

import {social} from "./data"
console.log(social);

const NavBar = () => {

    const [sidebar,setSideBar] = useState(false)

    const showSidebar = () =>{
        setSideBar(!sidebar)
    } 

    return (
        <>
        
       <div className="navbar">
                <Link to="#" className="menu-bars">
                        <FaICONS.FaBars onClick={showSidebar}/>
                </Link>

      </div>

        <nav className={sidebar ? "nav-menu active": "nav-menu"}>
           
            <ul className="nav-menu-items" onClick={showSidebar}>

                    <li className="navbar-toggle" >
                            <Link to="#" className="menu-bars">
                                <AiICONS.AiOutlineClose />
                            </Link>
                    </li>

                    <li className="nav-text">
                            <Link to="/">
                                <FaICONS.FaHome/>
                                <span>Home</span>
                            </Link>

                    </li>
                
                    <li className="nav-text">
                        <Link to="/create" >
                            <IoICONS.IoMdCreate />
                            <span>NewBlog</span>
                        </Link>
                    </li>

                     {
                    social.map(item=>{
                         const { id, url, icon, cName } = item
                        return <li className="nav-text" key={id}>
                                    <a href={url} target="_blank">
                                        {icon}
                                        <span>{cName}</span>
                                    </a>
                                </li>
                    })
                     }

            </ul>
            <div>
               
            </div>

        </nav>

         

       </>
    )
}

export default NavBar
