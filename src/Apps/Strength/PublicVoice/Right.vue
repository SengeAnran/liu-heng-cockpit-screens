<template>
  <div class="right">
    <Title>重点舆情</Title>
    <ul class="loop-tab">
      <li
        :class="{ active: currentTab === item.name }"
        v-for="(item, index) in tabList"
        :key="index"
        @click="selectTab(item.name, index)"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="comment-list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="name">
          <span>{{ item.type }}</span>
        </div>
        <div class="desc">
          <div class="title" :title="item.title" @click="onClick(item.link)">
            {{ item.title.length > 22 ? item.title.slice(0, 20) + '...' : item.title }}
          </div>
          <div>
            <span class="date">{{ item.date }}</span>
            <span class="date"> 来源:{{ item.source }}</span>
            <span class="date"> 感情倾向:{{ item.type }}</span>
            <span class="date"> 类型:{{ item.media }}</span>
          </div>
          <span class="content" :title="item.content" @click="onClick(item.link)">
            {{ item.content.length > 70 ? item.content.slice(0, 70) + '...' : item.content }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from './Title';
import economicAPI from '@/api/Strength/PublicVoice';

export default {
  data() {
    return {
      list: [],
      list0: [
        {
          title: '建设“美丽北仑” 彰显现代国际港城新风貌',
          type: '正面',
          date: '2021-06-26 21:53',
          content:
            '“美丽北仑”是“三个北仑”建设的重要内容之一。“十四五”时期，以“美丽北仑”为引领，点面结合，片区协同，着力做好全域空间调整优化，全面形成“一核引领、两翼并进、三区协同、多点联动”城市空间总体布局，加……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3ODY0NjQzMA==&mid=2650166759&idx=1&sn=7fc8a0f2f01818221f2d8af80ddf5e71&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '舟山市税务系统“五最佳”——最佳基层党支部',
          type: '正面',
          date: '2021-06-28 22:25',
          content:
            '心百年征程波澜壮阔， 百年初心历久弥坚。在中国共产党成立100周年之际，舟山市税务系统开展“最佳基层党组织”“最佳党支部书记”“最佳共产党员”等“五最佳”评选活动，深入探寻他们的故事，感悟共产党人的初……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3OTIwNjk4MQ==&mid=2650455912&idx=2&sn=bb0ad6f6a53fe398dbe31f20f8ad377a&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '中兴海陆舟山党支部开展“学党史、守初心”主题党日活动',
          type: '正面',
          date: '2021-06-25 14:45',
          content:
            '为深入贯彻落实习近平总书记关于党史学习教育重要讲话精神，6月25日上午，舟山检测党支部全体党员前往六横岛“东海游击总队”纪念馆，开展“学党史、守初心”主题党日活动。 通过纪念馆的实物展示和老同志的讲解……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3ODk0MjY2OA==&mid=2650126146&idx=1&sn=ef19ea3e1026e00c93f63dab93759d4e&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '作风建设永远在路上 | 家风建设之一“清风传家”',
          type: '正面',
          date: '2021-06-23 13:35',
          content:
            '好 家 风 近期，中远海运重工纪委在全系统内组织开展以“锤炼作风品质  助力企业发展”为主题的作风建设专项大检查，通过对作风建设七个方面的专项检查，推动营造求真务实、清正廉洁的新风正气，确保全体党员以……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3ODk0MjY2OA==&mid=2650126130&idx=2&sn=26f0e00319ee48241a87efd28a9a5373&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '新知识持续更新中',
          type: '中性',
          date: '2021-06-28 10:20',
          content:
            '新规定·续 航行规则知多少    下列船舶应尽可能避免在长江江苏段 夜间航行：  （一）船龄 26 年及以上的油船、散装液体化学品船， 但双底双壳的油船及达到 2 型船舶及以上标准的散装液体 化学品船……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3OTczMTYwNQ==&mid=2651643317&idx=2&sn=670acd4c9130e8d23677664aebc7ed7b&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '荆州火车站北广场扩建规模确定，步行至百盟仅4分钟！',
          type: '中性',
          date: '2021-06-25 10:59',
          content:
            '因为你的分享、点赞、在看 我足足的精气神儿！ 2012年通车的汉宜铁路结束了荆州国家铁路空白的历史，荆州火车站也成为了荆州人出行的窗口。近期，荆州火车站已升级为铁路一等站，成为与宜昌东、襄阳等铁路枢纽……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4MjUyMDMwMw==&mid=2649813748&idx=1&sn=f0a000bc1001e4d88cd230da624501af&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '直连长宁、普陀、宝山三区，陆翔路-祁连山路贯通工程全线通车！',
          type: '中性',
          date: '2021-06-28 16:00',
          content:
            '微信公众号更改了推送规则，如您不想错过精彩内容，请将“上海工地”公众号设为星标，并在文尾点击"收藏""在看""赞"，可让您第一时间看到我们。 本文由隧道股份上海路桥投稿，如需转载请注明出处。 今天，陆……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzU5NzUzMzk1Ng==&mid=2247601376&idx=2&sn=a4f41f911e7e2d3fa3abcb0e4737959a&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '什么情况？钓鱼的大爷果断剪了鱼线！',
          type: '中性',
          date: '2021-06-23 17:51',
          content:
            '最近，普陀区六横镇原平峧砖瓦厂窑潭里来了四位美丽的客人，就是Ta们~ 四只黑天鹅在水里游弋 有的在“用餐”，有的在“梳洗” 好美好美    不过，前几天，其中一只黑天鹅险些受伤。平峧村……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3NjUzNzgxNw==&mid=2652639708&idx=2&sn=9fc6ca4dab160fc22b1f15a366ed8565&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '妇联之声（五十六）',
          type: '中性',
          date: '2021-06-27 17:32',
          content:
            '（播报人：李鑫） 横琴新区 6月25日上午，横琴新区荷塘社区党委、社区妇联、巾帼文明岗联合开展“凝心聚力 共话发展”巾帼座谈会，15名巾帼志愿者、社区骨干参与座谈。活动通过党史知识问答比赛、社区治理探……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4MTE3MDk0NQ==&mid=2650469456&idx=1&sn=50622adc39427a0d1128335444612a06&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '浙石化二期炼化一体化项目近日全面进行试生产',
          type: '中性',
          date: '2021-06-24 07:42',
          content:
            '近日，荣盛石化董秘在与投资者互动中透露：目前浙石化二期处于试生产阶段。与此同时，6月10日，浙江舟山群岛新区六横管理委员会官网对《舟山绿色石化基地拓展区总体发展规划》环境影响评价进行了第二次公示。 今……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3NjQyNzk2Mg==&mid=2247484612&idx=1&sn=dc7b70f4b380423fd5482fde698e2c6e&scene=0',
          source: '微信',
          media: '微信',
        },
      ],
      list1: [
        {
          title: '建设“美丽北仑” 彰显现代国际港城新风貌',
          type: '正面',
          date: '2021-06-26 21:53',
          content:
            '“美丽北仑”是“三个北仑”建设的重要内容之一。“十四五”时期，以“美丽北仑”为引领，点面结合，片区协同，着力做好全域空间调整优化，全面形成“一核引领、两翼并进、三区协同、多点联动”城市空间总体布局，加……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3ODY0NjQzMA==&mid=2650166759&idx=1&sn=7fc8a0f2f01818221f2d8af80ddf5e71&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '舟山市税务系统“五最佳”——最佳基层党支部',
          type: '正面',
          date: '2021-06-28 22:25',
          content:
            '百年征程波澜壮阔， 百年初心历久弥坚。在中国共产党成立100周年之际，舟山市税务系统开展“最佳基层党组织”“最佳党支部书记”“最佳共产党员”等“五最佳”评选活动，深入探寻他们的故事，感悟共产党人的初心……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3OTIwNjk4MQ==&mid=2650455912&idx=2&sn=bb0ad6f6a53fe398dbe31f20f8ad377a&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '中兴海陆舟山党支部开展“学党史、守初心”主题党日活动',
          type: '正面',
          date: '2021-06-25 14:45',
          content:
            '为深入贯彻落实习近平总书记关于党史学习教育重要讲话精神，6月25日上午，舟山检测党支部全体党员前往六横岛“东海游击总队”纪念馆，开展“学党史、守初心”主题党日活动。 通过纪念馆的实物展示和老同志的讲解……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3ODk0MjY2OA==&mid=2650126146&idx=1&sn=ef19ea3e1026e00c93f63dab93759d4e&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '作风建设永远在路上 | 家风建设之一“清风传家”',
          type: '正面',
          date: '2021-06-23 13:35',
          content:
            '好 家 风 近期，中远海运重工纪委在全系统内组织开展以“锤炼作风品质  助力企业发展”为主题的作风建设专项大检查，通过对作风建设七个方面的专项检查，推动营造求真务实、清正廉洁的新风正气，确保全体党员以……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3ODk0MjY2OA==&mid=2650126130&idx=2&sn=26f0e00319ee48241a87efd28a9a5373&scene=0',
          source: '微信',
          media: '微信',
        },
      ],
      list2: [],
      list3: [
        {
          title: '新知识持续更新中',
          type: '中性',
          date: '2021-06-28 10:20',
          content:
            '新规定·续 航行规则知多少    下列船舶应尽可能避免在长江江苏段 夜间航行：  （一）船龄 26 年及以上的油船、散装液体化学品船， 但双底双壳的油船及达到 2 型船舶及以上标准的散装液体 化学品船……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3OTczMTYwNQ==&mid=2651643317&idx=2&sn=670acd4c9130e8d23677664aebc7ed7b&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '荆州火车站北广场扩建规模确定，步行至百盟仅4分钟！',
          type: '中性',
          date: '2021-06-25 10:59',
          content:
            '因为你的分享、点赞、在看 我足足的精气神儿！ 2012年通车的汉宜铁路结束了荆州国家铁路空白的历史，荆州火车站也成为了荆州人出行的窗口。近期，荆州火车站已升级为铁路一等站，成为与宜昌东、襄阳等铁路枢纽……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4MjUyMDMwMw==&mid=2649813748&idx=1&sn=f0a000bc1001e4d88cd230da624501af&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '直连长宁、普陀、宝山三区，陆翔路-祁连山路贯通工程全线通车！',
          type: '中性',
          date: '2021-06-28 16:00',
          content:
            '微信公众号更改了推送规则，如您不想错过精彩内容，请将“上海工地”公众号设为星标，并在文尾点击"收藏""在看""赞"，可让您第一时间看到我们。 本文由隧道股份上海路桥投稿，如需转载请注明出处。 今天，陆……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzU5NzUzMzk1Ng==&mid=2247601376&idx=2&sn=a4f41f911e7e2d3fa3abcb0e4737959a&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '什么情况？钓鱼的大爷果断剪了鱼线！',
          type: '中性',
          date: '2021-06-23 17:51',
          content:
            '最近，普陀区六横镇原平峧砖瓦厂窑潭里来了四位美丽的客人，就是Ta们~ 四只黑天鹅在水里游弋 有的在“用餐”，有的在“梳洗” 好美好美    不过，前几天，其中一只黑天鹅险些受伤。平峧村……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3NjUzNzgxNw==&mid=2652639708&idx=2&sn=9fc6ca4dab160fc22b1f15a366ed8565&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '妇联之声（五十六）',
          type: '中性',
          date: '2021-06-27 17:32',
          content:
            '（播报人：李鑫） 横琴新区 6月25日上午，横琴新区荷塘社区党委、社区妇联、巾帼文明岗联合开展“凝心聚力 共话发展”巾帼座谈会，15名巾帼志愿者、社区骨干参与座谈。活动通过党史知识问答比赛、社区治理探……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA4MTE3MDk0NQ==&mid=2650469456&idx=1&sn=50622adc39427a0d1128335444612a06&scene=0',
          source: '微信',
          media: '微信',
        },
        {
          title: '浙石化二期炼化一体化项目近日全面进行试生产',
          type: '中性',
          date: '2021-06-24 07:42',
          content:
            '近日，荣盛石化董秘在与投资者互动中透露：目前浙石化二期处于试生产阶段。与此同时，6月10日，浙江舟山群岛新区六横管理委员会官网对《舟山绿色石化基地拓展区总体发展规划》环境影响评价进行了第二次公示。 今……',
          link: 'http://mp.weixin.qq.com/s?__biz=MzA3NjQyNzk2Mg==&mid=2247484612&idx=1&sn=dc7b70f4b380423fd5482fde698e2c6e&scene=0',
          source: '微信',
          media: '微信',
        },
      ],
      currentTab: '全部',
      tabList: [{ name: '全部' }, { name: '正面' }, { name: '负面' }, { name: '中性' }],
    };
  },
  components: {
    Title,
  },
  mounted() {
    this.list = this.list0;
    this.getData();
  },
  methods: {
    async getData(qgqx) {
      const data = await economicAPI.threeTypeIndustries(qgqx);
      this.list = data.map((d) => ({
        title: d.bt,
        type: d.qgqx,
        date: d.fbsj,
        content: d.nrzy,
        link: d.ywlj,
        source: d.lywz,
        media: d.mtlx,
      }));
    },
    selectTab(name) {
      this.currentTab = name;
      name === '全部' ? this.getData() : this.getData(name);
      // switch (index) {
      //   case 0 : this.list = this.list0; break;
      //   case 1 : this.list = this.list1; break;
      //   case 2 : this.list = this.list2; break;
      //   default : this.list = this.list3; break;
      // }
    },
    onClick(link) {
      window.open(link);
    },
  },
};
</script>
<style lang="scss" scoped>
.right {
  position: absolute;
  top: 20rem;
  right: 16rem;
  width: 165rem;
  // outline: 1px solid red;
  z-index: 999;
  .loop-tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
    list-style: none;
    width: 88rem;
    overflow-x: auto;
    padding: 0;
    margin: 1rem 3rem;
    &::-webkit-scrollbar {
      width: 16px;
      height: 16px;
      background-color: #413f3f;
    }
    /*定义滚动条轨道
    内阴影+圆角*/
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(20, 34, 49, 0.3);
      // border-radius:10px;
      background-color: #0d1f38;
    }
    /*定义滑块
    内阴影+圆角*/
    &::-webkit-scrollbar-thumb {
      // border-radius:10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: rgb(70, 70, 70);
    }
    li {
      font-size: 3.4rem;
      color: rgba(255, 255, 255, 0.3);
      padding: 0 3rem;
      cursor: pointer;
      min-width: 14rem;
      text-align: center;
      &.active {
        color: white;
        background: url('~@/assets/images/Charm/tab-active.png') no-repeat center;
        background-size: 160%;
      }
    }
  }
  .comment-list {
    // outline: 1px solid red;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 95rem;
    overflow: auto;
    .item {
      width: 80rem;
      height: 23rem;
      background: linear-gradient(180deg, rgba(22, 40, 47, 0.3), rgba(16, 31, 37, 0.3));
      border: 1px solid rgba(168, 247, 237, 0.07);
      border-radius: 1rem;
      margin-bottom: 0.6rem;
      display: flex;
      .name {
        width: 16.8rem;
        height: 19.5rem;
        margin: 1.6rem;
        flex: none;
        box-sizing: border-box;
        //background: rgba(16, 31, 37, 0.8) url('./avatar.png') no-repeat;
        //background-position: center 35%;
        border: 1px solid rgba(168, 247, 237, 0.2);
        border-radius: 10px;
        text-align: center;
        padding-top: 6rem;
        span {
          font-size: 5.4rem;
          font-family: Source Han Sans CN;
          font-weight: 500;
          background: linear-gradient(180deg, #fff 0%, #99ffff 100%);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .desc {
        margin-left: 1rem;
        color: #ffffff;
        margin-right: 2rem;
        .title {
          font-size: 2.4rem;
          font-family: DIN;
          font-weight: 500;
          //display: flex;
          margin-top: 4.5rem;
          margin-bottom: 1rem;
          cursor: pointer;
        }
        .date {
          font-size: 2.2rem;
          font-family: DIN;
          font-weight: 500;
          //display: flex;
          margin-top: 4.5rem;
          margin-bottom: 1rem;
        }
        .content {
          font-size: 2rem;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 30px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
