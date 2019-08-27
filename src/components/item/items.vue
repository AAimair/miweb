<template>
    <div class="items">
        <div class="top">
            <navr v-if="imgs.length>0" :imgs="imgs"></navr>
            <navr v-else :imgs="img_url"></navr>
            <div class="left">
                <router-link to="/car">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABtElEQVR4Ae2btVYYQBBF4+6eNHHtYk1ccGtx9++AHqdFO6TFpcKdFpcKhwYfBtdZXOftOfcH7urIniIiYAASIAiCIAiCjp8gAEEQBEFnmTCmgnGDoPV40/LoYv5C0DKhtH4UQ9A8PrTxiCKCoEBBTjzOIHnlJBLhFgsV5KTimifyFeRk4h1E5CfIScdDkchLkJPNnNYuKFiQk8dc0h1qyGdOmSBHlSA/g5yr2oNVN0FOLXNLdzQvb6tG5pH2dIenIKeZeaI7HySHDx2CHFWCXAQ5rcwz7RlFT8PKea095eouyOll3mvPSXsLckaYD9qT9q6CnH7mk/aqhrtBzlftZR9JzjjzXXtdzJfkYam5cHiXcSR52GmvrMYxtRuIGWN+ofQMQZtyj3HCFtvdIW0BQeZrfgLX/DIehofiFwgyhxp9CDUQrG4LD6Q7dpcwewVBSLkiab+XeKHss/MXdwMKh5sf3DXMDQgyNy+UonlBloT2FzRQ7Qzvw27BQxMn2oDRSJ4CQfiKsCefWeIgaPOVFAlB+FC343dSN75krucsE85UMu4HegYBCIIgCIIgCIIgCIIgMAMUpMidp52UUAAAAABJRU5ErkJggg==" alt=""></router-link>
            </div>
            <div  class="right">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAACm0lEQVRoBe3BT2jWdRwA4M/7vvaOLawORdA6iF6iokNZIkEWRJGJKM46GIanBhoeougfRPQHUogRHQo8VKzVkuEsRpcwKBChk7KEjOaWxRqDyDR633dzTxASe3+87vdeft+X4H2eiK6urv89FQMOm9HQMO0zO1Sic2x0Wtake6Iz7NTQSt2OSM9GDVdStyHSUnHaSiaVIyUD8myPlByW59NIyYw8ZyMlDXnqkZIleeqRknPyTEUqrvKMC/KMRBoe9YN2bIviucWX2nNKOYrlOkMWtKdmfRRJxaB5WT+a00rN9iiS+52Udd6zqtb4RtYp66M41hiTdckhN8ZlHjZsSkPdlBHblKMorvaGv2V9685IT8luv8qa8Xh0gg1OyPrLK3qjKKp2OeKchgXTRmxWin+5yUeWZI24OYpjk59kHbdWjxddkPWde6NIdlrQyrwpWbP2KEWR3KGmPXVvWR1F87X2jFsXxXO7dkx6MNLwnDx/2KsSqfhQnulIyVF5FiMlo/IsRkrelOdspOQhec57WiVSscqMfCfdF6nYrT2f6I80fKw9F72gGsVTNayVX7zkd83O2Bwp2GXKcos+cEOE673vkmZfWBfFU/GAVw0b856n9Md/3OW4ZjWv64vOUfKk3zT72WPRSa7xtgXNjrktOsmtvtJswZBro5MMmNFszh6luMxqT3jXEWOGDOiN4unzmppmJ9wdYZWX/Wm5efuVo3jW+lyzJYcc08qEvkjBI85oz4RSpKDqeRe1Y1+kot+IfHN6Ih2bfC/P1kjJO/IcjJQclWc0UjImz2ikZEieA5GSAXm2REp6zVvJrGqkZb+VDEZqyiZcybhSpKfPhFbG9UZnKNlnznKzBpWik/TY6qBRow7YohpdXV0d9A/qIDTTrnD0UAAAAABJRU5ErkJggg==" alt="">
            </div>
        </div>
        <div class="bom" v-if="ishave">
           <div class="goods-name" >
               {{list[0].data.seo.title}}
           </div>
           <div class="goods-msg" v-html="list[0].data.seo.description" ></div>
           <div class="price"><span>￥</span>{{list[0].data.goods_info[0].price}}</div>
           <div class="tab" v-if="param!=undefined"> 
               <ul>
                   <li v-for="(item,index) of param" :key="index" :class="item.icon==null?'display':''">
                       <div><img class="icon" :src="item.icon" alt=""></div>
                       <span>{{item.name}}</span>
                       <span>{{item.value}}</span>
                   </li>
               </ul>
           </div>
           <div class="gg">
                <div class="ggbox">
                    <div @click="isshow=true"><span>已选</span><i>{{list[0].data.seo.title}}</i><p>></p></div>
                    <div><span>送至</span><i>青岛胶州</i><p>></p></div>
                    <div class="ganni"><span>√小米自营</span><span>√七天无理由</span><p>></p></div>
                </div>
           </div>
            <div class="tabbom" v-if="shares.length>0"> 
               <ul>
                   <li v-for="(share,index) of shares" :key="index">
                       <div class="tabbom-top">
                           <div class="left">
                               <img :src="share.user_avatar" alt="">
                           </div>
                           <div class="center">
                                   <p>{{share.user_name}}</p>
                                   <span>{{share.add_time}}</span>
                           </div>
                           <div class="right">
                               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAApCAYAAABDV7v1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEQ0NUY5NzNGRTVCMTFFN0ExRUNCNDEyMEVGQjUzQjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ0NUY5NzRGRTVCMTFFN0ExRUNCNDEyMEVGQjUzQjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RDQ1Rjk3MUZFNUIxMUU3QTFFQ0I0MTIwRUZCNTNCNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RDQ1Rjk3MkZFNUIxMUU3QTFFQ0I0MTIwRUZCNTNCNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsLgqlwAAAKCSURBVHja1JjbS1RBHMfPbltQQTcD7UKWpCjeipWiRJOih66iIj7YX9CbCAo+GPRob0HBQmqPUQ89STcoVsouVkQQGASaIIjIpoRKF3b9DsyJr8Mc19bZc2Z/8IH5zRnOfM/Mb34zZ0KxWMwxaNtAF2gBRWARfAb3wF2wlOmLIwZF7gKvQQnVbQL1EvEBbeBdJi8PGxTaq4hU7SB4DmqCFnqFyh9BNTgNHlL9VjCQSb+mhO4DeeR3yNh8AZqlONcqwYmghFZReRYMK8+vK340KKHHqDyqef5dWfF7ghLalEaoyC6b19OvCaFH5cJx7a2mTZniJ4IQeo3KIsG/0rS5oAkFX4WeB5fJfwDmNe3aFP+Tn0L3g34Qkn4S3NC0Ow6OkD8DvvolNB88AgVUNwi+aNr2KL7YAFJ+CK2TC6aC6iZBp6ZtLbik1N3J5ha6HTSCJyAOCunZD3DRIzavUmhw+kqtgSQtziqR356Cs/Siv+An+Rvk8U1n43JBjXk8n1/HGgjJ3HsS3BIjekaTnHcSOpG/wU2ZP8dW6awPfDOQAqOR/4xT0el9cBtMraH9BCjOQFiBPNCUuiEa0Qw32w4Zg64VO/7YNBgioYl0oznnBGf5fL4NO/ZaLZWHbRV6ABzKBaGnqLwA3tsqtJ7KL0Vut1VoA0+76b9QU7YXHM4FoRyfS+6Fhe1C38jt2kqhvJDi2bgpMbUbleWCUJ72X/xHG7Z42kf50sLmEY1n46bEhO0G5Wr+tFFoHZ2H/6gXGTYJPUflD/IwYp1Qcaxr94pPG4RulFP+GGzxik/3j5Mt3Q1Gygfxs14jmrQsRXWr8ekKfWaBOCFsBLQ6K+/7/9myAAMA/8t6rPtyX9AAAAAASUVORK5CYII=" alt="">
                           </div>
                       </div>
                       <div class="tabbom-bom">
                           <div class="bomtop">
                               <p v-html="share.comment_content"></p>
                           </div>
                           <div class="bomcenter" >
                               <ul>
                                   <li v-for="(img,index) of share.comment_full_images" :key="index">
                                       <img  :src="img" alt="">
                                   </li>
                               </ul>
                               
                           </div>
                       </div>
                   </li>
               </ul>
           </div> 
        </div>
        <div class="incarbox">
            <div class="incar">
                <router-link :to="{name:'tj'}" tag="div">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAk1BMVEUAAABxcXFxcXFwcHBxcXFwcHBvb29wcHBwcHBxcXFvb29wcHBubm5vb29vb29wcHBwcHBvb29wcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBycnJwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBvb29vb29wcHBwcHBwcHBubm5wcHB0dHRycnJ2dnY0KzjsAAAALnRSTlMAAgn0mv6+6cEcQdIlEg36rTcy5E0g7tXFu6GPhmwG3Kl4KbSTc1xXR8p/Zyxhwd65kwAAAr1JREFUSMftlumSojAUhYEYQemwg7K4r63dOXn/p5ubbqoVcByw5tfUnNLKMfB5b05AMZ7JJBkv6gt8mRZhKF6ta552uxMNr7DLi82YfVmSHcyKEYeU4CMxkKaQ0wDgQcCBIKXPg2KO5hJ+6XmlD8wjmhrAJjOAHUzyBwbMEjK92U8bsI9kyR+1/yTfc4s2utpZW/066y42NN2H9fb8e521aP0A9l6X7sY8WeuYU/I/q0h16OvJn0OPHGIbZcgK3YwTPQXrBfr6qmrFcPHrGJ6wxxjIrmQ7R64ZEB/JPo15lZB9tPWrJ6FTzGUrZq1m6LzUaXRRipnY4JZpdx8Coin0B/jHGMDIexaJNwIw/ujWnboAr9oxt0JfVhxwp2Qb7EnHvLifNWu8ed5Ch34iez/HwFdJh/1d6D9VaLAqH9wNW81sF0VQHKL25oRzDr+y9Kx+i4Jzjl2zrneJfamUb+8nrRTCjE4vxPfp2xwadqxGsAWX0me+lMjTZuepDQ7k2682XAl7xyTB5q3nEuD54XQNGGRgNXp6s8EYl25IPTsK7BhmTThh8EtB1jqQu7Zg6W5iqLEwxE6tTsb0vjJFVChemN/7VHE1pkunAb+Lc6x2QocaGm347V3Z0zrPj5VahS14NjHCxbaeaMNRTF9eeyuQWdKC3cntTuzAYSznXl3ZXEvWhfWBmm7D25mMoxpOXRVPH8G1OrC1VrysL+wDV3oJfWEajxzs+uWTGHxjmENgXZoVyfa8t7lyqHB/mEzqKIDZDFCz0BgEk9JRBiklWEDJDYPJLqdVPs/LxKNPA2HtTTERehgM179fNToY1jjJ6A939R/+B+EeegyPlz2fD9MujLkwrR7yjCiTswYc2TJz8nEf5e++dMQ9vByBS9VHUknOW08BaQDZV/rfuamwGvXVJu2EOETdu3yAjL+gX1S9Wc5duViwAAAAAElFTkSuQmCC" alt="">
                    <span>首页</span>
                </router-link>
                <router-link :to="{name:'car'}" tag="div">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABHCAYAAACgTtGvAAADTUlEQVR4AWIsKCiYx8AAaNcegGu7ojCO56K2Gw3q3mZUa1Tbtjmobbsdq+2zbQ2fNYr5/GLbyf/5vRWdc7Ku9t3fzG8Qnnx373WyT5L0PPwYKb0Yh5eQUPGLkpx9fALGr/855hY1Dr1wk3MTsaiXEIBvCD9CJmS33sDkQOYyW9TAZNsV5ayoQnTj8GTYogamA0WwK8rDnDod59qidAb6nShFD/riTCtW4QG3RWV7KOo/JMOPeMtxuBFz8BOSgnCS3AS+832KNU5f7UJ0uVxRr6AcJuRdp0V1I99lUYuRDF+cOAaPohoyV8ui3Az005AMU9KJmXgJMr2iKA8D3bwsh0zWwKLsQE9xVpQ9HIdGW1QJ2uQXTZCictwU1YOCBFhRl0ImWxbldqCfhhTDV9Ru1MqivMypkOErKmvgWc8O9DScPHAXiaLs087BB7mXorajRWlF3YlS9GlDKe5U2Haet14vcpWK+i+MR6Bk/KdQVA9yRVGe59SpSEWsxQe3kS96MdpEUfpHmSg+htmNlxVWVC72JgiiMtBXQMTBY5jYyTk4Q84n8SjY/oogVpNKUTvQKFeULcrZqspAvEfuig6UaBd1ClINW1F56NYoSiZk4hnvyKLsQD8NybYoj2c8jaJKUSu/mWkP60RRnpNr8IpqwA6torLlnQ9pZg1yWZS988nrzlYvyoDtdxLS5c+mWZQpTzsvgS+cW68KECvKpDOeLEpx+4VM+fOUdlEm3PlkUbkgukXlGjDQLx647fSLyorzojJwoUJRxv4r0NG4H4vEHa8bSzEgQYwmtSgTJ++XgbjMDJSrrSiRbJiQTnwLEp6ilsGEfIwCEKWtJ/IXTsbbOAPxlG7k4xdMAglfUX34GjA3fsRGbFG2KFuUjS3KFmWLskXZonx4FPOwGfPxGHyIRoJ4GUuxGdNxu4cvol7Sf3gRB3IF7sX9eAZ9EX6cMg93iOt5FL/ik2itqJdBSYPmKbyOSOYLUZI8BN8VvaKGzytQiN71RKuo872/Xz3HIUXnevSLKsdwKUOk0oYGnevRL2oyhstUKETveqJV1N9Yg8GyDn9EYZjnY7DMxYRoFdWBW/AdStCFEnyPm9GKSKYW1+Ef7EQX8vE+HkEPHKUfkZb5KCDSBwMAAAAASUVORK5CYII=" alt="">
                    <span>购物车</span>
                    <i>{{sumnum}}</i>
                </router-link>
                <aside @click="success(),addcar({'val':goods,'count':count})">购买</aside>
            </div>
        </div>

        <div  class="ui-mask" v-if="isshow"></div>
        <div class="chenge" v-for="(item,index) of list" :key="index" :class="isshow?'isshow':''">
                <aside @click="isshow=false">X</aside>
                <div class="chengetop">
                    <div class="left">
                        <img :src="list[0].data.goods_info[0].img_url" alt="">
                    </div>
                    <div class="right">
                        <i>￥{{list[0].data.goods_info[0].price}}</i><br>
                        <span>{{list[0].data.seo.title}}</span>
                    </div>
                </div>
                <div class="chengebom" > 
                    <div class="scroll">
                        <span v-if="colors.length>0">颜色</span>
                        <div class="color" v-if="colors.length>0" >
                            <div v-for="(color,index) of colors" :key="index">{{color.name}}</div>
                        </div>
                        <span v-if="sizes.length>0">容量</span>
                        <div class="size" v-if="sizes.length>0">
                            <div v-for="(size,index) of sizes" :key="index">{{size.name}}</div>
                        </div>
                        <span>套餐</span>
                        <div class="combo">
                            <div>标配</div>
                            <div v-if="combo">{{combo}}</div>
                        </div>
                        <div class="num">
                            <div id="left">
                                <span>购买数量</span>
                            </div>
                            <div id="right">
                                <div @click="ruc">-</div><input type="text" v-model="count"><div @click="add">+</div>
                            </div>
                        </div>
                        <div :class="isshow?'gogogoxl':'gogog'">
                            <div id="button"  @click="isshow=false,success(),addcar({'val':goods,'count':count})">
                                加入购物车
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
import navr from '../../components/itemsnavr/itemsnavr'
import { Message } from 'iview'
export default {
    name:"items",
    data() {
        return {
            //数据
            list:[],
            lists:[],
            ishave:false,
            // 参数
            param:[],
            //轮播图
            imgs:[],
            img_url:[],
            //颜色
            colors:[],
            //容量
            sizes:[],
            //套餐
            combo:"",
            isshow:false,
            //分享
            shares:[],
            goods:{
                "id":'',
                "name":'',
                "img":'',
                "price":''
            },
            tags:"true",
            count:1
        }
    },
    methods: {
        ...mapActions(['addcar']),
        success () {
            this.$Message.success('加入购物车成功');
        },
        add(){
            this.count++;
        },
        ruc(){
            if(this.count > 1){
                this.count--
            }
        }
    },
    computed: {
        ...mapState({
            sumnum:state=>{
                let sum =0;
                state.cars.cars.forEach(item => {
                    sum+=item.num
                });
                return sum;
            }
        }),
    },
    created() {
        //初始化弹出框
        this.$Message.config({
            top: 300,
            duration: .5
        });
          this.$http.get('/data/msg.json').then(res=>{
            // console.log(res.data)
            this.list = res.data.filter(item=>{
               if(item.data.default_goods_id == this.$route.params.id){
                //    console.log(item.data.default_goods_id);
                //    console.log(this.$route.params.id);
                // console.log(item.data.default_goods_id)
                // console.log(this.$route.params.id)
                        this.goods.id= item.data.default_goods_id
                        this.goods.name = item.data.seo.title
                        this.goods.price = item.data.goods_info[0].price
                        this.ishave = true
                    if(item.data.goods_info[0].class_parameters){
                         this.param = item.data.goods_info[0].class_parameters.list  
                        
                    }
                    if(item.data.goods_info[0].gallery_v3!="" && item.data.goods_info[0].gallery_v3!=null){
                        this.imgs = item.data.goods_info[0].gallery_v3 
                        this.goods.img = item.data.goods_info[0].img_url
                        // console.log(1)
                    }else{
                       this.img_url.push({'img_url':item.data.goods_info[0].img_url})
                        this.goods.img = item.data.goods_info[0].img_url
                    }
                       
                    if(item.data.buy_option.length>0){
                        this.colors = item.data.buy_option[0].list
                    }
                    if(item.data.buy_option.length>0){
                        this.sizes = item.data.buy_option[1].list
                    }
                    if(item.data.batch_buy_option.length>0){
                        this.combo = item.data.batch_buy_option[0].name
                    }
                    if(item.data.goods_share_datas){
                        this.shares = item.data.goods_share_datas.comments.list

                    }
                    return item
               }
            })

        })
        // console.log(this.list)
        
    },
    components:{
        navr
    },
}
</script>

