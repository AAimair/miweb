export default{
    //获取购物车数据
    getcar(ctx){
        let cars = getdata()
        ctx.commit('updatecar',cars);
    },
    // 添加购物车数据
    addcar(ctx,val){
        //获取数据
        console.log(val.count)
        let data = getdata()
        //判断是否存在
        let ishave = data.some(item=>{
            if(val.val.id == item.id){
                item.num+=val.count
                return true
            }
        })
        if(!ishave){
            val.val.num=val.count;
            data.push(val.val)
        }
        //将数据返回给local
        localStorage.cars = JSON.stringify(data);
        ctx.commit('updatecar',data);
    },
    //删除购物车数据
    deletecar(ctx,val){
        let cars = getdata()
        let newcars = cars.filter(item=>{
            if(item.id == val.id){
                return false
            }else{
                return item
            }
        })
         //将数据返回给local
         localStorage.cars = JSON.stringify(newcars);
         ctx.commit('updatecar',newcars);
    },
    //加号方法
    addone(ctx,val){
        let cars = getdata()
        cars = cars.filter(item=>{
            if(item.id == val.id){
                item.num++
                return item
            }else{
                return item;
            }
        })
        localStorage.cars = JSON.stringify(cars)
        ctx.commit('updatecar',cars);
    },
    //减号方法
    redone(ctx,val){
        let cars = getdata()
        let newcars = cars.filter(item=>{
            if(item.id == val.id){
                if(item.num > 1){ 
                    item.num--
                }else{
                    item.num=1
                }
                return true
            }else{
                return item;
            }
        })
        localStorage.cars = JSON.stringify(newcars)
        ctx.commit('updatecar',newcars);
    },
}
   //获取local数据
   function getdata(){
    return JSON.parse(localStorage.getItem("cars")?localStorage.getItem("cars"):'[]')
}