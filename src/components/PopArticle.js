let PopArticle = () => {

    let style = {
        width: "100%",
        height: "15vh",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey",
    }
  
    let articleTitle = {
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: "left",
        width: "70%"

    }
 

    return (
        <article style={style}>
            <div>Img<img src="" alt="" /></div>
            <div style={articleTitle}>Art Title</div>
        </article>
    )
}

export default PopArticle;