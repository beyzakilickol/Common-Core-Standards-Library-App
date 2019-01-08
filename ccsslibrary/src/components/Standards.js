import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import Filter from './Filter'
import Footer from './Footer'
import 'rc-menu/assets/index.css';
import axios from 'axios'
import '../assets/css/filter.css'
import '../assets/css/standards.css'

  let config = {headers: {
    'Accept': 'application/json',
    'Api-Key': 'hgvsDmBJtYaWJUkSCMUUJhYm',
    'Content-Type': 'application/json',
    'crossDomain': true,
    "async": true
}}

class Standards extends Component{
  constructor(props){
    super(props)
    this.state={
      standards: []
    }
  }

componentWillReceiveProps = (props)=>{
  axios(`http://api.commonstandardsproject.com/api/v1/standard_sets/${props.subjectid}`,config).then((response)=>{
       let standardArr=Object.values(response.data.data.standards)
       let standardString=standardArr.map((each)=>{
         return each.statementNotation + ' : ' + each.description
       })
       this.setState({
         ...this.state,
         standards: standardString.reverse()
       })

  })
}

  render(){
    let orderedStandards=this.state.standards.map((each)=>{
      return <Link className="hover1" to='/'><li>{each}</li></Link>
    })
    return (
      <div>
         <div className="main-container">
         <div className="filterStandard-container">
        <Filter/>
          </div>
          <div className="standard-container">
        <ul >
        {orderedStandards}
        </ul>
         </div>

</div>
<Footer/>
</div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
    //ctr: state.counter // this.props.ctr
    subjectid:state.subjectid
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Standards)
