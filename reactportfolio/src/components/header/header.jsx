import "./header.scss";

export default function Header({ menuOpen, setMenuOpen }) {
    return(
        <div>
            <div className={"header " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> Savannah Clarke</a>
                    <div className="itemContainer">
                    </div>
                    
                </div>
                    <div className="right">                        
                        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                            <hr className="line1"></hr>
                            <hr className="line2"></hr>
                            <hr className="line3"></hr>
                        </div>
                </div>
            </div>

        </div>
</div>
    );


}