<template>
  <div class="weather">
    <Search class="search" @getMsg="getMsg"></Search>
    <div class="noticBoard">
      <div class="gundong">
        城市:{{
          list.data.city
        }}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        温馨提示:{{ list.data.ganmao }}
      </div>
    </div>
    <WeatherShow class="weatherShow" :list="this.list"></WeatherShow>
  </div>
</template>

<script>
import axios from "axios";
import Search from "../components/search.vue";
import WeatherShow from "../components/weatherShow.vue";
export default {
  data() {
    return {
      msg: "",
      list: "",
    };
  },
  methods: {
    getMsg(msg) {
      this.msg = msg;
      axios({
        url:
          "https://api.vvhan.com/api/weather?city=" + this.msg + "&type=week",
      }).then((res) => {
        if (res.data.desc) {
          this.list = res.data;
        } else {
          alert("没有此城市");
        }
      });
    },
  },
  components: {
    Search,
    WeatherShow,
  },
  created() {
    axios({
      url: "https://api.vvhan.com/api/weather?&type=week",
    }).then((res) => {
      if (res.data.desc) {
        this.list = res.data;
      } else {
        alert("没有此城市");
      }
    });
  },
};
</script>

<style scoped>
.weather {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.noticBoard {
  width: 50%;
  height: 5%;
  border: 4px rgb(32, 36, 48) solid;
  border-radius: 30px;
  background-color: rgb(90, 91, 96);
  color: whitesmoke;
  line-height: 30px;
  overflow: hidden;
}
.gundong {
  animation: 20s wordsLoop linear infinite normal;
}
@keyframes wordsLoop {
  0% {
    transform: translateX(100%);

    -webkit-transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);

    -webkit-transform: translateX(-100%);
  }
}

@-webkit-keyframes wordsLoop {
  0% {
    transform: translateX(100%);

    -webkit-transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);

    -webkit-transform: translateX(-100%);
  }
}
</style>