import React, { useState } from 'react';
import "../style/Container.css";
import { Jumbotron, Row, Button, Col } from 'react-bootstrap';
import ResultBox from "./ResultBox";
import UploadBox from "./UploadBox";
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
    // const debugResults = [
    // "a.jpg",
    // "canada.png",
    // "courses.png",
    // "git.png",
    // "id.png",
    // "Screenshot_from_2019-05-06_23-36-12.png",]

    const [settings, setSettings] = useState(initSettings);
    const [images, setImages] = useState(Array<MyFile>());
    const [loadingCount, setLoadingCount] = useState(0);
    const [resultImages, setResults] = useState(Array<string>());
    // const [resultImages, setResults] = useState(debugResults);

    const updateUploadImages = (newImages: Array<MyFile>) => {
        setImages(newImages);
    }

    const handleConvert = () => {
        const URL = "https://kenansoylu.com/vm/pokemoned/post-image";
        // const URL = "http://localhost:5000/pokemoned/post-image";
        setLoadingCount(images.length);

        const service = new XMLHttpRequest();
        var formData = new FormData();

        images.forEach(image => {
            const decoded = (image.src as string).split(",")[1];
            const convertOptions = {
                "X" : settings.divideX.toString(),
                "Y" : settings.divideY.toString(),
                "Q" : settings.quality.toString(),
                "GetExisting" : "False"
            };
            formData.append("options", JSON.stringify(convertOptions));
            formData.append("image", b64toBlob(decoded, image.type), image.name);
        });
        
        service.addEventListener("load", function() {
            setLoadingCount(0);
            const responseObj = JSON.parse(this.responseText);
            const newResults = Array<string>().concat(resultImages, responseObj["images"] || []);
            setResults(newResults);
        });
        service.addEventListener("error", function() {
            alert("Error Sending Files!");
            console.log(this.responseText);
        });
        service.open("post", URL, true);
        service.send(formData);
    }

    const handleChangeSettings = (newSettings: Settings) => {
        setSettings(newSettings);
    }

    return (
        <Jumbotron className="component-container">
            <Row>
                <UploadBox updateImages={updateUploadImages} images={images} />
                <SettingsBox settings={settings} handleChange={handleChangeSettings} />
            </Row>
            <Row>
                <Col lg={12} md={12}>
                    <Button variant="success" onClick={handleConvert} style={{
                        flex: 1,
                        width: "50%",
                        marginRight: "auto",
                        marginLeft: "auto",
                        height: 60,
                        marginTop: 15,
                        display: "block"
                    }} disabled={images.length === 0}>
                        Convert!
                    </Button>
                </Col>
            </Row>
            <Row>
                <ResultBox images={resultImages} loadingGifs={loadingCount}/>
            </Row>
        </Jumbotron>
    );
}

export default ComponentContainer;