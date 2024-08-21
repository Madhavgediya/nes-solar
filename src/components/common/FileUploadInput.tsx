import React from "react";
import { useFormContext } from "react-hook-form";
import {
  Chip,
  FormLabel,
  Grid,
  InputLabel,
  Typography,
  Button,
} from "@mui/material";

export default function FileUploadInput({
  label,
  required,
  name,
  classes,
  handleFileUpload,
  documentSizeError,
  selectFile,
}: any) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Grid container sx={{ margin: "4px" }}>
        {selectFile && (
          <Chip
            label={selectFile?.file?.name || selectFile?.name}
            sx={{
              color: "black",
              marginY: 0.5,
              marginRight: 1,
              "& .MuiChip-deleteIcon": {
                color: "lightGrey",
                ml: 0.2,
              },
            }}
            className="font-custom"
          />
        )}
        <Grid item xs={12} sx={{ alignItems: "center" }}>
          <Grid item xs={12} sm={12} md={12}>
            <input
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
              {...register("file", {
                required,
              })}
              accept="image/png,image/jpg, image/jpeg,.doc, .docx,.pdf"
              onChange={handleFileUpload}
            />
            <FormLabel htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className="font-custom"
              >
                Upload
              </Button>
            </FormLabel>
          </Grid>
          {documentSizeError && (
            <Typography variant="inherit" color="error" className="font-custom">
              Selected image is too large. Please select an image under 10 MB
            </Typography>
          )}

          {selectFile?.file?.length === undefined && (
            <Typography variant="inherit" color="error">
              {name in errors && `Please upload ${label} `}
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
}
