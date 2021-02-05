import request from '@/renderer/utils/request'

export function searchUser(name) {
  return request({
    url: '/proton-admin/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/proton-admin/transaction/list',
    method: 'get',
    params: query
  })
}
