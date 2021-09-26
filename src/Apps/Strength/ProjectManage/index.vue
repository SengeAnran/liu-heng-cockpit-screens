<template>
  <div class="ProjectManage">
    <transition name="slide" appear> <ProjectManageLeft :key="ProjectManageLeft" /></transition>
    <transition name="slide1" appear> <ProjectManageRight :key="ProjectManageRight" /></transition>

    <ProjectManageMap />
  </div>
</template>

<script>
import ProjectManageLeft from './Left';
import ProjectManageMap from './Map';
import ProjectManageRight from './RightNew';

export default {
  name: 'ProjectManage',
  components: { ProjectManageLeft, ProjectManageMap, ProjectManageRight },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import url('../../../transform.css');
.ProjectManage {
  position: relative;
  color: #fff;
  width: 100%;
  height: 2070px;
  background-size: 100% 100%;
}
</style>
