/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/renderer/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '组件',
    icon: 'component'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('@/renderer/views/components-demo/tinymce'),
      name: 'TinymceDemo',
      meta: { title: '富文本编辑器－Tinymce' }
    },
    {
      path: 'markdown',
      component: () => import('@/renderer/views/components-demo/markdown'),
      name: 'MarkdownDemo',
      meta: { title: 'Markdown编辑器' }
    },
    {
      path: 'json-editor',
      component: () => import('@/renderer/views/components-demo/json-editor'),
      name: 'JsonEditorDemo',
      meta: { title: 'JSON编辑器' }
    },
    {
      path: 'dropzone',
      component: () => import('@/renderer/views/components-demo/dropzone'),
      name: 'DropzoneDemo',
      meta: { title: 'Dropzone' }
    },
    {
      path: 'back-to-top',
      component: () => import('@/renderer/views/components-demo/back-to-top'),
      name: 'BackToTopDemo',
      meta: { title: '回到顶部' }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/renderer/views/components-demo/drag-dialog'),
      name: 'DragDialogDemo',
      meta: { title: '可拖拽弹窗' }
    },
    {
      path: 'drag-select',
      component: () => import('@/renderer/views/components-demo/drag-select'),
      name: 'DragSelectDemo',
      meta: { title: '可拖拽选择器' }
    },
    {
      path: 'dnd-list',
      component: () => import('@/renderer/views/components-demo/dnd-list'),
      name: 'DndListDemo',
      meta: { title: 'Dnd List' }
    },
    {
      path: 'drag-kanban',
      component: () => import('@/renderer/views/components-demo/drag-kanban'),
      name: 'DragKanbanDemo',
      meta: { title: '可拖拽看板' }
    }
  ]
}

export default componentsRouter
