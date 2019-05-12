import React from 'react';
import "../style/SettingsBox.css";
import { Col, Form } from "react-bootstrap";
import { Settings } from "./ComponentContainer";

interface ISettingsBox {
    settings: Settings,
    handleChange: (arg: Settings) => void
}

const SettingsBox: React.FC<ISettingsBox> = ({ settings, handleChange }) => {

    const fixNumber = (target: any) => {
        const num = parseInt(target.value);
        const targetMin = parseInt(target.min);
        const targetMax = parseInt(target.max);

        return num < targetMin ? targetMin : num > targetMax ? targetMax : num;
    }

    const onChange = (type: string, event: any) => {
        const fixedNum = type === "fix" ? fixNumber(event.target) : event.target.value;

        switch (event.target.placeholder) {
            case "Horizontal":
                {
                    const newSettings: Settings = {
                        divideX: fixedNum,
                        divideY: settings.divideY,
                        quality: settings.quality
                    };
                    handleChange(newSettings);
                }
                break;
            case "Vertical":
                {
                    const newSettings: Settings = {
                        divideX: settings.divideX,
                        divideY: fixedNum,
                        quality: settings.quality
                    };
                    handleChange(newSettings);
                }
                break;
            case "Quality":
                {
                    const newSettings: Settings = {
                        divideX: settings.divideX,
                        divideY: settings.divideY,
                        quality: fixedNum
                    };
                    handleChange(newSettings);
                }
                break;
            default:
                break;
        }
    }

    return (
        <Col lg={6} md={6} sm={12}>
            <div style={{
                border: '1px solid white',
                color: 'white', padding: 20
            }}>
                <Form.Group controlId="settings">
                    <Form.Label>Divide By Horizontal [16-128]</Form.Label>
                    <Form.Control type="number" placeholder="Horizontal" onChange={(e: any) => onChange("x", e)}
                        value={settings.divideX.toString()} min="16" max="128" autoComplete="no" onBlur={(e: any) => onChange("fix", e)} />
                    <Form.Text className="text-muted">
                        Number you want the picture to be divided into horizontally.
                    </Form.Text>

                    <br />
                    <Form.Label>Divide By Vertical [16-128]</Form.Label>
                    <Form.Control type="number" placeholder="Vertical" onChange={(e: any) => onChange("y", e)}
                        value={settings.divideY.toString()} min="16" max="128" autoComplete="no" onBlur={(e: any) => onChange("fix", e)} />
                    <Form.Text className="text-muted">
                        Number you want the picture to be divided into vertically.
                    </Form.Text>

                    <br />
                    <Form.Label>Quality [1-4]</Form.Label>
                    <Form.Control type="number" placeholder="Quality" onChange={(e: any) => onChange("q", e)}
                        value={settings.quality.toString()} min="1" max="4" autoComplete="no" onBlur={(e: any) => onChange("fix", e)} />
                    <Form.Text className="text-muted">
                        Resolution multiplier for the tiles in resulting image.
                    </Form.Text>
                </Form.Group>
            </div>
        </Col>
    );
}

export default SettingsBox;