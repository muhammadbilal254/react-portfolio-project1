import React from "react";

import "./style.scss";

import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_pe0uo6o", "template_lfiqqld", data, "GN0GlyFmRd5IdvYW9")
      .then((response) => {
        formSuccess();
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("Failed..", err);
      });
  };

  const formSuccess = () => {
    toast("Thanks for submitting your query");
    document.getElementById("queryForm").reset();
  };

  return (
    <div className="query-form">
      <ToastContainer />
      <form id="queryForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-feild">
          <input
            type="text"
            name="form_name"
            placeholder="Name"
            {...register("form_name", {
              required: "Name is required",
            })}
          />
          {errors.form_name?.message && (
            <p className="errors">{errors.form_name?.message}</p>
          )}
        </div>
        <div className="input-feild">
          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            {...register("reply_to", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid Email Id",
              },
            })}
          />
          {errors.reply_to?.message && (
            <p className="errors">{errors.reply_to?.message}</p>
          )}
        </div>
        <div className="input-feild">
          <input
            type="text"
            name="phone_number"
            placeholder="Phone"
            {...register("phone_number", {
              required: "Phone Number is required",
              minLength: {
                value: 8,
                message: "Phone number is Invalid",
              },
            })}
          />
          {errors.phone_number?.message && (
            <p className="errors">{errors.phone_number?.message}</p>
          )}
        </div>
        <div className="input-feild">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            {...register("subject", {
              required: "Subject Line is required",
              minLength: {
                value: 10,
                message: "minimum 10 characters long",
              },
            })}
          />
          {errors.subject?.message && (
            <p className="errors">{errors.subject?.message}</p>
          )}
        </div>
        <div className="input-feild full-width">
          <textarea
            name="message"
            className="textarea"
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 20,
                message: "minimum 20 characters",
              },
              maxLength: {
                value: 500,
                message: "maximum 500 characters",
              },
            })}
          ></textarea>
          {errors.message?.message && (
            <p className="errors">{errors.message?.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
