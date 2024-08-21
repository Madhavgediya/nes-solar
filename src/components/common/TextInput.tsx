import React from "react";
import { useFormContext } from "react-hook-form";
import {
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

export const TextInput = ({
  label,
  muiProps,
  InputProps,
  fullWidth,
  required,
  type,
  iName,
  classes,
  disable,
  maxLength,
  rows,
  multiline,
  size,
  width,
  defaultValue,
  pattern,
  errorMessage,
  inputMode,
  patternInput,
}: any) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const textField = register(iName, { required, pattern });
  return (
    <>
      <Grid container>
        <Grid item sx={{ alignItems: "center" }}>
          <TextField
            className={classes?.root}
            disabled={disable}
            fullWidth
            {...textField}
            {...muiProps}
            variant="outlined"
            name={iName}
            type={type}
            size={size || "small"}
            defaultValue={defaultValue}
            autoComplete="off"
            color={iName in errors ? "error" : null}
            inputProps={{ maxLength, inputMode, pattern: patternInput }}
            multiline={multiline}
            rows={rows}
            sx={{ width: { width } }}
          />
          <Typography variant="inherit" color="red">
            {iName in errors &&
              (errorMessage ? errorMessage : `Please Enter  ${label} `)}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
