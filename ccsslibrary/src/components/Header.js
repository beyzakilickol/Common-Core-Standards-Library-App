import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import '../assets/css/header.css'
import ccsslogo from '../assets/img/ccsslogo.png'

class Header extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }


  render(){

    return (


     <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav">
         <div className="container"><a className="navbar-brand js-scroll-trigger" href="#page-top"><img id="logo" src={ccsslogo}/></a><button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" data-toggle="collapse"
                 data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
             <div className="collapse navbar-collapse" id="navbarResponsive">
                 <ul className="nav navbar-nav ml-auto">
                     <li className="nav-item mx-0 mx-lg-1" role="presentation"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Login</a></li>
                     <li className="nav-item mx-0 mx-lg-1" role="presentation"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">get started</a></li>
                     <li className="nav-item dropdown"><a id="dropdown" className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#" >My dashboard</a>
                         <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">First Item</a><a className="dropdown-item" role="presentation" href="#">Second Item</a><a className="dropdown-item" role="presentation" href="#">Third Item</a></div>
                     </li>
                 </ul>
             </div>
         </div>
     </nav>


    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header)
