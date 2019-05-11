import React from 'react';
import "../style/SettingsBox.css";
import { Col, Form } from "react-bootstrap";

const SettingsBox: React.FC = () => {

    // const handleChange = () => {
    //     console.log("a");
    // }

    return (
        <Col lg={6} md={6} sm={12}>
            <div style={{
                border: '1px solid white',
                color: 'white', padding: 20
            }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Divide By Horizontal</Form.Label>
                    <Form.Control type="number" placeholder="Horizontal" defaultValue="32" min="16" max="128" autoComplete="no" />
                    <Form.Text className="text-muted">
                        Number you want the picture to be divided into horizontally.
                    </Form.Text>

                    <br />
                    <Form.Label>Divide By Vertical</Form.Label>
                    <Form.Control type="number" placeholder="Vertical" defaultValue="32" min="16" max="128" autoComplete="no" />
                    <Form.Text className="text-muted">
                        Number you want the picture to be divided into vertically.
                    </Form.Text>

                    <br />
                    <Form.Label>Quality</Form.Label>
                    <Form.Control type="number" placeholder="Quality" defaultValue="2" min="1" max="4" autoComplete="no" />
                    <Form.Text className="text-muted">
                        Resolution multiplier for the tiles in resulting image.
                    </Form.Text>
                </Form.Group>
            </div>
        </Col>
    );
}

export default SettingsBox;