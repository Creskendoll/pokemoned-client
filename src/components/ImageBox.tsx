import React, { useState, useEffect } from 'react';
import FileDrop from 'react-file-drop';
import "../style/ImageBox.css";
import { Col, Button } from "react-bootstrap";
import Ajax from "../service/Ajax";
import UploadImage from './UploadImage';

const ImageBox : React.FC = () => {
    const initialVal = [{
        name : "",
        size : 0,
        type : ""
    }];

    const [images, setImages] = useState(initialVal);

    const handleDrop = (files: FileList | null, event: React.DragEvent<HTMLDivElement>) => {
        if (files) {
            const images = Array(files.length).map(index => {
                const file = files.item(index);
                if (file) {
                    return {
                        name : file.name,
                        size : file.size,
                        type : file.type
                    }
                }
            });
            useEffect(() => {
                setImages(images);
            }, []);
        }
        
        console.log(files, event);
    }

    return (
        <Col lg={6} md={6} sm={12}>
            <div id="react-file-drop-demo" style={{
                border: '1px solid white',
                color: 'white', padding: 20,
                textAlign: "center",
                height : "100%"
            }}>
                <Button variant="primary" style={{
                    marginBottom : 15
                }}>
                    Upload File
                    <input type="file"/>
                </Button>
                <FileDrop  onDrop={handleDrop} >
                    Drop your images here!
                </FileDrop>
                {images.map((img, index) => (
                    <UploadImage imgSrc="asd" fileName="asd" />
                ))}
            </div>
        </Col>
    );
}

export default ImageBox;