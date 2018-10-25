<template>
<div class="row content">
<a v-for="(item, index) in items" :key="item" class="waves-effect waves-light btn-large request" @click="viewAdmin(item)">{{index}}</a>
<div v-if="view == false">
<list-food></list-food>
</div>
<div v-else>
<list-table></list-table>
</div>
</div>
</template>
<script>
/* eslint-disable */ 
import listTable from '@/components/table'
import listFood from '@/components/food'
import titleButton from '@/plugin/titles.js'
export default {
	name:'admin',
	props: [],
	data(){
		return {
			view: false,
			message: '',
		}
	},
	created(){
		// nombre de botones segun el admin y employed js
		Object.keys(titleButton).map(element => {
			if(element === 'admin'){
				this.items = titleButton[element]
			}
		});	
	},
	watch: {},
	computed:{},
	methods:{
		viewAdmin(state){
			if(state === 'table'){
				this.view = true
			}
			else if(state === 'food'){
				this.view = false
			}			
		}
	},
	components: {
	 'list-table': listTable,
	 'list-food': listFood,
  }
}
</script>
<style scoped>
.row {
    margin-top: 20px;	
	}
.local{
  margin-top: 0px !important;
}
</style>
