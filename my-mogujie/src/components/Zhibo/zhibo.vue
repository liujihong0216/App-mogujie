<template>
    <div class="bottom_store-warp">
        <div class="header">
            <div class="my-header">
                <div class="header-div1"></div>
                <div class="header-div2">
                    <div class="header-div2-div1"> {{ headerMessage }} </div>
                    <div class="header-div2-div2">
                        <div class="header-div2-div2-div1">
                            <div
                                v-for="(value , index) in temps" 
                                :key="index"
                                class="header-imgg"
                            >
                                <img :src="value.imgUrl">
                            </div>
                        </div>
                        <div class="header-div2-div2-div2"> {{ headerMessage2 }} </div>
                    </div>
                </div>
                <div class="header-div3">
                    <div class="div3-div"> {{ headerMessage3 }} </div>
                </div>
            </div>
        </div>
        <NavVV :list="zhibolist" class="navvv"></NavVV>

        <div 
            class="video-div"
            v-for="(item , index) in list"
            :key="index"
            :id="forId(index)"
        >
            <div class="div-div1"><img :src="item.div1Img">  {{ item.div1Name }}  </div>
            <div class="div-div2"> 
                <div><img class="div2-div1" :src="item.zhibobjImg "> </div>
                <div class="div2-div2">
                    <div class="div2-div2-div1">
                        <div 
                            class="div2-div2-div1-div"
                            v-for="(itemm , index) in item.listTwo"
                            :key="index"
                        >
                            <p><img :src="itemm.div2Img"> </p>
                            <p> {{ itemm.div2Name }} </p>
                        </div>
                    </div>
                    <div class="div2-div2-div2">
                        <div  
                            class="div2-div2-div2-div"
                            id="div1"
                            v-for="(value , index) in item.listSix"
                            :key="index"
                            :class="forClass(index)"
                        >
                            <p><img :src="value.fayanImg"></p>
                            <p>{{ value.fayanName }}</p>
                        </div>
                    </div>                 
                </div>
                <div class="div2-div3"><p> {{ item.div3Name }} </p></div>
                <div class="div2-div4">
                    <p class="div2-div4-p1"></p>
                    <p class="div2-div4-p2">  {{ item.div4Name1 }} </p>
                    <p class="div2-div4-p3"></p>
                    <p class="div2-div4-p4"> {{ item.div4Name2 }} </p>
                </div>
            </div>
        </div> 

        <div class="viseo-div2"></div>

        <Bottomr></Bottomr> 
    </div>
</template>
<script>


import Bottomr from "../Index/bottom";
import NavVV from "../Index/navTwo";

import con1 from "../../assets/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png";

import div1Img1 from "../../assets/bottom_store/div1-img.jpg"
import zbbj1 from "../../assets/zb-bj1.jpg"
import zbbj1_1 from "../../assets/zb-bj1-1.jpg"
import zbbj1_2 from "../../assets/zb-bj1-2.jpg"
import zbbj1_3 from "../../assets/zb-bj1-3.jpg"

import div1Img2 from "../../assets/div1-img2.jpg"
import zbbj2 from "../../assets/zb-bj2.jpg"
import zbbj2_1 from "../../assets/zb-bj2-1.jpg"
import zbbj2_2 from "../../assets/zb-bj2-2.jpg"
import zbbj2_3 from "../../assets/zb-bj2-3.jpg"

import div1Img3 from "../../assets/div1-img3.jpg"
import zbbj3 from "../../assets/zb-bj3.jpg"
import zbbj3_1 from "../../assets/zb-bj3-1.jpg"
import zbbj3_2 from "../../assets/zb-bj3-2.jpg"
import zbbj3_3 from "../../assets/zb-bj3-3.jpg"

