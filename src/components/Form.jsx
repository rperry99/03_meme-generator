import { useState } from 'react';
import memeData from '../memeData';
import '../component-styles/form-styles.css';

function Form() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    memeImage: memeData.data.memes[14].url,
  });

  function getNewMemeImage() {
    const randomMemeIndex = Math.floor(
      Math.random() * memeData.data.memes.length
    );
    const randomMeme = memeData.data.memes[randomMemeIndex].url;
    setMeme({
      ...meme,
      memeImage: randomMeme,
    });
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
      <img src={meme.memeImage} alt="" />
    </div>
  );
}

export default Form;
