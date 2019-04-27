<template>
    <div class="login-warp">
        <div class="login-div1">
            {{ loginName }}
        </div>
        <div class="login-div2">
            <div class="login-div2-div2"> 
                <img :src="weixinimg">
                {{ name1 }}
            </div>
        </div>
        <div class="login-div3"></div>
        <div class="login-div4"> {{ name2 }} </div>
        <div class="login-div5">
            <div 
                class="login-div5-div"
                v-for="(value , index) in list"
                :key="index"
            >
                <img :src="value.loginimg">
                {{ value.loginname1 }}
            </div>
        </div>
    </div>
</template>
<script>
import con1 from "../../assets/weixin.png"
import con2 from "../../assets/qq.png"
import con3 from "../../assets/shouji.png"
import con4 from "../../assets/geren.png"
export default {
    data (){
        return {
            loginName : "登陆",
            name1 : "微信登陆",
            weixinimg : con1,
            name2 : "其他登陆方式",
            list : [
                {
                    loginimg : con2,
                    loginname1 : "QQ登陆",
                },
                {
                    loginimg : con3,
                    loginname1 : "免密登陆",
                },
                {
                    loginimg : con4,
                    loginname1 : "账号登陆",
                },
            ]
            
        }
    }
}
</script>
<style lang="less" scoped>
.login-warp{
    margin: 0;
    padding: 0;
    width: 100%;
	height: auto;
    margin: auto;
}
.login-div1{
    height: 3.5rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    font-size: 0.6rem;
}
.login-div2{
    height: 1rem;
    width: 80%;
    background-color: #09Bb07;
    margin: 0 auto;
    border-radius:0.5rem;
    display: flex;
    align-items: center;
    font-size: 0.4rem;
    color: white;
}
.login-div2 img{
    height: 0.45rem;
    width: 0.5rem;
}
.login-div2-div2{
    height: 0.5rem;
    width: 2.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.login-div3{
    height: 1.4rem;
    width: 0.5rem;
    border-bottom: 1px solid #797373;
    margin: 0 auto;
}
.login-div4{
    font-size: 0.3rem;
    margin: 0 auto;
    color: #797373;
    margin-top: 0.6rem;
}
.login-div5{
    height: 1.5rem;
    width: 80%;
    margin: 0 auto;
    margin-top:0.8rem;
    display:flex;
    justify-content: space-between;
}
.login-div5-div{
    height: 100%;
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.3rem;
}
.login-div5-div img{
    height: 0.9rem;
    width: 0.9rem;
    margin-bottom: 0.2rem;
}
</style>
