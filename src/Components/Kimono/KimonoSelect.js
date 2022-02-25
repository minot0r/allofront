export default function KimonoSelect(props) {
    const {
        options,
        placeholder,
        onChange,
        ...rest
    } = props;
    return <select className={"kimono-select " + (props.className || "")} {...rest} onChange={onChange}>
        <option value="">{placeholder}</option>
        {
            options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)
        }
    </select>
}