import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Header from "./components/Header";
import {Box} from "@mui/material";
import { createTheme, ThemeProvider} from '@mui/material/styles';

function App() {
    const mdTheme = createTheme();
    return (
        <ThemeProvider theme={mdTheme}>
            <Box component="main" sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Box>
        </ThemeProvider>
    );
}

export default App;
