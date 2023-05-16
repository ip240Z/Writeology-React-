import Article from "./Article"

let LatestArticles = () => {
    let sectionStyle = {
        marginTop: "35px",
        width: "90%",
        
    }
    let articleContainer = {
        width: "100%",
        // display: "flex",
        // flexDirection: "column",
        // gap: "10px"
    }
    let containerHeader = {
        textAlign: "left",
        paddingBottom: "20px",
        fontWeight: "bolder",
        fontSize: "20px",
    }

    return (
        <section style={sectionStyle}>
            <header style={containerHeader}>Latest Articles</header>
            <main style={articleContainer}>
                {/* There will be a .map/forLoop function here to create latest articles dynamically  */}
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />


            </main>
        </section>
    )
};


export default LatestArticles;