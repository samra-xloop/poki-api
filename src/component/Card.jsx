import React , {useState} from 'react'
import './Card.css'

export default function Card({pokiInfo}) {
  const [num,setNum]=useState('001')

  

  

  return (
    <>
      <div className='poki-card'>
        <h4>{`${pokiInfo.name}   #${pokiInfo.id}`}</h4>
        <img src={pokiInfo.sprites.other.home.front_default}></img>
        <div>
          <ui>
          <li>
              <span>Abilities</span>
              <span>{pokiInfo.abilities[0].ability.name}</span>
            </li>
            <li>
              <span>Weight</span>
              <span>{pokiInfo.weight}</span>
            </li>
            <li>
              <span>Height</span>
              <span>{pokiInfo.height}</span>
            </li>
          </ui>
        </div>
      </div>   
    </> 
  )
}
