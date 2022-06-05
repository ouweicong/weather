<template>
  <div class="app" @click="to">
    <div class="main">
      <img :src="list.pic" />
      <div class="bottom">
        <!-- <a :href="list.weburl"></a> -->
        <div>{{list.title}}</div>
        <div class="time">
          <div>{{list.src}}</div>
          <div>{{list.time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {},
  },
  methods:{
      to(){
          window.open(this.list.weburl)
      }
  }
};
</script>

<style scoped>
.app {
  width: 250px;
  height: 300px;
  margin-left: 10px;
  margin-right: 10px;
}
.main{
  background-color: whitesmoke;
}
.main:hover{
  background-color: rgba(159, 159, 159,0.9);
  color: antiquewhite;
  cursor: pointer;
}
.main img {
  width: 100%;
  height: 45%;
  object-fit: fill;
  background-color: black;
  margin-bottom: -5px;
}
.bottom {
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 15px;
}
.time{
    color: rgb(153, 153, 153);
}
</style>