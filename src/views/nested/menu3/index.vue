<template>
  <div class="app-container">
    <div>题目内容</div>
    <el-image :src="timu"></el-image>
    <el-divider></el-divider>
    <div>答案及备注</div>
    <el-image :src="daan"></el-image>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      timu: "https://s2.loli.net/2022/01/29/bBVtK7qPLnYQTOM.png",
      daan: "https://s2.loli.net/2022/01/29/AJZ98YpBbOxHqoz.png",
    };
  },
};
</script>