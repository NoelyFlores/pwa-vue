<template>
<ul class="collapsible">
<li  v-for ='item in items' :key ='item.uid' v-if="item.category==dataView.type" class="collection-item">
<div class="collapsible-header">
<label>{{item.type}}</label>
<label>{{item.value}}</label>
<label>{{item.queantity?item.queantity:''}}</label>
<span class="badge">
<span class="badge">S/. {{item.price}}.00</span>
<i @click="pedir(item.uid)" class="material-icons done">done</i>
</span>
</div>
</li>
</ul>
</template>
<script>
/* eslint-disable */
import firebase from "firebase"
import {EventBus} from "@/plugin/bus.js"
export default {
  name: 'product',
  props: ['dataView'],
  data(){
    return {
      items: [],
    };
  },
  created () {
    this.connection('food')
  },
  watch: {},
  computed: {},
  methods: {
    connection (db) {
      let tablesData = firebase
        .database()
        .ref()
        .child(db ? db : 'table')
      tablesData.on('value', data => {
        this.items = data.val()
      })
    },
    pedir (uid) {
      const newKey = firebase.database().ref().child('table/'+this.dataView.userId+'/person').push().key
      firebase.database()
      .ref('table/'+this.dataView.userId+'/person/' + newKey)
      .set({food: uid})
      .then(data => {
        firebase.database().ref('table/'+this.dataView.userId).update({state:'pendiente'})
      })
    }
  },
  components: {}
}
</script>
<style scoped>

.c-white {
  background-color: white;
}
.collapsible {
    margin: 0rem 1.5% 1rem 3.5% !important;
    width: 45% !important;
    float: left;
}
@media(max-width: 720px){
  .collapsible {
    width: 90% !important;
    margin: 0% 5% !important;
    float: none;
    }
}
</style>