import zbfy1 from  "../../assets/zhibofayan.jpg"
import zbfy2 from  "../../assets/zhibofayan2.jpg"
import zbfy3 from  "../../assets/zhibofayan3.jpg"
import zbfy4 from  "../../assets/zhibofayan4.jpg"
export default {
    components : {
        NavVV,
        Bottomr,
    
    },
    data (){
        return {
            headerMessage : "APP新人购物立享88折！",
            headerMessage2 : "超过2亿用户已下载",
            headerMessage3 : "前往领取",  
            
            temps :[
                {
                    imgUrl : con1,
                },
                {
                    imgUrl : con1,
                },
                {
                    imgUrl : con1,
                },
                {
                    imgUrl : con1,
                },
                {
                    imgUrl : con1,
                },
            ],
            zhibolist :[
                {
                    name : "热门",
                },
                {
                    name : "穿搭",
                },
                {
                    name : "美妆",
                },
            ],
            list: [
                {
                    div1Name : "美少女的店s",
                    div1Img : div1Img1,
                    zhibobjImg : zbbj1, 
                    div3Name : "老板不在，主播乱卖",
                    div4Name1 : "直播中  |",
                    div4Name2 : "14.7万",
                    listTwo : [
                        {
                            div2Img : zbbj1_1,
                            div2Name : "￥69.9",
                        },
                        {
                            div2Img : zbbj1_2,
                            div2Name : "￥19.9",
                        },
                        {
                            div2Img : zbbj1_3,
                            div2Name : "￥19.9",
                        },
                    ],
                    listSix :[
                        {
                            fayanImg : zbfy1, 
                            fayanName : "我秒了",
                        },
                        {
                            fayanImg : zbfy2, 
                            fayanName : "这个好看",
                        },
                        {
                            fayanImg : zbfy3, 
                            fayanName : "这件多少钱",
                        },
                    ]
                },
                {
                    div1Name : "小桔GUGU",
                    div1Img : div1Img2,
                    zhibobjImg : zbbj2, 
                    div3Name : "白天鹅轻婚纱全是新款",
                    div4Name1 : "直播中  |",
                    div4Name2 : "8.9万",
                    listTwo : [
                        {
                            div2Img : zbbj2_1,
                            div2Name : "￥399",
                        },
                        {
                            div2Img : zbbj2_2,
                            div2Name : "￥9.9",
                        },
                        {
                            div2Img : zbbj2_3,
                            div2Name : "￥199",
                        },
                    ],
                    listSix :[
                        {
                            fayanImg : zbfy3, 
                            fayanName : "看看里面",
                        },
                        {
                            fayanImg : zbfy2, 
                            fayanName : "哈",
                        },
                        {
                            fayanImg : zbfy3, 
                            fayanName : "八号什么料子",
                        },
                    ]
                },
                {
                    div1Name : "竹实贸易",
                    div1Img : div1Img3,
                    zhibobjImg : zbbj3, 
                    div3Name : "纯银工厂福利",
                    div4Name1 : "直播中  |",
                    div4Name2 : "10.2万",
                    listTwo : [
                        {
                            div2Img : zbbj3_1,
                            div2Name : "￥39.9",
                        },
                        {
                            div2Img : zbbj3_2,
                            div2Name : "￥49.99",
                        },
                        {
                            div2Img : zbbj3_3,
                            div2Name : "￥19.99",
                        },
                    ],
                    listSix :[
                        {
                            fayanImg : zbfy1, 
                            fayanName : "天天用吗",
                        },
                        {
                            fayanImg : zbfy2, 
                            fayanName : "好的",
                        },
                        {
                            fayanImg : zbfy1, 
                            fayanName : "多少钱",
                        },
                    ]
                },
            ]
        }
    },
    methods: {
            forId:function(index){
                return "zhibo" +index         
            },
            forClass:function(index){
                return "fayan" +index         
            },
    
    },


}

</script>
<style lang="less" scoped>

