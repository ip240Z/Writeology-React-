let FeaturedArticle = () => {
    
    let articleLayout = {
        borderRadius: "10px",
        width: "90%",
        height: "40vh",
        display: "flex",
        justifyContent: "left",
        alignItems: "flex-end",
        color: "white",
        backgroundColor: "black"
    };
    let articleInfo = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "15px",
        paddingBottom: "20px",
        paddingLeft: "10px"
    }
    let authorInfo = {
        display: "flex",
        justifyContent: "space-between",
    }
    let articleType = {
        padding: '10px',
        color: "black",
        borderRadius: "10px",
        backgroundColor: "white"
    }


    return (
        <article style={articleLayout}>
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
        </article>
    )
}

export default FeaturedArticle