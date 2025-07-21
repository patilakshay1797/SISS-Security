import SendIcon from "@mui/icons-material/Send";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AnimateElement from "./AnimateElement";

const ContactUsForm = () => {
  return (
    <AnimateElement animationClass={"transitionBtmToTop"} propThreshold={0.3}>
      <div className="contactFormContainer">
        <div className="formHeadingContainer">
          <div className="reachUs">
            <ContactMailIcon></ContactMailIcon>
            <span>Reach out to our team</span>
          </div>
          <div className="fillOutForm">
            Please fill out the form below, and a member of our team will get
            back to you as soon as possible.
          </div>
        </div>
        <div className="formContainer">
          <div className="form">
            <TextField
              required
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Tell us your requirements"
              multiline
              maxRows={6}
              variant="standard"
            />
          </div>
          <div className="sendButton">
            <Button variant="contained">
              <span>Send a message</span>
              <SendIcon></SendIcon>
            </Button>
          </div>
        </div>
      </div>
    </AnimateElement>
  );
};

export default ContactUsForm;
