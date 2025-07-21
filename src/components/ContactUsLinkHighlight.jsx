import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const ContactUsLinkHighlight = () => {
  return (
    <div className="contactHighlightContainer">
      <div className="highlightText">
        <div>Your Trusted Partner in Security </div>
        <div>& Housekeeping Solutionss</div>
      </div>
      <div className="contactUsButton">
        <Link to="/contactus">
          <Button variant="contained">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};
