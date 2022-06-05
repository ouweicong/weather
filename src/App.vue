<template>
  <div id="app">
    <Header class="header"></Header>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue'
export default {
  components:{
    Header,
  }

}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
  
}
html{
  height: 100%;
  overflow-y: scroll;
}
body{
  height: 100%;
  min-width: 1250px;
  min-height: 700px;
}
#app{
  width: 100%;
  height: 100%;
  background-image: url('./assets/天气预报背景.jpg');
  -moz-background-size:100% 100%;
  background-size:100% 100%;
  display: flex;
  flex-direction:column;
}
.header{
  height: 13%;
  background-color: rgba(125, 142, 175, 0.7);
}
.main{
  height: 87%;
  width: 100%;
}

</style>