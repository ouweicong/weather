<template>
  <div class="main">
    <div v-for="(item, index) in list.data.forecast" :key="index" class="cart">
      <div :class="index%2 == 0?'top':'top1'">{{ item.date }}</div>
      <div :class="index%2 == 0?'bottom':'bottom1'">
        <div class="type">{{ item.type }}</div>
        <div class="wendu">
          <div class="high">{{ item.high }}</div>
          <div class="low">{{ item.low }}</div>
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
};
</script>

<style scoped>
.main{
    width: 75%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(49, 52, 67);
    margin-bottom: 30px;
}
.cart{
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s;
    border-radius: 30px;
}
.cart:hover{
    height: 115%;
    width: 40%;
}
.top{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
    background-color:rgb(32, 36, 48);
    color: rgb(158, 159, 162);
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight:bold;
}
.bottom{
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(38, 42, 54);
}
.top1{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
    background-color:rgb(46, 52, 64);
    color: rgb(158, 159, 162);
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight:bold
    
}
.bottom1{
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(49, 52, 67);
}
.type{
    color: white;
    font-family:'Courier New', Courier, monospace;
    font-size: 50px;
}
.high{
    color: whitesmoke;
    font-family:'Times New Roman', Times, serif;
    font-size: 30px;
    text-align: center;
}
.low{
    line-height: 40px;
    color: rgb(177, 176, 176);
    text-align: center;
}

</style>