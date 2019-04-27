<template>
    <div class="search-warp">
        <div class="search-header">
            <div 
                class="header-div1"
                @click="handleBack"
            ></div>
            <div class="header-div2">
                <input type="input" name="search" placeholder="外套" autofocus="autofocus"/>
            </div>
            <div class="header-div3"> {{  name }}  </div>
        </div>

        <div class="nav-div">
            <div class="nav-div1">
                <div class="nav-div-div1">
                    <div class="nav-div-div1-div1"></div>
                    <div class="nav-div-div1-div2"> {{ name1 }} </div>
                    <div class="nav-div-div1-div3"></div>

                </div>
                <div class="nav-div-div2"> {{ name2 }} </div>
            </div>        
        </div>

        <div class="nav1-div">
            <div class="nav1-div1">
                    <div class="div1-div1-div1"></div>
                    <div class="div1-div1-div2"> {{ name3 }} </div>       
            </div>        
        </div>

        <div class="nav2-div">
            <div 
                class="nav2-div-div"
                v-for="(value , index) in list"
                :key="index"
                :id="forId(index)"
            >
                {{ value.name4 }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return {
            name : "搜索",
            name1 : "历史搜索",
            name2 : "暂无搜索记录",
            name3 : "热门搜索", 
            list : [
                { name4 : "睡衣" },
                { name4 : "汉服" },
                { name4 : "衬衫" },
                { name4 : "裙子" },
                { name4 : "凉鞋" },
                { name4 : "连衣裙" },
                { name4 : "高跟鞋" },
                { name4 : "外套" },
                { name4 : "背带裤" },
                { name4 : "短袖" },
            ]
        }
    },
    methods : {
        handleBack : function(){
            window.history.go(-1);
        },
        forId:function(index){
            return "div" +index          
        },
    }
}
</script>
<style lang="less" scoped>
.search-warp{
    margin: 0;
    padding: 0;
    width: 100%;
	height: auto;
    margin: auto;
}
.search-header{
    width: 90%;
    height: 1rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.header-div1{
    height: 0.5rem;
    width: 10%;
    background-image: url("../../assets/jiantou.png");
    background-size: 0.5rem  100%;
    background-repeat: no-repeat;
}
.header-div2{
    height: 0.6rem;
    width: 80%; 
    display: flex;
    align-items: center;
    border: 0.015rem solid #9E9E9E;
    border-radius: 0.15rem;
}
.header-div2:hover{
    border-color: #FF4466;
}
.header-div2 >input{
    height: 0.4rem;
    width: 98%; 
    font-size: 0.3rem;
    font-weight: 600;
    padding-left: 0.2rem;
    margin: 0 auto;
    display: flex;
    outline: none;
    border: none;
}
.header-div3{
    height: 0.6rem;
    width: 15%;
    font-size: 0.35rem;
    font-weight: 600;
    text-align: right;
    line-height: 0.6rem;
}
.nav-div{
    height: 1.8rem;
    width: 100%;
    border-top: 1px solid #9E9E9E;
    border-bottom: 1px solid #9E9E9E;
    display: flex;
    align-items: center;
}
.nav-div1{
    height: 70%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}
.nav-div-div1{
    height: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.nav-div-div1-div1{
    height: 0.35rem;
    width: 7%;
    background-image: url("../../assets/下载.png");
    background-repeat: no-repeat;
    background-size: 0.35rem 0.4rem;
}
.nav-div-div1-div2{
    height: 0.35rem;
    width:86%;
    font-size: 0.29rem;
    color: #9E9E9E;
    text-align: left;
}
.nav-div-div1-div3{
    height: 0.35rem;
    width: 7%;
    background-image: url("../../assets/deleter.png");
    background-repeat: no-repeat;
    background-size: 0.35rem 0.35rem;
}
.nav-div-div2{
    height: 0.5rem;
    width: 85%;
    font-size: 0.29rem;
    color: #9E9E9E;
    text-align: left;
}
.nav1-div{
    width: 100%;
    margin-top: 0.2rem;
}
.nav1-div1{
    height: 0.5rem;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.div1-div1-div1{
    height: 100%;
    width: 7%;
    background-image: url("../../assets/下载 (3).png");
    background-repeat: no-repeat;
    background-size: 0.35rem 0.35rem;
}
.div1-div1-div2{
    height: 100%;
    width: 93%;
    font-size: 0.29rem;
    color: #9E9E9E;
    text-align: left;
}
.nav2-div{
    width: 90%;
    margin: 0 auto;
    margin-top: 0.3rem;
    display: flex;
    flex-wrap: wrap;
}
.nav2-div-div{
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-bottom: 0.1rem;
    padding-top: 0.1rem;
    border:0.01rem solid #9E9E9E;
    font-size: 0.25rem;
    border-radius: 0.2rem;
    margin: 0.1rem;
}
#div0, #div1, #div5{
    color: #FF4466;
}

</style>
