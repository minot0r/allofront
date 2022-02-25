import "./Kimono.css";

export default function KimonoCenter(props) {
    const { className, children, width, tiny, style, ...otherProps } = props;
    return (
        <div className={"kimono-center " + (className || "") + (tiny && " tiny ")} {...otherProps} style={{...style, width}}>
            {children}
        </div>
    );
}