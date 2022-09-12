<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="通知类型">
        <el-select v-model="form.region" placeholder="请选择通知类型">
          <el-option label="类型一" value="shanghai"></el-option>
          <el-option label="类型二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-col :span="12">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="内容">
        <el-col :span="12">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即发布</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
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
