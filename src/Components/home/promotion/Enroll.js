import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Enroll extends Component {

  state = {
      formError: false,
      formSuccess: '',
      formdata: {
        email: {
          element: 'input',
          value: '',
          config: {
            name: 'email_input',
            type: 'email',
            placeholder: 'Enter your email'
          },
          validation: {
            required: true,
            email: true
          },
          valid: false,
          validationMessage: ''
        }
      }
    }

  submitForm() {

  }

  render() {
    return (
      <Fade>
      <div className="enroll-wrapper">
        <form onSubmit={ (event) => this.submitForm(event)}>
          <div className="enroll-title">
            Enter your email
          </div>
          <div className="enroll-input">

          </div>
        </form>

      </div>

      </Fade>
    );
  }
}

export default Enroll;
