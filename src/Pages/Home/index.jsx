import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost/projetop1/index.php')
        .then(function(res){
        setFilmes(res.data);
        })
    },[]);

    return(
        <div className="home">
          {
            filmes.map(function(val){

              return(
               
                  <div className="containerFilmes">
                      <img src={val.image} />
    
                      <div className='texto'>  
                        <h1>{val.titulo}</h1>
                        <br />
    
                        <ul>

                          <li><b>Ano de lançamento:</b>{val.ano}</li>
                          <li><b>Genero: </b>{val.genero}</li>
                          <li><b>Duração: </b>{val.duracao}</li>
                        </ul>
    
                        <br />
    
                        <h2>Sinopse:</h2>
                        <p>{val.descricao}</p>
    
                        <br /><br /><br /><br /><br /><br />
    
                        <div className='wrap'>
                          <Link 
                          to={'/filme'}
                          state={{ id: val.id }}
                          >
                            <button 
                              className="button" 
                            >
                            Locar
                          </button>
                        </Link>
                      </div>
    
                      </div>
    
                  </div>
              )
            })
          }
        </div>
      );
}

export default Home