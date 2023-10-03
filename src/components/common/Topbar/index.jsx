import React from "react";
import logo from '../../../assets/logo.jpg'
import user from '../../../assets/user.png'
import { AiOutlineHome,
    AiOutlineSearch,
    AiOutlineMessage,
    } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import {MdOutlineGroups} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import "./index.scss"


export default function Topbar(){
    let navigate = useNavigate();
    const goToRoute = (route) => {
        navigate(route);
      };
    return(
        <div className="topbar-main">
            <img className="logo" src={logo} alt="CampusNexusLogo" />
            <div className="react-icons">
            <AiOutlineSearch size={30} className="react-icon" />
            <AiOutlineHome 
                size={30} 
                className="react-icon" 
                onClick={()=> goToRoute('/home')}
            />
            <FiUsers 
                size={28} 
                className="react-icon" 
                onClick={() => goToRoute("/connections")}
                />
            <MdOutlineGroups size={50}  className="react-icon"/>
            <AiOutlineMessage size={30} className="react-icon"/>
            <IoMdNotificationsOutline size={30} className="react-icon" />
            <img className="user-logo" src={user} alt='user'/>
            </div>
        </div>
    )
}