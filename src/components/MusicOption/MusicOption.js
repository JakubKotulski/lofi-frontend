import "./MusicOption.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MusicOption = ({ icon }) => {
  return (
    <div className="icon-box">
      <FontAwesomeIcon className="icon-style" icon={icon} />
    </div>
  );
};

export default MusicOption;
