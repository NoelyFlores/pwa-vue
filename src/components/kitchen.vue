<template>
  <div class="row content">
<div class= "titletwo">
      <h5>Lista de Mesas</h5>
    </div>
    <div v-for ='item in items' :key ='item.uid' class="col s12 m6"  v-bind:class="[item.state]">
      <div class="card blue-grey darken-1">
        <div class="card-content black-text">
          <span class="card-title">Mesa {{item.value}}</span>
          <wait-list :uid="item.uid"></wait-list>
        </div>
        <div class="card-action">
          <a @click="changeState(item.uid)">SERVIDO</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import firebase from 'firebase'
import waitList from '@/components/waitList'
import {EventBus} from '@/plugin/bus.js'
export default {
	name:'kitchen',
	props: [],
	data(){
		return {
			items: []
		}
	},
	created(){
		this.connection();
	},
	watch: {},
	computed:{},
	methods:{
		connection() {
			// lista de mesas
			firebase.database().ref().child('table')		
			.on('value', data => {
				this.items = data.val()
			})
		},
		changeState(uidTable) {
		// cambiar el estado de la mesa a ocupado!!!
		firebase.database().ref('table/'+uidTable).update({state:'ocupado'})
		}
  },
  components: {'wait-list': waitList}
}
</script>
<style scoped>
.ocupado {
		text-decoration: line-through
}
.ocupado, .desocupado, .pendiente{
  background: #fff;
  color: #8c8787 !important
	}
.titletwo {
    width: 96% !important;
    margin: 2% 1% 2% 1%;
		border-bottom: .5px solid #fec81d;
}
.collection .collection-item {
  font-size: 18px;
  font-family: serif;
}
.card .card-content .card-title {
    color: #ffc200;
}
.row .col.m6 {
  width: 25%
}
.blue-grey.darken-1 {
  background-color: #9e9e9e0d !important
}
.card-content {
  padding: 9px 18px !important
}
.card .card-action:last-child {
    background: #8BC34A;
}
.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating){
	color: #fff !important;
	cursor: pointer;
}
.collection .collection-item {
    line-height: 1rem !important;
}
.card .card-action {
    padding: 9px 24px !important;
}
@media(max-width: 1100px){
	.row .col.m6 {
    width: 33.3%
  }
}
@media (max-width: 720px){
	.row .col.m6 {
			width: 90%;
			margin: 0% 5%;
	}
	.titletwo {
    width: 100% !important;
		}
}
</style>
