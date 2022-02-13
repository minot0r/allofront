export default function KimonoBox(props) {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div className={"kimono-box " + (className || "")} {...otherProps}>
            {children}
        </div>
    );
}