let MobileSubscribe = () => {

    let sectionStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        width: "90%",
        paddingBotton: "40px"
    }
    let headerMessage = {
        fontWeight: "bold",
        fontSize: "25px",
       
    }
    let subMessage = {
        paddingTop: "40px",
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
    let loremStyle = {
        color: "grey",
        padding: "10px"
    }
    let subscribeAreaStyle = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "10px",
    }
    let emailInputStyle = {
        width: '100%',
        height: "2.5rem",
        borderRadius: "10px",
        border: "1px solid lightgrey",
        fontSize: "15px",
        padding: "5px",
    }
    let subBtn = {
        background: "black",
        color: "white",
        width: "100%",
        border: "none",
        height: "3.5rem",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "20px"
    }
    let btnArea = {
        display: "flex",
        gap: "15px",
        paddingTop: '10px',
    }
    let socialBtns = {
        textDecoration: "none",
        color: "black",
    }
    return (
        <section style={sectionStyle}>
            <div style={subMessage}>
                <header style={headerMessage}>Subscribe to our newsletter</header>
                <p style={loremStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti tempore nulla distinctio commodi, minima, inventore.</p>
            </div>
            <div style={subscribeAreaStyle}>
                <input style={emailInputStyle} type="email" placeholder="Enter your email address"/>
                <button style={subBtn}>Subscribe</button>
            </div>
            <div style={btnArea}>
                <a style={socialBtns} href="">FB</a>
                <a style={socialBtns} href="">Twt</a>
                <a style={socialBtns} href="">Inst</a>
                <a style={socialBtns} href="">LI</a>
                <a style={socialBtns} href="">YT</a>
            </div>
        </section>
    )
};

export default MobileSubscribe