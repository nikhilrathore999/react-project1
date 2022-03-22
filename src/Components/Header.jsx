import React from 'react'
import {useNavigate} from "react-router";
import {NavLink} from 'react-router-dom'
const Header = () => {
  const navigate=useNavigate()
  return (
    <div >
        <img onClick={()=>navigate("/home")} style={{width:"120px",height:"60px",marginLeft:'45%',marginTop:"50px",cursor:'pointer'}} src="https://www.cricclubs.com/documentsRep/teamLogos/kerala.jpg" alt=""  className='cursor-Pointer'/>
        <div className='header_links'>
            <NavLink className="header_tabs" to="/home" >Home</NavLink>
            <NavLink className="header_tabs" to="/category/tourism">Tourism</NavLink>
            <NavLink className="header_tabs" to="/category/technology">Technology</NavLink>
            <NavLink className="header_tabs" to="/category/fitness">Fitness</NavLink>
            <NavLink className="header_tabs" to="/category/bollywood">Bollywood</NavLink>
            <NavLink className="header_tabs" to="/category/food">Food</NavLink>
            
        </div>
        <hr style={{marginBottom: "100px"}} />
    </div>
  )
}

export default Header