<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="
        list1.filter(
          (data) =>
            !search ||
            data.pageviews.toLowerCase().includes(search.toLowerCase()) ||
            data.id.toLowerCase().includes(search.toLowerCase()) ||
            data.author.toLowerCase().includes(search.toLowerCase())
        )
      "
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="知识点" width="150">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <!-- <el-table-column label="作者" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column> -->
      <el-table-column label="章节" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <!-- <el-table-column
        align="center"
        prop="created_at"
        label="创建时间"
        width="200"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column> -->
      <el-table-column label="操作" width="200" align="center">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
    <el-drawer
      title="我是查看"
      :visible.sync="drawer"
      :with-header="false"
      size="40%"
    >
      <h2>知识点</h2>
      <el-image :src="timu"></el-image>
      <!-- <el-divider></el-divider>
      <div>答案及备注</div>
      <el-image :src="daan"></el-image> -->
    </el-drawer>

    <el-drawer
      title="我是编辑"
      :visible.sync="drawer1"
      :with-header="false"
      size="40%"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="题号">
          <el-col :span="7">
            <el-input disabled v-model="tihao"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="题目章节">
          <el-col :span="6">
            <el-select v-model="form.region" placeholder="请选择题目所属章节">
              <el-option label="第一章" value="one"></el-option>
              <el-option label="第二章" value="two"></el-option>
              <el-option label="第三章" value="three"></el-option>
              <el-option label="第四章" value="four"></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select v-model="form.region" placeholder="请选择题目类型">
              <el-option label="选择题" value="two"></el-option>
              <el-option label="解答题" value="one"></el-option>
              <el-option label="填空题" value="three"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item label="编辑题目">
          <tinymce v-model="content" :height="300"> </tinymce>
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
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import { getList } from "@/api/table";
import Tinymce from "@/components/Tinymce";

export default {
  components: { Tinymce },

  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      search: "",
      tihao: 2021091511,
      form: {
        name: "",
        region: "one",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      drawer1: false,
      drawer: false,
      list: null,
      listLoading: true,
      timu: "https://s2.loli.net/2022/02/11/3YPChnWuTzaVcNG.png",
      daan: "https://s2.loli.net/2022/01/29/AJZ98YpBbOxHqoz.png",
      list1: [
        {
          id: "离散化方法",
          title: "序号",
          status: "published",
          author: "方秀兰",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第一章",
        },
        {
          id: "插值方法",
          title: "油统相么七得就与次叫影此你。",
          status: "draft",
          author: "郑超",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第一章",
        },
        {
          id: "逼近方法",
          title: "织及状马已地打严了农成物风同。",
          status: "deleted",
          author: "石刚",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第一章",
        },
        {
          id: "迭代方法",
          title: "养内率群热及再特明段众组们计真民可。",
          status: "deleted",
          author: "魏秀英",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第一章",
        },
        {
          id: "关于算法的评价",
          title: "酸规记用装布证油立间低入研参养。",
          status: "draft",
          author: "孟伟",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第一章",
        },
        {
          id: "列表计算的程序设计",
          title: "济除酸系地影马我明具火务质八八及平化。",
          status: "published",
          author: "叶刚",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第一章",
        },
        {
          id: "误差的来源",
          title: "音装期持有种局院存合集对组。",
          status: "published",
          author: "朱超",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第二章",
        },
        {
          id: "误差的概念",
          title: "难二路毛治红须识加段不周记四。",
          status: "draft",
          author: "赵秀兰",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第二章",
        },
      ],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then((response) => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    },
    handleEdit() {
      this.drawer = true;
    },
    handleEdit1() {
      this.drawer1 = true;
    },
    open() {
      this.$confirm("此操作将永久删除该题目, 是否继续?", "提示", {
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
<style>
.el-drawer__body {
  overflow: auto;
}
</style>
