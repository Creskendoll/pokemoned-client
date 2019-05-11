import React from 'react';
import FileDrop from 'react-file-drop';
import "../style/ImageBox.css";
import { Col, Button } from "react-bootstrap";

export default class ImageBox extends React.Component {

    handleDrop (files: FileList | null, event: React.DragEvent<HTMLDivElement>){
        console.log(files, event);
    }

    render () {
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
                    <FileDrop  onDrop={this.handleDrop} >
                        Drop your images here!
                    </FileDrop>
                </div>
            </Col>
        );
    }
}
