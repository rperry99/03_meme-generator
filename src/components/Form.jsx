import { useState } from 'react';
import memeData from '../memeData';
import '../component-styles/form-styles.css';

function Form() {
  // State variables
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    memeImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getNewMemeImage() {
    const randomMemeIndex = Math.floor(
      Math.random() * allMemeImages.data.memes.length
    );

    const randomMemeUrl = allMemeImages.data.memes[randomMemeIndex].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      memeImage: randomMemeUrl,
    }));
  }

  function handleTextChange(e) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="form">
      <div className="textbox-container">
        <input
          type="text"
          placeholder="Top Line"
          onChange={handleTextChange}
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom Line"
          onChange={handleTextChange}
          name="bottomText"
        />
      </div>
      <button className="new-image" onClick={getNewMemeImage} type="button">
        Get a new meme image 🖼️
      </button>
      <div className="image-container">
        <p className="top-text meme-text">
          {meme.topText !== '' && meme.topText}
        </p>
        <p className="bottom-text meme-text">
          {meme.bottomText !== '' && meme.bottomText}
        </p>
        <img src={meme.memeImage} alt="" />
      </div>
    </div>
  );
}

export default Form;
