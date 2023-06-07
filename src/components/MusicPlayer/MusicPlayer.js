import "./MusicPlayer.css";
import MusicOption from "../MusicOption/MusicOption";
import { faPlay, faPause, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
const MusicPlayer = () => {
  return (
    <div className="flex-box-player">
      <div className="img-box">
        <img
          src="https://img.freepik.com/premium-zdjecie/kobieta-cute-anime-patrzac-na-pejzaz-miejski-noca-smutny-nastrojowy-styl-manga-lofi-renderowania-3d_717906-995.jpg?w=2000"
          alt="music img"
        />
      </div>
      <span className="title"> title </span>
      <div className="option-box">
        <MusicOption icon={faBackward} />
        <MusicOption icon={faPlay} />
        <MusicOption icon={faForward} />
      </div>
    </div>
  );
};

export default MusicPlayer;
