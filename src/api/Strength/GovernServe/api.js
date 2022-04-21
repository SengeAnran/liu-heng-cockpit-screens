import MetroApi from '@/utils/http';

// 办理量信息
export const getHandlingStatistic = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/getHandlingStatistic' });
};
// 办理量详细信息
export const getHandlingList = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/getHandlingList' });
};
// 办理量趋势
export const getTrendOfHandlingVolume = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/trendOfHandlingVolume' });
};

// 监控视频
export const getRoadMonitor = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/traffic/getRoadMonitor' });
};
// 异常行为分析
export const getAbnormalAnalysis = (data) => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/getAbnormalAnalysis', data });
};
// 异常行为分析列表
export const getAbnormalAnalysisList = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/getAbnormalAnalysisList' });
};
// 月度明星
export const getMonthlyStar = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/getMonthlyStar' });
};
// 本月事件办理量
export const getMonthlyHandling = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/getMonthlyHandling' });
};
// 好差评数据概览
export const getGoodReview = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/getGoodReview' });
};
// *************招投标
// 招标项目列表
export const getAchievementList = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/goverment/bidding/achievementList' });
};
// 招标达成率
export const getAchievementRate = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/goverment/bidding/achievementRate' });
};
// 招投标指标展示
export const getBiddingShow = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/goverment/bidding/show' });
};

// **********************************
// 预约情况分析
export const getAppointmentAnalysis = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/appointmentAnalysis' });
};

// 预约趋势
export const getBookingTrend = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/bookingTrend' });
};
// 评价占比
export const getEvaluationPercent = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/evaluationPercent' });
};

// 政务大厅信息
export const getInfoGovernment = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/informationOfGovernment' });
};
// 实时预约情况
export const getRealtimeBooking = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/realtimeBooking' });
};
// 实时评价分析情况
export const getEvaluationSituation = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/realtimeEvaluationAndAnalysisSituation' });
};

// 实时办理情况
export const getRealtimeHandling = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/realtimeHandling' });
};

// 实时预约明细
export const getRealtimeReservationDetails = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/realtimeReservationDetails' });
};

// 热点事项TOP5
export const geTopFiveHotIssues = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/topFiveHotIssues' });
};

// 本月事项满意度排行TOP5
export const getTopFiveSatisfactionRank = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/government/services/topFiveSatisfactionRank' });
};
