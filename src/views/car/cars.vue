<template>
    <div class="carsitem">
        <div class="caritem" v-for="car of cars" :key="car.id">
            <div class="left">
                <img :src="car.img" alt="">
            </div>
            <div class="center">
                <div class="top">
                    <p>{{car.name}}</p>
                    <i>售价:&nbsp;&nbsp;{{car.price}}元</i>
                </div>
                <div class="bottom">
                    <aside @click="redone(car)">-</aside>
                    <input type="text" v-model="car.num">
                    <aside @click="addone(car)">+</aside>
                </div>
                
            </div>
            <div class="right" @click="deletecar(car)">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAD6klEQVR4Ae2aA4xkSxSGn23bDB/DZ9u2wmcbo8bYttG2lUy717a9wbNr/5Ms7/R6t3FzJvlTubc09XXVQeoeIoTYhVi7qGQxIAbEgBgQA2JADIgBMSAWA2JADIgBMaC//vrrmGnTpn3rdrtHvV6vxufzje6J0FYbCASGUX7xyy+/HC1bQMlksq6kpESQlEqlUKlUeyRqW1xcLCoqKgQAl8sS0IwZM44fGRnZUFlZKSwWiwY7ogi7o2xPFAwGi4xGo7WsrExotdrF+DtSdoCwe04fHR3dUFNTI+bNm3fr3vZPpVJPVVVVCZ1Ot2TmzJnHyQ7QlClTTh0bG1tTXV0t5s6d++De9o/FYq9uBrQAgI+VpQ3C4lbRInFE7tzbvpMnT36ejqfJZJqbVzbI5XKdDV0AnZNOTqfzHLvdfs74+Pg1Go1mXV1dncBuetTv9x9qtVqPQJtdymazHQE7dGg4HH6jtrZWwBYtwW66FH2lc0nnvcDj8ZyRdUBDQ0OroH+gX7fTL6Qtz8PDw78ODAz83tbWJpqamkR3d/dCPCdQN3lPNDg4mECfxdSXxqCxdjUfCX3+gc1bmnVA5Hq3qLy8XJCNaWxsFPRr07O0jt5vfqZyj0Rt6XhRXxpDOi69pzm3r6OSHELWAS1atOgR6Cno8VWrVt2L7W1G3EKu3L1mzZq78f6hhQsXPozygGrzmA9hjnth22IKhUIgkBzB/3AX3j+B+qdg6x7JOqA07vinwsJCARtRlylDiiM8SnMiiPw4571YNBqtQPRL7rgzU4B6enrMarVaINb6MS8AbT5inRncQWb8KPkFyGw2TwC0cePGa2Ejbv79999PltatXbv2aNiTm1Bev379+gmpBJLU06kvxrgmjSeVByDkYrPIGyFVeExa197efgm5cZTkxs9PM+475J1wdJNyBjRzPwC9TYCQrMZlCwi52BSKVWbNmjXB/XZ2dl7c0tIiUP6FBZ+XJhd7k9IUvV4fZkAMiAExIAbEgBgQA2JADIgBMSAGxIAYUAYBrdkM6Nk0gC7fDEhgwRemAfTeZkALZAlo6tSph2Fx1bie8c+ZM+dmab++vr5zAMeCUqvRaM6Q1icSiXsbGhoCGFctL0AZEANiQAxIKr72MRqNHZkC1N/fb8qbi8NIJFJN9+S4em7IFCDclmhKSkoIUEE+AKosKCgQiHkmh8Phn0KhUAm+MVQcDNHYmK8ANmguzYlYqTjnAa1cufKx+vp6QbsI2z4jwlx0n0b3bffnLiDJJZ/dbrfg67AQSu/BFI5yyOFwGFKp1Ev8pf3+igExIAbEgBgQA2JALAbEgBgQA2JADIgBMSDWJly2untRJ8f7AAAAAElFTkSuQmCC" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
//引入删除购物车方法
import {mapActions} from "vuex"
export default {
    computed: {
        ...mapState({cars:(state) => state.cars.cars})
    },
    methods: {
        deletecar(val){
            this.$store.dispatch("deletecar",val)
        },
        addone(val){
            this.$store.dispatch("addone",val)
        },
        redone(val){
            this.$store.dispatch("redone",val)
        }
    }
}

</script>
<style lang="scss" scoped>
    .carsitem{
        background: #ebebeb;
        .caritem{
        padding: 0 .15rem;
        height:1.18rem;
        width:100%;
        background: white;
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom:.08rem;
        .left{
            width: .9rem;
            height: .9rem;
           
            img{
                width: 100%;
                height:100%;
                 border:1px #ccc solid;
            }
        }
        .center{
            margin-left:.1rem;
            width: 2rem;
            .top{
                p{
                font-size: .14rem;
                }
                i{
                    font-size: .12rem;
                }
            }
            .bottom{
                width:auto;
                display: flex;
                aside{
                    width: .3rem;
                    height:.3rem; 
                    border: 1px #ccc solid;
                    text-align: center;
                    background: #ebebeb;
                }
                input{
                    width: .3rem;
                    height:.3rem;
                    border: 1px #ccc solid;
                    text-align: center;
                    border-left:0;
                    border-right: 0;
                    outline: 0;
                }
            }
          
        }
        .right{
            width: .3rem;
            height:.3rem;
            position: absolute;
            top:0.78rem;
            right:0.12rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    }
  
</style>
