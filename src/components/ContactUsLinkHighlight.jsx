import Button from "@mui/material/Button";
import { HashLink as Link } from "react-router-hash-link";
import { ProviderMethodContext } from "../MyFunction";
import { useContext } from "react";

export const ContactUsLinkHighlight = () => {
  const { myFunction } = useContext(ProviderMethodContext);
  return (
    <div className="contactHighlightContainer">
      <div className="highlightText">
        <div>Your Trusted Partner in Security </div>
        <div>& Housekeeping Solutions</div>
      </div>
      <div className="contactUsButton">
        <Link to="/contactus" onClick={() => myFunction("contactus")}>
          <Button variant="contained">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};
