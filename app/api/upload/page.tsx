"use client";
import Button from "@/app/components/Button";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  const handleUpload = (result: any) => {
    if (result.event === "success" || result.event === "upload-complete") {
      const info = result.info as CloudinaryResult;
      if (info && info.public_id) {
        setPublicId(info.public_id);
      }
    }
  };

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="uploaded image"
          crop="fill" // Ensure the image is correctly cropped
        />
      )}
      <CldUploadWidget
        uploadPreset="fw61pips"
        onUpload={(result) => handleUpload(result)}
      >
        {({ open }) => {
          return (
            <Button
              type="button"
              title="Upload an Image"
              icon="/user.svg"
              varient="btn_dark_green"
              actionFunc={() => open()}
            />
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
