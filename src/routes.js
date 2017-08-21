import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'

// 示例功能
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import echarts from './views/charts/echarts.vue'

// 运营管理
import xitongxx from './views/yunyingguanli/xtxx/xitongxx.vue'
import yhts from './views/yunyingguanli/xtxx/yhts.vue'
import wzlb from './views/yunyingguanli/zxgl/wzlb.vue'
import wztj from './views/yunyingguanli/zxgl/wztj.vue'
// 交易管理
import new1 from './views/jiaoyiguanli/new1.vue'
import new2 from './views/jiaoyiguanli/new2.vue'
import bzjjl from './views/jiaoyiguanli/bzjjl.vue'
import xiaoerjr from './views/jiaoyiguanli/xiaoerjr.vue'

// 拍品管理
import pplb from './views/paipinguanli/pplb.vue'
import cpk from './views/paipinguanli/cpk.vue'
import ppzc from './views/paipinguanli/ppzc.vue'
import wpyz from './views/paipinguanli/wpyz.vue'
import yydb from './views/paipinguanli/yydb.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    
    
    {
        path: '/',
        component: Home,
        name: '运营管理',
        iconCls: 'el-icon-message',
        children: [
            { path: '/zxgl', component: wzlb, name: '资讯管理未完成' ,
                children: [
                    { path: '/zxgl/wzlb', component: wzlb, name: '文章列表' },
                    { path: '/zxgl/wztj', component: wztj, name: '文章添加' },
                ]
            },

            { path: '/xtxx', component: xitongxx, name: '系统消息未完成' ,
                children: [
                    { path: '/xtxx/xitongxx', component: xitongxx, name: '系统消息' },
                    { path: '/xtxx/yhts', component: yhts, name: '用户投诉' },
                ]

            }
        ]
    },
    {
        path:'/',
        component:Home,
        name:'交易管理',
        iconCls:'fa fa-bar-chart',
        children:[
            {path:'/new1',component:new1,name:'订单管理'},
            {path:'/new2',component:new2,name:'数据统计未完成'},
            {path:'/bzjjl',component:bzjjl,name:'保证金记录'},
            {path:'/xiaoerjr',component:xiaoerjr,name:'小二介入'}
        ]
    },
    {
        path:'/',
        component:Home,
        name:'拍品管理',
        iconCls:'el-icon-message',
        children:[
            {path:'/pplb',component:pplb,name:'拍品列表'},
            {path:'/cpk',component:cpk,name:'产品库'},
            {path:'/ppzc',component:ppzc,name:'拍品专场未完成'},
            {path:'/wpyz',component:wpyz,name:'微拍预展'},
            {path:'/yydb',component:yydb,name:'一元夺宝'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/echarts', component: echarts, name: '站点运营' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '示例功能',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;