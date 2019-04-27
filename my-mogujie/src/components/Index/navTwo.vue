<template>
    <div class="navTwo-warp">

        <div class="navTwo-div">
            <div class="navTwo-div-div" 
                v-for="(value , index) in list" 
                :key="index" 
                :id="forId(index)"
            >
                <div>  {{ value.name }}  </div>
                
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data (){
        return {
        }       
    },
    props:{
        list :{
            type:Array,
            default:[

            ]
        }
    },
    // mounted (){
    //     //注册页面滚动事件
    //     window.addEventListener('scroll', this.handleScroll);
    // },
    methods : {
        forId:function(index){
            return "navTwo-div-div" +index          
        },

        // handleScroll () {
        //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //     //打印滚动的高度
        //     // console.log(scrollTop)

        //     var offsetTop = document.querySelector('#fixedTop').offsetTop;
        //     console.log(offsetTop)
        //     if (scrollTop > offsetTop) {
                
        //     } else {
            
        //     }
        // },
        // destroyed () {//离开该页面需要移除这个监听的事件
        //     window.removeEventListener('scroll', this.handleScroll)
        // },
    },
}
</script>
<style lang="less" scoped>
.navTwo-warp{
    margin: 0;
    padding: 0;
    width: 100%;
	height: auto;
    margin: auto;
    position: sticky; 
    top: 0rem;
    z-index: 999;
    background-color: #ffffff;
}
.navTwo-div{
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.01rem solid rgb(156, 143, 143);
}
.navTwo-div-div{
    height:0.8rem;
    width: 1rem;
    font-size: 0.4rem;
    font-weight: 540;
    text-align: center;
    line-height: 0.8rem;
}
#navTwo-div-div0{
    border-bottom: 0.05rem solid #FF5777;
}


</style>
