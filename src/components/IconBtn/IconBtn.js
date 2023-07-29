import * as React from 'react';
import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from '@mui/material/styles';
import Button from '@mui/material/Button';




export default function IconBtn({ label, onClick, bgColor = '#5065f6', color = 'white', fullWidth, icon }) {

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
            <Button onClick={onClick} variant="contained" color="btnColor" sx={{
                textTransform: 'none',
                width: fullWidth ? '100%' : 'auto',
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '20px',
                marginBottom: '10px',
                boxShadow: 'none',
                fontWeight: '600'
            }}>
                {icon(color)}
                <font color={color} >{label}</font>
            </Button>
        </ThemeProvider>
    );
}