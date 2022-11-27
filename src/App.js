import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">BLEEDING EDGE</header>

      <div className="content">
        <p>
          On December 4, join us for Kurt Walker's <strong>s01e03</strong>
        </p>
        <p>
          A <strong>groundbreaking</strong> cyber-romance for the ages!
        </p>
        <p>
          Preceded by three <strong>excellent</strong> short films!
        </p>
        <p>
          <strong>Late Summer</strong> from <strong>Winnipeg wonder</strong>{" "}
          Ryan Steel!
        </p>
        <p>
          <strong>Death Game</strong>, a <strong>shocking</strong> tale from
          Jacqueline Kramer!
        </p>
        <p>
          <strong>Overpass</strong> will have you <strong>over the moon</strong>
          ! From Zach Litzgus and Alex Acton-Jones
        </p>
        <p>The Pilot, Second Floor, 22 Cumberland Street, Toronto</p>
        <p>Doors at 7:30pm, screening begins at 8pm, PWYC</p>
        <div className="icon">
          <a href="https://www.instagram.com/bleeding.edge.movies/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="video-wrap">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Qvp4sCEouV0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
