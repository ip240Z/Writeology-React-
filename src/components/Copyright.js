let Copyright = () => {
    let style = {
        marginTop: "20px",
        borderTop: "1px solid lightgrey",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "15px",
        color: "grey"
    }
    return (
        <div style={style}>
            <span>Copyright © ReWriteology X | Designed by <a>IAN</a></span>
            <span><a>React Components</a> - Powered by <a>React</a></span>
        </div>
    )
};

export default Copyright