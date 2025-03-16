import { style } from "@vanilla-extract/css";

import { vars } from "./vars.css";

export const flexCenter = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: vars.colors.primary
});

export const inputStyle = style({
    display: "flex",
    position: "relative",
    alignItems: "center",
    width: "100%",
    borderRadius: "50px",
    padding: "20px 30px",
    fontSize: "25px",
    border: "none",
    transition: "0.2s",
    boxShadow: "inset 0 0 5px black",
})

export const inputSubmit = style({
    position: "absolute",
    width: "50px",
    height: "50px", 
    margin: "12px",
    borderRadius: "50px",
    right: "0px",
    border: "none",
    fontSize: "15px",
    backgroundColor: "lightblue",
    color: "white",
    transition: "0.2s all",
    boxShadow: "0 0 10px black",
})
