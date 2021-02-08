import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/proton-admin/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/proton-admin/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/proton-admin/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/proton-admin/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/proton-admin/role/${id}`,
    method: 'delete'
  })
}
