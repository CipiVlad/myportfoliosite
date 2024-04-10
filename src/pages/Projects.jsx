import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { data } from "../data"
import GrowSpinner from "../components/GrowSpinner"

const Projects = () => {
    const [projectInfo, setProjectInfo] = useState(data)

    useEffect(() => {
        setProjectInfo(projectInfo)
    }, [])

    return (
        <>
            <header>
                <div className="profile">
                    <div>
                        <h1 >Welcome To My Portfolio Site</h1>
                        {/* <h3 >Just Click The Icons To See The Code Or Live Demo</h3> */}
                        <h3 >Just Click The GitHub Icon To See The Code </h3>
                    </div>
                    <img src="https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F856357%2Fa29e8a17-c60d-4dc5-8488-4e089994e7b2.jpg" alt="profile" />
                </div>

            </header>
            <div class="container" >
                <div class="row">
                    {

                        projectInfo ?
                            (projectInfo.map((e, index) => (

                                <div class="col-md-12" key={index} style={{ marginBottom: "14vh" }}>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div class="card" style={{
                                            width: "45rem", border: "none",
                                            boxShadow: "0px 22px 20px 6px rgba(1, 1, 1, 0.2)",
                                        }}>
                                            <img
                                                class="class-img-top"
                                                src={e.image}
                                                alt={e.title}
                                            />
                                            <div class="card-body">
                                                <h4 class="card-title">{e.title}</h4>
                                                <p class="card-text">{e.description}</p>
                                            </div>
                                            <div class="card-footer d-flex justify-content-center">
                                                <Link
                                                    to={e.gitlink}
                                                    class="btn"
                                                    target="_blank"
                                                    style={{ display: 'block', textAlign: 'center' }}
                                                >
                                                    <img
                                                        src="icons/github-mark-white.png"
                                                        alt="" width={50}
                                                    />
                                                </Link>

                                                {/* <Link
                                                    to={e.link}
                                                    class="btn"
                                                    target="_blank"
                                                    style={{ display: 'block', textAlign: 'center' }}
                                                >
                                                    <img
                                                        src="icons/live.png"
                                                        alt="" width={50}
                                                    />
                                                </Link> */}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                            )
                            :
                            (<GrowSpinner />)
                    }
                </div>
            </div>
            <div className="furtherProjects">
                <h3>Visit Some Of My Real World and Live Projects made with CMS:</h3>
                <Link to="https://www.seko-soko.de/">
                    <img src="images/refeelme_screenshot.png" alt="re-feel.me screenshot" width={220} height={110} />
                </Link>
                <Link to="https://namibiasnumbernine.com/">
                    <img src="images/namibiasnonine_screenshot.png" alt="namibiasnumbernine screenshot" width={220} height={110} />
                </Link>
                <Link to="https://genussart.club/">
                    <img src="images/genussart_screenshot.png" alt="genussart screenshot" width={220} height={110} />
                </Link>
            </div >

            <footer>
                <Link to={"https://dev.to/cipivlad"}>
                    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="dev.to" width={"40"} />
                </Link>
                <Link to={"https://www.frontendmentor.io/profile/CipiVlad"}>
                    <img src="https://www.frontendmentor.io/static/images/logo-desktop.svg" alt="frotnendmentor.io" />
                </Link>
                <Link to={"https://github.com/CipiVlad"}>
                    <img src="icons/github-mark-white.png" alt="github" width={"40"} />
                </Link>

                <p>Made with &hearts; by Cipi. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Projects