import request from '@/utils/request'

// 节点列表
export function getNodeList(parameter) {
    return request({
      url: '/interface/api/validator/list?pageNo=1&pageSize=200',
      method: 'get',
    })
  }

// 投票信息
export function getVoteInfo(address) {
    return request({
      url: `/interface/api/delegation/list?delegationAddr=${address}`,
      method: 'get',
    })
  }

// 全局信息
export function getAllInfo() {
    return request({
      url: '/interface/api/global',
      method: 'get',
    })
  } 

// 节点信息
export function getNodeInfo(address) {
    return request({
      url: `/interface/api/validator/info?manageAddr=${address}`,
      method: 'get',
    })
  }   