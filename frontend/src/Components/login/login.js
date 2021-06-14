import React , {Component} from 'react';
import './login.css'
// import { Formik} from 'formik';
import {message, Row, Col, Button} from 'antd';

class Login extends Component {
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
                        <h3>We are happy to see you again!</h3>
                        <form className="input-fields" onSubmit="">
                            <div>
                                <label htmlFor="email">Email or Username </label><br />
                                <input
                                    type="email"
                                    name="email"
                                    className="input-form-control"
                                    placeholder="Enter an Email"
                                    id="email"
                                 />
                               
                            </div>
                            <div className="top-padding">
                                <label htmlFor="password">Password: </label><br />
                                <input
                                    type="password"
                                    name="password"
                                    className="input-form-control"
                                    placeholder="Password"
                                    id="password"
                                />
                            </div>
                            <p className="top-padding">Forgot Password?</p>
                            <Button className="login-button" type="primary" size={'large'}>LOGIN</Button>
                        </form>
                        <p className="top-padding">New Customer? <a href="/signup">Create Account</a></p>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Login;