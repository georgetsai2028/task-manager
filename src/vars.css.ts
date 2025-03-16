import {createGlobalTheme, createTheme, createThemeContract} from "@vanilla-extract/css";

export const root = createGlobalTheme("#root", {


})

const colors = createThemeContract({
        primary: null,
        secondary: null
});

export const light = createTheme(colors, {
    primary: "yellow",
    secondary: "orange"
});

export const dark = createTheme(colors, {
    primary: "grey",
    secondary: "brown"
});

export const vars = {...root, colors}