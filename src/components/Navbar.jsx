import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-1 sticky-top bg-black">
            <div className="container ">
                <NavLink className="navbar-brand text-white fw-bold fs-4 px-0" to="/"> React Ecommerce</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto  my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white px-md-5" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item px-md-5">
                            <NavLink className="nav-link text-white" to="/product">Products</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li> */}
                        <li className="nav-item px-md-5">
                            <NavLink className="nav-link text-white" to="/orders">My Orders</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center ">
                        <NavLink to="/login" className="btn btn-outline-dark bg-white text-black m-2">Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2 text-white border-white"> Register</NavLink>
                        <NavLink to="/cart" className="btn text-white m-2"><i className="fa fa-cart-shopping text-white mr-1"></i> ({state.length}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar