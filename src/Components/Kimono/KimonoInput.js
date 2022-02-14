import { useEffect } from 'react';
import './Kimono.css';

export default function KimonoInput(props) {
    const {
        className,
        onFinishTyping,
        ...rest
    } = props;
    useEffect(() => {
        const delayBounce = setTimeout(onFinishTyping, 3000);
        return () => clearTimeout(delayBounce);
    }, [onFinishTyping]);
    return (
        <input className={"kimono-input " + (className || "")} {...rest} />
    )
}