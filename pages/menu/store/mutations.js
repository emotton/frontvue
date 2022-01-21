const mutations = {
    formulario: (state, payload) => {
        state.formLogin = payload;
    },
    proccessarResponse: (state, payload) => {
        state.logado = payload.data ? payload.data : null;
    },
  
    apiResponse: (state, payload) => {
        state.response = payload;
    },
   
};

export default mutations;
