import { useState } from 'react';
import memeData from '../memeData';
import '../component-styles/form-styles.css';

function Form() {
  const [meme, setMeme] = useState();
  function getNewMemeImage() {
    const randomMemeIndex = Math.floor(
      Math.random() * memeData.data.memes.length
    );
    const randomMeme = memeData.data.memes[randomMemeIndex].url;
    console.log(randomMeme);
    setMeme(randomMeme);
  }

  return (
    <div className="form">
      <div className="textbox-container">
        <input type="text" placeholder="Top Line" />
        <input type="text" placeholder="Bottom Line" />
      </div>
      <button className="new-image" onClick={getNewMemeImage} type="button">
        Get a new meme image 🖼️
      </button>
      <img src={meme} alt="" />
    </div>
  );
}

export default Form;
