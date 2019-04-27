<template>
    <div class="navThree-warp">
        <div class="navThree-div"  
            v-for="(item,index) in list" 
            :key="index"
        >

            <div class="navThree-div-div1">
                <div class="div1-left" :id="forId(index)"> <img :src="item.navimg"> </div>
                <div class="div1-right">
                    <div class="right-div1"> {{ item.name1 }} </div>
                    <div class="right-div2"> {{ item.name2 }} </div>
                </div>
            </div>

            <div class="jiesao"> {{ item.jiesaoname }} </div>

            <div class="navThree-div-div2">
                <div class="div2-div1" 
                    v-for="(items, index) in item.listTwo" 
                    :key="index"
                > 
                    <img :src="items.navimg1"> 
                    <div class="div2-div1-div1">
                        <div class="div2-div1-div1-div1"> <img :src="items.navimg11"> </div>
                        <div class="div2-div1-div1-div2"> {{ items.name3 }} </div>
                        <div class="div2-div1-div1-div3"> <img :src="items.navimg12"> </div>
                    </div>
                    <div class="div2-div1-div2">
                        <img :src="items.navimg13">
                    </div>
                </div>
            </div>
            <div class="biaoqian">
            <div class="biaoqian-div">
                <div 
                    class="biaoqian-div-div"
                    v-for="(value, index) in item.listThree" 
                    :key="index"
                >
                <img :src="value.biaoqianimg">
                {{ value.biaoqianname }}
                </div>
            </div>
        </div>
        </div>
        
    </div>
</template>
<script>
// 头像
import contx1 from "../../assets/181113_6c0j2g0ah12ijf44cg84d0j5k39g2_400x400.jpg";
import contx2 from "../../assets/touxiang1.webp";
import contx3 from "../../assets/touxiang2.jpg";
import contx4 from "../../assets/touxiang3.webp";
import contx5 from "../../assets/touxiang4.jpg";
import contx6 from "../../assets/touxiang5.webp";

// 背景图以及小图标
import conbj1 from "../../assets/190317_61i55kf5ake4di3c50ehdcaij5ca5_550x918.jpg_300x9999.v1c7E.70.webp";
import conbj2 from "../../assets/beijing1.webp";
import conbj3 from "../../assets/beijing2.webp";
import conbj4 from "../../assets/beijing3.webp";
import conbj5 from "../../assets/beijing4.webp";
import conbj6 from "../../assets/beijing5.webp";
import conbj7 from "../../assets/beijing6.webp";
import conbj8 from "../../assets/beijing7.webp";
import conbj9 from "../../assets/beijing8.webp";
import conbj10 from "../../assets/beijing9.webp";
import conbj11 from "../../assets/beijing10.webp";
import conbj12 from "../../assets/beijing11.webp";
import conbj13 from "../../assets/beijing12.webp";
import conbj14 from "../../assets/beijing13.webp";
import conbj15 from "../../assets/beijing14.webp";
import conbj16 from "../../assets/beijing15.webp";
import conbj17 from "../../assets/beijing16.webp";
import conbj18 from "../../assets/beijing17.webp";



import con21 from "../../assets/180810_0a02124e70hcl6hd13d597idalb7e_28x28.png";  //左侧
import con211 from "../../assets/180810_0261ddc0elh00bchfkc04fidc755l_48x28.png";   // new图标
import con22 from "../../assets/180820_4elccj9cb0lfh129illfccg01g0c9_28x28.png";   //右侧
import con23 from "../../assets/bofang.png";        //播放图片
// 标签图标
import cont1 from "../../assets/181212_514362i070k2ahh882e7a8hii034e_454x454.png_200x200.jpg";
import cont2 from "../../assets/biaoqian1.jpg";
import cont3 from "../../assets/biaoqian2.webp";

