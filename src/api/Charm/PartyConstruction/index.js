import MetroApi from '@/utils/http';
import { request } from '@/utils/request';
// 党员行业分布
export const partyIndustrial = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/partyIndustrial' });
};
// 学历结构
export const partyAcademical = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/partyAcademical' });
};
// 党员基本情况
export const peopleBasicInfo = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/peopleBasicInfo' });
};

// 党员缴纳情况
export const partyFeeSituation = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/partyFeeSituation' });
};

// 党建文件
export const partyDocument = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/partyDocument' });
};

// 党群建设情况
export const partyConstruct = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/partyConstruct' });
};

// 群团宣传情况
export const publicitySituation = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/publicity' });
};

// 工会维权统计
export const protectRights = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/rights' });
};

// 党群建设
export const partyBuild = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/statistic' });
};

// 劳动竞赛
export const workCompetition = () => {
  return new MetroApi({ myType: 0, method: 'get', url: '/party/workCompetition' });
};

// ************************************************************************************************************

// 党群建设情况
export function getConstructionSit(data) {
  return request({
    url: '/shareData.json',
    method: 'post',
    data,
  });
}

// 党员数量趋势
export function getQuantityTrend(data) {
  return request({
    url: '/shareData.json',
    method: 'post',
    data,
  });
}

// 摄像头点位
export function getCameraPosition(data) {
  return request({
    url: '/shareData.json',
    method: 'post',
    data,
  });
}
// 党员基本情况
export function getPartyMemberBasicSit(data) {
  return request({
    url: '/shareData.json',
    method: 'post',
    data,
  });
}

// 工会维权统计
export function getLabourUnionDefenseSta(data) {
  return request({
    url: '/shareData.json',
    method: 'post',
    data,
  });
}

// 群团宣传情况
export function getGroupPromotion(data) {
  return request({
    url: '/shareData.json',
    method: 'post',
    data,
  });
}

// 性别年龄结构
export function getSexAndAgeStructure(data) {
  return request({
    url: '/shareData.json',
    method: 'post',
    data,
  });
}

// 党群学历结构
export function getPartyGroupEduStructure(data) {
  return request({
    url: '/shareData.json',
    method: 'post',
    data,
  });
}
