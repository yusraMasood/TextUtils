import React, { useState } from "react";

function TextForm(props) {
  const [paragraph, setParagraph] = useState("");
  const [count, setcount] = useState(0);
  const handleCick = () => {
    // setText(text)
    let text = paragraph.toLocaleUpperCase();
    setParagraph(text);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLowCick = () => {
    let text = paragraph.toLocaleLowerCase();
    setParagraph(text);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleSyllablesClick = () => {
    // paragraph.forof((value) => {
    //   console.log("value");
    // });
    let counter = 0;
    for (let x of paragraph) {
      //   console.log("x", x);
      if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
        counter++;
      }
    }
    setcount(counter);
    props.showAlert("Vowels's counted   ", "success");
  };
  const handleOnChange = (event) => {
    setParagraph(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = paragraph;
    window.speechSynthesis.speak(msg);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied to clipboard", "success");
  };
  const handleRemoveSpaces = () => {
    let newText = paragraph.split(/[ ]+/);
    setParagraph(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };
  const handleClearText = () => {
    setParagraph("");
    props.showAlert("Text is cleared  ", "success");
  };

  return (
    <div className={`mb-3 text-${props.mode === "light" ? "dark" : "light"}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          // placeholderText=""
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
          value={paragraph}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-warning mx-2 my-2" onClick={handleCick}>
        Convert to Uppercase{" "}
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowCick}>
        Convert to LowerCase{" "}
      </button>
      <button className="btn btn-warning mx-2 my-2" onClick={handleCopy}>
        Copy Text{" "}
      </button>

      <button className="btn btn-primary mx-1" onClick={handleSyllablesClick}>
        Count Vowels{" "}
      </button>
      <button
        type="submit"
        onClick={speak}
        className="btn btn-warning mx-2 my-2"
      >
        Speak
      </button>
      <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>
        Remove Extra Spaces{" "}
      </button>
      <button
        type="submit"
        onClick={handleClearText}
        className="btn btn-warning mx-2 my-2"
      >
        Clear Text
      </button>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {paragraph.split(" ").length - 1} words {paragraph.length} charcters
        </p>
        <p>{0.008 * paragraph.split(" ").length} minutes to read</p>
        <p>{count} Vowels</p>
        <h2>Preview</h2>
        <p>
          {paragraph === "" ? "Enter Something to preview here" : paragraph}
        </p>
      </div>
    </div>
  );
}

export default TextForm;
