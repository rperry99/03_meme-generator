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
