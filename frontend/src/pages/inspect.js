import React, {useState} from 'react';
import CardComponent from '../components/card';
import axios from 'axios'
import './inspect.css';

// const fetchData = async () => {
//   try {
//   const response = await axios.get(`http://localhost:8080/catch/${props.textProp}`);
//   const data = response.data;
//   console.log(data);
//   setPokemonDats(data);
//   } catch (error) {
//   console.error(error);
//   }
// };

// useEffect(() => {
//   fetchData();
// }, []);

// const MyComponent = () => {
//   const [propValue, setPropValue] = useState('');
// };

// const handleClick = () => {
//   // Here you can update the propValue and send it wherever you need
//   setPropValue();

const Inspect = () =>{
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <CardComponent textProp={inputText} />
      <button>Search</button>
    </div>
  );
}
export default Inspect;