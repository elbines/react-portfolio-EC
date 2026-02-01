import style from './subheader.module.css';

export const SubHeader = ({ subHeading, className, children }) => {
    return (
        <div>
            <h2 className={`${style.SectionH2} ${className}`}>{subHeading}</h2>
            {children}
        </div>
    )
}

