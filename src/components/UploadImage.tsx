import React from 'react';
import "../style/ResultBox.css";
import { Col } from "react-bootstrap";

interface IUploadImageProps {
    imgSrc : string,
    fileName : string
}

const UploadImage: React.FC<IUploadImageProps> = ({imgSrc, fileName}) => {

    return (
        <div style={{
            border: '1px solid blue',
            color: 'blue', padding: 10,
            textAlign: "left",
            height : 100,
            marginTop : 10
        }}>
            <img src={imgSrc} height="100" width="100" />
            {fileName}
        </div>
    );
}

export default UploadImage;