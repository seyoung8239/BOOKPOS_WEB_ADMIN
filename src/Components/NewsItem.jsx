import { Buffer } from "buffer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { baseDir } from "../Constant";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ClosedNewsItem({ news, idx }) {
    const { image, title, content, date, id } = news;
    const navigate = useNavigate();

    function handleEdit() {
        navigate(`/edit_news/${id}`);
    }

    async function handleDelete() {
        await axios.delete(`${baseDir}/news/${id}`);
        window.location.reload();
    }

    if (!image) return <></>;
    const imageString = Buffer.from(image.data.data, "base64").toString(
        "ascii"
    );
    return (
        <>
            <hr />
            <div style={{ display: "flex", padding: "30px", gap: "60px" }}>
                <img
                    src={`data:${image.contentType};base64,${imageString}`}
                    width="200px"
                    height="150px"
                    alt="intro1"
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        width: "100%",
                    }}
                >
                    <div style={{ fontSize: "27px" }}>{title}</div>
                    <div>{date}</div>
                    <div>{content}</div>
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                    <div onClick={handleEdit}>
                        <EditIcon />
                    </div>
                    <div onClick={handleDelete}>
                        <DeleteIcon />
                    </div>
                </div>
            </div>
        </>
    );
}

function NewsItem({ news, newsOpenList, setNewsOpenList, idx }) {
    return (
        <>
            <ClosedNewsItem
                news={news}
                newsOpenList={newsOpenList}
                setNewsOpenList={setNewsOpenList}
                idx={idx}
            />
        </>
    );
}

export default NewsItem;
