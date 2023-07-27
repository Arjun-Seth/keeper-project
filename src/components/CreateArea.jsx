import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });




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

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputText.content} />
        <button onClick={submitInputItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
