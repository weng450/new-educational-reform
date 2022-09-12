<template>
  <div class="app-container">
    <div>
      <router-link to="/nested/menu8">
        <el-button
          style="position: relative; left: 700px; bottom: 10px"
          type="success"
          >我要提问</el-button
        >
      </router-link>
    </div>
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
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="答">
              <span>{{ props.row.title }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="问题" width="350">
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
          <router-link to="/nested/menu7">
            <el-button size="mini" type="primary">查看详细</el-button>
          </router-link>
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
      <div>题目内容</div>
      <el-image :src="timu"></el-image>
      <el-divider></el-divider>
      <div>答案及备注</div>
      <el-image :src="daan"></el-image>
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
      timu: "https://s2.loli.net/2022/01/29/bBVtK7qPLnYQTOM.png",
      daan: "https://s2.loli.net/2022/01/29/AJZ98YpBbOxHqoz.png",
      list1: [
        {
          id: "数值计算和数学分析有什么区别",
          title:
            "数值计算可以由程序来完成，是有可以控制的误差的，可以很小很小，如0.0000001的误差，数学分析力求精确的数学表达式。",
          status: "published",
          author: "方秀兰",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第一章",
        },
        {
          id: "什么是数值计算问题?什么是非数值计算问题?",
          title:
            "一般来说, 求大小多少的计算是数值计算. 例如,解方程等. 判断是非真假的计算是非数值计算. 例如,逻辑判断等.",
          status: "draft",
          author: "郑超",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第一章",
        },
        {
          id: "数值应用和数值计算相同么",
          title:
            "目前，人类社会已经迈入了网络时代，计算机和互联网已经与老百姓的日常工作、学习和生活息息相关，人类社会目前又处于了一个历史飞跃时期，正由高度的工业化时代迈向初步的计算机网络时代。在计算机技术、网络通讯技术的高速发展的今天，电脑和网络正在以惊人的速度进入人类社会的各个角落。",
          status: "deleted",
          author: "石刚",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第一章",
        },
        {
          id: "举例说明为什么要用数值计算方法",
          title: "神九上天、天气预报",
          status: "deleted",
          author: "魏秀英",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第二章",
        },
        {
          id: "数值计算方法在实际生活中有什么应用？",
          title:
            "说一个大家不太容易知道的。现代做薄膜的方法一般是材料加一个“输入条件。”具体的生长过程（原子尺度的）我们一般是无法管的。这也是材料物理里有一个超级难搞但是一旦做出来会超级重要的东西，薄膜生长动力学。这个主要是研究薄膜是如何长出来...",
          status: "draft",
          author: "孟伟",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第二章",
        },
        {
          id: "编程过程中为什么要进行一些数值计算？",
          title:
            "编程就是在处理现实中遇到的复杂计算（以计算机代替人） 这里所说的“计算”，就包括数值计算",
          status: "published",
          author: "叶刚",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第二章",
        },
        {
          id: "数值计算求答案",
          title: "我不会",
          status: "published",
          author: "朱超",
          display_time: "2021-09-14 06:27:07",
          pageviews: "第二章",
        },
        {
          id: "数值计算积分有哪些方法",
          title:
            "可以用牛顿-科斯特公式，包括梯形公式、辛普生公式、以及各自的复合公式。",
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
