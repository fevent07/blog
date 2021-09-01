import "./topbar.css";
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:6000/api/images/";
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return ( 
        <div className="top">
           <div className="topLeft">l  k  l  k  l  k  l  k   l </div>
           <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"> 
                <Link className="link" to="/">Home</Link>
                </li>
                <li className="topListItem"><Link className="link" to="/"> About</Link></li>
                <li className="topListItem"><Link className="link" to="/"> Contacts</Link></li>
                <li className="topListItem"><Link className="link" to="/write"> Write</Link></li>
                <li className="topListItem" onClick= {handleLogout} >
                    {user && "LOGOUT"}</li>
                </ul>   
            </div>
           <div className="topRight">
               { user ? (
                   <Link className="link" to="/settings">
                    <img 
                        className="topImg" src={PF + user.profilePic} 
                        alt= "  p">
                    </img>
                    </Link>
                ) : (
                    <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/register"> Register</Link></li>
                    
                    <li className="topListItem"><Link className="link" to="/login"> Login</Link></li>
                   </ul> 
                              
                )}
                <i className="topSearchIcon fas fa-search"></i>
            
            </div>
        </div>
    )
}

export default TopBar

