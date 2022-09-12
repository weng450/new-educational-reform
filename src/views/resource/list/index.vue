<template>
  <div class="app-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="发布日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="发布人" width="180">
      </el-table-column>
      <el-table-column prop="address" label="资源名称"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >下载</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "罗辑",
          address: "期末复习资料",
        },
        {
          date: "2016-05-04",
          name: "金泰祥",
          address: "第三章课后习题答案",
        },
        {
          date: "2016-05-01",
          name: "程璐",
          address: "第五章例题详细解析",
        },
        {
          date: "2016-05-03",
          name: "宋一金",
          address: "第八课时课后习题解析",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该资源, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
      console.log(index, row);
    },
  },
};
</script>