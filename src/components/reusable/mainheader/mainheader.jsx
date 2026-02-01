import style from './mainheader.module.css';

export const MainHeader = ({ mainHeading, className }) => {
    return (
        <h1 className={`${style.SectionH1} ${className}`}>{mainHeading}</h1>
    )
}