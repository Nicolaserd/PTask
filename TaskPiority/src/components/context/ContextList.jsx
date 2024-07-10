import PropTypes from 'prop-types';
import "./ContextList.css"
const ContextList = ({categoria,peso,onComplete,isCompleted})=>{
    const totalPeso = peso*100;
    return(
        <div className={`context-list ${isCompleted?"completed-context":""}`}>

            <p className="context-category">{categoria}</p>
            <p className='context-peso'>{`${totalPeso.toPrecision(4)} %`}</p>
            <div 
            className="icono-context--delete completado-context" 
            onClick={()=>console.log("hola")}>
                Delete
            </div>
            {!isCompleted ?
             (   <div 
                className="icono-context--add completado-context" 
                onClick={onComplete}>
                    complete
                </div>):
              (<div 
              className="icono-context--add completado-context" 
              onClick={onComplete}>
                 
              </div>)
 
            }
           
        </div>
    )
}
ContextList.propTypes={
    categoria: PropTypes.string,
    peso: PropTypes.number,
    onComplete: PropTypes.func,
    isCompleted: PropTypes.bool,

}
export default ContextList;
