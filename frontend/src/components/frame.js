// imports
import React, {useState} from 'react';
import axios from 'axios';
import './frame.css';

const FrameComponent = ()=>{
// grabs the api
    const api = axios.create({
        baseURL: `http://localhost:8080/catch`
      });
    
    // sets a variable and  and something to change that veriable
      let [pokemonDats, setPokemonDats] = useState();
      // 
      api.get('/all-pokemons').then(res =>{
        console.log(res.data);
        setPokemonDats(res.data)
      });
           
      return(
        <div className="FrameComponent">
            {pokemonDats?.map(card => 
            <div className="infoCard" key={card?.name}>
              <p>{card?.name}</p>
              <hr/>
              {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDats.indexOf(card)}.png`} alt="unkown"/> */}
                {/* <img src={card?.sprites}/> */}
               <img src = {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemonDats.indexOf(card) + ".png"}/>
            </div>
            )}
            
        </div>
      );
} 

export default FrameComponent;

// return  (
//     items.map((item) => <Card header={item.name}
//       body= {
//         `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${items.indexOf(item)}.png`
//        }
//       ></Card>)
// )