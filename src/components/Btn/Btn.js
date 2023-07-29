import * as React from 'react';
import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from '@mui/material/styles';
import Button from '@mui/material/Button';



export default function Btn({ label, onClick, bgColor = "#5065f6", color = 'white', style }) {

    const violetMain = alpha(bgColor, 1);

    const theme = createTheme({
        palette: {
            btnColor: {
                main: violetMain,
                light: alpha(bgColor, 0.5),
                dark: alpha(bgColor, 0.8),
                contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Button onClick={onClick} variant="contained" color="btnColor" sx={{ textTransform: 'none', ...style }}>
                <font color={color} >{label}</font>
            </Button>
        </ThemeProvider>
    );
}