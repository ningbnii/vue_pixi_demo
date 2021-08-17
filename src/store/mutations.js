import * as types from './mutation-types'

const mutations = {
    [types.MODIFY_NAME](state,data){
        state.name = data;
    },
    [types.LOGIN_IN](state,data){
        state.userToken = data;
    },
    [types.LOGIN_OUT](state){
        state.userToken = '';
    }
};

export default mutations;
