<template>
  <div style="overflow: auto; height: 1000px">
    <div class="content">
      <div class="title">小郭巨一期</div>
      <div class="flex">
        <div class="img">
          <img src="./img/tuceng1.png" />
        </div>
        <div class="content-name">
          小郭巨一期围垦工程已经完工，围垦总面积7000亩，新增岸线2.2公里，水深在8-15米之间。六横发展海上风电项目及创建风电机组制造基地的时机和条件都非常成熟，已建成普陀6#海上风电场2区项目，且已经并网运行。国电在六横小郭巨区域建设的占地100亩的陆上组装基地及2000吨级的配套码头基本闲置，可作为华东海上风机运行维护母港的选址。
          目前已落地的浙能液化天然气（LNG）接收站项目选址在该区块。
        </div>
      </div>
    </div>
    <div class="content">
      <div class="title">棕榈湾地块</div>
      <div class="flex">
        <div class="img">
          <img src="./img/tuceng2.png" />
        </div>
        <div class="content-name">
          棕榈湾地块位于六横岛西北侧，该区块三面环山、一面临海，远离居民区，可用陆域面积876亩，水、电、道路、通讯等基础设施配套完善，并可根据项目需要进行供冷、供热；紧邻宁波-舟山双屿门航道，具有优良的深水岸线，可用深水岸线约460米，岸滩稳定，不冻不淤，可以建造30万吨级码头。目前已完成对该区域的整体搬迁、土地征用等政策处理工作，并完成了海堤及工作船码头建设、部分开山爆破、场地回填等前期工作。重点引进：油气综合储运、船用低硫燃料油生产、清洁能源生产等项目。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.flex {
  display: flex;
  width: 1650px;
  height: 384px;
  background-color: rgba(18, 60, 79, 0.2);
}
.content {
  height: 500px;
}
.title {
  width: 203px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  height: 47px;
  text-align: center;
  background-image: url(./img/right-titleBg.png);
  line-height: 47px;
  background-repeat: no-repeat;
}
.img {
  width: 787px;
  height: 308px;
  padding: 8px;
}
.content-name {
  padding: 40px;
  width: 795px;
  height: 276px;
  font-size: 24px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 36px;
}
</style>