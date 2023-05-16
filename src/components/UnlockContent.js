let UnlockContent = () => {

    let sectionStyle = {
        width: "100%",
        backgroundColor: "black",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        padding: "10px",
    }
    let headerStyle = {
        fontWeight: "bolder",
        fontSize: "25px",
    }
    let loremStyle = {
        color: "lightgrey",
        padding: "10px"
    }
    let btnStyle = {
        fontWeight: "bold",
        fontSize: "18px",
        color: "black",
        backgroundColor: "white",
        padding: "20px",
        border: "none",
        borderRadius: "10px"
    }
    return (
        <section style={sectionStyle}>
            <div>
                <header style={headerStyle}>Subscribe to unlock premium content</header>
                <p style={loremStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quis sapiente consectetur voluptates, quia impedit a eveniet quam hic asperiores optio iure dolor vitae eius sint reprehenderit, voluptatum ducimus quisquam?</p>
            </div>
            <button style={btnStyle}>& Unlock content</button>
        </section>
    )
};

export default UnlockContent