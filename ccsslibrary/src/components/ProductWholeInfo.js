import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import '../assets/css/productwholeinfo.css'
import Footer from './Footer'
import axios from 'axios'
import '../assets/css/filter.css'
import '../assets/css/standards.css'



class Productwholeinfo extends Component{
  constructor(props){
    super(props)
    this.state={
      product:{},

    }
  }
 componentWillMount =()=>{
   axios(`http://localhost:3001/api/${this.props.productid}`).then((response)=>{
       console.log(response.data)
       let page2 = response.data.fileurl + '&page=2'
       let page3 = response.data.fileurl + '&page=3'
       let page4= response.data.fileurl + '&page=4'
       this.setState({
         ...this.state,
         product: response.data,
         page2: page2,
         page3:page3,
         page4:page4
       })
   })
 }


  render(){


    return (
      <div>

      <div className="container containerBox">
   <div className="card">
     <div className="container-fliud">
       <div className="wrapper row">
         <div className="preview col-md-6">

           <div className="preview-pic tab-content">
             <div className="tab-pane active" id="pic-1"><embed className='pdfDisplay' src={this.state.product.fileurl} scroll="no" seamless="seamless" frameborder="0"></embed></div>

           </div>

           <ul className="preview-thumbnail nav nav-tabs">
             <li className="active"><a data-target="#pic-1" data-toggle="tab"><embed className="smallView" src={this.state.page2} /></a></li>
             <li><a data-target="#pic-2" data-toggle="tab"><embed className="smallView" src={this.state.page3} ></embed></a></li>
             <li><a data-target="#pic-3" data-toggle="tab"><embed className="smallView" src={this.state.page4} ></embed></a></li>

           </ul>

         </div>
         <div className="details col-md-6">
           <h3 className="product-title">{this.state.product.title}</h3>
           <div className="rating">
             <div className="stars">
               <span className="fa fa-star checked"></span>
               <span className="fa fa-star checked"></span>
               <span className="fa fa-star checked"></span>
               <span className="fa fa-star"></span>
               <span className="fa fa-star"></span>
             </div>
             <span className="review-no">{this.state.product.rating}</span>
           </div>
           <p className="product-description">{this.state.product.standard}</p>
           <h4 className="price">Item price: <span>{this.state.product.price}</span></h4>
           <h6 className="price">Grade Level: <span>{this.state.product.grade}</span></h6>
           <h6 className="price">Resource Type: <span>{this.state.product.resourcetype}</span></h6>

           <h5 className="sizes">Subject:
             <span className="size" data-toggle="tooltip" title="small">{this.state.product.subject}</span>


           </h5>

           <div className="action">
             <button className="add-to-cart btn btn-default" type="button">add to cart</button>
             <button className="like btn btn-default" type="button">Move to Wish List<span className="fa fa-heart"></span></button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>



<div className="row descriptionCard">
 <div className="col-12">
            <div className="card border-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-align-justify"></i> Description</div>
                <div className="card-body">
                    <p className="card-text">
                      {this.state.product.description}
                    </p>

                </div>
            </div>
        </div>


        <div className="col-12 reviewCard" id="reviews">
            <div className="card border-light mb-3">
                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-comment"></i> Reviews</div>
                <div className="card-body">
                    <div className="review">
                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                        <meta itemprop="datePublished" content="01-01-2016"/>January 01, 2018

                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        by Paul Smith
                        <p className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </p>
                        <hr/>
                    </div>
                    <div className="review">
                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                        <meta itemprop="datePublished" content="01-01-2016"/>January 01, 2018

                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        by Paul Smith
                        <p className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </p>
                        <hr/>
                    </div>
                    </div>
                  </div>
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
    productid: state.productid
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter


  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Productwholeinfo)
