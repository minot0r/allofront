import "./Kimono.css";

export default function KimonoCenter(props) {
    const { className, children, width, ...otherProps } = props;
    return (
        <div className={"kimono-center " + (className || "")} {...otherProps} style={{width}}>
            {children}
        </div>
    );
}