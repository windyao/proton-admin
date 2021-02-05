import request from '@/renderer/utils/request'

export function login(data) {
  return request({
    url: '/proton-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/proton-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/proton-admin/user/logout',
    method: 'post'
  })
}