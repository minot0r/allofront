import './Kimono.css';

export default function KimonoInput(props) {
    const {
        className,
        ...rest
    } = props;
    return (
        <input className={"kimono-input " + (className || "")} {...rest} />
    )
}