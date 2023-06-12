import React, {useState} from 'react'

const OpeningButton = props => {
    const {children, toggleOpen} = props;

    return (
        <button onClick={toggleOpen}>
            {children}
            >
        </button>
    )
}

const Options = props => {
    const {options, onChange} = props;

    return <div style={{display: 'flex', flexDirection: 'column', width: 150}}>{Object.values(options).map(option => <button onClick={() => onChange(option.value)}>{option.label}</button>)}</div>
}

const Dropdown = props => {
    const {label, options, onChange, value} = props;
     const [isOpen, setOpen] = useState(false);

     if (!options) {
         return <button disabled>No options</button>
     }

     console.log(value)
     const actualLabel = value ? Object.values(options).find(option => option.value === value).label : label ?? 'Select something'

    return <div><OpeningButton toggleOpen={() => setOpen(!isOpen)}>{actualLabel}</OpeningButton>{isOpen && <Options options={options} onChange={onChange}/>}</div>
}


export default Dropdown
