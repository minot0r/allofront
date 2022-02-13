import "./Kimono.css";

export default function KimonoCenter(props) {
    const { className, children, width, style, ...otherProps } = props;
    return (
        <div className={"kimono-center " + (className || "")} {...otherProps} style={{...style, width}}>
            {children}
        </div>
    );
}