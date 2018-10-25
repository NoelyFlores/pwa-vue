<template>
<div class="row">
<div class= "title">
<h5>Insertar Mesas</h5>
</div>
<form class="col s12">
<div class="box-insert">
<div class="box-container-txt">
<input  v-model="txtNumber" @keyup.enter="insert()" type="text" placeholder="Number table">
<p>{{message}}</p>
</div>
<div class="box-container-button">
<span @click="insert()" ><i class="material-icons add">add</i></span>
</div>
</div>
</form>
<div class="box-list">
<list-mesa dataView="table"></list-mesa>
</div>
</div>
</template>
<script>
/* eslint-disable */ 
import listTable from '@/components/listTable'
import firebase from 'firebase'
export default {
	name:'table',
	props: [],
	data(){
		return {
			txtNumber: '',
      message: '',
		}
	},
	created(){},
	watch: {},
	computed:{},
	methods:{
		insert(){
			if(this.txtNumber !== ''){
				const num = parseInt(this.txtNumber)
				let newKey = firebase.database().ref().child('table').push().key;
				if((parseInt(this.txtNumber) + 1) >= 1){
					firebase.database().ref('table/' + newKey).set({value:num, state: 'desocupado', uid:newKey})
					this.message = ''
					this.txtNumber = ''
				}else{				
					this.message='Not number'
				}
			}else{
				this.message='Insert a number of table'
			}
		}
	},
	components: {
	 'list-mesa': listTable
  }
}
</script>
<style>
form p{
	text-align: center !important;
}
.box-container-txt {
  float: left;
  width: 100%;
	height: 50px;
}

@media (max-width: 720px){
	.box-container-txt {
		width: 75%;
	}
	.collapsible {
		height: auto;
	}
}
</style>
