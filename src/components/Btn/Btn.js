import * as React from 'react';
import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from '@mui/material/styles';
import Button from '@mui/material/Button';



export default function Btn({ label, onClick, bgColor = "#5065f6", color = 'white', style, fullWidth, variant }) {

    const violetMain = alpha(bgColor, 1);

    const theme = createTheme({
        palette: {
            btnTheme: {
                main: violetMain,
                light: alpha(bgColor, 0.5),
                dark: alpha(bgColor, 0.8),
                contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Button
                onClick={onClick}
                variant={variant ?? "contained"}
                color="btnTheme"
                sx={{
                    textTransform: 'none',
                    width: fullWidth ? '100%' : 'auto',
                    ...style
                }}
            >
                <font color={color} >{label}</font>
            </Button>
        </ThemeProvider>
    );
}