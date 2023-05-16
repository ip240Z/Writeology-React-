import PopularArticles from "./PopularArticles";
import FeaturedArticle from "./FeaturedArticle";
import MidPageSearch from "./MidPageSearch";

let SideArticleSection = () => {
    
    let sideSectionWrapper = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
    let buttonContainer = {
        width: "90%",
        display: "flex",
        gap: "10px",
        marginTop: "30px",
        marginBottom: "30px",
    }
    let buttonStyle = {
        padding: "10px",
        backgroundColor: "lightgrey",
        color: "black",
        border: "1px solid lightgrey",
        borderRadius: "10px",
    }

    return(
        <section style={sideSectionWrapper}>
            <MidPageSearch />
            <div style={buttonContainer}>
                <button style={buttonStyle}>Tips</button>
                <button style={buttonStyle}>Resources</button>
                <button style={buttonStyle}>Guides</button>
            </div>
            <FeaturedArticle />
            <PopularArticles />
        </section>
    )

}

export default SideArticleSection