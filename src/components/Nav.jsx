import '../component-styles/nav-styles.css';

function Nav() {
  return (
    <nav>
      <div className="nav-section--logo">
        <img
          src="/assets/troll.png"
          alt="The classic trollface"
          className="logo"
        />
        <h1 className="logo-text">Meme Generator</h1>
      </div>
      <p className="course-name">React Course - Project 3</p>
    </nav>
  );
}

export default Nav;
