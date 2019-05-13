import React from 'react';
import "../style/ResultBox.css";
import { Container } from "react-bootstrap";

interface IResultBox {
    images: Array<string>,
    loadingGifs: number
}

const ResultBox: React.FC<IResultBox> = ({ images, loadingGifs }) => {
    const BASE_URL = "https://kenansoylu.com/vm/pokiki?image="
    // const BASE_URL = "http://localhost:5000/pokiki?image="

    const handleImageClick = (url: string) => {
        const win = window.open(url, '_blank');
        if (win) win.focus();
    }

    return (
        <Container style={{
            overflowX: "auto", height: 300,
            border: '1px solid white',
            color: 'white', padding: 20,
            textAlign: "center",
            marginTop: 20,
        }}>
            {images.length > 0 ? (
                <div id="react-file-drop-demo" style={{
                    display: "flex",
                    width: "fit-content"
                }}>
                    {
                        images.map((imageName, index) => (
                            <img key={index} src={BASE_URL + imageName}
                                style={{
                                    height: "-webkit-fill-available", width: "-webkit-fill-available",
                                    marginRight: 25, maxWidth: "25%"
                                }}
                                alt="Result" onClick={(e) => handleImageClick(BASE_URL + imageName)}
                                className="result-image" />
                        ))
                    }
                </div>
            ) : ( loadingGifs > 0 ? (
                <div style={{ display: "flex",width: "fit-content"}}>
                    {
                        [...Array(loadingGifs).keys()].map((index : number) => (
                            <img key={index} src={require("../resources/loading.gif")} 
                            alt="loading" style={{height: "-webkit-fill-available", 
                            width: "-webkit-fill-available", marginRight: 25, maxWidth: "25%"}}/>
                        ))
                    }
                </div>
            ):(
                <span>Results</span>
            ))}
        </Container>
    );
}

export default ResultBox;