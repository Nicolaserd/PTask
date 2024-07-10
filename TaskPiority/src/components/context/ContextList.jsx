import PropTypes from 'prop-types';
import "./ContextList.css"
const ContextList = ({categoria,peso})=>{
    const totalPeso = peso*100;
    return(
        <div className='context-list'>

            <p className="context-category">{categoria}</p>
            <p className='context-peso'>{`${totalPeso.toPrecision(4)} %`}</p>
            
        </div>
    )
}
ContextList.propTypes={
    categoria: PropTypes.string,
    peso: PropTypes.number

}
export default ContextList;
