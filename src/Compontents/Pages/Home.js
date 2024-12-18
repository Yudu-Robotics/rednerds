import renderImage from "../RenderImages";
import Header from "../ReuseableCompontents/Header/Header";
import "./Home.css"
import { productData } from "./productData";
import Form from "../ReuseableCompontents/Form/Form";

function Home() {
    return (<div className="home-container ">
        <div className="upper-part">
            <Header />
            <div className="empowering-container">

                <div className="empowering-container-text">
                    <p className="empowering">Empowering You Through Engineering Brilliance</p>
                    <div className="award-container">
                        <p>RECOGNIZED & AWARDED BY</p>
                        <div className="award-image">
                            <img src={renderImage("award1")} alt="Good Design award 2019" />
                            <img src={renderImage("award2")} alt="Indian Design Mark" />
                            <img src={renderImage("award3")} alt="reddot winner 2023" />
                        </div>
                    </div>
                </div>

                <div className="empowering-container-image">
                    <img className="group18" src={renderImage("group18")} alt="gg" />
                </div>
                <img className="group20" src={renderImage("group20")} alt="gg" />
                <div className="content-image-mob">
                    <img className="group19-mob" src={renderImage("group19")} alt="" />
                </div>
            </div>

            <div className="content-container">
                <div className="content-text">
                    <div className="content-header">
                        <span><img src={renderImage("logo")} alt="" style={{width: "11pt", height: "22pt"}} /></span>
                        <p>WHO ARE WE</p>
                    </div>
                    <div style={{ fontFamily: "TT Hoves Light", fontSize: "20pt", width: "21vw", marginTop: "150px" }} className="content-body">
                        <p style={{ color: "white" }}>
                            At Red Nerds, we are a team of passionate design engineers dedicated to turning visionary concepts into reality. We thrive on challenges, turning them into opportunities to create innovative solutions.
                        </p>
                        <p style={{ color: "#DA3540", marginTop: "15px" }}>
                            Our mission is simple - to engineer excellence in every project we undertake.
                        </p>
                    </div>
                </div>
                <div className="content-image">
                    <img src={renderImage("group19")} alt="" />
                </div>
            </div>

            <div className="scroll-bar">
                <img className="group684" src={renderImage("group684")} alt="" />
                <div className="scroll-par">
                    <div className="scroll">
                        <div className="line-1st">
                            <img  src={renderImage("grid2")} alt="" />
                            <p><span style={{ color: "white", fontFamily: "TT Hoves DemiBold Italic" }}>From</span> Concept Design</p>
                            <img  src={renderImage("grid2")} alt="" />
                            <p><span style={{ color: "white", fontFamily: "TT Hoves DemiBold Italic" }}>From</span> Concept Design</p>
                            <img  src={renderImage("grid2")} alt="" />
                            <p><span style={{ color: "white", fontFamily: "TT Hoves DemiBold Italic" }}>From</span> Concept Design</p>
                            <img  src={renderImage("grid2")} alt="" />
                        </div>
                        <div style={{ marginTop: "20px" }} className="line-2nd">
                            <img  src={renderImage("grid2")} alt="" />
                            <p><span style={{ color: "white", fontFamily: "TT Hoves DemiBold Italic" }}>To </span> Manufacturing</p>
                            <img src={renderImage("grid2")} alt="" />
                            <p><span style={{ color: "white", fontFamily: "TT Hoves DemiBold Italic" }}>To </span> Manufacturing</p>
                            <img  src={renderImage("grid2")} alt="" />
                            <p><span style={{ color: "white", fontFamily: "TT Hoves DemiBold Italic" }}>To </span> Manufacturing</p>
                            <img  src={renderImage("grid2")} alt="" />
                        </div>
                    </div>
                </div>
                <img className="group683" src={renderImage("group683")} alt="" />
                <img className="group683a" src={renderImage("group683a")} alt="" />
            </div>

            <div style={{ position: "relative", zIndex: "100", width: "100%" }} className="product">
                <div>
                    <div className="product-table">
                        {productData.map((product, ind) => {
                            return (<div key={ind} className="product-container">
                                <div className="product-img-container">
                                    <img src={renderImage(product.img)} alt={product.header} />
                                </div>
                                <p className="product-header">{product.header}</p>
                                <p className="product-text">{product.text}</p>
                            </div>)
                        })
                        }
                    </div>
                </div>
                <img className="group694" src={renderImage("group694")} alt="" />
                <img className="group695" src={renderImage("group695")} alt="" />
                <img className="group702" src={renderImage("group702")} alt="" />
            </div>
        </div>

        <div className="bottom-content">
            <div className="tech-logo-container">
                <p className="tech-logo-header"><span style={{ marginRight: "20px" }}>/</span>TECH TITANS WE SERVE{"  "}<span style={{ marginLeft: "20px" }}>/</span></p>
                <div className="logos-div">
                    <img style={{marginTop:"20px"}} src={renderImage("tessolLogo")} alt="TESSOL innovate Preserve grow" />
                    <img style={{marginTop:"20px"}} src={renderImage("c14Logo")} alt="IC4 logo" />
                    <img style={{marginTop:"20px"}} src={renderImage("thinkTacLogo")} alt="ThinkTac logo" />
                    <img style={{marginTop:"20px"}} src={renderImage("noshLogo")} alt="Nosh logo" />
                    <img style={{marginTop:"20px"}} src={renderImage("scikraftLogo")} alt="Scikraft logo" />

                </div>
                <div className="logos-div">
                    <img style={{marginTop:"20px"}} src={renderImage("vayavyaLogo")} alt="Vayavya Labs Logo" />
                    <img style={{marginTop:"20px"}} src={renderImage("cclLogo")} alt="IIT CCL logo" />
                    <img style={{marginTop:"20px"}} src={renderImage("etherwhereLogo")} alt="Etherwhere logo" />
                    <img style={{marginTop:"20px"}} src={renderImage("yuduroboticsLogo")} alt="Yudu Robotics logo" />
                    <img style={{marginTop:"20px"}} src={renderImage("anexgateLogo")} alt="AnexGATE logo" />

                </div>
            </div>

            <div className="contact-container">
                <div className="contact-container2">
                    <div className="contact-text">
                        <p style={{ color: "white" }}>Gotta product that we can help you design?</p>
                        <p style={{ color: "#DA3540", marginTop: "30px" }}>Let's talk!</p>
                    </div>
                    <div id="form-div" className="form-div">
                        <Form />
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-container">
            <div className="footer-text">
                <p>RED <span style={{ marginLeft: "20px" }}>/</span></p>
                <p>NERDS</p>
            </div>
            <div className="ofc-address">
                <p>No. 29, Beratena Agrahara, Next to Play Factory, Hosur Main Road, Electronic City Post, Bangalore – 560100, Karnataka, India</p>
            </div>
        </div>
    </div>)
}

export default Home;