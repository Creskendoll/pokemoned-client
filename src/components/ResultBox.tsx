import React from 'react';
import "../style/ResultBox.css";
import { Container } from "react-bootstrap";

interface IResultBox {
    images : Array<string>
}

const ResultBox: React.FC<IResultBox> = ({images}) => {
    const BASE_URL = "http://35.204.79.178:5000/pokiki?image="

    const handleImageClick = (url : string) => {
        const win = window.open(url, '_blank');
        if (win)
            win.focus();
    }

    return (
        <Container style={{overflowX : "scroll", height : 200,
                        border: '1px solid white',
                        color: 'white', padding: 20,
                        textAlign: "center",
                        marginTop : 20,}}>
            {images.length > 0 &&
                <div id="react-file-drop-demo" style={{        
                    display : "flex",
                    width : "fit-content"
                }}>
                    {
                        images.map((imageName, index) => (
                            <img key={index} src={BASE_URL + imageName} 
                            style={{height : "-webkit-fill-available", width : "-webkit-fill-available",
                                    marginRight : 25, maxWidth : "25%"}}
                            alt="Result" onClick={(e) => handleImageClick(BASE_URL + imageName)}
                            className="result-image"/>
                        ))
                    }
                </div>
            }
        </Container>
    );
}

export default ResultBox;