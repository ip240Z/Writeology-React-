import Copyright from "./Copyright";
import MobileSubscribe from "./MobileSubscribe";
import UnlockContent from "./UnlockContent"

let Footer = () => {
    let footerWrapper = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",


    }
    return (
        <footer style={footerWrapper}>
            <UnlockContent />
            <MobileSubscribe />
            <Copyright />
        </footer>
    )
}

export default Footer;