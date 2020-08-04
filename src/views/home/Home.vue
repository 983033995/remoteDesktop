<template>
  <div class="home">
    <button @click="addArt">创建文章</button>
    <button @click="getFloderFun">获取文件目录</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from "vuex";
const { readArc, getArtById } = API.readApi;
const { createArt, articleAll } = API.submit;
console.log("____API", API);
const { getFloder } = API.floder;
export default {
  name: "Home",
  components: {},
  data() {
    return {
      time: 0,
      setFun: null
    };
  },
  mounted() {
    setTimeout(() => {
      this.changeClass("preve");
    }, 3000);
    console.log("API", API);
    console.log("BASE_URL", BASE_URL);
    readArc()
      .then(res => {
        console.log("res", res);
      })
      .catch(error => {
        console.log("err", error);
      });
    articleAll().then(ress => {
      console.log("_____", ress);
    });
  },
  methods: {
    ...mapMutations("router", {
      changeClass: "changeClass"
    }),
    addArt() {
      let params = {
        title: "这是一个测试标题",
        author: "Mr.zhang",
        content:
          "现在，当属性的值为 null 且 allowNull 为 true 时，运行每个属性定义的自定义验证器（与模型选项中定义的自定义验证器相对，之前它们没有运行且验证立即成功）。为了避免升级时出现问题，请检查每个属性定义的所有自定义验证器，其中 allowNull 为 true，并确保当值为 null 时所有这些验证器都能正常运行。",
        category: "javascript"
      };
      createArt(params)
        .then(res => {
          console.log(res);
          getArtById({ id: 1 }).then(result => {
            console.log("查一条", result);
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
    getFloderFun() {
      getFloder().then(res => {
        console.log("文章", res);
      });
    }
  }
};
</script>
