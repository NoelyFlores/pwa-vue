<template>
  <div class="row">
    <a v-for="(item, index) in items" :key="item" class="waves-effect waves-light btn-large request" @click="viewType(item)">{{index}}</a>
   <span class="badge"><h5>M{{numTable}}</h5></span>
  </div>
</template>
<script>
/* eslint-disable */
import {EventBus} from "@/plugin/bus.js"
import titleButton from '@/plugin/titles.js'
export default {
	name: 'button',
	props: ['numTable'],
	data(){
		return {
			items: []
		}
	},
	created(){
		Object.keys(titleButton).map(element => {
			if(element === 'employed'){
				this.items = titleButton[element]
			}
		});		
	},
	watch: {
	},
	computed:{
	},
	methods:{
		// emito un evento al componente content *padre
		viewType(value) {
		EventBus.$emit('select-type', value)
		}
	},
	components:{}
}
</script>
<style scoped>
.row {
    margin-top: 20px;
}
span.badge {
    position: fixed;
    margin-top: 48%;
    margin-left: -100px;
    z-index: 1;
    bottom: 115px;
}
h5 {
    color: #fff;
    border-radius: 100%;
    background: #ffc200;
    padding: 3.8em;
}
.request{
	width: 30% !important;
	margin: 0px 3px;
}
@media (max-width: 480px){
	h5{
			padding: 3em;
	}
	span.badge{
    margin-left: -111px;
    bottom: 90px;
	}
}


</style>