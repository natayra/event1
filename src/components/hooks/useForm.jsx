import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const useForm = () => {
  const [success, setSuccess] = useState("not_sent_yet");
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess("sending");
    emailjs
      .sendForm(
        "service_eftphki",
        "voii_form",
        form.current,
        "_pBxOu54fGe7sgp4W"
      )
      .then((result) => {
        if (result.status === 200) {
          setSuccess("sent_successfully");
        }
      })
      .then((error) => {
        if (error !== undefined) {
          setSuccess("sent_with_error");
        }
      });
  };

  return {
    form,
    success,
    sendEmail,
  };
};
