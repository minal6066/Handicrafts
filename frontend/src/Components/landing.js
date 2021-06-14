import React, {Component} from 'react';
import {Row, Col, Button, Card} from 'antd';
import {ShoppingCartOutlined,UndoOutlined, CalendarOutlined, WechatOutlined, } from '@ant-design/icons'
import './landing.css';
const {Meta} = Card;

class Landing extends Component {
    render(){
        return(
            <div>
                <Row className="landing-top">
                            {/* <Col span={14}></Col> */}
                            <Col  span={12} className="background-text">
                                <h1 className="top-h1">Reasons To Present Handmade Gifts</h1>
                                <p className="top-quote"><span className="quotes">“</span>That's the thing with handmade items. They still have the person's mark on them, and when you hold them, you feel less alone.<span className="quotes">”</span></p>
                                <Button ghost size={'large'} className="show-now-btn">Shop Now</Button>
                            </Col>
                </Row>
                <div className="icon-container">
                    <Row className="icons"> 
                        <Col span={3}></Col>
                        <Col span={3}>
                            <span className="dot"><ShoppingCartOutlined /></span>
                        </Col>
                        <Col span={3}>
                            <span className="dot"><UndoOutlined /></span>
                        </Col>
                        <Col span={3}>
                            <span className="dot"><CalendarOutlined /></span>
                        </Col>
                        <Col span={3}>
                            <span className="dot"><WechatOutlined /></span>
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                    <Row className="icons-text"> 
                        <Col span={3}></Col>
                        <Col span={3}>
                            <h4>Free Shipping</h4>
                        </Col>
                        <Col span={3}>
                            <h4>Free Return</h4>
                        </Col>
                        <Col span={3}>
                            <h4>Daily Updates</h4>                
                        </Col>
                        <Col span={3}>
                            <h4>Support 24/7</h4>
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                </div>
                <div className="handicraftPara">
                    <h1 className="handicraft-heading">HANDICRAFTS IN INDIA</h1>
                    <p className="handicraft-para">India's rich cultural heritage and centuries of evolutionary tradition is manifested by the huge variety of handicrafts made all over the country. Handicrafts are a mirror of the cultural identity of the ethnic people who make it. Through the ages, handicrafts made in India like the Kashmiri woollen carpets, Zari embroidered fabrics, terracotta and ceramic products, silk fabrics etc. have maintained their exclusiveness. In the ancient times, these handicrafts were exported to far off countries of Europe, Africa, West Asia and Far East via the 'silk route'. The entire wealth of timeless Indian handicrafts has survived through the ages. These crafts carry the magnetic appeal of the Indian culture that promises exclusivity, beauty, dignity and style.</p>
                </div>
                <div className="image-cards">
                    <Row gutter={32}>
                        <Col span={6}>
                            <Card
                                hoverable
                                style={{height : '400px'}}
                                cover={<img className="card-image" alt="example" src="https://images.unsplash.com/photo-1541753866388-0b3c701627d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />}
                            >
                                <Meta title="Painting" description="Color is a power which directly influences soul." />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                hoverable
                                style={{height : '400px'}}
                                cover={<img className="card-image" alt="example" src="https://5.imimg.com/data5/VT/DM/IG/SELLER-89037557/marble-peacock-statue-500x500.jpg" />}
                            >
                                <Meta title="Marble Craft" description="I choose a block of marble and chof off whatever I don't need." />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                hoverable
                                style={{height : '400px'}}
                                cover={<img className="card-image" alt="example" src="https://5.imimg.com/data5/PA/IX/QH/ANDROID-80085731/product-jpeg-500x500.jpg" />}
                            >
                                <Meta title="Metal Craft" description="Heavy metal is immortal." />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                hoverable
                                style={{height : '400px'}}
                                cover={<img className="card-image" alt="example" src="https://i.pinimg.com/originals/bf/00/4a/bf004a56916ec0d13ce0e4e302b2a159.jpg" />}
                            >
                                <Meta title="Wooden Craft" description="There is joy in the woods just now." />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Landing;