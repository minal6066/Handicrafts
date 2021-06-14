import React , {Component} from 'react';
import './signup.css'
// import { Formik} from 'formik';
import {message, Row, Col, Button} from 'antd';

class SignUp extends Component {
    render() {
        return (
            <div className="">
                <Row className="contain">
                    <Col span={14} className="image-container">
                        {/* Minal Jain */}
                        <img className="login-image" src="https://images.unsplash.com/photo-1597086853347-088fad661af4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"></img>
                    </Col>
                    <Col span={10} className="login-form">
                        <h1>ARTISANAT</h1>
                        <h3>WELCOME!</h3>
                        <form className="input-fields" onSubmit="">
                            <div>
                                <label htmlFor="name">Name</label><br />
                                <input
                                    type="name"
                                    name="name"
                                    className="input-form-control"
                                    placeholder="Enter your name"
                                    id="name"
                                 />
                               
                            </div>
                            <div className="top-padding">
                                <label htmlFor="email">Email</label><br />
                                <input
                                    type="email"
                                    name="email"
                                    className="input-form-control"
                                    placeholder="Email"
                                    id="email"
                                />
                            </div>
                            <div className="top-padding">
                                <label htmlFor="phone">Phone No</label><br />
                                <input
                                    type="number"
                                    name="phone"
                                    className="input-form-control"
                                    placeholder="Phone Number"
                                    id="phone"
                                />
                            </div>
                            <div className="top-padding">
                                <label htmlFor="password">Password</label><br />
                                <input
                                    type="password"
                                    name="password"
                                    className="input-form-control"
                                    placeholder="Password"
                                    id="password"
                                />
                            </div>
                            <div className="top-padding">
                                <label htmlFor="confirmpassword">Confirm Password</label><br />
                                <input
                                    type="password"
                                    name="confirmpassword"
                                    className="input-form-control"
                                    placeholder="Confirm Password"
                                    id="confirmpassword"
                                />
                            </div>
                            <Button className="login-button top-padding" type="primary" size={'large'}>SIGN UP</Button>
                        </form>
                        <p className="top-padding">Already a Customer? <a href="/login">Login</a></p>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SignUp;