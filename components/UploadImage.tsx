import {
  LegacyRef,
  MutableRefObject,
  RefObject,
  useRef,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { Avatar, Button, CircularProgress } from "@mui/material";
import { convertToBase64 } from "@/utils/convertToBase64";
import { data } from "autoprefixer";

type UploadImageProps = {
  index: number;
  className?: string;
  onImageUpload: (key: number, imgURL: string) => void;
};
export default function UploadImage({
  className = "",
  index,
  onImageUpload,
}: UploadImageProps) {
  const [avatar, setAvatar] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUploading(true);
      if (event?.target?.files?.[0]) {
        const file = await convertToBase64(event.target.files[0]);
        setAvatar(file);
        onImageUpload(index, file);
        setIsUploading(false);
      } else {
        throw new Error("Error when upload image");
      }
    } catch (error) {
      setIsUploading(false);
    }
  };

  return (
    <div
      className={` 
      flex flex-col items-center justify-center w-full h-full p-3 border border-separate border-gray-500 border-dashed rounded-lg
      `}
    >
      <div className="flex flex-col w-full h-full ">
        <Button
          variant="text"
          component="label"
          sx={{ height: "100%", width: "100%" }}
        >
          {isUploading ? (
            <CircularProgress />
          ) : avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatar} className="w-full h-full" alt="image" />
          ) : (
            <div className={`flex flex-col ${className}`}>
              <div className="mb-2 text-center">
                <FontAwesomeIcon icon={faImage} size="xl" />
              </div>
              <span className={`text-center normal-case`}>Click to browse</span>
            </div>
          )}
          <input hidden accept="image/*" type="file" onChange={handleUpload} />
        </Button>
      </div>
    </div>
  );
}
