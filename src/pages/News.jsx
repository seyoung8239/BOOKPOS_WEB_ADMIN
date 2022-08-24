import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

function News() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 700,
                }}
            ></Paper>
        </Container>
    );
}

export default News;
