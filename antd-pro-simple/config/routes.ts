export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },
              {
                path: '/npprotable',
                name: 'NpProTable',
                icon: 'crown',
                routes: [
                  {
                    path: 'dynamicsettings',
                    name: 'DynamicSettings',
                    icon: 'smile',
                    component: './NpProTable/DynamicSettings',
                  },
                  {
                    path: 'searchProTable',
                    name: 'SearchProTable',
                    icon: 'smile',
                    component: './NpProTable/SearchProTable',
                  },
                  {
                    path: 'dataSourceProTable',
                    name: 'DataSourceProTable',
                    icon: 'smile',
                    component: './NpProTable/DataSourceProTable',
                  },
                  {
                    path: 'noSearchTable',
                    name: 'NoSearchTable',
                    icon: 'smile',
                    component: './NpProTable/NoSearchTable',
                  },
                  {
                    path: 'filterTable',
                    name: 'FilterTable',
                    icon: 'smile',
                    component: './NpProTable/FilterTable',
                  },
                  {
                    path: 'noToolBarTable',
                    name: 'NoToolBarTable',
                    icon: 'smile',
                    component: './NpProTable/NoToolBarTable',
                  },
                  {
                    path: 'requiredSearchTable',
                    name: 'RequiredSearchTable',
                    icon: 'smile',
                    component: './NpProTable/RequiredSearchTable',
                  },
                  {
                    path: 'nestedTable',
                    name: 'NestedTable',
                    icon: 'smile',
                    component: './NpProTable/NestedTable',
                  },
                  {
                    path: 'leftRightTable',
                    name: 'LeftRightTable',
                    icon: 'smile',
                    component: './NpProTable/LeftRightTable',
                  },
                  {
                    path: 'batchTable',
                    name: 'BatchTable',
                    icon: 'smile',
                    component: './NpProTable/BatchTable',
                  },
                  {
                    path: 'formRefTable',
                    name: 'FormRefTable',
                    icon: 'smile',
                    component: './NpProTable/FormRefTable',
                  },
                  {
                    path: 'rightToLeftTable',
                    name: 'RightToLeftTable',
                    icon: 'smile',
                    component: './NpProTable/RightToLeftTable',
                  },
                  {
                    path: 'controlledTable',
                    name: 'ControlledTable',
                    icon: 'smile',
                    component: './NpProTable/ControlledTable',
                  },
                  {
                    path: 'pollingTable',
                    name: 'PollingTable',
                    icon: 'smile',
                    component: './NpProTable/PollingTable',
                  },
                  {
                    path: 'customizeSearchTable',
                    name: 'CustomizeSearchTable',
                    icon: 'smile',
                    component: './NpProTable/CustomizeSearchTable',
                  },
                  {
                    path: 'customizeActionTable',
                    name: 'CustomizeActionTable',
                    icon: 'smile',
                    component: './NpProTable/CustomizeActionTable',
                  },
                  {
                    path: 'customizeToolbarTable',
                    name: 'CustomizeToolbarTable',
                    icon: 'smile',
                    component: './NpProTable/CustomizeToolbarTable',
                  },
                  {
                    path: 'customizeBodyTable',
                    name: 'CustomizeBodyTable',
                    icon: 'smile',
                    component: './NpProTable/CustomizeBodyTable',
                  },
                  {
                    path: 'intlTable',
                    name: 'IntlTable',
                    icon: 'smile',
                    component: './NpProTable/IntlTable',
                  },
                  {
                    path: 'keyWordTable',
                    name: 'KeyWordTable',
                    icon: 'smile',
                    component: './NpProTable/KeyWordTable',
                  },
                  {
                    path: 'valueTypeDateTable',
                    name: 'ValueTypeDateTable',
                    icon: 'smile',
                    component: './NpProTable/ValueTypeDateTable',
                  },
                  {
                    path: 'valueTypeNumberTable',
                    name: 'ValueTypeNumberTable',
                    icon: 'smile',
                    component: './NpProTable/ValueTypeNumberTable',
                  },
                  {
                    path: 'valueTypeStyleTable',
                    name: 'ValueTypeStyleTable',
                    icon: 'smile',
                    component: './NpProTable/ValueTypeStyleTable',
                  },
                  {
                    path: 'valueTypeSelectTable',
                    name: 'ValueTypeSelectTable',
                    icon: 'smile',
                    component: './NpProTable/ValueTypeSelectTable',
                  },
                  {
                    path: 'customizeValueTypeTable',
                    name: 'CustomizeValueTypeTable',
                    icon: 'smile',
                    component: './NpProTable/CustomizeValueTypeTable',
                  },
                ],
              },
              {
                name: 'NpEditableProTable',
                icon: 'crown',
                path: '/npEditableProTable',
                routes: [
                  {
                    path: '/npEditableProTable',
                    name: 'NpEditableProTable',
                    icon: 'smile',
                    component: './NpEditableProTable/NpEditableProTable',
                  },
                  {
                    path: 'customizeEditableTable',
                    name: 'CustomizeEditableTable',
                    icon: 'smile',
                    component: './NpEditableProTable/CustomizeEditableTable',
                  },
                  {
                    path: 'saveEditableProTable',
                    name: 'SaveEditableProTable',
                    icon: 'smile',
                    component: './NpEditableProTable/SaveEditableProTable',
                  },
                ]
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
