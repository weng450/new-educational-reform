<template>
  <div>
    <h2>第一课课前预习</h2>
    <div class="shiping">
      <iframe
        height="300px"
        width="75%"
        src="//player.bilibili.com/player.html?aid=882796110&bvid=BV1AK4y1k7Px&cid=178600576&page=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe>
    </div>

    <el-card class="card">
      <p>
        大学生自学能力强，以我在群里的第一章数值计算概述PPT和教材第一章内容为主要学习资料，慕课视频为辅（学习慕课1.1节视频）
        有电脑的同学以我在群里的第一章数值计算概述PPT和教材第一章内容为主要学习资料，慕课视频为辅（学习慕课1.1节视频）
        没电脑的同学，手机接收我群里学习指导，自己看教材自学
        数值计算的学习平台公共慕课平台。
        <el-link
          href="https://www.icourse163.org/course/NEU-1002089009?tid=1002199006"
          target="_blank"
          type="primary"
          >点此打开慕课平台</el-link
        >
      </p>
    </el-card>
    <el-card class="card">
      <p>
        慕课多人上时可能有些人看不了，可以错开时间看，视频是辅助的，教材和PPT自学为主，辛苦大家
        第一章的视频看慕课第一章第一节
        <el-link
          href="https://www.icourse163.org/course/NEU-1002089009?tid=1002199006"
          target="_blank"
          type="primary"
          >点此进入慕课第一章第一节</el-link
        >
      </p>
      <p>
        下面介绍群里分享的第1章PPT的要求：
        第一章的要求三个要点：（1）第4节（P4-8）：利用机器计算的基本方法（离散化方法，插值方法，逼近方法，迭代方法）
        （2）第6节（P9-11）：关于算法的评价（程序的可读性好，节省计算时间，提高收敛率，增强数值稳定性，节省存储空间）。本节重点掌握“计算量”这个概率（定义6.1和例6.1）。
        （3）第7-8节（P11-17）：列表计算的程序设计，重点掌握程序1.01（必须完全理解，是第一个实验内容之一）。
        第（1）点理解即可，可以看教材和听视频
        第（2）本节重点掌握“计算量”这个概念（定义6.1和例6.1）。
      </p>
    </el-card>
    <el-card class="card">
      <p>
        这里我简单介绍下这个概念，请看教材第10面定义6.1和例6.1 教材第10面（P10）
        计算量是作一次浮点数的乘法运算连同一次加法运算的时间
        简单说一个乘法或一个除法的运算时间可以看做一个计算量
        由于乘除法比加减法高两个数量级，所以一次浮点数的乘法运算连同一次加法运算的时间也算做一个计算量
        计算量这个概念给大家布置了一个课后作业，需要掌握计算量和矩阵乘法才能完成，请大家及时理解，按要求完成提交
        数值计算第1章作业已上传，请大家下载，请将答案手写在作业本上，然后拍照后发到我的QQ邮箱(14430766@qq.com)或使用手机直接私发我的QQ聊天,提交作业时请在邮件标题和附件注明：班级+学号+姓名
        请注意一定要手写完成！截止提交时间：2020年3月6日星期五24:00！
      </p>
    </el-card>
    <el-card class="card">
      <p>
        最后一个任务就是实验，第7-8节（P11-17）：列表计算的程序设计，重点掌握程序1.01（必须完全理解，是第一个实验内容之一）。
        程序1.01需要调试理解，本书代码均为C++代码，使用VC平台开发，同学们可以下载群里代码调试完善，也可以理解后用JAVA
        或python等编程语言再实现。
      </p>
      <p>
        这个实验作业本来是实验课要求提交的，目前请大家在自己电脑上操作完成
        实验先自己调试理解，等返校后再安排统一提交。
      </p>

      <p>
        程序中有一个行代码，以前很多同学有疑惑，这里统一说明下:log(x+h)/x
        log(x+h)/x = log(x+h)-log(x)
        对数内的除法，中学数学有对应公式，可以转化为对数外的减法，这样结合导数定义就可以理解了
        对数logx求导，使用导数定义方法求导 h相当于△x h不断除以2，这样h就趋向0,
        (log(x+h)-log(x))/h就趋向logx导数。
      </p>
      <p>
        请大家多多调试理解导数定义的计算方法与列表计算风格
        实验作业就是提交实验报告，做完实验可以提前写好实验报告，返校后提交！实验报告内容包括但不限于实验简介，实验目标，实验过程，代码或算法修改与完善，实验结果，结论与展望等，可参考数据结构或算法课程实验报告格式
        本章主要掌握两点：一是计算量这个概念，完成第1章作业
        第二个掌握要点就是程序1.01，这个是实验一的内容之一
      </p>
    </el-card>
  </div>
</template>

<style>
p {
  text-indent: 2em; /*em是相对单位，2em即现在一个字大小的两倍*/
}
.card {
  width: 60%;
  margin-left: 20%;
  margin-top: 30px;
}
.shiping {
  margin-left: 20%;
}
</style>