<template>
<div class="row">
<div class= "title">
<h5>Insertar Comida</h5>
</div>
<form class="col s12">
<food-form/>
</form>
<div class="box-list">
<list-mesa :dataOption="food"></list-mesa>
</div>
</div>
</template>
<script>
/* eslint-disable */ 
import listTable from '@/components/listTable'
import foodFrom from '@/components/foodFrom'
import firebase from 'firebase'

export default {
	name:'food',
	props: [],
	data(){
		return {
			food:'food'
		}
	},
	created(){	
	},
	components: {
	 'list-mesa': listTable,
	 'food-form': foodFrom
  }
}
</script>
<style>
.row .col.s12{
  width: 45%;
  float: left;
}
.box-list {
    width: 50%;
    margin: 0% 5% 0% 45%;
		margin-top: -70px !important;
}
.input-field.col label {
  margin-top: -8px !important;
}
.box-container-button{
  display: inline-block;
  margin: 1px;
}
.material-icons{
	cursor: pointer;
}
.box-insert {
  border-radius: .4em !important;
  width: 80% !important;
  margin: 0% 10%;
}
.collapsible-header i {
    margin-right: 0rem;
}
.col.s6 {
	width: 100% !important;
	display: inline-flex;
  outline: none !important;
  margin-top: 30px;
}
input {
	border-radius: .4em !important;
  border: .5px solid #1c77c3  !important;
  width: 100% !important;
  margin: 0% !important;
  padding: 0em .5em !important;
	font-size: 18px !important;
  font-family: serif !important;
}
.col{
	flex:none !important
}
select {
	float: left;
  margin: 0em .2em;
	border-radius: .4em;
	border-color: #1c77c3 ;
	color: #9e9e9e;
	width: 48%;
}
.collapsible {
  border-top: none !important;
	border-right: none !important;
	border-left: none !important;
	box-shadow: none !important;
	height: 500px;
    overflow: overlay;
	}
@media(max-width: 600px){
	.box-list {
	width: 100%;
	margin: 0% 0%;
	}
	.collapsible{
		overflow: inherit
	}
  .collapsible-header {
   padding: 1rem 0em !important;
  }
	.row .col.s12{
    float: none;
		width: 100%;
		margin-top: 9px;
	}
	input{
		padding: 0em !important
	}
	.title {
    width: 100% !important;
    margin: 0%;
	}
	.title h5{
    margin: 0rem 0 0rem -60% !important;
		font-size: 12px;
		padding: 4px 20px;
	}
}

@media(max-width: 480px){
	.box-container-txt {
    width: 75%;
	}
	.box-insert, .box-list{
	  width: 100% !important;
    margin: 0% 0%;
  }	
	
}

</style>
