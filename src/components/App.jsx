import { useEffect, useState } from "react";
import styles from "../styles/App.css";
import elements from "../elements";
import Name from "./Name.jsx"
import Input from "./Input.jsx";


function App() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [firstFinal, setFirstFinal] = useState(["", "", ""]); //used to display the final first name (with styling)
    const [lastFinal, setLastFinal] = useState(["", "", ""]); //used to display the final last name (with styling)

    function breakify(string) {  //The main logic
        const length = string.length;
        let result = [];

        for (let i = 0; i < length; i++) {

            const oneChar = string[i].toUpperCase();
            const twoChar = `${oneChar}${string[i + 1]}`;

            if (elements.includes(twoChar)) {
                result = [string.slice(0, i), twoChar, string.slice(i + 2, length)];
                break;
            }

            if (elements.includes(oneChar)) {
                result = [string.slice(0, i), oneChar, string.slice(i + 1, length)];
                break;
            }
        }

        if (result.length === 0) { //i.e element is not found in the list
            result = [string, "", ""];
        }

        return result;
    }


    useEffect(() => {
        setFirstFinal(breakify(firstName));
    }, [firstName]);

    useEffect(() => {
        setLastFinal(breakify(lastName));
    }, [lastName]);

    return (
        <>
            <div className="container">

                <Name result={firstFinal} />
                <Name result={lastFinal} />

                <div className="container-2">
                    <div className="row">
                        {/* <div className="column">
                            <label>First Name</label>
                            <input onChange={(e) => setFirstName(e.target.value)}></input>
                        </div>
                        <div className="column">
                            <label>Last Name</label>
                            <input onChange={(e) => setLastName(e.target.value)}></input>
                        </div> */}


                        <Input label="First Name" handleChange={setFirstName} />

                        <Input label="Last Name" handleChange={setLastName} />
                        {/* not sure if this is the best way to pass setState functions as props (search more about this) */}
                    </div>

                    <button>Breakify Your Name!</button>
                </div>

            </div>
        </>
    )
}

export default App;