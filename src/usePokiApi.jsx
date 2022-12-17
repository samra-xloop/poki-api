import { useEffect, useState } from "react"
import axios from "axios"

export default function usePokiApi(pageNumber) {
    const [loading,setLoading]=useState(true)
    const [pokies,setPokies]=useState([])
    const [hasMore,setHasMore]=useState(false)
  
    useEffect(()=>{
        
        setLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pageNumber}&limit=20`).then(res=> {
            const result=res.data.results
            result.map(async(urls)=>{
                const pokiInfo= await axios.get(urls.url)
                console.log(pokiInfo.data)
                setPokies(prevPokies=>{
                    prevPokies= [...prevPokies, pokiInfo.data]
                    prevPokies.sort((a,b)=>a.id>b.id?1:-1)
                    return prevPokies
                })
            })
        
        setHasMore(res.data.results.length>0)
        setLoading(false)
    })
    },[pageNumber])

    return {loading, pokies, hasMore}


}
