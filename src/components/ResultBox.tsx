import React from 'react';
import "../style/ResultBox.css";
import { Col } from "react-bootstrap";

const ResultBox: React.FC = () => {

    return (
        <Col>
            <div id="react-file-drop-demo" style={{
                border: '1px solid white',
                color: 'white', padding: 20,
                textAlign: "center",
                height : "100%",
                marginTop : 20
            }}>
                Result
            </div>
        </Col>
    );
}

export default ResultBox;