import FeaturedArticle from "./FeaturedArticle";
import Footer from "./Footer";
import LatestArticles from "./LatestArticles";
import MidPageSearch from "./MidPageSearch";
import SideArticleSection from "./SideArticleSection";
import SuggestedArticles from "./SuggestedArticles";

let Main = () => {

    let style = {
        width: "100%",
        marginTop: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
    }
    let sideArticleStyle = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    return (
        <main style={style}>
            <FeaturedArticle /> 
            <SuggestedArticles />
            <div style={sideArticleStyle}>
                <LatestArticles />
                <SideArticleSection />
            </div>
            <Footer />
        </main>
    )
}

export default Main;