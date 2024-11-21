"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMdMenu } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
function Navbar() {
 const [visible,setVisible] = useState(false)
 const handlevisible = () => {
        setVisible(false)
 }
 const handlevisibleof = () => {
        setVisible(true)
 }
  return (
    <>
      <div className="lorem_span_doler">
        <div>
          <Image height={10} width={100} src="/Frame.png" alt="lorem" className="display_none" />
        </div>
        <div>
          <Image height={10} width={100}  src="/Frame.png" alt="lorem"/>
        </div>
        <div>
          <Image height={10} width={100}  src="/Frame.png" alt="lorem" className="display_none" />
        </div>
      </div>
      <div className="Nav_container">
        <div className="Nav_logo">
          <i className="menu_icon">
            <IoMdMenu />
          </i>
          <Image
            className="logo_images"
            src="/Logo.png"
            width={36}
            height={36}
            alt="logo"
          />
        </div>
        <div className="Nav_logoname">LOGO</div>
        <div className="Nav_icon">
          <div className="icon">
            <i>
              <CiSearch />
            </i>
            {visible ? (
              <i onClick={handlevisible}><CiHeart /></i>
            ) : (
               <i onClick={handlevisibleof} style={{color:"red"}}><FaHeart /></i>
            )
            }
            <i>
              
            </i>
            <i>
              <LiaShoppingBagSolid />
            </i>
            <Image
              id="profile_icon"
              src="/profile.png"
              width={25}
              height={25}
              alt="logo"
            />
            <select className="Langubase">
              <option value="English">ENG</option>
              <option value="Hindi">Hindi</option>
              <option value="Bengoli">Bengoli</option>
            </select>
          </div>
        </div>
      </div>
      <div className="List_item">
        <ul>
          <li>SHOP</li>
          <li>SKILL</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <hr className="Nav_hr_line" />
    </>
  );
}

export default Navbar;
