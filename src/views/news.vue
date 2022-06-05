<template>
  <div class="news">
    <div class="title" @click="to">
      <div :class="num == 1?'kind1':'kind'" @click="num = 1,title = '头条'">头条</div>
      <div :class="num == 2?'kind1':'kind'" @click="num = 2,title = '国内'">国内</div>
      <div :class="num == 3?'kind1':'kind'" @click="num = 3,title = '国际'">国际</div>
      <div :class="num == 4?'kind1':'kind'" @click="num = 4,title = '政治'">政治</div>
      <div :class="num == 5?'kind1':'kind'" @click="num = 5,title = '财经'">财经</div>
      <div :class="num == 6?'kind1':'kind'" @click="num = 6,title = '体育'">体育</div>
      <div :class="num == 7?'kind1':'kind'" @click="num = 7,title = '娱乐'">娱乐</div>
      <div :class="num == 8?'kind1':'kind'" @click="num = 8,title = '军事'">军事</div>
      <div :class="num == 9?'kind1':'kind'" @click="num = 9,title = '教育'">教育</div>
      <div :class="num == 10?'kind1':'kind'" @click="num = 10,title = 'NBA'">NBA</div>
      <div :class="num == 11?'kind1':'kind'" @click="num = 11,title = '科技'">科技</div>
    </div>
    <div class="cart">
      <NewsCart v-for="(item,index) in list" :key="index" :list="item"></NewsCart>
      <div class="more" @click="more">点击加载更多</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NewsCart from '../components/newsCart.vue';
export default {
  data(){
    return{
      num:1,
      list:'',
      title:'',
      count:15,
    }
  },
  methods:{
    to(){
      axios({
      url:"api/jisuapi/get?channel="+this.title+"&num=15&start=0&appkey=da39dce4f8aa52155677ed8cd23a6470",
    }).then((res) => {
      this.list = res.data.result.result.list
    })
    document.documentElement.scrollTop = 0;
    },
    more(){
      this.count += 5
      axios({
      url:"api/jisuapi/get?channel="+this.title+"&num="+this.count+"&start=0&appkey=da39dce4f8aa52155677ed8cd23a6470",
    }).then((res) => {
      this.list = res.data.result.result.list
    })
    }
  },
  components: {
    NewsCart
  },
  created(){
    axios({
      url:"api/jisuapi/get?channel=头条&num=15&start=0&appkey=da39dce4f8aa52155677ed8cd23a6470",
    }).then((res) => {
      // console.log(res.data.result.result.list)
      this.list = res.data.result.result.list
    })
  },
};
</script>

<style scoped>
.news {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.cart{
  height: 80%;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content:center;
  flex-wrap: wrap;
  padding-top: 2%;
  overflow-y: auto;
}
.cart::-webkit-scrollbar{
  display: none;
}
.title{
  width: 90%;
  height: 8%;
  margin: auto;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(51, 51, 51);
  color: whitesmoke;
  margin-top: 10px;
}
.kind:hover,.kind1{
  color: red;
  cursor: pointer;
}
.more{
  font-size: 20px;
  color: wheat;
}
.more:hover{
  color: red;
  cursor: pointer;
}
</style>