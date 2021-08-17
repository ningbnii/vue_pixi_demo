import * as types from './mutation-types'

export const getUserInfo = function ({commit},data) {
    commit(types.MODIFY_NAME,data)
}