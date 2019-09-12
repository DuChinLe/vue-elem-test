/*
 * @Description: user
 * @Author: Duchin/梁达钦
 * @Date: 2019-09-11 17:21:13
 * @LastEditTime: 2019-09-11 17:26:18
 * @LastEditors: Duchin/梁达钦
 */

const user = window.localStorage.getItem('user')

const state = {
  token: '',
  user: user ? JSON.parse(user) : ''
}

const mutations = {

}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
