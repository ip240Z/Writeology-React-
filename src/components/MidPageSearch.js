let MidPageSearch = () => {

    let style = {
        display: "flex",
        flexDirection: "column",
        marginTop: "15px",
        width: "90%",
        gap: "15px",
        borderBottom: "1px solid grey",
        paddingBottom: "25px"
    }
    let textStyles = {
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "15px"

    }
    return (
        <section style={style}>
            <div style={textStyles}>
                <div>Writeology X<img src="" alt="" /></div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ut nemo temporibus eius laborum eaque dicta officiis quaerat iusto autem dolorem nostrum quas.</div>
            </div>
            <input type="text" />
        </section>
    )
}

export default MidPageSearch;