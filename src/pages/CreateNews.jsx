import { useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { baseDir } from "../Constant";

import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function CreateNews() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", file, file.name);

        const res = await axios.post(`${baseDir}/api/news`, formData);
        if (res.data === "ok") {
            alert("생성이 완료되었습니다.");
            navigate("/admin/news");
        } else {
            alert('생성에 실패했습니다.')
        }
    };

    const handleChangeFile = useCallback((event) => {
        let newFile = event.target.files[0];
        setFile(newFile);
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
                sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    height: "90%",
                }}
            >
                <Typography variant="h4" mt={4} mb={4}>
                    뉴스 글쓰기
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="제목"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div style={{ height: "30px" }}></div>
                <TextField
                    id="outlined-multiline-static"
                    label="본문"
                    multiline
                    rows={25}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div style={{ height: "20px" }}></div>
                <div className="newbar">
                    <input
                        id="file_input"
                        type="file"
                        onChange={handleChangeFile}
                    />
                </div>
                <div
                    style={{
                        marginTop: "30px",
                        display: "flex",
                        gap: "30px",
                        justifyContent: "center",
                    }}
                >
                    <Button style={{ width: "80px" }} variant="outlined">
                        <Link
                            to="/admin/news"
                            style={{ textDecoration: "none", color: "blue" }}
                        >
                            취소
                        </Link>
                    </Button>
                    <Button
                        style={{ width: "100px" }}
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        발행하기
                    </Button>
                </div>
            </Paper>
        </Container>
    );
}

export default CreateNews;
