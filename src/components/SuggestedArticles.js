import Suggested from "./Suggested";

let SuggestedArticles = () => {

    let sectionStyle = {
        width: "90%",
    }

    return (
        <section style={sectionStyle}>
            <Suggested />
            <Suggested />
            <Suggested />
        </section>
    )
};

export default SuggestedArticles;