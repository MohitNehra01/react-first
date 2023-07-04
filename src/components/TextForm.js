import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase! ", "success")
    }
    
    const handleLWClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase! ", "success")
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Clear", "success")
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handlecopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        
        props.showAlert("Text Copy!", "success")
    }
    
    const  handleExtraSpace = ()=>{
        let regex = / [ ]+/;
        let newText = text.split(regex);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Space", "success")
    }

    const [text , setText] = useState('')

    // text = "new text" // wrong way to change the value
    // setText("new value"); // coorect way to change the state
    return (
        <>
        <div className="container" style={{color : props.mode === 'dark'? 'white' : 'black'}}>

                <h1>{props.heading}</h1> 
            <div className = "mb-3">
                <textarea className = "form-control" id="myBox" rows = "8" value = {text} onChange={handleOnChange}  style ={ {
                    backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color : props.mode === 'dark'? 'white' : 'black'}
                } ></textarea>
                <button className = "btn btn-primary" onClick={handleUpClick}>Convert to Upercase</button>

                <button className = "btn btn-primary m-3" onClick={handleLWClick}>Convert to Lower Case</button>

                <button className = "btn btn-primary m-3" onClick={handleClearClick}>Clear text</button>
                <button className = "btn btn-primary m-3" onClick={handlecopy}>Copy text</button>
                <button className = "btn btn-primary m-3" onClick={handleExtraSpace}>remove Extra Space</button>

                
            </div>
        </div>

        <div className="container my-3" style={{color : props.mode === 'dark'? 'white' : 'black'}} >
            <h1>Your text summary</h1>
            <p>{text.split(" ").length -1} words and {text.length} characters</p>
            <p> {(0.008 * (text.split(" ").length -1)) * 60 } Seconds to read</p>           
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}


