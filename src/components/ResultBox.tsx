import React from "react";
import "../style/ResultBox.css";
import { Col } from "react-bootstrap";

interface IResultBox {
  images: Array<string>;
  loadingGifs: number;
}

const ResultBox: React.FC<IResultBox> = ({ images, loadingGifs }) => {
  const BASE_URL = "/pokemoned?image=";

  const handleImageClick = (url: string) => {
    const win = window.open(url, "_blank");
    if (win) win.focus();
  };

  return (
    <Col
      lg={10}
      md={10}
      sm={10}
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        height: "30vh",
        border: "1px solid white",
        padding: 20,
        textAlign: "center",
        marginTop: 20,
      }}
    >
      <div
        id="react-file-drop-demo"
        style={{
          display: "flex",
          width: "fit-content",
        }}
      >
        {images.map((imageName, index) => (
          <img
            key={index}
            src={BASE_URL + imageName}
            style={{
              height: "-webkit-fill-available",
              width: "-webkit-fill-available",
              marginRight: 25,
              maxWidth: "25%",
            }}
            alt="Result"
            onClick={(e) => handleImageClick(BASE_URL + imageName)}
            className="result-image"
          />
        ))}
        <div style={{ display: "flex", width: "fit-content" }}>
          {[...Array(loadingGifs).keys()].map((index: number) => (
            <img
              key={index}
              src={require("../resources/loading.gif")}
              alt="loading"
              style={{
                height: "-webkit-fill-available",
                width: "-webkit-fill-available",
                marginRight: 25,
              }}
            />
          ))}
        </div>
      </div>
    </Col>
  );
};

export default ResultBox;
