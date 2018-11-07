<template>
  <div id="app">
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo"><i class="material-icons">local_dining</i>Burger Queen</a>
          <ul class="right hide-on-med-and-down">            
            <li><router-link to="/"><i class="material-icons">home</i></router-link></li>
            <li><router-link to="/client"><i class="material-icons">assignment_turned_in</i></router-link></li>
            <li><router-link to="/kitchen"><i class="material-icons">restaurant</i></router-link></li>
            <li><router-link to="/admin"><i class="material-icons">assignment_ind</i></router-link></li>
          </ul>
        </div>
      </nav>
    <router-view/>
    <footer>
      <div class="footer-copyright">
        <div class="container">
          © 2018 Copyrigh Noely FC
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
/* eslint-disable */ 
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: 'Arvo';
  font-display: auto;
  src: local('Arvo'), url(https://noelyflores.github.io/lim-2018-01-burger-queen/#/home) format('woff2');
}
.add, .clean, .done {  
  font-weight: bold;
  font-size: 2.6em;
}
.add {
  color: #CDDC39;
}
.clean {
  color: #ffc200
}
.done, .delete, .btn, .btn-large{
 color:#1C77C3;
}
.title{
  width: 90% !important;
	margin: 0% 5% 2.5%;
	border-bottom: .5px solid #8BC34A;
}
.title h5, .titletwo h5{
  	margin: 0rem 0 0rem -85% !important;
    display: inline;
    color: #fff;
    font-size: 14.8px;
    text-transform: uppercase;
    padding: 4px 10px;

}
.titletwo h5{
  background:  #fec81d;  
}
.title h5{
  background: #8BC34A;
}
nav {
  background-color: #1C77C3 !important;
  position: fixed;
  top: 0%;
  z-index: 2;
}
nav i.material-icons {
    margin-right: 10px;
}
nav ul a {
  padding: 0 20px !important;
}
#app {
  text-align: center;
}
  nav .brand-logo {
    font-size: 1.5rem !important;
    left: 10%;
    font-family: serif;
    color: #fff !important;
    text-shadow: 0 0 8px #03A9F4;
  }
  .btn, .btn-large {
    border: 1px solid #1C77C3 !important;
    background: #fff !important;    
    width: 30% !important;
    height: 35px !important;
    line-height: 35px !important;
    margin: 0% 3px;
  }
  .btn-large:hover{
    border: 1px solid #FFC200 !important;
    background: #FFC200 !important;
  }
  label {
    font-size: 18px !important;
    font-family: serif;
    margin: 0em .2em;
    color: #575757;
}
footer{
  bottom: 0% !important;
  position: fixed;
  width: 100%;
  background: #8080806e;
}
.content {
  margin-top: 60px !important;
}
@media only screen and (max-width: 992px){
  .hide-on-med-and-down {
      display: block !important;
  }
  nav .brand-logo {
    left: 20%;
  }
  label{
    font-size: 16px !important;
  }
}
@media (max-width: 750px) {
  nav .brand-logo {
    display: none
  }

}
@media (max-width: 480px) {
  label{
    font-size: 14px !important;
  }
  .btn, .btn-large {
    text-transform: lowercase;
    padding: 0%;
    width: 33% !important;
    margin: .1%;
  }
  .titletwo h5 {
    margin: 0rem 0 0rem -65% !important;
  }
}
</style>
