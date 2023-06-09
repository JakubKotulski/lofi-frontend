import "./MainPage.css";
import MusicPlayer from "../../MusicPlayer/MusicPlayer";
import SearchBar from "../../SearchBar/SearchBar";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="player">
        <MusicPlayer />
      </div>
      <div className="content-side">
        <SearchBar />
      </div>
    </div>
  );
};

export default MainPage;
