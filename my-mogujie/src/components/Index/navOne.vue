<template>
    <div class="navOne-warp">
        <div class="nav-div">
            <div
                v-for="(value , index) in list" :key="index"
                class="nav-img"
            >
                <div class="nav-img-div1"><img :src="value.navimg"></div>
                <div class="nav-img-div2">{{ value.name }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import con1 from "../../assets/190115_0jh548j0b0hg0g2464jah3h23d3hg_150x150.png_640x640.v1cAC.40.webp";
import con2 from "../../assets/nav1.webp";
import con3 from "../../assets/nav2.webp";
import con4 from "../../assets/nav3.webp";
import con5 from "../../assets/nav4.webp";
import con6 from "../../assets/nav5.webp";
import con7 from "../../assets/nav6.webp";
import con8 from "../../assets/nav7.webp";
import con9 from "../../assets/nav8.webp";
import con10 from "../../assets/nav9.webp";
import con11 from "../../assets/nav10.webp";
import con12 from "../../assets/nav11.webp";
import con13 from "../../assets/nav12.webp";
import con14 from "../../assets/nav13.webp";
import con15 from "../../assets/nav14.webp";
export default {
    data (){
        return {
            
            list : [
                {
                    id :1,
                    navimg: con1,
                    name : "女装",
                },
                {
                    id :2,
                    navimg: con2,
                    name : "上衣",
                },
                {
                    id :3,
                    navimg: con3,
                    name : "裤子",
                },
                {
                    id :4,
                    navimg: con4,
                    name : "裙子",
                },
                {
                    id :5,
                    navimg: con5,
                    name : "套装",
                },
                {
                    id :6,
                    navimg: con6,
                    name : "女鞋",
                },
                {
                    id :7,
                    navimg: con7,
                    name : "美妆/个护",
                },
                {
                    id :8,
                    navimg: con8,
                    name : "包包",
                },
                {
                    id :9,
                    navimg: con9,
                    name : "服饰",
                },
                {
                    id :10,
                    navimg: con10,
                    name : "内衣",
                },
                {
                    id :11,
                    navimg: con11,
                    name : "男友",
                },
                {
                    id :12,
                    navimg: con12,
                    name : "家具",
                },
                {
                    id :13,
                    navimg: con13,
                    name : "母婴",
                },
                {
                    id :14,
                    navimg: con14,
                    name : "食品",
                },
                {
                    id :15,
                    navimg: con15,
                    name : "签到",
                },
                
            ]
        }
    
    }
}
</script>
<style lang="less" scoped>
.navOne-warp{
    margin: 0;
    padding: 0;
    width: 100%;
}
.nav-div{
    height: 5.1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-bottom: 0.1rem solid #F4F4F4;
}
.nav-img{
    width: 20%;
}
.nav-img-div1 >img{
    height: 1rem;
    width: 1rem;
}
.nav-img-div2{
    font-size: 0.24rem;
}
</style>
