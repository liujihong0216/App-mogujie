<template>
    <div class="bottom_store-warp">
        <Headerr :headerMessage3="headerMessageNew13"></Headerr>

        <div class="store-div1">
            <div 
                class="store-div1-div1"
                v-for="(value , index) in list"
                :key="index"
            >
                <p><img :src="value.storeImg1"></p>
                <p class="store-div-p"> {{ value.name1 }} </p>
                <Time :id="forId(index)" class="store-time"></Time>
            </div>            
        </div>
        <div class="store-div2">
            <div 
                class="store-div2-div"
                v-for="(value , index) in listtwo"
                :key="index"
            >
                <p> <img :src="value.storeImgg1"></p>
                <p> {{ value.namee1 }} </p>

            </div>
        </div>
        <div class="store-div3">
            <div class="store-div3-div1"> 
                <p> {{ div3name1 }} </p>
                <div></div>
            </div>
            <div class="store-div3-div2">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div 
                                class="div3-div2-div"
                                v-for="(value , index) in listThree"
                                :key="index"
                            >
                                <p> <img :src="value.storeImggg" > </p>
                                <p> {{ value.div3name2 }} </p>
                                <p> {{ value.div3name3 }} </p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div 
                                class="div3-div2-div"
                                v-for="(value , index) in listThree1"
                                :key="index"
                            >
                                <p> <img :src="value.storeImggg1" > </p>
                                <p> {{ value.div3name4 }} </p>
                                <p> {{ value.div3name5 }} </p>
                            </div>
                        </div>           
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
        
            </div>
            
        </div> 
        <div class="store-div4">
            <div class="div4-div1"> {{ name6 }}  </div>
            <div class="div4-div2">
                <div 
                    class="div4-div2-div"
                    v-for="(value, index) in listFour"
                    :key="index"
                >   
                    <p> {{ value.div4name }} </p>
                    <p><img :src="value.div4Img"> </p>
                </div>
            </div>
        </div>
        <div class="store-div5">
            <div class="div5-div1"></div>
            <div class="div5-div2">
                <div 
                    class="div5-div2-div"
                    v-for="(value , index) in listFive"
                    :key="index"
                >
                    <div class="div5-div2-div-div1"><img :src="value.div5Img"> </div>
                    <div class="div5-div2-div-div2"> {{ value.div5name1 }} </div>
                    <div class="div5-div2-div-div3">
                        <div class="right1"> {{ value.div5name2 }} </div>
                        <div class="right2"> {{ value.div5name3 }} <img :src="value.div5Img2"></div>                                    
                    </div> 
                    <div class="div5-div2-div-div4"> {{ value.div5name4 }} </div>                              
                    <div class="div5-div2-div-div5"> {{ value.div5name5 }} </div>
                </div> 
            </div>
        </div>
        
        <Bottomr></Bottomr>
    </div>
</template>
<script>
import Headerr from "../Index/header";
import Bottomr from "../Index/bottom";
import Time from "./time"


import img1 from "../../assets/sc1.png"
import img2 from "../../assets/sc2.jpg"
import img3 from "../../assets/sc3.jpg"
import img4 from "../../assets/sc4.jpg"

import imgg1 from "../../assets/bottom_store/sc01.webp"
import imgg2 from "../../assets/bottom_store/sc02.webp"
import imgg3 from "../../assets/bottom_store/sc03.webp"
import imgg4 from "../../assets/bottom_store/sc04.webp"
import imgg5 from "../../assets/bottom_store/sc05.webp"
import imgg6 from "../../assets/bottom_store/sc06.webp"
import imgg7 from "../../assets/bottom_store/sc07.webp"
import imgg8 from "../../assets/bottom_store/sc08.webp"
import imgg9 from "../../assets/bottom_store/sc09.webp"
import imgg10 from "../../assets/bottom_store/sc010.webp"
import imgg11 from "../../assets/bottom_store/sc011.webp"
import imgg12 from "../../assets/bottom_store/sc012.webp"
import imgg13 from "../../assets/bottom_store/sc013.webp"
import imgg14 from "../../assets/bottom_store/sc014.webp"
import imgg15 from "../../assets/bottom_store/sc015.webp"

