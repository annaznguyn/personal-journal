import React from "react";
import "../../styles/dashboard/Card.css"

function Card({ id, date, mood, energy, prompt, answer }) {
    return (
        <div className="card-container">
            <div className="title">
                <p className="prompt">{prompt}</p>
            </div>
            <div className="card-info-container">
                <div className="card-info">
                    <p className="answer">{answer}</p>
                    <p className="mood">Mood: {mood}</p>
                    <p className="energy">Energy: {energy}</p>
                    <p className="date">{date}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;