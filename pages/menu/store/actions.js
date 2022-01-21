// eslint-disable-next-line import/no-named-as-default
import Axios from "axios";

export const formulario = ({ commit }, payload) => {
  commit("formulario", payload);
};

export const api = ({ commit }, payload) => {
  const url = payload.url;
  delete payload.url;
  return Axios.post(url, payload)
    .then(function (response) {
      commit("apiResponse", response);
    })
    .catch(function (error) {
      throw error;
    });
};

export const proccessarResponse = ({ commit }, payload) => {
  commit("proccessarResponse", payload);
};


