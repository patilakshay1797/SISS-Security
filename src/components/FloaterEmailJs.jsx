import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import "../assets/css/floaterEmailJs.scss";
import ContactUsForm from "./ContactUsForm";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const FloaterEmailJs = () => {
  const [isEmailFloaterOpened, setIsEmailFloaterOpened] = useState(false);
  function openOrCloseFloaterMsg() {
    setIsEmailFloaterOpened(!isEmailFloaterOpened);
  }
  return (
    <div className="floaterEmailWrapper">
      <div className="emailIcon">
        {isEmailFloaterOpened ? (
          <CloseOutlinedIcon
            onClick={openOrCloseFloaterMsg}
          ></CloseOutlinedIcon>
        ) : (
          <EmailIcon onClick={openOrCloseFloaterMsg}></EmailIcon>
        )}
      </div>

      <div
        className={`emailFloaterFormWrapper ${
          isEmailFloaterOpened ? "openFloater" : "closeFloater"
        }`}
      >
        <ContactUsForm></ContactUsForm>
      </div>
    </div>
  );
};

export default FloaterEmailJs;
