import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onBtnClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result= eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue= calVal+ buttonText;
      setCalVal(newDisplayValue);
    }
    console.log(buttonText);
  };

  return (
    <div className={styles.calculator}>
      <Display value={calVal}></Display>
      <ButtonContainer onBtnClick={onBtnClick}></ButtonContainer>
    </div>
  );
}

export default App;
