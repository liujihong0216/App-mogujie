<template>
    <div class="header-warp">
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
            <div class="header-bottom">
                <div class="bottom-div">
                    <div class="bottom-div-div1">
                        <div 
                            class="bottom-img"  
                            @click="handleGoMarket"
                        ></div>
                    </div>
                    <div 
                        class="bottom-div-div2"
                        @click="handleGoSearch"
                    >
                        <div class="bottom-img1"></div>
                        <div class="bottom-div1"> {{ bottomMessage }} </div>
                    </div>
                    <div class="bottom-div-div3">
                        <div 
                            class="bottom-img3"
                            @click="handleGoLogin"
                        ></div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import con1 from "../../assets/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png";
export default {
    data (){
        return {
            headerMessage : "上万达人为你试穿全网品牌",
            headerMessage2 : "超过2亿用户已下载",
            bottomMessage : "汉服",
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
            ]
        }
    },
    props : ['headerMessage3'],
    methods: {

        handleGoMarket:function(){
            this.$router.push({
                name:"market",
                params: {
                    value:""
                } 
            })
        },

        handleGoSearch:function(){
            this.$router.push({
                name:"search",
                params: {
                    value:""
                } 
            })
        },

        handleGoLogin:function(){
            this.$router.push({
                name:"login",
                params: {
                    value:""
                } 
            })
        },
    },
}
</script>
<style lang="less" scoped>
.header-warp{
    /*//移动端没有最大宽度最小宽度都是百分百*/
	width: 100%;
	height: auto;
    margin: auto;
}
.header{
    height: 1rem;
    width: 100%;
    border-bottom :0.03rem solid #939397;
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



.header-bottom{
    height: 1rem;
    max-width: 100%;
    display: flex;
    align-items: center;
}
.bottom-div{
    height: 70%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.bottom-div-div1{
    height: 100%;
    width: 9%;
    display: flex;
    align-items: center;
}
.bottom-img{
    height: 0.5rem;
    width: 0.5rem;
    background-image: url("../../assets/180926_3lac93lkglfd5gd4fiahedg5aad79_40x37.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
}
.bottom-div-div2{
    height: 100%;
    width: 75%;
    background-color: #EEEEEE;
    border-radius: 0.1rem;
    font-size: 0.3rem;
    color: #939397;
    display: flex;
    align-items: center;
}
.bottom-img1{
    height: 0.37rem;
    width: 0.37rem;
    background-image: url("../../assets/下载.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
    margin-left: 0.2rem;
}
.bottom-div1{
    margin-left: 0.2rem;
}
.bottom-div-div3{
    height: 100%;
    width: 8%;
    display: flex;
    align-items: center;
}
.bottom-img3{
    height: 0.5rem;
    width: 0.5rem;
    background-image: url("../../assets/下载 (1).png");
    background-repeat: no-repeat;
    background-size:100% 100%;
}
</style>