// 轮播
import "../../../../my-mogujie/public/dist/swiper.min.css"
import "../../../../my-mogujie/public/dist/swiper.min.js"

import imggg1 from "../../assets/bottom_store/sclb1.jpg"
import imggg2 from "../../assets/bottom_store/sclb2.jpg"
import imggg3 from "../../assets/bottom_store/sclb3.jpg"
import imggg4 from "../../assets/bottom_store/sclb4.jpg"
import imggg5 from "../../assets/bottom_store/sclb5.jpg"
import imggg6 from "../../assets/bottom_store/sclb6.png"

//流行
import div4img1 from "../../assets/bottom_store/sclx1.png"
import div4img2 from "../../assets/bottom_store/sclx2.png"
import div4img3 from "../../assets/bottom_store/sclx3.png"
import div4img4 from "../../assets/bottom_store/sclx4.png"
import div4img5 from "../../assets/bottom_store/sclx5.png"
import div4img6 from "../../assets/bottom_store/sclx6.png"
import div4img7 from "../../assets/bottom_store/sclx7.png"
import div4img8 from "../../assets/bottom_store/sclx8.gif"
import div4img9 from "../../assets/bottom_store/sclx9.png"

//div5
import div5img1 from "../../assets/bottom_store/scda2-1.webp"
import div5img2 from "../../assets/bottom_store/scda2-2.webp"
import div5img3 from "../../assets/bottom_store/scda2-3.webp"
import div5img4 from "../../assets/bottom_store/scda2-4.webp"
import div5img5 from "../../assets/bottom_store/scda2-5.webp"
import div5img6 from "../../assets/bottom_store/scda2-6.webp"

