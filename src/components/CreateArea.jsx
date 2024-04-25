import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);




  function handleChange(event) {
    const value = event.target.value
    const name = event.target.name
    // console.log(newValue);
    // console.log(inputValue);
    setInputText((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value
      }
      // if (name === "title") {
      //   return {
      //     title: value,
      //     content: prevInputs.content
      //   };
      // }
      // else if (name === "content") {
      //   return {
      //     title: prevInputs.title,
      //     content: value
      //   }
      // }
    })
  }


  function submitInputItem(event) {
    props.onAdd(inputText);
    setInputText({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title} />}

        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? "3" : "1"} value={inputText.content} />
        <Zoom in={true}>
          <Fab onClick={submitInputItem}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
