// Helper styles for demo
import './helper.css';
// import {  DisplayFormikState } from './helper';
// var extract = require('extract-zip');

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css"

import extract from 'extract-zip'
import React from 'react';
import { render } from 'react-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import JSZip from 'jszip'
// use a BlobReader to read the zip from a Blob object

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedFile: null };
  }

  handleselectedFile(event) {
    console.log('event', event)
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    }, () => {
      // console.log('state', this.state)
      this.handleUpload(this.state.selectedFile)
    })
  }
  handleUpload(blob) {
    var new_zip = new JSZip();
    // more files !
    new_zip.loadAsync(blob)
      .then(function (zip) {
        // you now have every files contained in the loaded zip
        // new_zip.file("hello.txt").async("string"); // a promise of "Hello World\n"
        // console.log('ssss',JSON.stringify(zip.files));
        console.log('ssss', zip.files);
        for (var key in zip.files) {
          if (zip.files.hasOwnProperty(key)) {
            // console.log(zip.files[key].name);
            let list = zip.files[key].name.split('/')
            if (list[1] === 'index.html') {
              console.log('list value valid', list);
            }
          }
        }
      });
  }
  render() {
    return (
      <div>
      <div className="signupTopContainer">
        <div className="signupTop">
        <img className='logoApk' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Esko_Praha_logo.svg/2000px-Esko_Praha_logo.svg.png" />
        <h1>
        SignUp
        </h1>
        <Formik
          initialValues={{ email: '', Fistname: '', Lastname: '', Password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required('Required'),
            Fistname: Yup.string().required('Required'),
            Lastname: Yup.string().required('Required'),
            Password: Yup.string().required('Required')
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="inputField">
                <label htmlFor="email" style={{ display: 'block' }}>
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email &&
                  touched.email && <div className="input-feedback">{errors.email}</div>}


                <label htmlFor="Fistname" style={{ display: 'block' }}>
                  FirstName
</label>
                <input
                  id="Fistname"
                  placeholder="Enter your Fistname"
                  type="text"
                  value={values.Fistname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.Fistname && touched.Fistname ? 'text-input error' : 'text-input'
                  }
                />
                {errors.Fistname &&
                  touched.Fistname && <div className="input-feedback">{errors.Fistname}</div>}
                <label htmlFor="Lastname" style={{ display: 'block' }}>
                  LastName
                </label>
                <input
                  id="Lastname"
                  placeholder="Enter your LastName"
                  type="text"
                  value={values.Lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.Lastname && touched.Lastname ? 'text-input error' : 'text-input'
                  }
                />
                {errors.Lastname &&
                  touched.Lastname && <div className="input-feedback">{errors.Lastname}</div>}
                <label htmlFor="Password" style={{ display: 'block' }}>
                  Password
                </label>
                <input
                  id="Password"
                  placeholder="Enter your Password"
                  type="password"
                  value={values.Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.Password && touched.Password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.Password &&
                  touched.Password && <div className="input-feedback">{errors.Password}</div>}

                <AwesomeButton
                  onPress={handleReset}
                  disabled={!dirty || isSubmitting} 
                  type="submit"  
                  disabled={isSubmitting}  
                  type="primary">
                    Reset
                </AwesomeButton>
                     
                <AwesomeButton className='outlining' type="submit"  disabled={isSubmitting}  type="primary">Submit</AwesomeButton>
                         
                </div>
              </form>
            );
          }}
        </Formik>
         </div>
      </div>
      <div className="productDetail">
      Popular Searches-
     <div >
       Nike | Puma | Adidas | Fila | Lee | United Colors of Benetton | Wrangler | Fastrack | Woodland | Yepme | Levis | Tommy Hilfiger | peter-england | fabindia | nike shoes tops | shirts | jackets | myntra coupons | kurtis | shoes | tunics | dresses | Watches | saree | kurtas | bags | T-shirts | designer saree | sunglasses | jeans | trousers adidas shoes | casual shoes | sports shoes | fastrack watches | ethnic wear | woodland-shoes | mobile app | puma shoes | accessories | anarkali suit | running shoes reebok | formal wear | cat | jewellery
     </div> 
    </div>
    </div>
    );
  }
}
export default SignUp;








