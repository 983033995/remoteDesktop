<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="article-list">
      <div
        class="list-item"
        v-animation="options"
        v-for="(item, index) in 20"
        :key="index"
      >
        <div class="author">{{ item.author }}</div>
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const { articleAll } = API.submit;
export default {
  name: "about",
  data() {
    return {
      dataList: [],
      options: {
        name: "fadeInRight"
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      articleAll().then((res) => {
        console.log("_____", res);
        this.dataList = res;
      });
    }
  },
  directives: {
    animation: {
      inserted: (el, bi) => {
        console.log(el, bi);
        if (typeof bi.value !== "object") {
          return;
        }
        let value = bi.value;
        let plugins = {
          animationName: value.name ? value.name : "", // 动画名称
          animationDelay: value.delay ? value.delay : "0s", // 动画执行延时时间
          animationDirection: value.direction ? value.direction : "normal", // 动画播放顺序(normal-正向 / alternate-反向)
          animationDuration: value.duration ? value.duration : "0.3s", // 动画完成时间
          animationIterationCount: value.count ? value.count : "1", // 动画循环次数
          animationTimingFunction: value.function ? value.function : "linear" // 动画运行曲线
        };
        // let isRepeat = value.repeat;
        let ovserves = new IntersectionObserver((enters) => {
          console.log("enters", enters);
          let obs = enters[0];
          let dom = obs.target;
          if (obs.isIntersecting) {
            for (let i in plugins) {
              dom.style[i] = plugins[i];
            }
            // !isRepeat && ovserves.unobserve(dom);
          } else {
            dom.style.animationName = "";
          }
        });
        ovserves.observe(el);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.about {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  .article-list {
    width: 100%;
    flex: 1;
    overflow: auto;
    background: darkgrey;
    .list-item {
      width: 90%;
      height: 100px;
      margin: 15px 5%;
      background-color: #ffffff;
    }
  }
}
</style>
