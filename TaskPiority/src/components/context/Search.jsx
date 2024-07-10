import PropTypes from 'prop-types';
import "./Search.css"
const Search = ({searchContext,setSearchContext})=>{
    const handleClick = () => {
        // Enfoque automático en el input cuando se hace clic en el contenedor
        document.getElementById('searchInput').focus();
    };


    return(
        <div className="container-search" onClick={handleClick}>
         <span className='img-search spam-search'></span>
        <input
        id="searchInput"
        className='input-search'
        placeholder="Familia"
        type='text'
        value={searchContext}
        onChange={(event)=>{
            setSearchContext(event.target.value)
        }}
        >
        </input>
        <span className='img-search spam-search'></span>
        </div>
   
    )
}

Search.propTypes ={
    searchContext: PropTypes.any,
    setSearchContext: PropTypes.any,
}
export default Search