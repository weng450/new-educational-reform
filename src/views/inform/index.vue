 <template>
  <div class="app-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="发布人" width="180">
      </el-table-column>
      <el-table-column prop="address" label="通知标题" width="250">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="drawer = true" type="primary" size="small"
            >查看详细</el-button
          >
          <el-button type="danger" size="small" @click="open">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer
      title="我是查看"
      :visible.sync="drawer"
      :with-header="false"
      size="40%"
    >
      <div>通知标题</div>
      <div>通知标题1</div>
      <el-divider></el-divider>
      <div>通知类型</div>
      <div>类型1</div>
      <el-divider></el-divider>
      <div>发布人</div>
      <div>李林</div>
      <el-divider></el-divider>
      <div>通知内容</div>
      <div>今年期末考试将采取闭卷模式。</div>
    </el-drawer>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      drawer: false,
      tableData: [
        {
          date: "2022-01-02",
          name: "李林",
          address: "通知标题1",
        },
        {
          date: "2022-01-04",
          name: "汤家凤",
          address: "通知标题2",
        },
        {
          date: "2022-02-01",
          name: "徐磊",
          address: "通知标题3",
        },
        {
          date: "2022-02-03",
          name: "比尔",
          address: "通知标题4",
        },
      ],
    };
  },
  methods: {
    open() {
      this.$confirm("此操作将永久删除该通知, 是否继续?", "提示", {
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
    },
  },
};
</script>