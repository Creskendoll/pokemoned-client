import React, { useState } from 'react';
import "../style/Container.css";
import { Jumbotron, Row, Button, Col } from 'react-bootstrap';
import ResultBox from "./ResultBox";
import ImageBox from "./ImageBox";
import SettingsBox from "./SettingsBox";
import {b64toBlob} from "../helpers/Helpers";

export type MyFile = {
    name: string,
    type: string,
    size: number,
    src: string | ArrayBuffer
}

export type Settings = {
    divideX: number,
    divideY: number,
    quality: number
}

const ComponentContainer: React.FC = () => {

    const initSettings: Settings = {
        divideX: 32,
        divideY: 32,
        quality: 2
    };
    const [settings, setSettings] = useState(initSettings);

    const [images, setImages] = useState(Array<MyFile>());

    const updateUploadImages = (newImages: Array<MyFile>) => {
        setImages(newImages);
    }

    const handleConvert = () => {
        const URL = "http://localhost:5000/pokemoned/post-image";
        const service = new XMLHttpRequest();
        var formData = new FormData();

        service.open("post", URL, true);
        images.forEach(image => {
            const decoded = (image.src as string).split(",")[1];

            formData.append("image", b64toBlob(decoded, image.type), image.name);
        });

        service.send(formData);
    }

    const handleChangeSettings = (newSettings: Settings) => {
        setSettings(newSettings);
    }

    return (
        <Jumbotron className="component-container">
            <Row>
                <ImageBox updateImages={updateUploadImages} images={images} />
                <SettingsBox settings={settings} handleChange={handleChangeSettings} />
            </Row>
            <Row>
                <Col lg={12} md={12}>
                    <Button variant="success" onClick={handleConvert} style={{
                        flex: 1,
                        width: "100%",
                        height: 50,
                        marginTop: 15

                    }}>
                        Convert!
                    </Button>
                </Col>
            </Row>
            <Row>
                <ResultBox />
            </Row>
        </Jumbotron>
    );
}

export default ComponentContainer;