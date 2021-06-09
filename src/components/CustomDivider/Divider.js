import React from 'react';
import { Divider, makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: { 
    height: "auto",
    width: "4px",
  }
}))

const CustomDivider = ({ ...rest }) => {
  const classes = styles();
  return (
    <Divider {...rest}  classes={{root: classes.root}}/>
  )
}

export default CustomDivider
