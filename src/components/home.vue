<template>
	<div div class="contenthome">
		<div class="content-home">			
			<h1 class="titulo">Burguer Queen</h1>
			<h3 class="subtitulo">Una mejor experiencia para sorprender y ahorrar tu tiempo.</h3>
			<div class="college-img">
				<div @click="kitchen()" class="college-img-item"><span>COCINA</span></div>
				<div @click="caja()" class="college-img-item"><span>CAMARERO</span></div>
				<div @click="admin()" class="college-img-item"><span>ADMINISTRADOR</span></div>
				<div @click="help()" class="college-img-item"><span>AYUDA</span></div>
			</div>
		</div>     
  </div>
</template>
<script>
	export default {
	name:'home',
	props: [],
	data(){
		return {}
	},
	mounted(){},
	created(){},
	watch: {},
	computed:{},
	methods:{
		kitchen(){		
			this.$router.push('/kitchen')
		},
		caja(){		
			this.$router.push('/client')
		},
		admin(){		
			this.$router.push('/admin')
		},
		help(){		
			this.$router.push('/help')
		},
	},
	components:{}
}
</script>
<style scoped>
.contenthome{
	background: url('https://images.pexels.com/photos/460599/pexels-photo-460599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940') no-repeat;
	background-size: cover;
  background-position: center;
  height: 100vh;
}
.content-home{
    width: 100%;
    height: 100%;
    padding: 0em 0em;
    background: rgba(0, 0, 0, 0.576562);
    text-align: left;
    color: #fff;
    display: block;
}
.titulo{
	font-size: 50px;
  letter-spacing: 1px;
  text-align: center;
  border-left: 8px solid #FFC107;
  display: inline-block;
  margin: 10% 0% 5% 10%;
  padding: 0px 15px;
}
.subtitulo{
	font-size: 25px;
  margin: 0% 0% 5% 10%;
  font-weight: 100;
}
.college-img{
	width: 60%;
	margin: auto;
	display: flex;
	justify-content: center
}
.college-img-item{
		width: 100%;
    padding: 4em 0em;
    margin: auto 1%;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid;
    text-align: center;
    cursor: pointer;
    background: #8f90ac52;
}
.college-img-item:hover{
	background: red;
}
</style>