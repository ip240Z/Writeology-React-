let Suggested = (props) => {

    let style = {
        width: "100%",
        display: "flex",
        
        alignItems: "flex-start",
        gap: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey,"
    }
    let articleType = {
        color: "grey",
    }
    let articleTitle = {
        fontWeight: "bold",
        fontSize: "20px",

    }
 
    return (
        <article style={style}>
            <div>
                <div style={articleType}>Art Type</div>
                <div style={articleTitle}>Art Title</div>
            </div>
        </article>
    )
}

export default Suggested