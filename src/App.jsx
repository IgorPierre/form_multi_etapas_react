//Icons
import {GrFormNext, GrFormPrevious} from "react-icons/gr"
import { FiSend } from "react-icons/fi"

//Components
import ReviewForm from "./components/ReviewForm"
import Thanks from "./components/Thanks"
import UserForm from "./components/UserForm"
import Steps from "./components/Steps"


//Styles
import './App.css'

//Hooks
import { useForm } from "./hooks/useForm"
import { useState } from "react"

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: ""
}


function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) =>{
      return{ ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ]

  const {
    currentStep, 
    currentComponent, 
    changeStep,
    isLastStep,
    isFirstStep
  } = useForm(formComponents)
  
  return (
    <div className="app">
      <header className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Que bom que encontrou o que precisava!<br/>Responda este formulário e nos ajude a melhorar ainda mais.</p>
      </header>

      <div className="form-container">
        <Steps currtentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>

          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep -1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {!isLastStep ? (
              <button type="submit">
                <span>Próximo</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
              <span>Enviar</span>
              <FiSend />
            </button>
            )}

           
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
