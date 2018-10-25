<template>
<div class="content">
<button-control :numTable="numTable"></button-control>
<div class= "title">
<h5>{{typeLanguaje}}</h5>
</div>
<product-food :dataView="{type:type, userId:uidTable}"></product-food>
<request-list :uidTable="uidTable"></request-list>
</div>
</template>
<script>
/* eslint-disable */
import button from '@/components/controlButton'
import product from '@/components/product'
import request from '@/components/request'
import {EventBus} from "@/plugin/bus.js"
export default {
	name:'order',
	props: ['typeView'],
	data(){
		return {
			food:'food',
			type:'break',
			uidTable: this.$route.params.userId,
			numTable: this.$route.params.num,		
		}
	},
	created(){
		// recibo del componente controlButton
		EventBus.$on('select-type', val => {
		this.type = val;
		})	
	},
  	beforeDestroy(){
     EventBus.$off()
  	},
	watch: {
	},
	computed:{
	typeLanguaje: {
		get: function(){
		if(this.type === 'break'){
			return 'Desayuno de hoy'
		}else if(this.type === 'lunch'){
			return 'Almuerzo de hoy'
		}else{
			return 'Cena para hoy'
		}
		}
	}
	},
	methods:{

	},
	components:{'button-control':button, 'product-food':product, 'request-list': request}
}
</script>
<style>

</style>