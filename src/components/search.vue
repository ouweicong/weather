<template>
  <div class="search">
      <input type="text" placeholder="请输入要查询的城市" maxlength="15" v-model="msg">
      <div class="btn" @click='sentMsg'>搜索</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:''
        }
    },
    methods:{
        sentMsg(){
            this.$emit('getMsg',this.msg)
            this.msg = ''
        }
    }
}
</script>

<style scoped>
.search input{
    width: 50rem;
    height: 50px;
    border: none;
    border-radius: 30px 0px 0px 30px;
    background-color: rgba(49, 52, 67,0.8);
    color: white;
    font-size: 20px;
    padding-left: 40px;
}
.search input{
    outline: 0px;
}
.btn{
    height: 44px;
    width: 80px;
    font-size: 20px;
    text-align: center;
    line-height: 44px;
    padding: 2px 10px;
    border-radius: 0px 30px 30px 0px;
    transition: all 0.5s;
    border: solid 2px rgba(232, 127, 145,0.8);
    color: white;
    background-image: linear-gradient(to right,rgba(99, 81, 222,0.5),rgba(133, 48, 147,0.5));
    cursor:pointer;
    float: right;
}
</style>