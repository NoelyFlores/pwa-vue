<template>
<div class="box-insert">
<select class="browser-default" v-model="category">
<option value="" disabled selected>Categoria</option>
<option value="break">Breakfast</option>
<option value="lunch">Lunch</option>
<option value="dinner">Dinner</option>
</select>
<select class="browser-default" v-model="type">
<option value="" disabled selected>Tipo</option>
<option value="Bebida">Bebida</option>
<option value="Café">Café</option>
<option value="Hamburguesa">Hamburguesa</option>
<option value="Sandwich">Sandwich</option>
<option value="Jugo">Jugo</option>
<option value="Menu">Menu</option>
<option value="Agregado">Agregado</option>
</select>
<div class="input-field col s6">
<input id="first_name2" type="text" class="validate"  v-model="txtfood">
<label class="active" for="first_name2">Nombre</label>
</div>
<div class="input-field col s6">
<input id="first_name2" type="text" class="validate"  v-model="queantity">
<label class="active" for="first_name2">Cantidad</label>
</div>
<div class="input-field col s6">
<input id="first_name2" type="text" class="validate" v-model="price">
<label class="active" for="first_name2">Precios</label>
</div>
<p>{{message}}</p>
<div class="box-container-button">
<a @click="insert(nameButton)" class="waves-effect waves-light btn">{{nameButton}}</a>
<a @click="cancel()" v-if="nameButton == 'EDITAR'" class="waves-effect waves-light btn">CANCELAR</a>
</div>
</div>
</template>
<script>
/* eslint-disable */ 
import listTable from '@/components/listTable'
import foodFrom from '@/components/foodFrom'
import firebase from 'firebase'
import {EventBus} from '@/plugin/bus.js'

export default {
	name:'foodFrom',
	props: [],
	data(){
		return {
			txtfood: '',
			message: '',
			price: '',
			category: '',
			type: '',
			queantity: '',
			id: '',
			data: {},
			nameButton: 'AGREGAR'
		}
	},
	created(){
		// recibo evento de listTable
		EventBus.$on('data-edit', value => {
			this.data = value
			this.txtfood = this.data.name
			this.category = this.data.ctg
			this.type = this.data.ty
			this.price = this.data.pr
			this.id = this.data.id
			if(this.data !== undefined){
				this.nameButton = 'EDITAR'
			} else{	
				this.nameButton =  'AGREGAR'
			}
		})
	},
	beforeDestroy(){
    EventBus.$off()
  },
	watch: {},
	computed:{},
	methods:{
		insert(type){
			if(this.txtfood !== '' && this.price !== '' && this.category !== ''){
				const num = parseInt(this.price)
				const number = (parseInt(this.price) + 1)
				let newKey = firebase.database().ref().child('food').push().key;				
				if(number >= 1){
					// condicion si me permte agregar o modificar
					if(type === 'AGREGAR'){
					firebase.database()
					.ref('food/' + newKey)
					.set({value:this.txtfood, type: this.type, category: this.category,queantity:this.queantity,price: num, uid:newKey})
					}else{
						firebase.database()
						.ref('food/'+ this.id)
						.update({value:this.txtfood, type: this.type, category: this.category,queantity:this.queantity,price: num})
						this.nameButton = 'AGREGAR'
					}
					// limpia los inputs
					this.clean()
				}else{			
					this.message='Not number'
				}
			}else{
					this.message='Insert all description'
			}
		},
		cancel(){
			this.nameButton = 'AGREGAR'
			this.clean()
		},
		clean(){
			this.message = ''
			this.txtfood = ''
			this.price = ''
			this.category= ''
			this.type = ''
		}
	}
}
</script>
<style scoped>
.btn{
	width: 80% !important;
	margin: 10px;
}
</style>
