<template>
  <div class="header">
      <div class="left">
          <img src="../assets/气象预报图标.png" alt="">
          
      </div>
      <span>{{num ==1?'天气预报':'新闻' }}</span>
      <div>
          <router-link to="/">
            <div :class="num==1?'btn1':'btn'" @click="num = 1">天气</div>
          </router-link>
          <router-link to="/news">
            <div :class="num==2?'btn1':'btn'" @click="num = 2">新闻</div>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            num:1
        }
    }

}
</script>

<style scoped>
.header{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
}
.left{
    margin-left: 10%;
}
.left img{
    height: 4rem;
    width: 5rem;
}
span{
    font-size: 2.5rem;
}
a{
    text-decoration: none;
}
.btn{
    display: inline;
    margin-right: 8rem;
    padding: 0.5rem 1.5rem;
    color: rgb(80, 80, 80);
    border: solid 0.2rem rgba(232, 127, 145,0);
    border-radius: 3rem;
    transition: all 0.5s;
}
.btn1{
    display: inline;
    margin-right: 8rem;
    padding: 0.5rem 1.5rem;
    color: rgb(80, 80, 80);
    border: solid 0.2rem rgba(232, 127, 145,0.8);
    border-radius: 3rem;
    transition: all 0.5s;
}
.btn:hover,.btn1:hover{
    border: solid 0.2rem rgba(232, 127, 145,0.8);
    color: white;
    background-image: linear-gradient(to right,rgba(99, 81, 222,0.5),rgba(133, 48, 147,0.5));
    cursor:pointer;
}
</style>