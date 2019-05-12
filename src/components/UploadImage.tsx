import React from 'react';
import "../style/ResultBox.css";
import { Row, Button, Col } from 'react-bootstrap';

interface IUploadImageProps {
    imgSrc: string,
    fileName: string,
    onDelete: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
}

const UploadImage: React.FC<IUploadImageProps> = ({ imgSrc, fileName, onDelete }) => {

    return (
        <Row style={{
            border: '1px solid white',
            color: 'white',
            textAlign: "left",
            marginTop: 10,
            marginRight: 0,
            marginLeft: 0,
            borderRadius: 3
        }}>
            <Col md={5} lg={5}>
                <img src={imgSrc} height="100%" width="100%" alt="Uploaded" />
            </Col>
            <Col md={4} lg={4} style={{ marginTop: "auto", marginBottom: "auto" }}>
                <div style={{ display: "block" }}>
                    {fileName}
                </div>
            </Col>
            <Col md={3} lg={3} style={{ overflow: "hidden", display: "flex" }}>
                <Button variant="danger" onClick={onDelete}>
                    Delete
                </Button>
            </Col>
        </Row>
    );
}

export default UploadImage;