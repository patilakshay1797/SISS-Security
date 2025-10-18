import SendIcon from "@mui/icons-material/Send";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AnimateElement from "./AnimateElement";
import { useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ContactUsForm = () => {
  const formRef = useRef();
  // const isNameEntered =
  const [isSendingMsg, setIsSendingMsg] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  const sendEmailMsg = (event, inputFormData) => {
    try {
      emailjs
        .send("siss-security-service", "template_i212dre", inputFormData)
        .then((response) => {
          event.target.reset();
          setIsSendingMsg(false);
          if (response.status === 200) {
            setShowSuccess(true);
          } else {
            setShowError(true);
          }
          setIntForProgress();
        })
        .catch((error) => {
          setIsSendingMsg(false);
          setShowError(true);
          setIntForProgress();
        });
    } catch {
      setIsSendingMsg(false);
      setShowError(true);
      setIntForProgress();
    }
    let setInt;
    // setTimeout(() => {
    //   event.target.reset();
    //   setIsSendingMsg(false);
    //   // setShowSuccess(true);
    //   setShowError(true);
    //   setIntForProgress();
    // }, 3000);
  };

  function setIntForProgress() {
    let int = setTimeout(() => {
      setShowSuccess(false);
      setShowError(false);
    }, 5000);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSendingMsg(true);
    const formData = new FormData(e.target);
    const inputFormData = Object.fromEntries(formData.entries());
    sendEmailMsg(e, inputFormData);
  };
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
          <form ref={formRef} onSubmit={sendEmail} className="form">
            <TextField
              id="outlined-basic"
              required
              label="Name"
              variant="outlined"
              name="name"
              disabled={isSendingMsg}
            />
            <TextField
              id="outlined-basic"
              required
              type="email"
              label="Email"
              variant="outlined"
              name="emailTo"
              disabled={isSendingMsg}
            />
            <TextField
              id="outlined-basic"
              required
              label="Phone number"
              variant="outlined"
              name="phoneNumber"
              type="number"
              disabled={isSendingMsg}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Tell us your requirements"
              required
              multiline
              maxRows={6}
              variant="standard"
              name="requirement"
              disabled={isSendingMsg}
            />

            <div className="sendButton">
              <Button variant="contained" type="submit" disabled={isSendingMsg}>
                <span>{isSendingMsg ? "Sending...." : "Send a message"}</span>
                {isSendingMsg && <CircularProgress></CircularProgress>}
                {!isSendingMsg && <SendIcon></SendIcon>}
              </Button>
            </div>
          </form>
          <div className="mailFeedBack">
            {showSuccess && (
              <AnimateElement
                animationClass={"transitionBtmToTop"}
                propThreshold={0.2}
              >
                <div className="successMsg resultMsg">
                  <div className="flexBox">
                    <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                    <span>
                      We have received your message, our team will contact you
                      as soon as possible.
                    </span>
                  </div>
                  {/* <progress value={progressValue} max={3} /> */}
                </div>
              </AnimateElement>
            )}
            {showError && (
              <AnimateElement
                animationClass={"transitionBtmToTop"}
                propThreshold={0.2}
              >
                <div className="errorMsg resultMsg">
                  <div className="flexBox">
                    <ErrorOutlineIcon></ErrorOutlineIcon>
                    <span>
                      Sorry for inconvience, your message didn't reach us,
                      Please try again.
                    </span>
                  </div>
                  {/* <progress value={progressValue} max={3} /> */}
                </div>
              </AnimateElement>
            )}
          </div>
        </div>
      </div>
    </AnimateElement>
  );
};

export default ContactUsForm;
