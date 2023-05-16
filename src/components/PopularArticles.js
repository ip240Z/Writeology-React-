import PopArticle from "./PopArticle";


let PopularArticles = () => {

    let headerStyle = {
        width: "90%",
        textAlign: "left",
        fontWeight: "bolder",
        fontSize: "20px",
        marginTop: "20px",
        marginBottom: "20px"
    }
    let popularArticlesWrapper = {
        width: '90%',
    }
    return (
        <section style={popularArticlesWrapper}>
            <header style={headerStyle}>Popular Articles</header>
            <div >
                <PopArticle />
                <PopArticle />
                <PopArticle />
             </div>
        </section>
    )
};

export default PopularArticles;