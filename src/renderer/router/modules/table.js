/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/renderer/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '表格',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/renderer/views/table/dynamic-table/index'),
      name: 'DynamicTable',
      meta: { title: '动态表格' }
    },
    {
      path: 'drag-table',
      component: () => import('@/renderer/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: '拖拽排序' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/renderer/views/table/inline-edit-table'),
      name: 'InlineEditTable',
      meta: { title: '行内编辑' }
    },
    {
      path: 'complex-table',
      component: () => import('@/renderer/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: '复合表格' }
    }
  ]
}
export default tableRouter