#zhibo0{
    margin-top: 2.5rem;
}
.viseo-div2{
    height: 1rem;
}
.div2-div4-p3{
    height: 0.25rem;
    width: 0.25rem;
    background-image: url("../../assets/zbbjhuo.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 0.1rem;
}
.div2-div4-p1{
    height: 0.2rem;
    width: 0.2rem;
    background-color: red;
    border-radius: 50%;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    animation:mymove 2s infinite;
    -webkit-animation:mymove 1.3s infinite; /*Safari and Chrome*/
}
@keyframes mymove{
    from {opacity:0;}
    to {opacity:1;}
}
@-webkit-keyframes mymove /*Safari and Chrome*/{
    from {opacity:none;}
    to {opacity:block;}
}

.div2-div4{
    height: 0.4rem;
    width: 2.5rem;
    background-color: rgba(0,0,0,.26);
    font-size: 0.25rem;
    position: relative;
    color: #fff;
    top: -4.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0.3rem;
    border-radius: 0.1rem;
}
.div2-div3{
    height: 0.6rem;
    width: 100%;
    font-size: 0.3rem;
    position: relative;
    color: #fff;
    top: -3.3rem;
    text-align: left;
    line-height: 0.6rem;
    p{
        margin-left: 0.3rem;
    }

}
.div2-div2-div1-div p:nth-child(2){
    font-size: 0.25rem;
    color: rgb(250, 249, 249);
    position: relative;
    top: -0.4rem;
    font-weight: 600;
    background-color: rgba(168, 140, 140, 0.507);
}
.div2-div2-div1-div p:nth-child(1) >img{
    height: 100%;
    width: 100%;
    border-radius: 0.2rem;
}
.div2-div2-div1-div{
    height: 100%;
    width: 1.2rem;
    margin-left: 0.2rem;
}
.div2-div2-div2-div p:nth-child(2){
    width: 75%;
    color: white;
    text-align: left;
}
.div2-div2-div2-div p:nth-child(1){
    width: 20%;
    img{
        height: 0.3rem;
        width: 0.3rem;
        border-radius: 50%;
    }
}
.div2-div2-div2-div{
    height: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.25rem;
    justify-content: space-between;
}
.div2-div2-div2{
    height: 100%;
    width:35%;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
}
.div2-div2-div1{
    height: 100%;
    width:60%;
    display: flex;
    justify-content:flex-start;
}
.div2-div2{
    height: 1.2rem;
    width: 95%;
    position: relative;
    top: -1.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

}
.div2-div1{
    height: 100%;
    width: 100%;
}
.div-div2{
    height: 4rem;
    width: 100%;
    img{
        border-radius: 0.1rem;
    }
}
.div-div1{
    height: 0.85rem;
    width: 100%;
    font-size: 0.28rem;
    text-align: left;
    img{
        height: 1.1rem;
        width: 1.1rem;
        border: 0.06rem solid #fff;
        border-radius: 50%;
        margin-left: 0.5rem;
        position: relative;
        z-index: 33;
    }
}
.video-div{
    width: 90%;
    height: 4.85rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
}
.header{
    height: 1rem;
    width: 100%;
    border-bottom :0.01rem solid #939397;
    position: fixed;
    top: 0;
    z-index: 9999;
    background-color: #fff;
}
.navvv{
    position: fixed;
    top:1rem;
    z-index: 9999;
    background-color: #fff;
}
.my-header{
    height: 1rem;
    width:90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    
}
.header-div1{
    height:0.8rem;
    width:13%;
    background-image: url("../../assets/logoo.png");
    background-size:0.73rem 0.73rem;
    background-repeat: no-repeat;
}
.header-div2{
    height:0.8rem;
    width:63%;
    display: flex;
    flex-direction: column;
}
.header-div2-div1{
    height: 50%;
    width: 100%;
    font-size: 0.26rem;
    text-align: left;
}
.header-div2-div2{
    height: 50%;
    width: 100%;
    font-size: 0.22rem;
    display: flex;
}
.header-div2-div2-div1{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-imgg >img{
    height: 0.2rem;
    width: 0.19rem;
}
.header-div2-div2-div2{
    width: 55%;
    height: 100%;
    color: #939397;
    line-height: 0.4rem;
    text-align: left;
    margin-left: 0.1rem;
}
.header-div3{
    height:0.8rem;
    width:24%;
    display: flex;
    align-items: center;
}
.div3-div{
    height: 0.6rem;
    width: 100%;
    background-color: #FF4466;
    color: white;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.27rem;
    border-radius: 0.15rem;
}

</style>
