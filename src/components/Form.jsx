import '../component-styles/form-styles.css';

function Form() {
  return (
    <section className="form">
      <div className="textbox-container">
        <input type="text" placeholder="Top Line" />
        <input type="text" placeholder="Bottom Line" />
      </div>
      <input type="submit" value="Get a new meme image 🖼️" className="submit" />
    </section>
  );
}

export default Form;