<style lang="scss" scoped>
.items{
    overflow-y:scroll;
    padding-bottom:0.68rem;
   .top{
       position: relative;
    //    margin-bottom:.2rem;
       .left{
           display: flex;
           position: absolute;
           top:.1rem;
           left:.1rem;
           z-index: 100;
           width: 0.3rem;
           height:0.3rem;
            background: rgba(0,0,0,.6);
            border-radius: 50%;
            justify-content: center;
            align-items: center;
           img{
               width: .18rem;
               height: .18rem;
           }
       }
        .right{
            display: flex;
           position: absolute;
           top:.1rem;
           right:.1rem;
           z-index: 100;
           width: 0.3rem;
           height:0.3rem;
            background: rgba(0,0,0,.6);
            border-radius: 50%;
            justify-content: center;
            align-items: center;
           img{
               width: .18rem;
               height: .18rem;
           }
       }
   }    
   .bom{
       display: flex;
       flex-direction: column;
       justify-content: center;
       .goods-name{
           padding:0 .15rem;
           font-weight: 400;
           font-size: .2rem;
           margin-top:0.15rem;
       }
       .goods-msg{
            padding:0 .15rem;
          font-size:.12rem; 
          color: #999999;

       }
   } 
   .price{
       padding:0 .15rem;
       height:0.5rem;
       font-size: .25rem;
       color:#ff6700;
       line-height: 0.5rem;
   }
   .tab{
       height:.87rem;
       width:100%;
       margin-bottom: .1rem;
       ul{
           display: flex;
            justify-content: space-between;
            width: 100%;
            height:.87rem;
            overflow-x:scroll;
            overflow-y:hidden;
            align-items: center;
            .display{
                display: none;
            }
           li{
               width: .87rem;
               height:.6rem;
               display: flex;
               flex-direction: column;
               justify-content: center;
               flex: 0 0 auto;
               text-align: center; 
               padding: 0 .1rem;
               border-right: .01rem #ccc solid;
               .icon{
                    display: inline-block;
                    width: .2rem;
                    height: .2rem;
               }
               span{
                   font-size: .12rem;
                   white-space: nowrap;
                   overflow: hidden;
                   text-overflow: ellipsis;
               }
           }
       }
   }
   .gg{
       display: flex;
       height: 1.26rem;       
       widows: 100%;
       flex-direction: column;
       align-items: center;
       margin-bottom: 0.08rem;
        div{
            height:.42rem;
            width: 3.42rem;
            background: #fafafa;
            line-height: .42rem;
            border-bottom:1px solid rgba(235, 229, 229, 0.562);
            position: relative;
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            &:nth-of-type(1){
                border-radius: 0.08rem  0.08rem 0 0 ;
            }
            &:nth-of-type(3){
                // position:static;
                border-radius:  0 0 0.08rem  0.08rem ;
            }
            .ganni{
                span{
                    position: relative;
                }
            }
            span{
                font-size: 0.12rem;
                height: 100%;
                position: absolute;
                top:0;
                left:.12rem;  
            }
            i{
               font-size: 0.13rem;
                margin-left:.44rem;
                color: black; 
               &:nth-of-type(1){
                   display: inline-block;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 2.24rem;
               }
            }
            p{
                display: inline-block;
                position: absolute;
                top:0;
                right:.14rem;
                color: #ccc;
            }
        }
   }
   .incarbox{
        height: .54rem;
        width: 100%;
        position: fixed;
        z-index: 13;
        bottom: 0.1rem;
       display: flex;
       justify-content: center;
        .incar{
            background-color: hsla(0,0%,100%,.96)!important;
            width: 96%;
            height:100%;
            border: 1px solid #e5e5e5;
            border-radius: .08rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
            div{
                display: flex;
                flex-direction:column; 
                align-items: center;
                margin-left: .25rem;
                position: relative;
                img{
                    width:.18rem;
                    height: .18rem;
                }
                span{
                    font-size: .12rem;
                    color: #999999;
                }
                i{
                    width: .15rem;
                    height:.15rem;
                    border-radius: 50%;
                    background: #ff6700;
                    position: absolute;
                    top:-0.06rem;
                    left:.24rem;
                    color: #fff;
                    font-size: .12rem;
                    line-height: .15rem;
                    text-align: center;
                }
            }
            aside{
                outline: 0;
                background: #ff6700;
                color: #fff;
                text-align: center;
                display: inline-block;
                height:.3rem;
                width:1rem;
                margin-left:1.36rem;
                border-radius: 0.08rem;
                line-height: .3rem;
            }
        }
   } 
   .ui-mask{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.8);
        z-index: 11;
   }
    .chenge{
        height:5.16rem;
        background: #fff;
        position:fixed;
        bottom:-5.16rem;
        z-index: 102;
        width: 100%;
        border-radius: .1rem .1rem 0 0;
        transition: 1s;
        overflow-y:scroll;
        padding-top: .4rem;
        &.isshow{
            bottom:0;
            height:5.16rem;
            background: #fff;
            position:fixed;
            z-index: 102;
            padding-bottom:.4rem;
            width: 100%;
            border-radius: .1rem .1rem 0 0;
            padding-top: .4rem;
            transition: 1s;
        }
            // height:900px;
        aside{
            position: absolute;
            right:.18rem;
            top:.12rem;
        }
        .chengetop{
            display: flex;
            justify-content: center;
            position: absolute;
            top:.4rem;
            left:.15rem;
            z-index: 100;
            .left{
                width: 1.04rem;
                height:1.04rem;
                border: 1px #ccc solid;
                margin-right: 0.1rem;
                img{
                    width: 100%;
                    height:100%;
                }
            }
            .right{
                width: rem;
                i{
                    font-size: .24rem;
                    color:#ff6700;
                }
                span{
                    display: inline-block;
                    width: 2.25rem;
                    font-size: .14rem;
                    font-weight: 400;
                }
            }
        }
        .chengebom{
            display: flex;
            flex-direction: column;
            font-size:.12rem;
            margin-top:1rem;
            overflow: hidden;
            padding-bottom:10px;
            background: white;
            .scroll{
                width: 100%;
                // height:900px;
                overflow-y: scroll;
                overflow-x: scroll;
                position: relative;
                top:0;
                left:0;
                bottom:0;
                right:0;
                 
                span{
                display: block;
                margin-top:.2rem;
                padding: 0 .15rem;
               
                }
            div{
                height:.6rem;
                }
            .color{
                height:.6rem;
                width:100%;
                display: flex;
                flex-direction:row;
                div{
                    height: .3rem;
                    line-height: .3rem;
                    min-width: .60rem;
                    box-sizing: border-box;
                    text-align: center;
                    margin: .16rem 0 0 .16rem;
                    overflow: visible;
                    border: 1px solid #ccc;
                }
            }
            .size{
            height:.6rem;
            width:100%;
            display: flex;
            flex-direction:row;
            div{
                height: .3rem;
                line-height: .3rem;
                min-width: .60rem;
                box-sizing: border-box;
                padding: 0 .08rem;
                text-align: center;
                margin: .16rem 0 0 .16rem;
                overflow: visible;
                border: 1px solid #ccc;
                }
            }
            .combo{
                height:.6rem;
                width:100%;
                display: flex;
                flex-direction:row;
                div{
                    height: .3rem;
                    line-height: .3rem;
                    min-width: .60rem;
                    box-sizing: border-box;
                    padding: 0 .08rem;
                    text-align: center;
                    margin: .16rem 0 0 .16rem;
                    overflow: visible;
                    border: 1px solid #ccc;
                    }
                }
            }
            .num{
                display: flex;
                align-items: center;
                justify-content: space-between;
                #right{
                    display: flex;
                    height:.3rem;
                    align-items: center;
                    border:1px #ccc solid;
                    margin-right:.15rem;
                    div{
                        height:.3rem;
                        width:.3rem;
                        text-align: center;
                        line-height: .3rem;
                        background: #e5e5e5;
                    }
                    input{
                        height:.3rem;
                        width:.3rem;
                        border:1px #ccc solid;
                        border-top:0;
                        border-bottom:0;
                        text-align: center;
                        outline: 0;
                    }
                }
            }
            }
            .gogogo{
                height:.5rem;
                width: 100%;
                background: white;
                display: flex;
                justify-content: center;
                position: fixed;
                align-items: center;
                bottom:-0.5rem;
                transition: 1s;
                z-index: 1000;
                #button{
                    height:.33rem;
                    width:3.4rem;
                    border-radius: .8rem;
                    background: #ff6700;
                    font-size: .16rem;
                    color: #fff;
                    text-align: center;
                    line-height: 0.33rem;
                }
            }
            .gogogoxl{
                height:.5rem;
                width: 100%;
                background: white;
                display: flex;
                justify-content: center;
                position: fixed;
                align-items: center;
                bottom:0;
                transition: 1s;
                z-index: 1000;
                #button{
                    height:.33rem;
                    width:3.4rem;
                    border-radius: .8rem;
                    background: #ff6700;
                    font-size: .16rem;
                    color: #fff;
                    text-align: center;
                    line-height: 0.33rem;
                }
            }
        } 
    }
    .tabbom{
    //    height:2.22rem;
       width:100%;
       margin-bottom: .1rem;
       background: white;
       ul{
           display: flex;
            justify-content: space-between;
            width: 100%;
            height:2.7rem;
            overflow-x:scroll;
            overflow-y:hidden;
            align-items: center;
            margin-right: 0.15rem;
            // background: #ff6700;
            .display{
                display: none;
            }
           li{
               width: 3.2rem;
               height:100%;
               display: flex;
               position: relative;
               flex-direction: column;
                background: #fafafa;
                // background: green;
               flex: 0 0 auto;
               text-align: center; 
               padding: 0 .15rem;
               border-radius:0.08rem;
               margin-left:.15rem;
                .tabbom-top{
                    margin-top:.15rem;
                    display: flex;
                    align-items: center;
                    margin-bottom:.1rem;
                    .left{
                        img{
                            width: .33rem;
                            height:.33rem;
                            border-radius: 50%;
                        }
                    }
                    .center{
                        width: 200px;
                        margin-left:.1rem;
                        font-size: 12px;
                        text-align: left;
                        p{
                            color:black;
                        }
                        span{
                            color: #ccc;
                        }
                    }
                    .right{
                        margin-left:0.58rem;
                        img{
                            width: .14rem;
                            height:.14rem;
                        }
                    }
                }
                .tabbom-bom{
                    font-size: .12rem;
                    color:black;
                    .bomtop{
                        // height:.37rem;
                        text-align: left;
                    }
                    .bomcenter{
                        width: 100%;
                        // margin: 0 .08rem 0 0;
                        overflow: hidden;
                        position: absolute;
                        display: flex;
                        top:154px;
                        left:0.15rem;
                        text-align: left; 
                        ul{
                        
                            li{
                                display: inline-block;
                                width: 1rem;
                                height:100%;
                                border-radius: .08rem;
                                margin-right: 0.1rem;
                                background: transparent;
                                img{
                                    border-radius: .08rem;
                                    width: 100%;
                                }
                            }
                        }
                        
                    }
                }
           }
       }
   }

       
</style>