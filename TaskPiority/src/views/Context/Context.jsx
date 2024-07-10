import "./Context.css"
import listContext from "../../info/context/listContext.js"
import { useState } from "react"
import AddContext from "../../components/context/AddContext.jsx"
import Search from "../../components/context/Search.jsx"
import ContextList from "../../components/context/ContextList.jsx"
const Context = ()=>{
 const contextData = listContext()
 const [contextDataNew,setContextDataNew]= useState(contextData)
 const suma = contextDataNew.reduce((cont,context)=>cont+context.puntaje,0)
 const [searchContext,setSearchContext]= useState("")
 const searchedContext = contextDataNew.filter((context)=>{
   return context.categoria.toLowerCase().includes(searchContext.toLowerCase())
 })
 const completeContext = (categoria)=>{
   const newContext =[...contextDataNew]
   const contextIndex =newContext.findIndex(
      (todo)=>todo.categoria===categoria
   )
   newContext[contextIndex].completed=true
   setContextDataNew(newContext)
 }
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
            searchedContext.map((Context)=>(
               <ContextList
                  key={Context.categoria}
                  categoria = {Context.categoria}
                  isCompleted={Context.completed}
                  peso = {Context.puntaje/suma}
                  onComplete={()=>completeContext(Context.categoria)}
                 
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