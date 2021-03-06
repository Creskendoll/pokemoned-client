import React from "react";
import FileDrop from "react-file-drop";
import "../style/UploadBox.css";
import { Col, Container } from "react-bootstrap";
import UploadImage from "./UploadImage";
import { MyFile } from "./ComponentContainer";

interface IUploadBox {
  images: MyFile[];
  updateImages: (newImages: Array<MyFile>) => void;
}

const UploadBox: React.FC<IUploadBox> = ({ images, updateImages }) => {
  const filePickerRef = React.createRef() as React.RefObject<HTMLInputElement>;

  const handleDrop = (files: FileList | null) => {
    var allowedTypes = /(image\/)[a-zA-Z]*/;
    if (files) {
      var droppedImages = Array<MyFile>();
      const filteredFiles = [...Array(files.length).keys()].reduce(
        (res: Array<File>, index: number) => {
          const file = files.item(index);
          const fileType = file ? file.type : "";
          if (allowedTypes.test(fileType) && file && file.size < 5000000)
            res.push(file);
          return res;
        },
        Array<File>()
      );

      filteredFiles.forEach((file: File, count: number) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          const myFile: MyFile = {
            name: file.name,
            size: file.size,
            type: file.type,
            src: reader.result ? reader.result : "",
          };

          droppedImages.push(myFile);

          if (count === filteredFiles.length - 1) updateImages(droppedImages);
        };
      });
    }
  };

  const openFilePicker = () => {
    if (filePickerRef.current && images.length === 0)
      filePickerRef.current.click();
  };

  const handleImageDelete = (e: any, index: number) => {
    updateImages(images.filter((_, i) => i !== index));
  };

  return (
    <Col
      lg={6}
      md={6}
      sm={12}
      style={{
        height: "45vh",
        padding: 10,
      }}
    >
      <input
        type="file"
        ref={filePickerRef}
        multiple
        style={{ display: "none" }}
        onChange={(event) => handleDrop(event.target.files)}
        accept="image/*"
      />

      <div
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={openFilePicker}
      >
        <FileDrop onDrop={(files, event) => handleDrop(files)}>
          <Container
            style={{
              overflowY: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {images.map((img, index) => {
              const enc = new TextDecoder("utf-8");

              const imgSrc = img.src ? img.src : "";
              const imgSrcStr =
                typeof imgSrc === typeof ArrayBuffer
                  ? enc.decode(imgSrc as ArrayBuffer)
                  : (imgSrc as string);

              return (
                <UploadImage
                  key={index}
                  onDelete={(e: any) => handleImageDelete(e, index)}
                  imgSrc={imgSrcStr}
                  fileName={img.name}
                />
              );
            })}
            {images.length === 0 && (
              <div>
                <img
                  src={require("../resources/add_img.png")}
                  alt="Add"
                  style={{
                    height: "150px",
                    width: "150px",
                    filter: "invert(75%)",
                  }}
                />
                <br />
                <span style={{ fontSize: "small" }}>
                  (Allowed Maximum Single File Size Is 5MB)
                </span>
              </div>
            )}
          </Container>
        </FileDrop>
      </div>
    </Col>
  );
};

export default UploadBox;
