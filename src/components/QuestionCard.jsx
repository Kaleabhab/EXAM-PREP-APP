// Placeholder for QuestionCard.jsx
import React from "react";
import AnswerOption from "./AnswerOption";


const QuestionCard = ({ question, options, selectedOption, onSelect }) => {
    return (
       <div className="">
        <h3 className="">{question}</h3>
        <div className="space-y-2">
            {options.map((option, index) => (
                <AnswerOption
                    key={index}
                    option={option}
                    isSelected={selectedOption === option}
                    onSelect={() => onSelect(option)}
                />
            ))}
            </div>
       </div> 
    );
};

export default QuestionCard;    