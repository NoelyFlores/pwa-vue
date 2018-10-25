<template>
<ul class="collection">
<li v-for="(item, index) in items" :key="index" class="collection-item"> {{item.type}} {{item.value}}</li>
</ul>
</template>
<script>
/* eslint-disable */
import firebase from 'firebase'
export default {
	name: 'waitList',
	props: ['uid'],
	data() {
		return {
			items: []
		}
	},
	created(){
		this.connection()
	},
	methods:{
		connection() {
			// Obtengo la lista de pedidos
			firebase.database().ref().child('table/'+this.uid+'/person')			
			.on('value', data => {
				const arr = data.val()
				if(arr !== null ){
					const temp = []
					Object.keys(arr).map(data => {
						// por cada pedido accedo a la informacion
						firebase.database().ref().child('food/'+ arr[data].food)
            .on('value', food => {
              temp.push(food.val())  
              this.items = temp
            })
					})
				}else {
            this.items = []
	   			}
        })
    }
  }
}
</script>
<style scoped>
	.collection {
			height: 180px;
			overflow: auto;
	}
	.collection .collection-item {
    line-height: 1rem;
    font-size: 18px;
    font-family: serif;
	}

</style>

