import React from 'react'
import loadable from 'react-loadable';
import lazyload  from '@/utlis/lazyload'

const loading=()=>{
    return <div>
             loading......
        </div>
}
const Home = loadable ({
    loader:()=>import('../views/home'),
    loading:loading
}) 
const Main = loadable ({
    loader:()=>import('../views/main'),
    loading:loading
}) 
//试题管理
const addItem=loadable({
    loader:()=>import("../views/testLine/addItem"),
    loading
  })
  const classifyItem=loadable({
    loader:()=>import("../views/testLine/classifyItem"),
    loading
  })
  const checkItem=loadable({
    loader:()=>import("../views/testLine/checkItem"),
    loading
  })
  //用户管理
  const addUsers=loadable({
    loader:()=>import("../views/userControl/addUsers"),
    loading
  })
  const display=loadable({
    loader:()=>import("../views/userControl/display"),
    loading
  })
  const role=loadable({
    loader:()=>import("../views/userControl/role"),
    loading
  })
  //考试管理
  const addTest=loadable({
      loader:()=>import("../views/examination/addTest"),
      loading
  })
  const paperList=loadable({
    loader:()=>import("../views/examination/paperList"),
    loading
  })
  const addTests=loadable({
    loader:()=>import("../views/examination/addTest"),
    loading
  })
  //班级管理
  const classroom=loadable({
    loader:()=>import("../views/class/classroom"),
    loading
  })
  const grade=loadable({
      loader:()=>import("../views/class/grade"),
      loading
  })
  const student=loadable({
    loader:()=>import("../views/class/student"),
    loading
  })
  //阅卷管理
  const approval=loadable({
    loader:()=>import("../views/mark/approval"),
    loading
  })
    //无关
    const QuestionList = loadable ({
        loader:()=>import('../views/questions/questionList'),
        loading
    }) 
    const Baselayout = loadable ({
        loader:()=>import('../layout/Baselayout'),
        loading
    }) 
const router={
   mode:'history',
   routers:[
     {
         path:'/login',
         component:lazyload(()=>import('../views/login')),
         meta:{
             isSlideMenu:false,
             title:"登录",
         }
     },
    //  {
    //      path:"/404",
    //      component:lazyload(()=>import('../views/404')),
    //  },
     {
         path:'/',
         component:Baselayout,
         children:[
             {
                 path:'/home',
                 component:Home,
                 meta:{
                    isSlideMenu:true,
                    title:"系统首页"
                }
             },
             {
                path:'/testList',
                component:Main,
                meta:{
                   isSlideMenu:true,
                   title:"试题管理"
               },
               children:[
                {
                    path:'/testList/addItem',
                    component:lazyload(()=>import('../views/exam/examList')),
                    meta:{
                       isSlideMenu:true,
                       title:"添加试题"
                   },
                },
                {
                    path:'/testList/classifyItem',
                    component:classifyItem,
                    meta:{
                       isSlideMenu:false,
                       title:"试题分类"
                   },
                },
                {
                    path:'/testList/checkItem',
                    component:checkItem,
                    meta:{
                       isSlideMenu:true,
                       title:"查看试题"
                   }
                }
               ]
            },
            {
                path:'/user',
                component:Main,
                meta:{
                   isSlideMenu:true,
                   title:"用户管理"
               },
               children:[
                    {
                        path:'/user/addUsers',
                        component:addUsers,
                        meta:{
                           isSlideMenu:true,
                           title:"添加用户"
                       },
                    },
                    {
                        path:'/questions/role',
                        component:role,
                        meta:{
                           isSlideMenu:false,
                           title:"角色管理"
                       },
                    },
                    {
                        path:'/user/display',
                        component:display,
                        meta:{
                           isSlideMenu:true,
                           title:"用户展示"
                       },
                    },
                    
                  
                     
                     

               ]
            },
            {
                path:"/examination",
                component:Main,
                meta:{
                  title:"考试管理",
                  isSlideMenu:true,
                  icon:"copy"
                },
                children:[
                  {
                    path:"/examination/addTests",
                    component:addTests,
                    meta:{
                      title:"添加考试",
                      isSlideMenu:true
                    }
                  },
                  {
                    path:"/examination/paperList",
                    component:paperList,
                    meta:{
                      title:"试卷列表",
                      isSlideMenu:true
                    }
                  }
                ]
              },
              
              {
                path:"/class",
                component:Main,
                meta:{
                  title:"班级管理",
                  isSlideMenu:true,
                  icon:"copy"
                },
                children:[
                  {
                    path:"/class/classroom",
                    component:classroom,
                    meta:{
                      title:"添加考试",
                      isSlideMenu:true
                    }
                  },
                  {
                    path:"/class/grade",
                    component:grade,
                    meta:{
                      title:"教室管理",
                      isSlideMenu:true
                    }
                  },
                  {
                    path:"/class/student",
                    component:student,
                    meta:{
                      title:"学生管理",
                      isSlideMenu:true
                    }
                  }
                  
                ]
              }, 
              {
                path:"/mark",
                component:Main,
                meta:{
                  title:"阅卷管理",
                  isSlideMenu:true,
                  icon:"copy"
                },
                children:[
                  {
                    path:"/mark/approval",
                    component:approval,
                    meta:{
                      title:"待批班级",
                      isSlideMenu:true
                    }
                  }
                ]

              }
         ]
     }

   ]
}
 export const menuRoutes= router.routers[router.routers.length - 1].children
  
 const routerArrayToJSON=(routers)=>{
     let routeJSON={}
         routers.forEach((item)=>{
         routeJSON[item.path]=item
         if(item.children)
         {
              routeJSON=Object.assign({},routeJSON,routerArrayToJSON(item.children))
         }
        
     }) 
     return routeJSON
   
 }
 export const getRoute=( () => {
     const routeJSON=routerArrayToJSON(menuRoutes)
     return (path) => {
       
         return routeJSON[path]
     }
 })()
export default router