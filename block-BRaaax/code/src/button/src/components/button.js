


function Button(props){
    function getStyles(){
        let {type = 'primary', size = 'small'} = props;
        return `btn btn-${type} btn-${size}`
    }
   return ( <>
   <button 
   className={getStyles()}
   disabled={props.disabled}
   onClick={props.onClickHandler}
   >{props.label || `Button`}</button>
    </>
   )
}

export default Button