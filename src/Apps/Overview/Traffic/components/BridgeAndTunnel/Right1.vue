<template>
  <div class="right-1">
    <Title>道路监控</Title>
    <Monitor :videoList="videoList1" />
    <Title>道路监控</Title>
    <Monitor :videoList="videoList2" />
  </div>
</template>
<script>
import Title from './Title';
import Monitor from '../Monitor';
import { getSignature } from '@/api/AuthController/api';

export default {
  components: {
    Monitor,
    Title,
  },
  data() {
    return {
      videoList1: [
        {
          name: '邬家红绿灯监控',
          date: new Date(),
          id: 0,
          url: '33090305011321460328',
        },
        {
          name: '世大梅线与六横路叉口监控位',
          date: new Date(),
          id: 1,
          url: '33090305741324711954',
        },
        // { name: '监控名称3', date: '2021.06.17 12:58:23', id: 2 },
        // { name: '监控名称4', date: '2021.06.17 12:58:23', id: 3 },
        // { name: '监控名称5', date: '2021.06.17 12:58:23', id: 4 },
        // { name: '监控名称6', date: '2021.06.17 12:58:23', id: 5 },
      ],
      videoList2: [
        {
          name: '世大梅线与六横路叉口监控位',
          date: new Date(),
          id: 0,
          url: '33090305741324711954',
        },
        {
          name: '邬家红绿灯监控',
          date: new Date(),
          id: 1,
          url: '33090305011321460328',
        },
      ],
    };
  },
  computed: {
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const data = {
        serviceId: 'ff590480a17548d4b3dae8d5790b013a',
        subServiceId: '93471aa24c7c4f4393786f2512d8c54e',
        accessToken: '0f5289dc4ddd464c8e8a3ef0ed2de163',
        requestData: {
          size: 100,
          includeColumns: true,
          params: [],
        },
      };
      const res = await getSignature(data).request();
      console.log(res);
    },
  },
};
</script>
<style lang="scss" scoped>
.right-1 {
  position: absolute;
  top: 26.4rem;
  right: 100rem;
  width: 80rem;
  // outline: 1px solid red;
}
</style>
