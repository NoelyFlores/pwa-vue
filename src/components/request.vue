<template>
  <table>
    <thead>
      <tr class="title">
        <th>Producto</th>
        <th>Precio</th>
        <th>Opción</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td><label>{{item.type}}</label><label>{{item.value}}</label></td>
        <td>S/. {{item.price}}.00</td>
        <td><i @click="remove(item.index,item.uid)" class="material-icons delete">delete</i></td>
      </tr>
      <tr class="total">
        <td>TOTAL</td>
        <td>S/. {{total}}.00</td>
      </tr>
    </tbody>
    <input @click="send(items,total)" v-if="items.length >= 1" type="button" :disabled="stateButton" value="Finalizar" class="btn-large send">
    <i v-if="message == true" class="material-icons donetwo">done</i>
  </table>
</template>
<script>
/* eslint-disable */
import firebase,{ app } from 'firebase'
export default {
	name:'request',
	props: ['uidTable'],
	data(){
    return{
      items: [],
      idTable: '',
      total: 0.00,
      stateButton:true,
      message: false,
    }
	},
	created(){
    this.connection(this.uidTable)
    // verifico el estado del pedido
      firebase.database().ref().child('table/'+this.uidTable + '/state/')
      .on('value', state => {
        if(state.val() === 'ocupado'){
          this.stateButton = false
          this.message = true
        }else{
          this.message = false
        }
      })
  },
	watch: {
    // calculo la cuenta a pagar
   items: function () {  
     this.total = 0
      this.items.map(data => {
        this.total += data.price     
      })
    }
  },
	computed:{ 
  },
	methods:{
    connection(uid){      
      let tablesData = firebase.database().ref().child('table/'+uid+'/person')			
			tablesData.on('value', data => {
        const element = data.val()
        if(element !== null ){
          const temp = []                   
            Object.keys(element).map(data => {
            firebase.database().ref().child('food/'+ element[data].food)
            .on('value', food => {
              temp.push(food.val())
              // creo una propiedad indice para eliminar la posicion
              Object.defineProperty(temp[temp.length-1], 'index', {value:temp.length, writable:true, configurable:true, enumerable:true} )
              this.items = temp
              })
            })
        }else{
          this.items = []
          // si no hay ningun elemento en pedidos actualizo el estado de la mesa 
          // a desocupado
          firebase.database().ref('table/'+uid).update({state:'desocupado'})
        }
			})
    },
    remove(index){
      // elimino el pedido por la posicion en la lista
      //el indice lo agrege al momento de llamar los datos en connection
      firebase.database().ref('table/'+this.uidTable+'/person')
      .once('value', data => {   
        firebase
        .database()
        .ref('table/'+ this.uidTable+'/person/'+ Object.keys(data.val())[index-1])
        .remove()  
      })
    },
    send(items, total) {
      // almaceno los datos del pedido segun la fecha actual
      const dt = new Date()
      const date = dt.getDate() + '-' + (dt.getMonth()+1) + '-' + dt.getFullYear()
      const key = firebase.database().ref().child('kitchen/' + date + '/' + this.uidTable).push().key
      // retorno un array con todos los uid
      const array = items.map(data => data.uid)
      // almaceno en la tabla cocina el dia 'tal' en la mesa x con el codigo y,
      // los platos xy y el total
      firebase.database()
      .ref('kitchen/' + date + '/' + this.uidTable+'/'+ key)
      .set({total: total, platos: array})
      .then(dta => {
        // una vez que ya guarde los datos lo elimino de los pedidos de la 
        // mesa actual, oculto el icono y redirecciono a home
        firebase.database().ref('table/'+this.uidTable + '/person').remove()
        this.message = false
        this.$router.push('/')
      }
      )
    }
	},
	components:{}
}
</script>
<style>
.send {
    float: left !important;
    margin: 15px 0px 15px 15px !important;
}
.total {
  color: #181717;
  font-weight: bold;
}
table {
  width: 45% !important;
  margin: .5rem 1rem 1rem 1rem !important;
  border: 1px solid #e1dbdb;
  box-shadow: 0 0 4px 0px #c5c5bd;
  color: #b1a9aa;
}
tr {
  border-bottom: 1px solid #80808030;
}
.delete {
	color: #1c77c3;;
}
.title{
  border-bottom: 1px solid #8BC34A;
  color: #464444;
}
.donetwo{  
  margin-top: 18px;
  font-weight: bold;
  color: #8bc34a;
}
@media(max-width: 720px){
  table {
    width: 90% !important;
    margin: 0% 5% !important;
  }
}
</style>