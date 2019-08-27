export default{
    path: '/home',
    name: 'home',
    component: () => import('../views/home/Home.vue'),
    children:[
        {path:"",redirect:"tj"},
        {path:"tj",name:"tj",component:()=>import("../views/home/tab/tj")},
        {path:"sj",name:"sj",component:()=>import("../views/home/tab/sj")},
        {path:"zn",name:"zn",component:()=>import("../views/home/tab/zn")},
        {path:"ds",name:"ds",component:()=>import("../views/home/tab/ds")},
        {path:"bjb",name:"bjb",component:()=>import("../views/home/tab/bjb")},
        {path:"jd",name:"jd",component:()=>import("../views/home/tab/jd")},
        {path:"shzb",name:"shzb",component:()=>import("../views/home/tab/shzb")}
    ]
}