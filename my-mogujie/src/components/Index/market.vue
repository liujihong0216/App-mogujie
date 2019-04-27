<template>
    <div class="market-warp">
        <div class="market-div1">
            <div class="bottom-div">
                <div 
                    class="market-div1-div1"
                    @click="handleGoLogin"
                ></div>
                <div 
                    class="market-div1-div2"
                    @click="handleGoSearch"
                >
                    <img :src="marketimg1">
                    {{ marketName1 }}
                </div>
                <div 
                    class="market-div1-div3"
                    @click="handleGoLogin"
                ></div>
            </div>
            
        </div>
        <div class="market-bottom">
            <div class="market-left">
                <div class="market-left-div">
                <div 
                    class="left-div1"
                    v-for="(value , index) in list"
                    :key="index"                    
                    :class="{'active' : index === isActive}"
                    @click="handleDown(index)"
                >
                    <p> {{ value.leftName }} </p>
                </div>
                </div>
            </div>
            <div class="market-right" >
                <div 
                    class="right-div" 
                    v-for="(item , index) in rightList" 
                    :key="index"
                    v-show=" isActive === index "
                > 
                    <div class="right-div-div1">
                        <div 
                            class="right-div-div1-div"
                            v-for="(value , index) in item.rightListTwo"
                            :key="index"
                        >
                                <img :src="value.rightTopImg">
                                {{ value.rightTopName }}
                        </div>
                        <div  class="right-div-div1-div2">
                            <p> {{ item.rightName1 }} </p>
                            <p> {{ item.rightName2 }} </p>
                            <p> {{ item.rightName3 }} </p>
                        </div>
                        
                        <div class="right-div-div1-div3">
                                <div 
                                    class="right-div-div1-div3-div"
                                    v-for="(value , index) in item.rightListThree"
                                    :key="index"
                                >
                                    <div class="right-div-div1-div3-div-img"> <img :src="value.bottomimg1">  </div>
                                    <div class="right-div-div1-div3-div-div2"> {{ value.bottomName2 }} </div>
                                    <div class="right-div-div1-div3-div-div3">
                                        <div class="right1"> {{ value.bottomName3 }} </div>
                                        <div class="right2"> {{ value.bottomName4 }} <img :src="value.bottomimg2"></div>                                    
                                    </div>                               
                                    <div class="right-div-div1-div3-div-div1"> {{ value.bottomName1 }} </div>                                  
                                </div>
                        </div>                      
                    </div>
                    <div class="right-div-div1-div4"></div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import con1 from "../../assets/下载.png"

// 正在流行
import top1 from "../../assets/markettopimg1.webp"
import top2 from "../../assets/markettopimg2.webp"
import top3 from "../../assets/markettopimg3.webp"
import top7 from "../../assets/6.webp"
import top8 from "../../assets/7.webp"
import top9 from "../../assets/8.webp"
import top10 from "../../assets/9.webp"
import top11 from "../../assets/10.webp"
import top12 from "../../assets/11.webp"
import top13 from "../../assets/12.webp"
import top14 from "../../assets/13.webp"
import top15 from "../../assets/14.webp"
import top16 from "../../assets/15.webp"
import top17 from "../../assets/16.webp"
import top18 from "../../assets/17.webp"
import top19 from "../../assets/18.webp"
import top20 from "../../assets/19.webp"
import top21 from "../../assets/20.webp"
import top22 from "../../assets/21.webp"
import top23 from "../../assets/22.webp"
import top24 from "../../assets/23.webp"
import top25 from "../../assets/24.webp"
import top26 from "../../assets/25.webp"
import top27 from "../../assets/26.webp"
import top28 from "../../assets/27.webp"
import top29 from "../../assets/28.webp"
import top30 from "../../assets/29.webp"
import top31 from "../../assets/30.webp"
import top32 from "../../assets/31.webp"
import top33 from "../../assets/32.webp"
// 上衣
import sy1 from "../../assets/sy1.webp"
import sy2 from "../../assets/sy2.webp"
import sy3 from "../../assets/sy3.webp"
import sy4 from "../../assets/sy4.webp"
import sy5 from "../../assets/sy5.webp"
import sy6 from "../../assets/sy6.webp"
import sy7 from "../../assets/sy7.webp"
import sy8 from "../../assets/sy8.webp"
import sy9 from "../../assets/sy9.webp"
import sy10 from "../../assets/sy10.webp"
import sy11 from "../../assets/sy11.webp"
import sy12 from "../../assets/sy12.webp"
import sy13 from "../../assets/sy13.webp"
import sy14 from "../../assets/sy14.webp"
import sy15 from "../../assets/sy15.webp"
import sy16 from "../../assets/sy16.webp"
import sy17 from "../../assets/sy17.webp"
import sy18 from "../../assets/sy18.webp"
import sy19 from "../../assets/sy19.webp"
import sy20 from "../../assets/sy20.webp"
import sy21 from "../../assets/sy21.webp"
import sy22 from "../../assets/sy22.webp"
import sy23 from "../../assets/sy23.webp"
import sy24 from "../../assets/sy24.webp"
import sy25 from "../../assets/sy25.webp"
import sy26 from "../../assets/sy26.webp"
// 裤子
import kz1 from "../../assets/kz1.webp"
import kz2 from "../../assets/kz2.webp"
import kz3 from "../../assets/kz3.webp"
import kz4 from "../../assets/kz4.webp"
import kz5 from "../../assets/kz5.webp"
import kz6 from "../../assets/kz6.webp"
import kz7 from "../../assets/kz7.webp"
import kz8 from "../../assets/kz8.webp"
import kz9 from "../../assets/kz9.webp"
import kz10 from "../../assets/kz10.webp"
import kz11 from "../../assets/kz11.webp"
import kz12 from "../../assets/kz12.webp"
import kz13 from "../../assets/kz13.webp"
import kz14 from "../../assets/kz14.webp"


