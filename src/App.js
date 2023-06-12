import logo from './logo.svg';
import './App.css';
import Dropdown from "./DropdownComponent/Dropdown";
import {useState} from "react";

function App() {
  const options = {
    option1: {
      label: 'Option one',
      value: 1
    },
    option2: {
      label: 'Option two',
      value: 2
    }
  }

  const [value, setValue] = useState();

  return (
    <Dropdown options={options} value={value} onChange={setValue}/>
  );
}

export default App;
