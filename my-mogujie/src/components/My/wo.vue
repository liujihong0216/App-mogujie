<template>
    <div class="bottom_store-warp">
        <Headerr :headerMessage3="headerMessageNew13"></Headerr>
        
        <Bottomr></Bottomr>
    </div>
</template>
<script>
import Headerr from "../Index/header";
import Bottomr from "../Index/bottom";



export default {
    components : {
        Headerr,      
        Bottomr,
    
    },
    data (){
        return {
            headerMessageNew13 : "领取优惠",
        }
    },
    methods : {
    
    },
    computed : {

    },


}
</script>
<style lang="less" scoped>

</style>
