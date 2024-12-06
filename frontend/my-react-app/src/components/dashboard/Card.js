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
                    <p className="mood">Mood: <span className="more-space"></span>
                        <div className="stars">
                            {[...Array(mood)].map((_, index) => (
                                <>
                                    <i className="fa fa-star checked"></i>
                                    <span className="more-space2"></span>
                                </>
                            ))}
                        </div>
                    </p>
                    <p className="energy">Energy: <span className="more-space"></span>
                        <div className="bolts">
                            {[...Array(energy)].map((_, index) => (
                                <>
                                    <i className="fa fa-bolt bolt"></i>
                                    <span className="more-space"></span>
                                </>
                            ))}
                        </div>
                    </p>
                    <p className="date">{date}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;