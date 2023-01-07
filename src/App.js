import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">BLEEDING EDGE</header>

      <div className="content">
        <p>
          On January 18th, come join us for the Canadian premiere of Michael M.
          Bilandic's <em>Happy Life</em> at Innis Town Hall in Toronto, with the
          director in attendance!
        </p>

        <p>
          Executive produced by New York cinema legend Abel Ferrara (
          <em>The Driller Killer</em>, <em>King of New York</em>,{" "}
          <em>Bad Lieutenant</em>), <em>Happy Life</em> is the debut feature of
          Michael M. Bilandic (<em>Hellaware</em>, <em>Project Space 13</em>), a
          mainstay of New York's underground DIY filmmaking scene.
        </p>

        <p>
          Happy Life stars Tom McCaffrey as Keith, the owner of New York Tunez,
          one of the last techno record stores in a rapidly gentrifying East
          Village that's more suited for hipster affectations than glow sticks.
          Owing months of rent and staring eviction in the face, Keith decides
          to put on an old school rave to raise the money he needs to keep the
          store open.
        </p>

        <p>
          Partially a comedy, and partially a meditation on aging in a city that
          constantly changes, <em>Happy Life</em> barely made a dent on its
          initial release in 2011, but served as an early launching pad for
          famed cinematographer Sean Price Williams (<em>Good Time</em>,{" "}
          <em>Funny Pages</em>), who shot it on the already defunct Sony PD150,
          as well as early acting roles for filmmaker Alex Ross Perry (
          <em>The Color Wheel</em>, <em>Her Smell</em>) and Kate Lyn Sheil (
          <em>A Wonderful Cloud</em>, <em>She Dies Tomorrow</em>).
        </p>

        <p>Innis Town Hall,2 Sussex Ave, Toronto</p>
        <p>January 18, 2023</p>

        <div className="icon">
          <a href="https://www.instagram.com/bleeding.edge.movies/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
        </div>
      </div>
      {/* <div className="video-wrap">
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
      </div> */}
      <div className="video-wrap">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            title="video-embed"
            src="https://player.vimeo.com/video/785618970?h=104c48b4a9"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <p>
          <a href="https://vimeo.com/785618970">
            Bleeding Edge Presents: Happy Life
          </a>{" "}
          from <a href="https://vimeo.com/user116836095">Alan Jones</a> on{" "}
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
      </div>
    </div>
  );
}

export default App;
