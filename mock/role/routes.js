// Just a mock data

const constantRoutes = [
  {
    path: '/redirect',
    component: 'layout/Layout',
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: 'views/redirect/index'
      }
    ]
  },
  {
    path: '/login',
    component: 'views/login/index',
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: 'views/login/auth-redirect',
    hidden: true
  },
  {
    path: '/404',
    component: 'views/error-page/404',
    hidden: true
  },
  {
    path: '/401',
    component: 'views/error-page/401',
    hidden: true
  },
  {
    path: '',
    component: 'layout/Layout',
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: 'views/dashboard/index',
        name: 'Dashboard',
        meta: { title: '仪表盘', icon: 'dashboard', affix: true }
      }
    ]
  },
  // {
  //   path: '/documentation',
  //   component: 'layout/Layout',
  //   children: [
  //     {
  //       path: 'index',
  //       component: 'views/documentation/index',
  //       name: 'Documentation',
  //       meta: { title: '文档', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  {
    path: '/guide',
    component: 'layout/Layout',
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: 'views/guide/index',
        name: 'Guide',
        meta: { title: '功能指引', icon: 'guide', noCache: true }
      }
    ]
  }
]

const asyncRoutes = [
  {
    path: '/permission',
    component: 'layout/Layout',
    redirect: '/permission/index',
    alwaysShow: true,
    meta: {
      title: '权限控制',
      icon: 'lock',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'page',
        component: 'views/permission/page',
        name: 'PagePermission',
        meta: {
          title: '页面权限',
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        component: 'views/permission/directive',
        name: 'DirectivePermission',
        meta: {
          title: '指令权限'
        }
      },
      {
        path: 'role',
        component: 'views/permission/role',
        name: 'RolePermission',
        meta: {
          title: '角色权限',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/icon',
    component: 'layout/Layout',
    children: [
      {
        path: 'index',
        component: 'views/icons/index',
        name: 'Icons',
        meta: { title: '图标', icon: 'icon', noCache: true }
      }
    ]
  },

  {
    path: '/components',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'ComponentDemo',
    meta: {
      title: '组件',
      icon: 'component'
    },
    children: [
      {
        path: 'tinymce',
        component: 'views/components-demo/tinymce',
        name: 'TinymceDemo',
        meta: { title: '富文本编辑器——Tinymce' }
      },
      {
        path: 'markdown',
        component: 'views/components-demo/markdown',
        name: 'MarkdownDemo',
        meta: { title: 'Markdown编辑器' }
      },
      {
        path: 'json-editor',
        component: 'views/components-demo/json-editor',
        name: 'JsonEditorDemo',
        meta: { title: 'JSON编辑器' }
      },
      // {
      //   path: 'split-pane',
      //   component: 'views/components-demo/split-pane',
      //   name: 'SplitpaneDemo',
      //   meta: { title: 'SplitPane' }
      // },
      // {
      //   path: 'avatar-upload',
      //   component: 'views/components-demo/avatar-upload',
      //   name: 'AvatarUploadDemo',
      //   meta: { title: 'Avatar Upload' }
      // },
      {
        path: 'dropzone',
        component: 'views/components-demo/dropzone',
        name: 'DropzoneDemo',
        meta: { title: 'Dropzone' }
      },
      // {
      //   path: 'sticky',
      //   component: 'views/components-demo/sticky',
      //   name: 'StickyDemo',
      //   meta: { title: 'Sticky' }
      // },
      // {
      //   path: 'count-to',
      //   component: 'views/components-demo/count-to',
      //   name: 'CountToDemo',
      //   meta: { title: 'Count To' }
      // },
      // {
      //   path: 'mixin',
      //   component: 'views/components-demo/mixin',
      //   name: 'ComponentMixinDemo',
      //   meta: { title: 'componentMixin' }
      // },
      {
        path: 'back-to-top',
        component: 'views/components-demo/back-to-top',
        name: 'BackToTopDemo',
        meta: { title: '回到顶部' }
      },
      // {
      //   path: 'drag-dialog',
      //   component: 'views/components-demo/drag-dialog',
      //   name: 'DragDialogDemo',
      //   meta: { title: 'Drag Dialog' }
      // },
      {
        path: 'drag-select',
        component: 'views/components-demo/drag-select',
        name: 'DragSelectDemo',
        meta: { title: '可拖拽选择器' }
      },
      {
        path: 'dnd-list',
        component: 'views/components-demo/dnd-list',
        name: 'DndListDemo',
        meta: { title: 'Dnd List' }
      },
      {
        path: 'drag-kanban',
        component: 'views/components-demo/drag-kanban',
        name: 'DragKanbanDemo',
        meta: { title: '可拖拽看板' }
      }
    ]
  },
  {
    path: '/charts',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'Charts',
    meta: {
      title: '图表',
      icon: 'chart'
    },
    children: [
      {
        path: 'keyboard',
        component: 'views/charts/keyboard',
        name: 'KeyboardChart',
        meta: { title: 'Keyboard Chart', noCache: true }
      },
      {
        path: 'line',
        component: 'views/charts/line',
        name: 'LineChart',
        meta: { title: 'Line Chart', noCache: true }
      },
      {
        path: 'mixchart',
        component: 'views/charts/mixChart',
        name: 'MixChart',
        meta: { title: 'Mix Chart', noCache: true }
      }
    ]
  },
  {
    path: '/nested',
    component: 'layout/Layout',
    redirect: '/nested/menu1/menu1-1',
    name: 'Nested',
    meta: {
      title: '嵌套路由',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: 'views/nested/menu1/index',
        name: 'Menu1',
        meta: { title: 'Menu1' },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: 'views/nested/menu1/menu1-1',
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: 'views/nested/menu1/menu1-2',
            name: 'Menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: 'views/nested/menu1/menu1-2/menu1-2-1',
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: 'views/nested/menu1/menu1-2/menu1-2-2',
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: 'views/nested/menu1/menu1-3',
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: 'views/nested/menu2/index',
        meta: { title: 'Menu2' }
      }
    ]
  },

  {
    path: '/example',
    component: 'layout/Layout',
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: '示例',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: 'views/example/create',
        name: 'CreateArticle',
        meta: { title: '创建文章', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: 'views/example/edit',
        name: 'EditArticle',
        meta: { title: '编辑文章', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: 'views/example/list',
        name: 'ArticleList',
        meta: { title: '文章列表', icon: 'list' }
      }
    ]
  },

  // {
  //   path: '/tab',
  //   component: 'layout/Layout',
  //   children: [
  //     {
  //       path: 'index',
  //       component: 'views/tab/index',
  //       name: 'Tab',
  //       meta: { title: 'Tab', icon: 'tab' }
  //     }
  //   ]
  // },

  // {
  //   path: '/error',
  //   component: 'layout/Layout',
  //   redirect: 'noRedirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'Error Pages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: 'views/error-page/401',
  //       name: 'Page401',
  //       meta: { title: 'Page 401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: 'views/error-page/404',
  //       name: 'Page404',
  //       meta: { title: 'Page 404', noCache: true }
  //     }
  //   ]
  // },

  // {
  //   path: '/error-log',
  //   component: 'layout/Layout',
  //   redirect: 'noRedirect',
  //   children: [
  //     {
  //       path: 'log',
  //       component: 'views/error-log/index',
  //       name: 'ErrorLog',
  //       meta: { title: 'Error Log', icon: 'bug' }
  //     }
  //   ]
  // },

  {
    path: '/excel',
    component: 'layout/Layout',
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'Excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: 'views/excel/export-excel',
        name: 'ExportExcel',
        meta: { title: '导出Excel' }
      },
      {
        path: 'export-selected-excel',
        component: 'views/excel/select-excel',
        name: 'SelectExcel',
        meta: { title: '导出选中项' }
      },
      {
        path: 'export-merge-header',
        component: 'views/excel/merge-header',
        name: 'MergeHeader',
        meta: { title: '合并表头' }
      },
      {
        path: 'upload-excel',
        component: 'views/excel/upload-excel',
        name: 'UploadExcel',
        meta: { title: '导入Excel' }
      }
    ]
  },

  {
    path: '/zip',
    component: 'layout/Layout',
    redirect: '/zip/download',
    alwaysShow: true,
    meta: { title: 'Zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: 'views/zip/index',
        name: 'ExportZip',
        meta: { title: '导出Zip' }
      }
    ]
  },

  {
    path: '/pdf',
    component: 'layout/Layout',
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: 'views/pdf/index',
        name: 'PDF',
        meta: { title: 'PDF', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: 'views/pdf/download',
    hidden: true
  },

  // {
  //   path: '/theme',
  //   component: 'layout/Layout',
  //   redirect: 'noRedirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: 'views/theme/index',
  //       name: 'Theme',
  //       meta: { title: 'Theme', icon: 'theme' }
  //     }
  //   ]
  // },

  {
    path: '/clipboard',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    children: [
      {
        path: 'index',
        component: 'views/clipboard/index',
        name: 'ClipboardDemo',
        meta: { title: '剪贴板', icon: 'clipboard' }
      }
    ]
  },

  // {
  //   path: '/i18n',
  //   component: 'layout/Layout',
  //   children: [
  //     {
  //       path: 'index',
  //       component: 'views/i18n-demo/index',
  //       name: 'I18n',
  //       meta: { title: 'I18n', icon: 'international' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

module.exports = {
  constantRoutes,
  asyncRoutes
}
