<template>
  <div class="canvas">
    <canvas id="canvas" ref="canvas" width="500" height="500"></canvas>
  </div>
</template>

<script>
export default {
  name: "canvasTest",
  data() {
    return {};
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      let canvasDom = this.$refs.canvas;
      let canvas = canvasDom.getContext("2d");
      canvas.beginPath();
      canvas.fillStyle = "#FA8722";
      canvas.arc(100, 75, 50, 0, 2 * Math.PI);
      canvas.fill();
      canvas.closePath();
      canvas.beginPath();
      canvas.fillStyle = "aquamarine";
      canvas.arc(100, 75, 50, 0, 2 * Math.PI);
      canvas.fill();
    }
  }
};
</script>