import bottom1 from "../../assets/bottom1.webp"
import bottom2 from "../../assets/bottomxingx.png"
export default {
    data (){
        return {
            isActive :0,
            marketName1 : "短袖",
            marketimg1 : con1,
            rightList : [
                    // 页面1
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : top1,
                                rightTopName : "春上新",
                            },
                            {
                                rightTopImg : top2,
                                rightTopName : "时尚套装",
                            },
                            {
                                rightTopImg : top3,
                                rightTopName : "早春外套",
                            },
                            {
                                rightTopImg : top7,
                                rightTopName : "流行风衣",
                            },
                            {
                                rightTopImg : top8,
                                rightTopName : "毛呢大衣",
                            },
                            {
                                rightTopImg : top9,
                                rightTopName : "裙子套装",
                            },
                            {
                                rightTopImg : top10,
                                rightTopName : "裤子套装",
                            },
                            {
                                rightTopImg : top11,
                                rightTopName : "懒人三件套",
                            },
                            {
                                rightTopImg : top12,
                                rightTopName : "毛衣",
                            },
                            {
                                rightTopImg : top13,
                                rightTopName : "牛仔外套",
                            },
                            {
                                rightTopImg : top14,
                                rightTopName : "棒球服",
                            },
                            {
                                rightTopImg : top15,
                                rightTopName : "连衣裙",
                            },
                            {
                                rightTopImg : top16,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : top17,
                                rightTopName : "百搭卫衣",
                            },
                            {
                                rightTopImg : top18,
                                rightTopName : "打底衫",
                            },
                            {
                                rightTopImg : top19,
                                rightTopName : "针织衫",
                            },
                            {
                                rightTopImg : top20,
                                rightTopName : "衬衫",
                            },
                            {
                                rightTopImg : top21,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : top22,
                                rightTopName : "卫衣男",
                            },
                            {
                                rightTopImg : top23,
                                rightTopName : "夹克男",
                            },
                            {
                                rightTopImg : top24,
                                rightTopName : "衬衫男",
                            },
                            {
                                rightTopImg : top25,
                                rightTopName : "T恤男",
                            },
                            {
                                rightTopImg : top26,
                                rightTopName : "休闲裤男",
                            },
                            {
                                rightTopImg : top27,
                                rightTopName : "牛仔裤男",
                            },
                            {
                                rightTopImg : top28,
                                rightTopName : "男鞋",
                            },
                            {
                                rightTopImg : top29,
                                rightTopName : "单鞋",
                            },
                            {
                                rightTopImg : top30,
                                rightTopName : "小白鞋",
                            },
                            {
                                rightTopImg : top31,
                                rightTopName : "帆布鞋",
                            },
                            {
                                rightTopImg : top32,
                                rightTopName : "活力运动",
                            },
                            {
                                rightTopImg : top33,
                                rightTopName : "凉鞋",
                            },
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                    // 页面2
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : sy1,
                                rightTopName : "春上新",
                            },
                            {
                                rightTopImg : sy2,
                                rightTopName : "早春外套",
                            },
                            {
                                rightTopImg : sy3,
                                rightTopName : "必备内搭",
                            },
                            {
                                rightTopImg : sy4,
                                rightTopName : "气质毛呢",
                            },
                            {
                                rightTopImg : sy5,
                                rightTopName : "毛衣",
                            },
                            {
                                rightTopImg : sy6,
                                rightTopName : "卫衣",
                            },
                            {
                                rightTopImg : sy7,
                                rightTopName : "打底衫",
                            },
                            {
                                rightTopImg : sy8,
                                rightTopName : "马甲",
                            },
                            {
                                rightTopImg : sy9,
                                rightTopName : "显瘦V领",
                            },
                            {
                                rightTopImg : sy10,
                                rightTopName : "小个子短款",
                            },
                            {
                                rightTopImg : sy11,
                                rightTopName : "针织衫",
                            },
                            {
                                rightTopImg : sy12,
                                rightTopName : "衬衫",
                            },
                            {
                                rightTopImg : sy13,
                                rightTopName : "连帽卫衣",
                            },
                            {
                                rightTopImg : sy14,
                                rightTopName : "百搭T恤",
                            },
                            {
                                rightTopImg : sy15,
                                rightTopName : "风衣",
                            },
                            {
                                rightTopImg : sy16,
                                rightTopName : "毛衣开衫",
                            },
                            {
                                rightTopImg : sy17,
                                rightTopName : "棒球外套",
                            },
                            {
                                rightTopImg : sy18,
                                rightTopName : "牛仔外套",
                            },
                            {
                                rightTopImg : sy19,
                                rightTopName : "西装外套",
                            },
                            {
                                rightTopImg : sy20,
                                rightTopName : "皮夹克",
                            },
                            {
                                rightTopImg : sy21,
                                rightTopName : "经典条纹",
                            },
                            {
                                rightTopImg : sy22,
                                rightTopName : "白衬衫",
                            },
                            {
                                rightTopImg : sy23,
                                rightTopName : "显瘦路肩",
                            },
                            {
                                rightTopImg : sy24,
                                rightTopName : "雪纺衫",
                            },
                            {
                                rightTopImg : sy25,
                                rightTopName : "BF风衬衫",
                            },
                            {
                                rightTopImg : sy26,
                                rightTopName : "甜美蕾丝",
                            },
                            {
                                rightTopImg : top30,
                                rightTopName : "背心吊带",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                     // 页面3
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面4
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面5
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面6
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面7
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面8
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面9
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面10
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面11
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面12
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面13
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面14
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                      // 页面15
                    {   
                        rightName1 : "综合",
                        rightName2 : "销量",
                        rightName3 : "新品",                      
                        rightListTwo:[
                            {
                                rightTopImg : kz1,
                                rightTopName : "早春新款",
                            },
                            {
                                rightTopImg : kz2,
                                rightTopName : "牛仔裤",
                            },
                            {
                                rightTopImg : kz3,
                                rightTopName : "休闲裤",
                            },
                            {
                                rightTopImg : kz4,
                                rightTopName : "阔腿裤",
                            },
                            {
                                rightTopImg : kz5,
                                rightTopName : "小脚裤",
                            },
                            {
                                rightTopImg : kz6,
                                rightTopName : "打底裤",
                            },
                            {
                                rightTopImg : kz7,
                                rightTopName : "工装裤",
                            },
                            {
                                rightTopImg : kz8,
                                rightTopName : "运动裤",
                            },
                            {
                                rightTopImg : kz9,
                                rightTopName : "黑色牛仔裤",
                            },
                            {
                                rightTopImg : kz10,
                                rightTopName : "宽松牛仔裤",
                            },
                            {
                                rightTopImg : kz11,
                                rightTopName : "高腰牛仔裤",
                            },
                            {
                                rightTopImg : kz12,
                                rightTopName : "破洞牛仔裤",
                            },
                            {
                                rightTopImg : kz13,
                                rightTopName : "背带裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "皮裤",
                            },
                            {
                                rightTopImg : kz14,
                                rightTopName : "哈伦裤",
                            },
                    
                        ],
                        rightListThree :[
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售件404件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                            {
                                bottomimg1 : bottom1,
                                bottomName1 : "已售336件",
                                bottomName2 : "小白鞋女2019春夏...",
                                bottomName3 : "￥69",
                                bottomName4 : "385",
                                bottomimg2 : bottom2,
                            },
                        ],
                    },
                
            ],
            // 左侧
            list :[
                { 
                    id : 1,
                    leftName : "正在流行" 
                },
                { 
                    id : 2,
                    leftName : "上衣" 
                },
                { 
                    id : 3,
                    leftName : "裤子" 
                },
                { 
                    id : 4,
                    leftName : "裙子" 
                },
                { 
                    id : 5,
                    leftName : "内衣" 
                },
                { 
                    id : 6,
                    leftName : "女鞋" 
                },
                { 
                    id : 7,
                    leftName : "男友" 
                },
                { 
                    id : 8,
                    leftName : "包包" 
                },
                
                { 
                    id : 9,
                    leftName : "运动" 
                },
                { 
                    id : 10,
                    leftName : "配饰" 
                },
                { 
                    id : 11,
                    leftName : "美妆" 
                },
                { 
                    id : 12,
                    leftName : "个护" 
                },
                { 
                    id : 13,
                    leftName : "家具" 
                },
                { 
                    id : 14,
                    leftName : "百货" 
                },
                { 
                    id : 15,
                    leftName : "母婴" 
                },
                { 
                    id : 16,
                    leftName : "食品" 
                },

            
            ]
        }
    },

    methods: {

        handleGoSearch:function(){
            this.$router.push({
                name:"marketsearch",
            })
        },
        handleGoLogin : function(){
            this.$router.push({
                name:"login",
            })
        },
        handleDown:function(index){
            this.isActive = index;
        },
        

    },
    computed: {
        
    }
    
    

}
</script>
<style lang="less" scoped>
.right-div-div1-div4{
    margin-top: 2rem;
}
.right2{
    font-size: 0.28rem;
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
    font-size: 0.35rem;
    text-align: left;
    color:#FF5577;
    font-weight: 700;
}
.right-div-div1-div3-div-div3{
    height:50%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.45rem;
}
.right-div-div1-div3-div-div2{
    height:50%;
    width:90%;
    margin: 0 auto;
    white-space:nowrap; 
    // overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    // text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    font-size: 0.26rem;
    padding-left: 0.02rem;
    display: flex;
    align-items: center;
    margin-top: 0.25rem;
}

