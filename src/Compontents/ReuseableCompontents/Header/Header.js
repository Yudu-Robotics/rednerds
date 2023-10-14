import "./Header.css";

function Header() {
    return (<div className="header-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="logo">
                <p>RED /</p>
                <p>NERDS</p>
            </div>

            <div className="go-project">
                <a style={{textDecoration: "none"}} href="#form-div">
                    <p>GOTTA PROJECT?</p>
                </a>
            </div>
        </div>
    </div>)
}

export default Header;