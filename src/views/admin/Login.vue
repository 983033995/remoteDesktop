<template>
  <div class="login_area">
    <div class="iframe_area">
      <iframe
        width="100%"
        height="100%"
        scrolling="no"
        sandbox="allow-scripts allow-same-origin"
        :src="iframeSrc[srcIndex]"
      ></iframe>
    </div>
    <div class="login_from">
      <div class="head_img">
        <img src="@assets/head.jpeg" />
      </div>
      <div class="from_input">
        <el-input placeholder="用户名" v-model="userName" clearable></el-input>
        <el-input placeholder="密码" v-model="password" show-password></el-input>
      </div>
      <div class="login_arrow" v-show="showBtn" @click="login">
        <div class="arrow">
          <div class="line"></div>
          <div class="arrow_head">
            <div>
              <div class="top"></div>
              <div class="bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      iframeSrc: [
        "http://www.zhangheteng.com/download/63/index.html",
        "http://www.zhangheteng.com/download/42/index2.html",
        "http://www.zhangheteng.com/download/42/index.html",
        "http://www.zhangheteng.com/Public/canvas/3.html"
      ],
      srcIndex: "",
      userName: "",
      password: "",
      showBtn: false
    };
  },
  computed: {
    joi() {
      const { userName, password } = this;
      return { userName, password };
    }
  },
  watch: {
    joi(newVal) {
      if (newVal.userName && newVal.password) {
        this.showBtn = true;
      } else {
        this.showBtn = false;
      }
    }
  },
  created() {
    this.srcIndex = Math.floor(Math.random() * 4);
  },
  methods: {
    login() {}
  }
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.login_area {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .iframe_area {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    iframe {
      border: none;
    }
  }
  .login_from {
    width: 200px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -100px;
    z-index: 2;
    .head_img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 0 auto;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .from_input {
      width: 100%;
      height: 140px;
      margin-top: 20px;
      @{deep} .el-input {
        margin-top: 20px;
        @{deep} input {
          border: none;
          color: #333333;
          font-size: 16px;
          background-color: rgba(255, 255, 255, 0.5);
        }
        input::-webkit-input-placeholder {
          color: rgb(41, 41, 41);
          font-size: 13px;
        }
        input::-moz-placeholder {
          color: rgb(41, 41, 41);
          font-size: 13px;
        }
        input::-moz-placeholder {
          color: rgb(41, 41, 41);
          font-size: 13px;
        }
        input::-ms-input-placeholder {
          color: rgb(41, 41, 41);
        }
        @{deep} .el-input__icon {
          color: #333333;
        }
      }
    }
    .login_arrow {
      width: 100%;
      height: 40px;
      .arrow {
        width: 80px;
        height: 40px;
        margin: 0 auto;
        // float: right;
        border-radius: 4px;
        background-color: rgb(255, 255, 255);
        position: relative;
        cursor: pointer;
        .line {
          width: 25px;
          height: 2px;
          background-color: #333333;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -15px;
          animation: elastic 3s infinite;
        }
        .arrow_head {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -8px;
          margin-top: -10px;
          animation: elastic 3s infinite;
          & > div {
            width: 100%;
            height: 100%;
            position: relative;
            div {
              width: 10px;
              height: 2px;
              position: absolute;
              background-color: #333333;
              right: 0;
              top: 50%;
              transform: translate(-50%, -50%);
              transform-origin: right center;
            }
            .top {
              transform: rotate(45deg);
            }
            .bottom {
              transform: rotate(-45deg);
            }
          }
        }
      }
      @keyframes elastic {
        0% {
          transform: scale(1);
          transform-origin: left center;
        }
        20% {
          transform: scale(1.2);
          transform-origin: left center;
        }
        40% {
          transform: scale(1.4);
          transform-origin: left center;
        }
        50% {
          transform: scale(1.5);
          transform-origin: left center;
        }
        60% {
          transform: scale(1.4);
          transform-origin: left center;
        }
        80% {
          transform: scale(1.2);
          transform-origin: left center;
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
}
</style>
