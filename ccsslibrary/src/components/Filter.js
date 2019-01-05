import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';

import 'rc-menu/assets/index.css';
import axios from 'axios'
import '../assets/css/filter.css'


class Filter extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }




  render(){

    return (

          <div className="filter">
          <div className="filterdropdown">

          <Menu>
          <MenuItem > Search by Standards
          </MenuItem>
          <Divider/>
          <SubMenu title={'Grade 1'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 2'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 3'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 4'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 5'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 6'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 7'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 8'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 9'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 10'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
          <SubMenu title={'Grade 11'}>
          <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

          <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
          </SubMenu>
          <Divider/>
            <SubMenu title={'Grade 12'}>
            <SubMenu title={'Math'} ><MenuItem>Standard</MenuItem></SubMenu>

            <SubMenu title={'ELA'} ><MenuItem>Standard 2</MenuItem></SubMenu>
            </SubMenu>

          </Menu>
      </div>



       <p className="search-by-price">Search by Price</p>
       <div className="adjustment">
       <div className="price-container">
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Free</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Under $5</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">$5 - $10</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">$10 - $20</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">$20 and up</label>
       </div>

       </div>



       <p className="search-by-resource">Top Resource Types</p>
       <div className="adjustment">
       <div className="price-container">
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Activities</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Worksheets</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Assessments</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Projects</label><br/>
        <input className="priceLevel" type="checkbox"/><label className="priceLabel">Posters</label>
       </div>
       <div id="adjustment2">
       </div>
       </div>




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


export default connect(mapStateToProps,mapDispatchToProps)(Filter)
