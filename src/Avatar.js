import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import ioanna from './ioanna.jpg';

class Avatar extends Component {
    render() {
        return (
            <div>
              <Row>
                <Col xs={10}></Col>
                <Col xs={2}>
                  {/* <Image src="../public/ioanna.jpg" thumbnail circle /> */}
                  {/*<Image src="./ioanna.jpg" thumbnail circle />*/}
                  <Image src={ioanna} thumbnail circle alt="logo" />
                </Col>
              </Row>
            </div>
        );
    }
}

export default Avatar;
