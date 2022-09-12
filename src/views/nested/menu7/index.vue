<template>
  <div class="app-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>提问</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div>什么是数值计算问题?什么是非数值计算问题?</div>
      </el-card>
    </el-row>
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>2楼</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div>
          一般来说, 求大小多少的计算是数值计算. 例如,解方程等.
          判断是非真假的计算是非数值计算. 例如,逻辑判断等.
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>3楼</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div>
          我认为2楼说的有点片面，这里补充一下：数值计算，是指使用计算机求解数学问题近似解的方法与过程。数值计算主要研究如何利用计算机更好的解决各种数学问题。
          非数值计算，是指计算的对象不仅仅是数字，而是人的思维。是自然界和人类社会的一切事物，更确切地说是某些信息。如数据、文字、语言、图形、知识、事物、事物的运动过程及思维过程。例如，用计算机下棋。
        </div>
      </el-card>
    </el-row>
    <el-row>
      <el-col :span="15" class="bianji">
        <tinymce v-model="content" :height="300"
      /></el-col>
    </el-row>
    <el-row>
      <el-col class="huifu"> <el-button type="primary">回复</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
export default {
  components: { Tinymce },

  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 800px;
  margin-left: 100px;
  margin-top: 20px;
}
.bianji {
  margin-left: 100px;
  margin-top: 20px;
}
.huifu {
  margin-left: 800px;
  margin-top: 20px;
}
</style>