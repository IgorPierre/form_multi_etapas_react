import { AiFillStar} from "react-icons/ai";
import { FiSend } from "react-icons/fi"
import { FaUser } from "react-icons/fa"


import "./styles.css";

function Steps({ currtentStep }) {
    return(
        <div className="steps">
            <div className="step active">
                <FaUser />
                <p>Identificação</p>
            </div>

            <div className={`step ${currtentStep >= 1 ? "active" : ""}`}>
                <AiFillStar />
                <p>Avaliação</p>
            </div>

            <div className={`step ${currtentStep >= 2 ? "active" : ""}`}>
                <FiSend />
                <p>Envio</p>
            </div>
        </div>
    )
}

export default Steps