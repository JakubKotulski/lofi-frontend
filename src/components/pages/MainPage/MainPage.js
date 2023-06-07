import "./MainPage.css";
import MusicPlayer from "../../MusicPlayer/MusicPlayer";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="player">
        <MusicPlayer />
      </div>
      <div className="content-side"></div>
    </div>
  );
};

export default MainPage;