import div5imgg from "../../assets/bottomxingx.png"
export default {
    components : {
        Headerr,      
        Bottomr,
        Time,
    },
    data (){
        return {
            headerMessageNew13 : "领取优惠",
            div3name1 : "热门精选  |  解锁时髦精冬日穿搭LOOK →",
            name6 : "流行元素",
    
            list :[
                {   
                    id:1,
                    storeImg1 : img1,
                    name1 : "风尚快抢",
                },
                {   
                    id:2,
                    storeImg1 : img2,
                    name1 : "热销榜单",
                },
                {    
                    id:3,
                    storeImg1 : img3,
                    name1 : "好货精选",
                },
                {    
                    id:4,
                    storeImg1 : img4,
                    name1 : "新品快抢",
                },
            ],
            listtwo : [
                {
                    storeImgg1: imgg1,
                    namee1 : "女装",
                },
                {
                    storeImgg1: imgg2,
                    namee1 : "女装",
                },
                {
                    storeImgg1: imgg3,
                    namee1 : "上衣",
                },
                {
                    storeImgg1: imgg4,
                    namee1 : "裙子",
                },
                {
                    storeImgg1: imgg5,
                    namee1 : "裤子",
                },
                {
                    storeImgg1: imgg6,
                    namee1 : "套装",
                },
                {
                    storeImgg1: imgg7,
                    namee1 : "女鞋",
                },
                {
                    storeImgg1: imgg8,
                    namee1 : "美妆个护",
                },
                {
                    storeImgg1: imgg9,
                    namee1 : "包包",
                },
                {
                    storeImgg1: imgg10,
                    namee1 : "配饰",
                },
                {
                    storeImgg1: imgg11,
                    namee1 : "内衣",
                },
                {
                    storeImgg1: imgg12,
                    namee1 : "男友",
                },
                {
                    storeImgg1: imgg13,
                    namee1 : "家具",
                },
                {
                    storeImgg1: imgg14,
                    namee1 : "母婴",
                },
                {
                    storeImgg1: imgg15,
                    namee1 : "运动",
                },
            ],
            listThree :[
                    {   
                        storeImggg : imggg1,
                        div3name2 : "吸晴毛毛鞋",
                        div3name3 : "让你时髦一整个冬季",
                    },
                    {   
                        storeImggg : imggg2,
                        div3name2 : "棉服の保暖计",
                        div3name3 : "冬日衣橱'狠角色' ",
                    },
                    {   
                        storeImggg : imggg3,
                        div3name2 : "网红穿搭种草",
                        div3name3 : "跟着穿吸晴max",
                    },
            ],
            listThree1 :[
                    {   
                        storeImggg1 : imggg4,
                        div3name4 : "暖冬瘦腿裤",
                        div3name5 : "穿上立减10kg",
                    },
                    {   
                        storeImggg1 : imggg5,
                        div3name4 : "网红穿搭中草",
                        div3name5 : "跟着穿吸晴mav' ",
                    },
                    {   
                        storeImggg1 : imggg6,
                        div3name4 : "",
                        div3name5 : "",
                    },
            ],
            listFour: [
                {
                    div4name : "萌宝套装",
                    div4Img : div4img1,
                },
                {
                    div4name : "高颜值内搭",
                    div4Img : div4img2,
                },
                {
                    div4name : "长款卫衣",
                    div4Img : div4img3,
                },
                {
                    div4name : "个性水杯",
                    div4Img : div4img4,
                },
                {
                    div4name : "睡衣套装",
                    div4Img : div4img5,
                },
                {
                    div4name : "省心护肤套装",
                    div4Img : div4img6,
                },
                {
                    div4name : "牛仔裤搭配",
                    div4Img : div4img7,
                },
                {
                    div4name : "调整型内衣",
                    div4Img : div4img8,
                },
                {
                    div4name : "外套搭配",
                    div4Img : div4img9,
                },
                
                
            ],
            listFive :[
                {
                    div5Img : div5img1,
                    div5name1 : "小甜美经典波点圆领开衬长..",
                    div5name2 : "￥64.4",
                    div5name3 : "2173",
                    div5Img2 : div5imgg,
                    div5name4 : "立即购买",
                    div5name5 : "已售5541件",
                },
                {
                    div5Img : div5img2,
                    div5name1 : "2019村夏季新款黑色长裤哈伦",
                    div5name2 : "￥79",
                    div5name3 : "426",
                    div5Img2 : div5imgg,
                    div5name4 : "立即购买",
                    div5name5 : "已售276件",
                },
                {
                    div5Img : div5img3,
                    div5name1 : "高腰小脚裤 新款韩版高腰破洞",
                    div5name2 : "￥59",
                    div5name3 : "2173",
                    div5Img2 : div5imgg,
                    div5name4 : "立即购买",
                    div5name5 : "已售541件",
                },
                {
                    div5Img : div5img4,
                    div5name1 : "2019村级新款韩版宽松纯色",
                    div5name2 : "￥26.9",
                    div5name3 : "1173",
                    div5Img2 : div5imgg,
                    div5name4 : "立即购买",
                    div5name5 : "已售41件",
                },
                {
                    div5Img : div5img5,
                    div5name1 : "【偏小半码】小蜜蜂明星同款",
                    div5name2 : "￥59",
                    div5name3 : "2173",
                    div5Img2 : div5imgg,
                    div5name4 : "立即购买",
                    div5name5 : "已售741件",
                },
                {
                    div5Img : div5img6,
                    div5name1 : "韩版时尚一脚蹬全属方扣侧..",
                    div5name2 : "￥99.4",
                    div5name3 : "1173",
                    div5Img2 : div5imgg,
                    div5name4 : "立即购买",
                    div5name5 : "已售143件",
                },
            
            ]
        }
    },
    methods : {
        forId:function(index){
            return "time" +index         
        },
    },
    mounted(){
    
    },


}
            
window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        // spaceBetween:30,
        direction: 'horizontal', // X轴切换选项
        loop: false, // 循环模式选项
        autoplay:false,
        
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        
        // // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        
        // // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    })        
}
</script>
<style lang="less" scoped>

