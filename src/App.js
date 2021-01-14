import React, { useState, useEffect } from "react";
import data from "./data";
import "./App.css";
function App() {
    const [counter, setcounter] = useState(0);
    const [loremtext, setloremtext] = useState([]);
    // const loremGenerator = (counter) => {
    //     let temp = "";
    //     if (counter < 0) {
    //         temp += data[0];
    //     }
    //     for (var i = 0; i < counter && i < data.length; i++) {
    //         temp += data[i];
    //         temp += "\n";
    //     }
    //     setloremtext(temp);
    // };
    const submitHandler = (e) => {
        e.preventDefault();
        let temptext = [];
        if (counter < 0) {
            temptext[0] = <p>{data[0]}</p>;
        } else {
            temptext = data.map((text, index) => {
                if (index < counter) return <p key={index}>{text}</p>;
            });
        }

        setloremtext(temptext);
    };
    // useEffect(() => {
    //     loremGenerator(counter);
    // }, [counter]);
    return (
        <>
            <form className="Lorem-form" onSubmit={submitHandler}>
                Paragraphs:
                <input
                    type="number"
                    value={counter}
                    onChange={(e) => setcounter(e.target.value)}
                />
                <button type="submit">Generate</button>
            </form>
            {loremtext}
        </>
    );
}

export default App;
