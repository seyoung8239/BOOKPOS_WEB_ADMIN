import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Dashboard from "./Dashboard";
import Toolbar from "@mui/material/Toolbar";

import Box from "@mui/material/Box";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const mdTheme = createTheme();

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <Header />
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: "100vh",
                            overflow: "auto",
                        }}
                    >
                        <Toolbar />
                        <Dashboard />
                        <Footer />
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default App;
