import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './card.css'

function CardComponent(props) {

    // const api = axios.create({
    //     baseURL: `http://localhost:8080/catch`
    // });
    
    let [pokemonDats, setPokemonDats] = useState();
      
    // api.get('/pikachu').then(res =>{
    //     console.log(res.data);
    //     setPokemonDats(res.data)
    // });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const response = await axios.get(`http://localhost:8080/catch/${props.textProp}`);
        const data = response.data;
        console.log(data);
        setPokemonDats(data);
        } catch (error) {
        console.error(error);
        }
    };
    

    return(
        <div className="CardComponent">
            <div className="statCard" key={pokemonDats?.name}>
              <p>{pokemonDats?.name}</p>
              <img src={pokemonDats?.image} alt={pokemonDats?.name}/>
            </div>
        </div>
    );
} 

export default CardComponent;
