import axios from "../apis/axios"
import history from "../history.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PageRoutes } from "../routes.js";
import {
  CREATE_USER,
  DELETE_USER,
  GET_ALL_USERS,
  GET_USER,
  UPDATE_USER,
} from "./types";

const API_URL = "http://localhost:8080/api"

// CREATE
export const create_user = (formValues) => async (dispatch) => {
  axios
    .post(`users`, formValues, {
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    })
    .then((response) => {
      dispatch({ type: CREATE_USER, payload: response.data });
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

// GET ONE
export const get_user = (id) => async (dispatch) => {
  axios
    .get(`users/${id}`, {
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    })
    .then((response) => {
      dispatch({ type: GET_USER, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET ALL
export const get_users = () => async (dispatch) => {
  axios
    .get(`users/`, {
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    })
    .then((response) => {
      dispatch({ type: GET_ALL_USERS, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

// // GET ALL BY CUSTOMER_ID
// export const get_users_by_customer_id = (customer_id) => async (dispatch) => {
// 	axios
// 		.get(`users/customer/${customer_id}`)
// 		.then((response) => {
// 			dispatch({ type: GET_ALL_USERS, payload: response.data });
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// };

// UPDATE
export const update_user = (formValues) => async (dispatch) => {
  axios
    .put(`users/${formValues.id}`, formValues, {
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    })
    .then((response) => {
      dispatch({ type: UPDATE_USER, payload: response.data });
      window.history.back();
      toast.success("User has been updated.", {
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

// DELETE ONE
export const delete_user = (id, deleted, setDeleted) => async (dispatch) => {
  axios
    .delete(`users/${id}`, {
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    })
    .then((response) => {
      dispatch({ type: DELETE_USER, payload: response.data });
      setDeleted(!deleted);
      toast.success("User has been deleted.", {
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
