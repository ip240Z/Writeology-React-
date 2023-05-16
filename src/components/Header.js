const Header = () => {
    
    let headerStyle = {
        width: "100vw",
        borderBottom: "1px solid lightgrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        top: "0%",
    };
    let headerContents = {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        padding: "15px"
    };
    let navStyle = {
        display: "flex",
        gap: "10px"
    }
    
    return(
        <section style={headerStyle}>
            <div style={headerContents} className="headerContents">
                <div><img src="" alt="" />logo</div>
                <nav style={navStyle}>
                    <div>Cart</div>
                    <div>Profile</div>
                    <div>Burger</div>
                </nav>
            </div>
        </section>
    )
}

export default Header;