<template>
  <div class="ProjectManage">
    <ProjectManageLeft :style="{ left: Showleft + 'px' }" />
    <ProjectManageMap />
    <ProjectManageRight :style="{ right: Showleft + 'px' }" />
  </div>
</template>

<script>
import ProjectManageLeft from './Left';
import ProjectManageMap from './Map';
import ProjectManageRight from './Right';

export default {
  name: 'ProjectManage',
  components: { ProjectManageLeft, ProjectManageMap, ProjectManageRight },
  data() {
    return { Showleft: -1900, timer: null };
  },
  computed: {},
  mounted() {
    this.timer = setInterval(() => {
      this.Showleft += 150;
      if (this.Showleft >= 180) {
        this.Showleft = 180;
        clearInterval(this.timer);
      }
    }, 150);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.ProjectManage {
  width: 100%;
  height: 2070px;
  background-position: center;
  // background: url('./images/bg.png') no-repeat 100% 100%;
  // background: url('./images/pm-map-bg.png') no-repeat 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
