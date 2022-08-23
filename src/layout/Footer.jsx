import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Footer() {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ pt: 4 }}
        >
            {"Copyright © "}
            <Link color="inherit" href="http://norisoft.kr/">
                Norisoft
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default Footer;
