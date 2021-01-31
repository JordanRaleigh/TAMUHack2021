import React, { useState } from "react";
import Client from "../Client";
import FoodItemcontainer from "./FoodItemContainer";
import Nav from "./Nav";
import Search from "./Search";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const [capturedImg, setcapturedImg] = useState("");

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setcapturedImg((x) => imageSrc);
    window.location.href = "#preview";
    scanImage();
  }, [webcamRef]);

  const scanImage = async () => {
    console.log(JSON.stringify({ url: capturedImg }));
    let res = await fetch(
      "https://microsoft-computer-vision3.p.rapidapi.com/ocr?detectOrientation=true&language=unk",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-rapidapi-key":
            "e07abf578dmsh34185d37dad6552p1ef03bjsne402e2e7e080",
          "x-rapidapi-host": "microsoft-computer-vision3.p.rapidapi.com",
        },
        body: JSON.stringify({
          url: capturedImg,
        }),
      }
    );

    console.log(await res.json());
  };

  return (
    <div className="container align-items-center justify-content-center d-flex flex-column my-4 py-4">
      <h4>AI Menu Scanner</h4>
      <div className="lead">
        Scan an image of a menu and extract items with AI
      </div>
      <Webcam
        audio={false}
        ref={webcamRef}
        width="80%"
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button className="btn btn-primary my-4 " onClick={capture}>
        Capture photo
      </button>
      <h4 id="preview"> Upload Menu </h4>
      <div className="row justify-content-center text-center">
        <div className="col-md-5">
          <img src={capturedImg} className=" img-fluid" alt="" />
        </div>
        <div className="col-md-5 text-center">
          <h4>Menu</h4>
        </div>
      </div>
    </div>
  );
};

export default WebcamCapture;
