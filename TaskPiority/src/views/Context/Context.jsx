import "./Context.css"
import listContext from "../../info/context/listContext.js"
import { useState } from "react"
import AddContext from "../../components/context/AddContext.jsx"
import Search from "../../components/context/Search.jsx"
import ContextList from "../../components/context/ContextList.jsx"
const Context = ()=>{
 const contextData = listContext()
 const suma = contextData.reduce((cont,context)=>cont+context.puntaje,0)
 const [searchContext,setSearchContext]= useState("")
 const searchedContext = contextData.filter((context)=>{
   return context.categoria.toLowerCase().includes(searchContext.toLowerCase())
 })
 return(
    <div className="context">
      <h1>context</h1>
      <Search
         searchContext={searchContext}
         setSearchContext={setSearchContext}
      />
    
       {
         searchedContext.length===0?
         (
            <p>Nada que mostrar</p>
         ):
         (
            searchedContext.map((Context, index)=>(
               <ContextList
                  key={index}
                  categoria = {Context.categoria}
                  peso = {Context.puntaje/suma}
                 
               />
             
            ))
         )
         
       }
       <AddContext

       />
    </div>
 )
}

export default  Context;