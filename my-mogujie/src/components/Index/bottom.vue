<template>
    <div class="bottom-warp">
        <div class="bottom-div">
    
                <div 
                    class="div1-div"
                    v-for="(value , index) in list"
                    :key="index"
                >
                    <router-link 
                        class="div1-div-font" 
                        :to="value.routerMap"
                    > 
                            {{ value.name }} 
                    </router-link>
                </div>
            
        </div>
    </div>
</template>
<script>
export default {
        data (){
            return {
        
                list : [
                    {   
                        name : "首页",
                        routerMap:"/index"
                    },
                    { 
                        name : "商城",
                        routerMap:"/Bottom_store"
                    },
                    {
                        name : "直播",
                        routerMap:"/Zhibo"
                    },
                    { 
                        name : "我",
                        routerMap:"/Login"
                    },
                ]
            }       
        },
        mounted(){
            
        },
        methods : {
        
        },
        
}
</script>
<style lang="less" scoped>
.router-link-exact-active{
    color:#FF5577;
}
.div1-div-font{ 
    font-size: 0.35rem;   
}
.div1-div{
    width: 25%;
    display: flex;
    justify-content: space-around;

}
.bottom-warp{
    margin: 0;
    padding: 0;
    width: 100%;
}
.bottom-div{
    height: 1rem;
    width: 100%;
    border-top: 0.01rem solid rgb(156, 143, 143);
    position: fixed;
    bottom: 0;
    z-index: 999;
    background-color: white;
    display: flex;
    align-items: center;
}



</style>
