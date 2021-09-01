import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom"
function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarItem">
               <span className="sidebarTitle"> About the universe</span>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQvsFQMnLaCKHmaao1VQCavhcgcCXbfJ2xQ&usqp=CAU.png" alt="" ></img>
               <p>  This is a big hit namnoimgn jhfuef hgiuiopialkjim jhfuen buir hitme with your hheart and lunc
                    g or something or i donno bcha shut up please</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqL5Tlz7y7KnV1InHii92A_6yly6Mq99I_Ig&usqp=CAU" alt="" ></img>
               <p>  This is a big hit namnoimgn jhfuef hgiuiopialkjim jhfuen buir hitme with your hheart and lunc
                    g or something or i donno bcha shut up please</p>
            </div>
            
                <span className="sidebarTitle">Categories </span>
                <ul className="sidebarList">
                    {/* {cats.map((c) => 
                    <Link to ={`/?cat=$(c.name)`}>      */}
                 <li className="sidebarListItem">moon</li>
                 {/* </Link>
                 )} */}
                    {/* <li className="sidebarListItem">Andromeda</li>
                    <li className="sidebarListItem">stars</li>
                    <li className="sidebarListItem">constallation</li>
                    <li className="sidebarListItem">galaxy</li>
                    <li className="sidebarListItem">bigband</li> */}
                </ul>

        
                <span className="sidebarTitle">Follow me on</span>
                <div className="sidebarSocial">
                    
                <i class="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-telegram-plane"></i>
                    <i className="sidebarIcon far fa-envelope"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>                 
                </div>

            </div>
            
        )
}

export default Sidebar
