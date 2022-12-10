import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from "react-icons/bs";

import "./styles.css";

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />
}

const emojiDescript = {
    unsatisfied: " Insatisfeito",
    neutral: " Poderia ser melhor",
    satisfied: " Satisfeito",
    very_satisfied: " Muito satisfeito"
}

function Thanks({data}) {
    return(
        <div className="thanks-container">
            <h2>Falta pouco !!</h2>

            <p>Obrigado por responder, a sua opinião é muito importante pra gente.</p>

            <h3>Confirme seu resumo, {data.name}:</h3>
            <p className="review-data">
                <span>Satisfação com o produto: </span>
                {emojiData[data.review]}
                {emojiDescript[data.review]}
            </p>

            <p className="review-data">
                <span>Comentário: </span>
                {data.comment}
            </p>
        </div>
    );
};

export default Thanks