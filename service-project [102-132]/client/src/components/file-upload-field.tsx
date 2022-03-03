import React, { useRef, useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Alert,
} from '@mui/material';
import Img from 'components/img';
import DeleteIcon from '@mui/icons-material/Delete';

type ImgData = {
  src: string,
  file?: File,
};

export type FileUploadFieldProps = {
  imgDataArr: ImgData[]
  onChange: (imgDataArr: ImgData[]) => void
};

const convertFileToUrl = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  imgDataArr,
  onChange,
}) => {
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImagesChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    const input = e.target as HTMLInputElement;
    const { files } = input;
    const existingNames = imgDataArr
      .filter((x) => x.file)
      .map((imgData) => (imgData.file ? imgData.file.name : 'unnamed'));
    if (files !== null) {
      const fileArr = Array.from(files);
      const existingFiles = fileArr.filter((file) => existingNames.includes(file.name));
      if (existingFiles.length > 0) {
        const existingFilesStr = existingFiles.map((x) => `'${x.name}'`).join(', ');
        setError(`Files already exists: ${existingFilesStr}`);
        return;
      }
      (async () => {
        const imgUrls = await Promise.all(fileArr.map(convertFileToUrl)) as string[];
        const newImgDataArr: ImgData[] = imgUrls.map((src, i) => ({ file: fileArr[i], src }));
        onChange([...imgDataArr, ...newImgDataArr]);
      })();
    }
  };

  const deleteImage = (imgData: ImgData) => {
    onChange(imgDataArr.filter((x) => x.src !== imgData.src));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography>Pasirinkite nuotraukas</Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => fileUploadRef.current?.click()}
          sx={{ my: 1 }}
        >
          Pasirinkite nuotraukas
        </Button>
        <TextField
          type="file"
          fullWidth
          sx={{ display: 'none' }}
          inputProps={{
            multiple: true,
            onChange: handleImagesChange,
            ref: fileUploadRef,
          }}
        />
      </Box>
      {error && (
        <Alert color="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      <Box sx={{
        display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2,
      }}
      >
        {imgDataArr.map((imgData, i) => (
          <Box
            key={imgData.src}
            sx={{
              position: 'relative', width: 200, height: 200, mb: 4,
            }}
          >
            <IconButton
              sx={{
                position: 'absolute', top: 0, right: 0, zIndex: 2,
              }}
              color="error"
              onClick={() => deleteImage(imgData)}
            >
              <DeleteIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <Img
              src={imgData.src}
              alt={String(i)}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
              }}
            />
            <Typography sx={{ position: 'absolute', bottom: -20 }}>
              {imgData.file && imgData.file.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FileUploadField;
