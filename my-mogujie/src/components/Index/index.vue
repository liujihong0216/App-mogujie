<template>
    <div class="index-warp">
        <Header :headerMessage3="headerMessageNew23"></Header>
        <Lunbo></Lunbo>
        <NavOne></NavOne>
        <NavTwo :list="indexlist"></NavTwo>
        <NavThree></NavThree>
        <Bottom></Bottom>
    </div>
</template>
<script>
import Header from "./header";
import Lunbo from "./lunbo";
import NavOne from "./navOne";
import NavTwo from "./navTwo";
import NavThree from "./navThree";
import Bottom from "./bottom";

export default {
    components : {
        Header,
        Lunbo,
        NavOne,
        NavTwo,
        NavThree,
        Bottom,
    },
    data (){
        return {
            headerMessageNew23 : "下载APP",
            indexlist:[
                {
                    name : "发现",
                },
                {
                    name : "关注",
                },
                {
                    name : "流行",
                },
            ]
        }
    },
    computed : {

    },


}
</script>
<style lang="less" scoped>
.index-warp{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
