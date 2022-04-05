import "./header.scss"

export default function Header() {
    return(
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> Savannah Clarke</a>
                </div>
                    <div className="right">
                        <div className="hamburger"></div>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                </div>
            </div>

        </div>

    )


}