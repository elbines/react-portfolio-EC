import style from "./myprojects.module.css";
import { projectData as data } from "../../../../projectData.js";
import { Photos } from "../../reusable/Photos/Photos.jsx";
import { MainHeader } from "../../reusable/mainheader/mainheader";

export const MyProjects = () => {
    return (
        <div className={style.outer_containerWrapper}>
            <div className={style.wrapper_projects}>

                <MainHeader
                    mainHeading="Featured Projects"
                    className={style.projectsHeader}
                />

                {data.map((project) => (
                    <div
                        key={project.repoName}
                        className={style.projectContainer}
                    >
                        {/* Image */}
                        <img
                            src={project.imagePath}
                            alt={project.displayName}
                            className={style.projectImage}
                        />

                        {/* Text + content */}
                        <div className={style.textContainer}>
                            <h2 className={style.displayName}>
                                {project.displayName}
                            </h2>

                            <p className={style.text}>
                                {project.text}
                            </p>

                            <ul className={style.skillsList}>
                                {project.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>

                            {/* Buttons */}
                            <div className={style.iconContainer}>
                                <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
                                    <span className={style.iconWrap}>
                                        <Photos selectedMode="ViewCode" />
                                    </span>
                                </a>

                                <a href={project.netlifyUrl} target="_blank" rel="noopener noreferrer">
                                    <span className={style.iconWrap}>
                                        <Photos selectedMode="Live" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};