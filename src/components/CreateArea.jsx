import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

 const [note,setNote]=useState({
  title:"",
  content:""
 });
 const [click,setClick]=useState(false);

 

 function handleChange(event){
  const {value,name}=event.target
  setNote(prevNote=>{
    
    return {
      ...prevNote,
      [name]:value
    }
     
  })
 }

 function submitNote(event){
  props.onAdd(note)
  setNote({
    title:"",
    content:""
  })
  event.preventDefault();
 }
 function starter(){
  setClick(true);
 }

 

  return (
    <div>
      <form className="create-note " onClick={starter}>
        <input 
        style={click ? {display:""} : {display:"none"}}
        onChange={handleChange} 
        value={note.title} 
        name="title" 
        placeholder="Title"  />

        <textarea 
        onChange={handleChange} 
        value={note.content} 
        name="content" 
        placeholder="Take a note..." 
        rows={click ? "3" : "1"} />

        <Zoom in={click ? true : false }>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
