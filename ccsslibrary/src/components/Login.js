import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import '../assets/css/login.css'
import Footer from './Footer'


class Login extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){

    return (
      <div>
      <aside></aside>
      <div className="login-card">
          <header></header>
          <form className="form-signin">
          <span className="reauth-email"> </span><input className="form-control" type="email" required="" placeholder="Enter your email" autofocus="" id="inputEmail"/><input className="form-control" type="password" required="" placeholder="Enter your password" id="inputPassword"/>
              <div
                  className="checkbox"></div><button className="loginbtn btn btn-primary btn-block btn-lg btn-signin" type="submit" >Login</button></form>
      </div>
      <Footer style={{position: 'absolute',
     left: '0',
     bottom: '0',
     height: '205px',
     width: '100%',
     overflow: 'hidden'}}/>
      </div>
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


export default connect(mapStateToProps,mapDispatchToProps)(Login)
