import React, { useState } from "react";
import data from "./data";

function App() {
    const [counter, setcounter] = useState(0);
    const [loremtext, setloremtext] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        let amount = parseInt(counter);
        if (amount <= 0) {
            amount = 1;
        }
        if (amount > data.length) {
            amount = data.length;
        }
        setloremtext(data.slice(0, amount));
    };
    return (
        <div className="App">
            <section className="lorem-section">
                <h3>Generate lorem ipsum text right here</h3>
                <form className="lorem-form" onSubmit={submitHandler}>
                    <label htmlFor="count">Paragraphs:</label>
                    <input
                        id="count"
                        type="number"
                        value={counter}
                        onChange={(e) => setcounter(e.target.value)}
                    />
                    <button type="submit">Generate</button>
                </form>
                {loremtext.map((text, index) => {
                    return (
                        <p classname="lorem-para" key={index}>
                            {text}
                        </p>
                    );
                })}
            </section>
        </div>
    );
}

export default App;