export default {
    methods : {
        forId:function(index){
            return "navThree" +index          
        },
    },
    data (){
        return {
        
            list : [
                {
                    navimg : contx1,                    
                    name1 : "栗子少女_kukuri26",
                    name2 : "165cm  53kg   |  杭州  |  设计师",  
                    jiesaoname :"" ,                
                    listTwo : [
                            {
                                navimg1 : conbj1,
                                navimg11 : con21,
                                navimg12 : con22,
                                navimg13 : con23,
                                name3 : "85.0万",
                            },
                            {
                                navimg1 : conbj2,
                                navimg11 : con21,
                                navimg12 : con22,
                                navimg13 : con23,
                                name3 : "5.0万",
                            },
                            {
                                navimg1 : conbj3,
                                navimg11 : con21,
                                navimg12 : con22,
                    
                                name3 : "8.0万",
                            },
                    ],
                    listThree : [
                            {
                                biaoqianimg : cont1,
                                biaoqianname : "日着",
                            },
                            {
                                biaoqianimg : cont2,
                                biaoqianname : "NIUQINNI",
                            },
                            {
                                biaoqianimg : cont2,
                                biaoqianname : "BLUEerror",
                            },
                    ]
                },
                
                {
                    navimg : contx2,                    
                    name1 : "小个子の春夏第一次露腿",
                    name2 : "780人参与   |  更新了601个LOOK",  
                    jiesaoname : "眼看着商城里的春装也要50%sale了，终于有大长腿可以漏了。但是小个子mm露腿就是一门学问咯，2019你们的..." ,             
                    listTwo : [
                            {
                                navimg1 : conbj4,
                                navimg11 : con21,
                                navimg13 : con23,
                                navimg12 : con22,
                                name3 : "5444",
                            },
                            {
                                navimg1 : conbj5,
                                navimg11 : con21,
                                
                                navimg12 : con22,
                                name3 : "5872",
                            },
                            {
                                navimg1 : conbj6,
                                navimg11 : con21,
                                navimg13 : con23,
                                navimg12 : con22,
                                name3 : "9981",
                            },
                    ],
                    listThree : [
                            {
                                biaoqianimg : cont3,
                                biaoqianname : "BALENCIAGA",
                            },
                            {
                                biaoqianimg : cont1,
                                biaoqianname : "ZARA",
                            },
                            {
                                biaoqianimg : cont2,
                                biaoqianname : "HiDou",
                            },
                    ]
                },   

                {
                    navimg : contx3,                    
                    name1 : "Shmily",
                    name2 : "161cm  46kg   |  海口  |  小个子穿搭博",  
                    jiesaoname : "" ,             
                    listTwo : [
                            {
                                navimg1 : conbj7,
                                navimg11 : con211,
                                navimg12 : con22,
                                name3 : "3806",
                            },
                            {
                                navimg1 : conbj8,
                                navimg11 : con21,
                                navimg13 : con23,
                                navimg12 : con22,
                                name3 : "4424",
                            },
                            {
                                navimg1 : conbj9,
                                navimg11 : con21,
                                navimg12 : con22,
                                name3 : "7718",
                            },
                    ],
                    listThree : [
                            {
                                biaoqianimg : cont1,
                                biaoqianname : "Vintage Muse",
                            },
                            {
                                biaoqianimg : cont2,
                                biaoqianname : "H&M",
                            },
                            {
                                biaoqianimg : cont2,
                                biaoqianname : "渔。",
                            },
                            {
                                biaoqianimg : cont1,
                                biaoqianname : "honeyGIRL",
                            },
                            {
                                biaoqianimg : cont3,
                                biaoqianname : "YESWOMEN 小直定制",
                            },
                    ]
                },
                {
                    navimg : contx4,                    
                    name1 : "春天最值得买的裙子100条，在这",
                    name2 : "992人参与   |  更新了64个LOOK",  
                    jiesaoname : "" ,             
                    listTwo : [
                            {
                                navimg1 : conbj10,
                                navimg11 : con211,
                                navimg12 : con22,
                                name3 : "52.5万",
                            },
                            {
                                navimg1 : conbj11,
                                navimg11 : con21,
                                navimg13 : con23,
                                navimg12 : con22,
                                name3 : "44万",
                            },
                            {
                                navimg1 : conbj12,
                                navimg11 : con21,
                                navimg12 : con22,
                                navimg13 : con23,
                                name3 : "77万",
                            },
                    ],
                    listThree : [
                            {
                                biaoqianimg : cont1,
                                biaoqianname : "MIKASTUDIO  小玉酱",
                            },
                    ]
                },  
                {
                    navimg : contx5,                    
                    name1 : "许童心",
                    name2 : "164cm  42kg   |  南京  |  学生",  
                    jiesaoname : "" ,             
                    listTwo : [
                            {
                                navimg1 : conbj13,
                                navimg11 : con211,
                                navimg12 : con22, 
                                navimg13 : con23,
                                name3 : "8456",
                            },
                            {
                                navimg1 : conbj14,
                                navimg11 : con21,
                                navimg12 : con22,
                                name3 : "2223",
                            },
                            {
                                navimg1 : conbj15,
                                navimg11 : con21,
                                navimg12 : con22,
                                name3 : "5847",
                            },
                    ],
                    // listThree : [
                    //         {
                    //             biaoqianimg : cont1,
                    //             biaoqianname : "Vintage Muse",
                    //         },
                    //         {
                    //             biaoqianimg : cont1,
                    //             biaoqianname : "H&M",
                    //         },
                    //         {
                    //             biaoqianimg : cont1,
                    //             biaoqianname : "渔。",
                    //         },
                    // ]
                },   
                {
                    navimg : contx4,                    
                    name1 : "春天最值得买的裙子100条，在这",
                    name2 : "992人参与   |  更新了64个LOOK",  
                    jiesaoname : "" ,             
                    listTwo : [
                            {
                                navimg1 : conbj10,
                                navimg11 : con211,
                                navimg12 : con22,
                                name3 : "52.5万",
                            },
                            {
                                navimg1 : conbj11,
                                navimg11 : con21,
                                navimg13 : con23,
                                navimg12 : con22,
                                name3 : "44万",
                            },
                            {
                                navimg1 : conbj12,
                                navimg11 : con21,
                                navimg12 : con22,
                                navimg13 : con23,
                                name3 : "77万",
                            },
                    ],
                    listThree : [
                            {
                                biaoqianimg : cont2,
                                biaoqianname : "Charles&Keith",
                            },
                            {
                                biaoqianimg : cont1,
                                biaoqianname : "stradivarius",
                            },
                            {
                                biaoqianimg : cont3,
                                biaoqianname : "bedsidedrama",
                            },
                    ]
                },  
                {
                    navimg : contx6,                    
                    name1 : "CONVERSE",
                    name2 : "美国   |  更新了748个LOOK",  
                    jiesaoname : "1908年Marquis  Mills Converse在美国萨祖塞州以自己的姓氏Converse创立了Converse  Rubber Shone..." ,             
                    listTwo : [
                            {
                                navimg1 : conbj13,
                                navimg11 : con21,
                                navimg12 : con22, 
                                name3 : "1555",
                            },
                            {
                                navimg1 : conbj14,
                                navimg11 : con21,
                                navimg12 : con22,
                                name3 : "1.5万",
                            },
                            {
                                navimg1 : conbj15,
                                navimg11 : con21,
                                navimg12 : con22,
                                name3 : "6.1万",
                            },
                    ],
                    listThree : [
                            {
                                biaoqianimg : cont3,
                                biaoqianname : "MALI STUDIOS",
                            },
                            {
                                biaoqianimg : cont1,
                                biaoqianname : "CONVERSE",
                            },
            
                    ]
                },   



            ],
            
        }
    },
}
</script>
<style lang="less" scoped>
.navThree-warp{
    margin: 0;
    padding: 0;
    max-width: 7.5rem;
    margin:  0 auto;
}

