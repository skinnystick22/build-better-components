import Image from "next/image";

const Header = () => {
    return (
        <div className={"padT4 padB4"}>
            <div className={"container mobile-container"}>
                <div className={"d-flex justify-content-between"}>
                    <Image  src={"/images/SVCCLogo.png"} alt={"SVCC Home Page"} width={100} height={25}/>
                </div>
                <div className={"light"}>
                    <h4 className={"header-title"}>
                        Silicon Valley Code Camp
                    </h4>
                </div>
                <div className={"text-dark"}>
                    Hello Mr. Smith &nbsp;&nbsp;
                    <span><a href={"#"}>sign-out</a></span>
                </div>
            </div>
        </div>
    )
}

export default Header
