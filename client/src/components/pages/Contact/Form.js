import React, { Component } from 'react'
import Radium from 'radium'
import axios from 'axios'

const error = {
    color: 'red',
    fontSize: '.8rem'
}

const inputFields = {
    width: '17.5rem',
    padding: '.7rem 1rem',
    border: '1px solid #ccc',
    marginTop: '.8rem',
    outline: 'none',
    ':focus': {
        border: '1px solid #555'
    }
}

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}


class Form extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        formSubmited: false,
        errors: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        invalidFormMessage: ''
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        let errors = this.state.errors
  
        switch (name) {
          case 'name':
            errors.name = value.length < 1
              ? 'Please enter your name'
              : ''
            break
          case 'email':
            errors.email = validEmailRegex.test(value)
              ? ''
              : 'Please enter a valid email'
            break
          case 'subject':
            errors.subject = value.length < 2
              ? 'Please enter a subject'
              : ''
            break
            case 'message':
              errors.message = value.length < 50
                ? 'Message must be at least 50 caharacters'
                : ''
              break
            default:
              break;
        }
  
        this.setState({errors, [name]: value}, () => {
          console.log(errors)
        })
      }

    handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm(this.state.errors) && this.state.email != '' && this.state.message != '' && this.state.subject != '' && this.state.name != '') {
          const { name, email, subject, message } = this.state
  
          const details = {
            name,
            email,
            subject,
            message
          }
  
          axios.post('/email', details)
  
          this.setState({
            formSubmited: true,
            invalidFormMessage: ''
          })
  
        } else {
          this.setState({
            invalidFormMessage: 'Please fill in the form correctly!'
          })
        }
      }

    render() {
        const { errors } = this.state

        return (
            <React.Fragment>
                {
                this.state.formSubmited ? 
                <p
                    style ={{
                        marginTop: '2rem',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#333'
                    }}
                >Thank you for contacting me! I will be in touch with you shortly!</p>
                :
                <div
                    style = {{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                }}
                >   
                    <p
                        style = {{
                            width: '50%',
                            marginTop: '3rem',
                            fontSize: '.9rem',
                            fontWeight: 'bold',
                            color: '#333',
                            '@media (max-width: 600px)': {
                                width: '75%'
                            }
                        }}
                    >
                    For all pricing and booking inquiries, please email me at the email provided below. Please include as much relevant information as possible, for example, the location of the project, amount of images needed, intended usage of the images, and timeframe for project completion, etc.
                    </p>
                    <form
                        style = {{
                            textAlign: 'left',
                            margin: '2rem'
                        }}
                        onSubmit = {this.handleSubmit}
                    >
                        <p 
                            style = {{
                                color: 'red',
                                fontSize: '1.2rem',
                                marginBottom: '-1rem'
                            }}
                        >{this.state.invalidFormMessage}</p>
                        <br/>
                        <input 
                            type = 'text' 
                            name = 'name' 
                            placeholder = 'Your Name'
                            style = {inputFields}
                            key = '1'
                            onChange={this.handleInputChange}
                        ></input>
                        <br/>
                        <label style = {error}>{errors.name != '' ? errors.name : null}</label>
                        <br/>
                        <input 
                            type = 'text' 
                            name = 'email' 
                            placeholder = 'Your Email'
                            style = {inputFields}
                            key = '2'
                            onChange={this.handleInputChange}
                        ></input>
                        <br/>
                        <label style = {error}>{errors.email != '' ? errors.email : null}</label>
                        <br/>
                        <input 
                            type = 'text' 
                            name = 'subject' 
                            placeholder = 'Email subject'
                            style = {inputFields}
                            key = '3'
                            onChange={this.handleInputChange}
                        ></input>
                        <br/>
                        <label style = {error}>{errors.subject != '' ? errors.subject : null}</label>
                        <br/>
                        <textarea 
                            name = 'message' 
                            placeholder = 'Your message'
                            style = {{
                                width: '17.5rem',
                                height: '5rem',
                                padding: '.7rem 1rem',
                                marginTop: '.5rem',
                                marginBottom: '-.3rem'
                            }}
                            onChange={this.handleInputChange}
                        ></textarea>
                        <br/>
                        <label style = {error}>{errors.message != '' ? errors.message : null}</label>
                        <br/>
                        <button 
                            type = 'submit'
                            style = {{
                                padding: '.75rem 1.75rem',
                                color: 'white',
                                backgroundColor: '#333',
                                border: 'none',
                                fontSize: '.9rem',
                                marginTop: '.5rem'
                            }}
                        >SUBMIT</button>
                    </form>
                </div>
                }
            </React.Fragment>
        )
    }
}

export default Radium(Form)