import React from "react";
import "../../styles/dashboard/Cards.css";
import Card from "./Card.js"

function Cards() {
    const cards = [
        {
            "id": 1,
            "date": "23/11/2024",
            "mood": 4,
            "energy": 3,
            "prompt": "What have you accomplished today?",
            "answer": "I have learned how to make a pancake!"
        },
        {
            "id": 2,
            "date": "1/12/2024",
            "mood": 5,
            "energy": 5,
            "prompt": "How do you feel?",
            "answer": "I feel exhausted from hiking today, but FUN. I went hiking with my best friend and I think we walked for 2 hours, approximately 2km."
        },
        {
            "id": 2,
            "date": "1/12/2024",
            "mood": 2,
            "energy": 1,
            "prompt": "How do you feel?",
            "answer": "I feel exhausted from hiking today."
        },
        {
            "id": 2,
            "date": "1/12/2024",
            "mood": 2,
            "energy": 1,
            "prompt": "How do you feel?",
            "answer": "I feel exhausted from hiking today."
        },
        {
            "id": 2,
            "date": "1/12/2024",
            "mood": 2,
            "energy": 1,
            "prompt": "How do you feel?",
            "answer": "I feel exhausted from hiking today."
        },
        {
            "id": 2,
            "date": "1/12/2024",
            "mood": 2,
            "energy": 1,
            "prompt": "How do you feel?",
            "answer": "I feel exhausted from hiking today."
        },
        {
            "id": 2,
            "date": "1/12/2024",
            "mood": 2,
            "energy": 1,
            "prompt": "How do you feel?",
            "answer": "I feel exhausted from hiking today."
        },
        {
            "id": 2,
            "date": "1/12/2024",
            "mood": 2,
            "energy": 1,
            "prompt": "How do you feel?",
            "answer": "I feel exhausted from hiking today."
        },
        {
            "id": 2,
            "date": "1/12/2024",
            "mood": 2,
            "energy": 1,
            "prompt": "How do you feel?",
            "answer": "I feel exhausted from hiking today."
        }
    ];

    return (
        <div className="cards-container">
            <div className="cards">
                {
                    cards.map((card) => (
                        <Card 
                            key={card.id}
                            date={card.date}
                            mood={card.mood}
                            energy={card.energy}
                            prompt={card.prompt}
                            answer={card.answer}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Cards;