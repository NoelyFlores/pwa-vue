// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'

Vue.config.productionTip = false
var config = {
  apiKey: 'AIzaSyATZyobEFa4ne_v8D4edTLDqIBmte6D-54',
  authDomain: 'foodmapfirebase.firebaseapp.com',
  databaseURL: 'https://foodmapfirebase.firebaseio.com',
  projectId: 'foodmapfirebase',
  storageBucket: 'foodmapfirebase.appspot.com',
  messagingSenderId: '145122510510'
}
firebase.initializeApp(config)
firebase.auth().signInWithEmailAndPassword('burger@gmail.com', 'burger123')
  .then()
  .catch()
let app
firebase.auth().onAuthStateChanged((e) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      render: h => h(App),
      router
    })
  }
})
