// Helper styles for demo
import './helper.css';
import extract from 'extract-zip'
import React from 'react';
import { render } from 'react-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import JSZip from 'jszip'

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedFile: null };
  }
  render() {
    return (
    <div>
      <div className="signupTopContainer">
        <div className="signupTop">
        <img className='logoApk' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Esko_Praha_logo.svg/2000px-Esko_Praha_logo.svg.png" />
        <h1>
        Login
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
                <button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </button>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
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
export default LogIn;