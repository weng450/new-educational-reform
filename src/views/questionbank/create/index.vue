<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="题目章节">
        <el-col :span="5">
          <el-select v-model="form.region" placeholder="请选择题目所属章节">
            <el-option label="第一章" value="one"></el-option>
            <el-option label="第二章" value="two"></el-option>
            <el-option label="第三章" value="three"></el-option>
            <el-option label="第四章" value="four"></el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
          <el-select v-model="form.region" placeholder="请选择题目类型">
            <el-option label="选择题" value="one"></el-option>
            <el-option label="解答题" value="two"></el-option>
            <el-option label="填空题" value="three"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="题目名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="编辑题目">
        <tinymce v-model="content" :height="300" />
      </el-form-item>
      <el-form-item label="编辑答案">
        <tinymce v-model="content" :height="300" />
      </el-form-item>
      <el-form-item label="锁定题目">
        <el-switch
          v-model="form.delivery"
          active-text="将题目锁定后，学生讲不可查看题目"
        ></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
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

