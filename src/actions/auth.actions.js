import axios from "../apis/axios"
import history from "../history.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PageRoutes } from "../routes.js";
import {
  SIGN_UP,
  SIGN_IN,
} from "./types";
export const sign_up = (formValues) => async (dispatch) => {
    axios
      .post(`auth`, formValues, {
        headers: { Authorization: `Bearer ${process.env.API_KEY}` },
      })
      .then((response) => {
        dispatch({ type: SIGN_UP, payload: response.data });
        window.history.back();
        toast.success("User has been created.", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong. Please open a ticket.", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      });
  };

  export const sign_in = (formValues) => async (dispatch) => {
    axios
      .post(`auth`, formValues, {
        headers: { Authorization: `Bearer ${process.env.API_KEY}` },
      })
      .then((response) => {
        console.log(response.data);
        if(response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        dispatch({ type: SIGN_IN, payload: response.data });
        window.history.back();
        toast.success("User has been created.", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong. Please open a ticket.", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      });
  };

  export const sign_out = () => async (dispatch) => {
    localStorage.removeItem("user");
  };