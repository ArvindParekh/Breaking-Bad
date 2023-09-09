//renders a component containing a column with label and input

export default function Input({ label, handleChange }) {

    return (
        <div className="column">
            <label>{label}</label>
            <input onChange={(e) => handleChange(e.target.value)}></input>
        </div>
    )
}