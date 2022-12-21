import React, { useEffect , useState, useRef, useCallback} from 'react'
import Card from './component/Card'
import './App.css'
import usePokiApi from './usePokiApi'
import Loader from './component/Loader'

export default function App() {

  const [pagNumber, setPageNumber]=useState(0)
  const {loading,pokies,hasMore}=usePokiApi(pagNumber)

  const observer=useRef()
  const lastPokiElement=useCallback(node=>{
    if(loading) return
    if (observer.current) observer.current.disconnect()
    observer.current=new IntersectionObserver(entries=>{
      if (entries[0].isIntersecting && hasMore){
        setPageNumber(prevPageNumber => {
          return prevPageNumber = prevPageNumber + 20 
        })
      }
    })
    if (node) observer.current.observe(node)
  },[loading,hasMore])

  return (
    <>
      <div className='poki-gallary'>
      {
        pokies && pokies.map((poki,i)=>{
          if (pokies.length === i +1){
            console.log("han shi hai ")
            return <div ref={lastPokiElement} key={i} ><Card  pokiInfo={poki}></Card></div>
          }else{
            return <div key={i} ><Card  pokiInfo={poki}></Card></div>
          }
        })
      }
      </div>
      <div >{loading && <Loader displayMessage={'Loading...'}></Loader>}</div>
      <div >{!hasMore && <Loader displayMessage={"No more Pokies"}></Loader>}</div>
    </>
  )
}