.div5-div2-div-div5{
    height: 0.55rem;
    width: 100%;
    position: relative;
    top: -2.3rem;
    z-index: 30;
    font-size: 0.26rem;
    color: #ffffff;
    text-align: left;
    padding-left: 0.2rem;
    line-height: 0.57rem;
    background-image: url("../../assets/bottombeijing.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.div5-div2-div-div4{
    height:0.5rem;
    width: 90%;
    background-color:rgb(250, 96, 96);
    margin: 0 auto;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 0.1rem;
    font-size: 0.28rem;
    color: white;
    margin-top: 0.1rem;
}

.right2{
    font-size: 0.27rem;
    text-align: right;
    color:rgb(117, 117, 112);
    display: flex;
    img{
        height:0.28rem;
        width: 0.3rem; 
        display: flex;
        margin-left: 0.08rem;
    }
}
.right1{
    font-size: 0.33rem;
    text-align: left;
    font-weight: 700;
}
.div5-div2-div-div3{
    height:0.5rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.div5-div2-div-div2{
    height: 0.5rem;
    width:90%;
    margin: 0 auto;
    white-space:nowrap; 
    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    // text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    font-size: 0.25rem;
    font-weight: 600;
    display: flex;
    align-items: center;

}
.div5-div2-div-div1{
    height: 4.5rem;
    width: 100%;
    img {
        height: 100%;
        width: 100%;
        border-radius: 0.1rem;
    }
}

.div5-div2-div{
    height: 6.25rem;
    max-width: 48%;
    background-color: #fff;
    margin-top: 0.2rem;
    border-radius: 0.1rem;
}
.div5-div2{
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.div5-div1{
    height: 0.8rem;
    width: 100%;
    margin-top: 0.3rem;
    background-image: url("../../assets/bottom_store/scda2.webp");
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.store-div5{
    width: 100%;
    background-color: #EFEFEF;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}


.div4-div2-div img{
    height: 1.2rem;
    width: 1.6rem;
}
.div4-div2-div{
    height: 31%;
    width: 31%;
    font-size: 0.3rem;
    color: #333;
    text-align: center;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #F3F3F3;
    border-radius: 0.08rem;
}
.div4-div2{
    height: 7.5rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.div4-div1{
    height: 1rem;
    width: 90%;
    margin: 0 auto;
    color: rgb(83, 80, 80);
    font-size: 0.35rem;
    font-weight: 600;
    line-height: 1rem;
    text-align: left;
}
.store-div4{
    height: 8.5rem;
    width: 100%;
    border-top: 0.25rem solid #F3F3F3;
    display: flex;
    flex-direction: column;

}

.swiper-container {
    width:100%;
    height:100%;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.div3-div2-div >p:nth-child(3){
    font-size: 0.25rem;
    margin-top: 0.06rem;
    color: rgb(141, 132, 132);
}
.div3-div2-div >p:nth-child(2){
    font-size: 0.3rem;
    font-weight: 600;
    margin-top: 0.2rem;
}
.div3-div2-div >p:nth-child(1){
    height: 3.02rem;
    width: 2.26rem;
    img{
        height: 100%;
        width: 100%;
    }
}
.div3-div2-div{
    height: 93%;
    width: 33%;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.store-div3-div2{
    height: 4.8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.store-div3-div1{
    height: 2rem;
    width: 100%;
    background-image: url("../../assets/bottom_store/scda1.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    font-size: 0.32rem;
    color: white;
    p{
        margin-top: 1rem;
        margin-left: -0.8rem;
    }
    div{
        height: 0;
        width: 0;
        overflow: hidden;
        border-left:dashed rgb(184, 175, 182) 0.1rem;
        border-bottom:solid white 0.2rem;
        border-right:dashed rgb(184, 175, 182) 0.1rem;;
        margin-top: 0.38rem;
        margin-left: 0.8rem;
    }
}
.store-div3{
    height: 6.8rem;
    width:100%;
    border-top: 0.1rem solid #EFEFEF;
    display: flex;
    flex-direction: column;
}
.store-div2-div{
    height:33.333%;
    width: 20%;
    font-size: 0.25rem;
    display: flex;
    flex-direction: column;
    img{
        height: 1rem;
        width: 1rem;
    }

}
.store-div2{
    height: 5rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.3rem;
}
#time1 , #time2 , #time3{
display: none;
}
.store-time{
    position: relative;
    top: -0.75rem;
    display: flex;
    justify-content: center;
    z-index: 33;
}
.store-div-p{
    font-size: 0.3rem;
    margin-top: -0.5rem;
    color: white;
}
.store-div1-div1 img{
    height: 1.65rem;
    width: 1.65rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 33;
}
.store-div1-div1{
    height: 1.65rem;
    width: 1.65rem;
    background-image: url("../../assets/sc1bj.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 30;
}
.store-div1{
    height: 2rem;
    width: 100%;
    border-top: 0.01rem solid rgb(100, 94, 94);
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.bottom_store-warp{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
