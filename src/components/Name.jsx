import styles from "../styles/Name.css";

function Name({ result }) {

    return (
        <>
            <div className="wrapper">
                <span id="before">{result[0]}</span>
                <span id="main">{result[1]}</span>
                <span id="after">{result[2]}</span>
            </div>
        </>
    )
}

export default Name;