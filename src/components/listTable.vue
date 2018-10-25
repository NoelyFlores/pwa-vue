<template>
<ul class="collapsible content local">
<li v-for ='item in items' :key ='item.uid' class="collection-item">
<div class="collapsible-header">
<div v-if="dataOption =='food'">
<label>{{item.category}}</label>
<label>{{item.type}}</label>
</div>
<label v-if="alternative == 'table'">Mesa</label>
<label>{{item.value}}</label>
<span class="badge">
<div v-if="dataOption == 'food'" class="optionFood">
<span class="badge">S/. {{item.price}}.00</span>
<i @click="edit({
id:item.uid,
ctg:item.category,
ty:item.type,
name:item.value,
pr:item.price})"
class="material-icons add">edit</i>
</div>
<label v-if="alternative == 'table'" v-bind:class="[item.state]" >{{item.state}}</label>
<i v-if="alternative == 'table'" class="material-icons add" exact><router-link :to="{ name: 'order', params: { userId: item.uid, num: item.value }}">add</router-link></i>
<i @click="deleteTable(item.uid, dataOption?dataOption:'table')" class="material-icons delete">delete</i>
</span>
</div>
</li>
</ul>
</template>
<script>
/* eslint-disable */ 
import firebase from 'firebase'
import {EventBus} from '@/plugin/bus.js'
export default {
	name:'client',
	props: ['dataOption'],
	data(){
    return {
			items: [],
      color: '',
			state: false,
			stateView: 'food',
			alternative: this.dataOption?this.dataOption:'table' // por defecto muestra la tabla para mesas
    }
	},
	created(){
		this.connection(this.dataOption)
	},
	watch: {
		dataOption: function (newVal, oldValue) {
			this.stateView = newVal
			// berifica el estado de la informacion que va mostrar
		}
	},
	computed:{},
	methods:{
		connection (db) {
			// por defecto informacion de las mesas
			let tablesData = firebase.database().ref().child(db?db:'table')		
			tablesData.on('value', data => {
				this.items = data.val()				
			})
		},
		deleteTable(uid, db){
		  firebase.database().ref(db +'/' + uid).remove()
		},
		edit(items){
			// emito evento a foodFrom
			EventBus.$emit('data-edit', items)
		}
	},
	components:{}
}
</script>
<style>
.optionFood{
	display: inline-block;
}
span.badge {
	float: none;
	color: #b1a9aa;
}
	.c-white {
		background-color: white
	}
	.material-icons input{
		width: 70% !important;
	}
	.router-link-active {
    	color: #FFC200;
	}
	.pendiente, .ocupado, .desocupado{		
    	padding: .2em .5em;
	}
	.pendiente, .ocupado{		
    	color: #fff !important;
	}
	.pendiente{
	  background:#ffc200;
	}
	.ocupado{
 	  background: #8BC34A;
	}
	.desocupado{
	  background: #fff;
	  color: #8c8787 !important;
	}
</style>