.right-div-div1-div3-div-div1{
    height: 0.55rem;
    width: 100%;
    position: relative;
    top: -1.5rem;
    z-index: 30;
    font-size: 0.28rem;
    color: #ffffff;
    text-align: left;
    padding-left: 0.2rem;
    line-height: 0.55rem;
    background-image: url("../../assets/bottombeijing.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.right-div-div1-div3-div-img{
    height: 3.5rem;
    width: 100%;
    img {
        height: 100%;
        width: 100%;
        border-radius: 0.1rem;
    }
}
.right-div-div1-div3-div{
    height: 4.7rem;
    width: 49%;
    display: flex;
    flex-direction: column;
    margin-top: 0.1rem;
}
.right-div-div1-div3{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.right-div-div1-div2{
    height: 0.8rem;
    width: 100%;
    border-bottom: 1px solid rgb(141, 137, 137);
    position: sticky; 
    top: -0.1rem;
    z-index: 999;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    font-size: 0.28rem;
    justify-content: space-around;
     margin-top: 0.6rem;
}
.right-div-div1-div2 p{
    width: 33.333%;
    border-left: 1px solid rgb(104, 100, 100);
}


.right-div-div1-div{
    width: 33.333%;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.25rem;
    margin-top: 0.4rem;
}
.right-div-div1-div img{
    height: 1.4rem;
    width: 1.4rem;
    margin-bottom: 0.2rem;

}
.right-div-div1{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.market-left-div{
    width: 2.0rem; 
    background-color: #F6F6F6;
}
.active{
    background-color:white;
    p{
        border-left: 0.08rem solid #FF5577; 
        color: #FF5577;
        font-weight: bold;
    }
}
.left-div1{
    height: 0.9rem;
    width: 100%;
    font-size: 0.28rem;
    font-weight: 600;
    color: #797676;
    display: flex;
    align-items: center;
    p{     
        height: 0.35rem;
        width: 2rem;
        text-align: center;
    }
}
.market-warp{
    margin: 0;
    padding: 0;
    width: 100%;
	height: auto;
    margin: auto;
    box-sizing: border-box;
}
.market-div1{
    height:1rem;
    width: 100%;
    border-bottom: 0.01rem solid #978e8e;
    display: flex;
    align-items: center;
    position: fixed;
    background-color: white;
    top: 0;
    z-index: 999;
}

.bottom-div{
    height: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.market-div1-div1{
    width: 0.5rem;
    height: 0.45rem;
    background-image: url("../../assets/下载 (1).png");
    background-repeat: no-repeat;
    background-size: 0.5rem 0.45rem;
    margin-right: 0.2rem; 
}
.market-div1-div2{
    width: 5.5rem;
    height: 0.6rem;
    background-color: #EEEEEE;
    border-radius: 0.1rem;
    font-size: 0.25rem;
    color: #999292;
    display: flex;
    align-items: center;
}
.market-div1-div2 img{
    height: 0.35rem;
    width:0.4rem;
    margin-left: 0.2rem;
    margin-right: 0.1rem;
}
.market-div1-div3{
    width: 0.5rem;
    height: 0.45rem;
    background-image: url("../../assets/shopping.png");
    background-repeat: no-repeat;
    background-size: 0.5rem 0.45rem; 
    margin-left: 0.2rem;
}

.market-bottom{
    width: 100%;  
    height: 100%; 
    display: flex;
    margin-top: 1rem; 
    position: fixed;
   
}
.market-left{
    width: 2rem;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}
.market-left::-webkit-scrollbar {
    display:none;
}
.market-right{
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y:scroll;
    display: flex;
    margin-top: 0.1rem;
}
</style>
