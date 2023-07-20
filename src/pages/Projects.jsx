import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Projects = () => {
    const [projectInfo, setProjectInfo] = useState([])
    // const [toolIcons, setToolIcons] = useState([])
    async function getProjects() {
        const response = await axios.get('../../data.json');
        const result = await response.data;
        console.log(result);
        setProjectInfo(response.data)
        // setToolIcons(response.data.map((e => e.tools)))
        // console.log(response.data.filter(e => e == e.id))
    }

    useEffect(() => {
        getProjects()
    }, [])


    return (
        <>
            <header>
                <h2>Project Selection</h2>
            </header>

            <div class="container" >
                <div class="row">
                    {projectInfo.map((e, index) => (

                        <div class="col-md-12" key={index} style={{ marginBottom: "14vh" }}>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="card" style={{ width: "45rem" }}>
                                    <img
                                        class="class-img-top"
                                        src={e.image}
                                        alt={e.title}
                                    />
                                    <div class="card-body">
                                        <h4 class="card-title">{e.title}</h4>
                                        <p class="card-text">{e.description}</p>
                                    </div>
                                    <div class="card-footer">
                                        <Link
                                            to={e.gitlink}
                                            class="btn"
                                            style={{ display: 'block', textAlign: 'center' }}
                                        >
                                            <img
                                                src="../../public/icons/github-mark-white.png"
                                                alt="" width={50}
                                            />
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Projects