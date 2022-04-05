import "./header.scss"

export default function Header({ menuOpen, setMenuOpen }) {
    return(
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> Savannah Clarke</a>
                    <div className="itemContainer">
                    </div>
                    
                </div>
                    <div className="right">                        
                        <div className="hamburger">
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                </div>
            </div>

        </div>

    );


}