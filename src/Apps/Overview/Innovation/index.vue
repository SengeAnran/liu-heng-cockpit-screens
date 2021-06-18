<template>
  <div class="Innovation">
    <div class="left-webview">
      <!-- 六横镇科技情况 -->
      <secondary-title name="六横镇科技情况" />
      <div class="left-container">
        <div>
          <!-- 专利数量 -->
          <patent-number />
          <!-- 变化趋势 -->
          <changes-trends />
          <!-- 申报产业领域 Top5 -->
          <industry-field />
        </div>
        <div>
          <!-- 专利权重分析 -->
          <patent-weight />
          <!-- 人才类型分布 -->
          <talent-type />
        </div>
      </div>
    </div>
    <div class="center-webview"></div>
    <div class="right-webview">
      <!-- 发明专利列表 -->
      <patent-list />
      <!-- 六横镇人才专利发明证书 -->
      <patent-certificate />
    </div>
  </div>
</template>

<script>
import SecondaryTitle from './components/SecondaryTitle';
import PatentNumber from './modules/PatentNumber';
import ChangesTrends from './modules/ChangesTrends';
import IndustryField from './modules/IndustryField';
import PatentWeight from './modules/PatentWeight';
import TalentType from './modules/TalentType';
import PatentList from './modules/PatentList';
import PatentCertificate from './modules/PatentCertificate';
export default {
  name: 'Innovation',
  components: {
    SecondaryTitle,
    PatentNumber,
    ChangesTrends,
    IndustryField,
    PatentWeight,
    TalentType,
    PatentList,
    PatentCertificate,
  },
};
</script>
<style lang="scss" scoped>
.Innovation {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 263px 160px 0;
  & > div {
    width: 1650px;
    height: 1028px;
    overflow: hidden;
  }
  .left-webview {
    display: flex;
    flex-direction: column;
  }
  .left-container {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    & > div {
      width: 800px;
      display: flex;
      flex-direction: column;
      &:nth-child(2){
        &>div{
          &:nth-child(1){
            flex: 1;
          }
          &:nth-child(2){
            height: 446px;
            min-height: 446px;
          }
        }
      }
    }
  }
  .right-webview {
    display: flex;
    justify-content: space-between;
    & > div {
      width: 800px;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
