import axios from '@/api/request';

export default {
  // 评论列表
  commentList() {
    return axios.get('/opinion/analysis/commentList');
  },
  // 重点舆情
  threeTypeIndustries(qgqx) {
    return axios.get('/opinion/analysis/getImportantPublicSentiment', {
      params: { qgqx },
    });
  },
  // 舆情搜索
  selectPublicSentiment(keyWord) {
    return axios.get('/opinion/analysis/selectPublicSentiment', {
      params: { keyWord },
    });
  },
  // 事件态势
  eventSituation() {
    return axios.get('/opinion/analysis/eventSituation');
  },
  // 事件趋势
  getDevelopmentTrend() {
    return axios.get('/opinion/analysis/getDevelopmentTrend');
  },
  // 热门网站来源
  getHotWebsiteSource() {
    return axios.get('/opinion/analysis/getHotWebsiteSource');
  },
  // 热词词云
  hotWord() {
    return axios.get('/opinion/analysis/hotWord');
  },
  // 媒体传播态势
  mediaCommunicationSituation() {
    return axios.get('/opinion/analysis/mediaCommunicationSituation');
  },
  // 媒体指数排行
  mediaIndexRank() {
    return axios.get('/opinion/analysis/mediaIndexRank');
  },
  // 最新舆情
  getLatelyPublicSentiment() {
    return axios.get('/opinion/analysis/getLatelyPublicSentiment');
  },
};
