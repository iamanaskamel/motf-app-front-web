import { Box, Button, Image } from "@mantine/core";
import React from "react";
import Webcam from "react-webcam";
import { videoConstraints } from "../constants";

export const WebcamCapture = ({ image, setImage }: any) => {
  const webcamRef: any = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    setImage(imageSrc);
  }, [setImage, webcamRef]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      py={10}
    >
      {image == "" ? (
        <Webcam
          audio={false}
          height={200}
          style={{ borderRadius: 10 }}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={220}
          videoConstraints={videoConstraints}
        />
      ) : (
        <Image src={image} />
      )}
      <Button
        w="30%"
        my={10}
        onClick={(e: any) => {
          e.preventDefault();
          image != "" ? setImage("") : capture();
        }}
        variant="outline"
      >
        {image != "" ? "Retake Image" : "Capture"}
      </Button>
    </Box>
  );
};
