import React from 'react';
import FileDrop from 'react-file-drop';
import "../style/UploadBox.css";
import { Col, Container } from "react-bootstrap";
import UploadImage from './UploadImage';
import { MyFile } from "./ComponentContainer";

interface IUploadBox {
    images: MyFile[],
    updateImages: (newImages: Array<MyFile>) => void
}

const UploadBox: React.FC<IUploadBox> = ({ images, updateImages }) => {

    const handleDrop = (files: FileList | null, event: React.DragEvent<HTMLDivElement>) => {
        if (files) {
            var droppedImages = Array<MyFile>();

            [...Array(files.length).keys()].forEach((index: number) => {
                const reader = new FileReader();
                const file = files.item(index);

                if (file)
                    reader.readAsDataURL(file);

                reader.onloadend = () => {

                    const myFile: MyFile = {
                        name: file ? file.name : "",
                        size: file ? file.size : 0,
                        type: file ? file.type : "",
                        src: reader.result ? reader.result : ""
                    };

                    droppedImages.push(myFile);

                    if (index === files.length - 1)
                        updateImages(droppedImages);
                }
            });
        }
    }

    const handleImageDelete = (e: any, index: number) => {
        updateImages(images.filter((_, i) => i !== index));
    }

    return (
        <Col lg={6} md={6} sm={12}>
            <div id="react-file-drop-demo" style={{
                border: '1px solid white',
                color: 'white', padding: 10,
                textAlign: "center",
                height: "100%"
            }}>
                {/* <Button variant="primary" style={{
                    marginBottom: 15
                }}>
                    Upload Files
                    <input type="file" />
                </Button> */}

                <div style={{ height: "100%" }}>
                    <FileDrop onDrop={handleDrop} >
                        <Container style={{
                            width: "100%",
                            height : "100%",
                            overflowY: "auto"
                        }}>
                            {images.map((img, index) => {
                                const enc = new TextDecoder("utf-8");

                                const imgSrc = img.src ? img.src : "";
                                const imgSrcStr = typeof imgSrc === typeof ArrayBuffer ? enc.decode(imgSrc as ArrayBuffer) : imgSrc as string;

                                return (<UploadImage key={index} onDelete={(e: any) => handleImageDelete(e, index)} imgSrc={imgSrcStr} fileName={img.name} />);
                            })}
                        {images.length === 0 && 
                            <div style={{height:"100%"}}>
                                <span style={{top:"50%", position: "relative"}}>
                                    Drop your images here!
                                </span>
                            </div>
                        }
                        </Container>
                    </FileDrop>
                </div>

            </div>
        </Col>
    );
}

export default UploadBox;