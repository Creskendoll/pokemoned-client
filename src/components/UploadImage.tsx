import React from "react";
import "../style/ResultBox.css";
import { Row, Button, Col } from "react-bootstrap";

interface IUploadImageProps {
  imgSrc: string;
  fileName: string;
  onDelete:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const UploadImage: React.FC<IUploadImageProps> = ({
  imgSrc,
  fileName,
  onDelete,
}) => {
  return (
    <Row
      style={{
        border: "1px solid white",
        color: "white",
        textAlign: "left",
        marginTop: 10,
        marginRight: 0,
        marginLeft: 0,
        borderRadius: 3,
        height: "30%",
        backgroundColor: "darkslategray",
      }}
    >
      <Col md={5} lg={5} style={{ maxHeight: "100%" }}>
        <img
          src={imgSrc}
          alt="Uploaded"
          style={{ padding: "10px", maxHeight: "100%" }}
        />
      </Col>
      <Col
        md={4}
        lg={4}
        style={{
          wordBreak: "break-word",
          maxHeight: "100%",
          overflowY: "auto",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <span>{fileName}</span>
      </Col>
      <Col
        md={3}
        lg={3}
        style={{ overflow: "hidden", display: "flex", maxHeight: "100%" }}
      >
        <Button
          variant="danger"
          onClick={onDelete}
          style={{
            width: "100%",
            marginTop: "auto",
            marginBottom: "auto",
            height: "80%",
          }}
        >
          Delete
        </Button>
      </Col>
    </Row>
  );
};

export default UploadImage;
