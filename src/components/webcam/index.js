import React from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 300,
    height: 320,
    facingMode: "user"
};

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    return (
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
        />
    );
};

export default WebcamComponent;