.navThree-div{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.navThree-div-div1{
    height: 1.4rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.div1-left{
    height:70%;
    width: 20%;
    display: flex;
    align-items: center;
}
#navThree0 >img{
    height:0.85rem;
    width: 0.85rem;
    border-radius:50%;
}
#navThree1 >img{
    height:0.85rem;
    width: 0.85rem;
}
#navThree2 >img{
    height:0.85rem;
    width: 0.85rem;
    border: 0.01rem solid rgb(187, 180, 180);
}
#navThree3 >img{
    height:0.85rem;
    width: 0.85rem;
}
#navThree4 >img{
    height:0.85rem;
    width: 0.85rem;
}
#navThree5 >img{
    height:0.85rem;
    width: 0.85rem;
}
#navThree6 >img{
    height:0.85rem;
    width: 0.85rem;
}







.div1-right{
    height: 70%;
    width: 80%;
    display: flex;
    flex-direction: column;
    font-size: 0.35rem;
    font-weight: 600;
    text-align: left;
}
.right-div1{
    height: 60%;
    width: 100%;
}
.right-div2{
    height: 40%;
    width: 100%;
    font-size: 0.25rem;
    font-weight: 600;
    color:rgb(94, 91, 91);
}
.navThree-div-div2{
    height: 4.15rem;
    width: 100%;
    display:flex;
    justify-content: space-between;
}
.div2-div1{
    width: 32.7%;
    height: 100%;
}
.div2-div1 >img {
    height:100%;
    width:100%;
}
.div2-div1-div1{
    height: 0.4rem;
    width: 90%;
    position: relative;
    top: -0.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.div2-div1-div2{
    height: 0.8rem;
    width: 0.8rem;
    position: relative;
    top: -2.8rem;
    margin: 0 auto;
    display: flex;
    border: none;
}
.div2-div1-div2 >img{
    height: 100%;
    width: 100%;
    border:none;
}

.div2-div1-div1-div1{
    height: 100%;
    width: 20%;
}
.div2-div1-div1-div1 >img{
    position: relative;
    top: -0.5rem;
    height: 0.3rem;
    width: 0.35rem;
}
.div2-div1-div1-div2{
    width: 60%;
    height: 100%;
    font-size: 0.25rem;
    font-weight: 600;
    color: white;
    text-align: left;
}
.div2-div1-div1-div3{
    width: 20%;
    height: 100%;
}
.div2-div1-div1-div3 >img{
    position: relative;
    top: -0.5rem;
    height: 0.3rem;
    width: 0.35rem;
}
.jiesao{
    font-size: 0.28rem;
    width: 90%;
    padding-bottom: 0.2rem;
    margin: 0 auto;
    text-align: left;
}
.biaoqian{
    width: 95%;
    border-bottom: 0.01rem solid rgb(54, 51, 51);
    margin: 0 auto;
    margin-top: 0.2rem;
    
}
.biaoqian-div{
    width: 100%;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    font-size: 0.25rem;
    margin-bottom: 0.2rem;
}
.biaoqian-div::-webkit-scrollbar {
    display:none;
}

.biaoqian-div-div{
    margin-left: 0.2rem;
    padding: 0.2rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    background-color: #F2F3F7;
    display: flex;
    align-items: center;
    white-space:nowrap;   //让元素内的字体不换行
    border-radius: 0.1rem;
}
.biaoqian-div-div >img{
    height: 0.4rem;
    width: 0.4rem;
    margin-right: 0.1rem;
}
</style>
