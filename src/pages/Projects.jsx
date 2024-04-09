import axios from "axios"
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
                <h1 >Welcome To My Portfolio Site</h1>
                <h3 >Just Click The Icons To See The Code Or Live Demo</h3>
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
                                                    style={{ display: 'block', textAlign: 'center' }}
                                                >
                                                    <img
                                                        src="icons/github-mark-white.png"
                                                        alt="" width={50}
                                                    />
                                                </Link>

                                                <Link
                                                    to={e.link}
                                                    class="btn"
                                                    style={{ display: 'block', textAlign: 'center' }}
                                                >
                                                    <img
                                                        src="/public/icons/live.png"
                                                        alt="" width={50}
                                                    />
                                                </Link>
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
        </>
    )
}

export default Projects