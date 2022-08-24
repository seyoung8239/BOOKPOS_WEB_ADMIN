import { Buffer } from "buffer";

function ClosedNewsItem({ news, newsOpenList, setNewsOpenList, idx }) {
    const { image, title, content, date } = news;

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
