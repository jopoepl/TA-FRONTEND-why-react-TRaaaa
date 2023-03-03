
function ColorBox(props){

    let style = 
       { backgroundColor: props.color}
    return (
        <>
    <div className="color-box" style={style}></div>
    </>
   )
}
export default ColorBox;