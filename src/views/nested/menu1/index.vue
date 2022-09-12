<template>
  <div style="padding: 30px">
    <el-row>
      <el-col :span="4">
        <router-link to="/nested/menu2">
          <el-button type="primary" style="width: 90%; height: 100px"
            >查看题库</el-button
          >
        </router-link>
      </el-col>

      <el-col :span="4">
        <router-link to="/nested/menu4">
          <el-button type="primary" style="width: 90%; height: 100px"
            >知识点库</el-button
          >
        </router-link>
      </el-col>

      <el-col :span="4">
        <router-link to="/nested/menu5">
          <el-button type="primary" style="width: 90%; height: 100px"
            >问答库</el-button
          >
        </router-link>
      </el-col>

      <el-col :span="4">
        <router-link to="/nested/menu6">
          <el-button type="primary" style="width: 90%; height: 100px"
            >预习功能</el-button
          >
        </router-link>
      </el-col>

      <el-col :span="4">
        <router-link to="/nested/menu6">
          <el-button type="primary" style="width: 90%; height: 100px"
            >更多...</el-button
          >
        </router-link>
      </el-col>
    </el-row>
    <el-divider content-position="left"
      ><i class="el-icon-info"></i>学科介绍</el-divider
    >
    <el-input
      type="textarea"
      v-model="textarea"
      style="width: 70%"
      :rows="4"
    ></el-input>
    <el-divider content-position="left"
      ><i class="el-icon-info"></i>目录</el-divider
    >
    <el-steps direction="vertical" :active="7">
      <el-step title="第一章：误差分析"></el-step>
      <el-step title="第二章：常用函数值计算方法"></el-step>
      <el-step title="第三章：求函数零点与极值点问题"></el-step>
      <el-step title="第四章：多项式计算"></el-step>
      <el-step title="第五章：线性方程组求解"></el-step>
      <el-step title="第六章：常微分方程数值解法"></el-step>
      <el-step title="第七章：数值积分"></el-step>
    </el-steps>
    <el-divider content-position="left"
      ><i class="el-icon-info"></i>相关书籍</el-divider
    >
    <span class="demonstration"
      >《数值计算》-甄西丰-实用数值计算方法,清华大学出版社,2006.
    </span>
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :fit="fit"
    ></el-image>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "https://www.kfzimg.com/20130808/3458239/3458239T2PsxQ_b.jpg",
      textarea:
        "数值计算指有效使用数字计算机求数学问题近似解的方法与过程，以及由相关理论构成的学科。数值计算主要研究如何利用计算机更好的解决各种数学问题，包括连续系统离散化和离散形方程的求解，并考虑误差、收敛性和稳定性等问题。研究领域从数学类型来分，数值运算的研究领域包括数值逼近、数值微分和数值积分、数值代数、最优化方法、常微分方程数值解法、积分方程数值解法、偏微分方程数值解法、计算几何、计算概率统计等",
    };
  },
};
</script>