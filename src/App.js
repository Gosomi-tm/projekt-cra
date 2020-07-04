import React, {useState, useEffect} from "react";
import './App.css';

const FetchAdvice = () => {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then(response => response.json())
            .then(data => {
                setAdvice(data.slip.advice);
            })
            .catch((err) => {
                console.log("BŁĄD", err);
            });
    }, []);

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={FetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
            </div>
        </div>
    );
};

const App = () => <FetchAdvice/>;

export default App;