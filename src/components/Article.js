let Article = () => {
    let articleWrapper = {
        height: "60vh",
        borderBottom: "1px solid grey",

    }
    let articleImage = {
        width: "100%",
        height: "60%",
        border: "1px solid black",
        borderRadius: "10px",

    }
    let articleInfo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "15px",
        paddingBottom: "20px",
    }
    let authorInfo = {
        display: "flex",
        justifyContent: "space-between",
    }

    return (
        <article style={articleWrapper}>
            <div style={articleImage}>image<img src="" alt="" /></div>
            <section style={articleInfo}>
                <div>art type</div>
                <div>Art Title</div>
                <div>Article Content</div>
                <div style={authorInfo}>
                    <img src="" alt="Author pic" />
                    <p>Author name</p>
                    <p>Time written</p>
                </div>
            </section>
        </article>
    )
}

export default Article;

{/* <article style={articleLayout}>
    <section style={articleInfo}>
        <div style={articleType}>
            type
        </div>
        <div>Title of Article</div>
        <div style={authorInfo}>
            <img src="" alt="Author pic" />
            <p>Author name</p>
            <p>Time written</p>
        </div>
    </section>
</article> */}