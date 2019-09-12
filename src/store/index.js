/*
 * @Description: store init
 * @Author: Duchin/梁达钦
 * @Date: 2019-09-11 10:47:20
 * @LastEditTime: 2019-09-11 17:27:28
 * @LastEditors: Duchin/梁达钦
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)

// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

const store = new Vuex.Store({
  user
  // getters
})

export default store
