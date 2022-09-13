import React from 'react';
import { Link } from 'react-router-dom';
import flogin from "../images/farmericon11.png"
import vlogin from "../images/vloginimg.png"
import llogin from "../images/lloginimg.png"
//import Button from "react-bootstrap/Button";

export default function Login() {
  return (
  <div className="login" style={{height:'800px'}}>


<div className='container' >
        <h1 className='text-center' style={{textShadow:"Green 2px 2px"}}><b>Login Page</b></h1>
            <div class="row center1" style={{textShadow:"Green 2px 2px"}} >
                <div class="column Ovel textalign">
                    <Link to="/FarmerLogin">
                <a variant="outline-light" size="lg">
                    <img style={{width:"250px",height:"250px",marginTop:"70px"}} src={flogin}/>
                    <label style={{color:'black'}}>Farmer LogIn</label>
                </a>
                </Link>
                </div>
                <div class="column Ovel textalign">
                <Link to="/VendorLogin">
                <a variant="outline-light" size="lg">
                <img style={{width:"250px",height:"250px",marginTop:"70px"}} src={vlogin}/>
                    <label style={{color:'black'}}>Vendor LogIn</label>
                </a>
                </Link>
                </div>
                <div class="column Ovel textalign">
                <Link to="/Logistics">
                <a variant="outline-light" size="lg">
                <img  style={{width:"250px",height:"250px",marginTop:"70px"}} src={llogin}/>
                    <label style={{color:'black'}}>Logistics LogIn</label>
                </a>
                </Link>
                </div>
            </div>
</div>
</div>)
 }


