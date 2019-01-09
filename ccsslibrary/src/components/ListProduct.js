import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Footer from './Footer'
import '../assets/css/listproduct.css'
import Dropzone from 'react-dropzone'
import request from "superagent";
import classNames from 'classnames'
import MyStatefulEditor from './MyStatefulEditor'

const baseStyle = {
  width: 200,
  height: 200,
  borderWidth: 2,
  borderColor: '#666',
  borderStyle: 'dashed',
  borderRadius: 5
};
const activeStyle = {
  borderStyle: 'solid',
  borderColor: '#6c6',
  backgroundColor: '#eee'
};
const rejectStyle = {
  borderStyle: 'solid',
  borderColor: '#c66',
  backgroundColor: '#eee'
};
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
  zIndex: 1,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: '5%',
  width: '100%',
  height: '100%',
  padding: 0,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
  borderStyle:'none'
}

const img = {
  display: 'block',
  width: '190px',
  height: '190px',
  marginTop: '40px',
  marginRight: '4px'
};

class ListProduct extends Component {
  constructor(props){
    super(props)
    this.state = {
       files:[],

    }

  }

  onDrop = (files) => {

    this.setState({
      ...this.state,
      className: 'hide',
      files: files.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
    });
   }
   componentWillUnmount() {
     // Make sure to revoke the data uris to avoid memory leaks
     this.state.files.forEach(file => URL.revokeObjectURL(file.preview))
   }

  render() {

  const {files} = this.state;
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>

        <embed className="embed" src={file.preview} style={img}/>
      </div>
    </div>
  ));
    return(
      <div>
      <div className="listproductContainer">
      <h2>Create A New Product</h2>
      <label>Product Title<input type="text" placeholder="Enter title of the product"></input></label>
      <label>Keywords &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="Enter keywords for buyers to search for your product"></input></label>
      <label>Select grade:
    <select id="gradeSelectDropdown">
     <option disabled selected >Select an option</option>
      <option value='Grade K'>Grade K</option>
      <option value='Grade 1'>Grade 1</option>
      <option value='Grade 2'>Grade 2</option>
      <option value='Grade 3'>Grade 3</option>
      <option value='Grade 4'>Grade 4</option>
      <option value='Grade 5'>Grade 5</option>
      <option value='Grade 6'>Grade 6</option>
      <option value='Grade 7'>Grade 7</option>
      <option value='Grade 8'>Grade 8</option>
      <option value='Grade 9'>High School</option>

     </select>  </label>
     <label>Select subject:
     <select id="subjectSelectDropdown">
     <option disabled selected >Select an option</option>
     <option value='Mathematics'>Math</option>
     <option value='English Language Arts and Reading'>ELA</option>
     </select>

     </label>
     <label> Select standards:
     <select id="standardsSelectDropdown">
     <option disabled selected >Select an option</option>

     </select>
     </label>
     <p className="description">Description of your product. Please be specific</p>
      <MyStatefulEditor/>
      <div className="folderresourcecontainer">
     <Dropzone accept="image/*, application/pdf" onDrop={this.onDrop.bind(this)}>
  {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
    let styles = {...baseStyle}
    styles = isDragActive ? {...styles, ...activeStyle} : styles
    styles = isDragReject ? {...styles, ...rejectStyle} : styles

    return (
      <div>
      <p className="uploadFile">Upload your file</p>
      <div
        {...getRootProps()}
        style={styles}
      >
        <input {...getInputProps()} />
        <div className="dragContainer">
        <aside style={thumbsContainer}>
           {thumbs}
         </aside>
          <p id={this.state.className} className="dragText">
          Click to select the file or &nbsp;&nbsp;&nbsp;&nbsp;
          {isDragAccept ? 'Drop' : 'Drag'} files here...</p>
        </div>
        {isDragReject && <div className="hideframe">Unsupported file type...</div>}

      </div>
      </div>
    )
  }}

</Dropzone>


      <div className="resourcecontainer">
        <label className="resourceHeading">Choose Resource Type</label>
        <div className="inputContainer">
        <input type="radio" name="resource" value=""/>Activities<br/>
         <input type="radio" name="resource" value=""/>Worksheets<br/>
          <input type="radio" name="resource" value=""/>Assessments<br/>
           <input type="radio" name="resource" value=""/>Projects<br/>
            <input type="radio" name="resource" value=""/>Posters<br/>
            </div>

            <label className="resourceHeading2">Price</label>

           <input className="priceInput" type="text" placeholder="&nbsp;&nbsp;$ &nbsp;&nbsp;0" />

           <button type="button" className="btn btn-primary btn-lg itemSubmitBtn">Publish Item</button>


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

     //this.props.isAuthenticated
    //ctr: state.counter // this.props.ctr
  }
}

// make the dispatches available on local props
// dispatch is used to communicate with the reducer
// so the reducer can change the global state
const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter


  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ListProduct))
