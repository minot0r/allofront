import './Kimono.css';

export default function KimonoButtons(props) {
    const { className, children, ...otherProps } = props;
    
    return (
        <div className={"kimono-buttons " + (className || "")} {...otherProps}>
            {children}
        </div>
    );
}