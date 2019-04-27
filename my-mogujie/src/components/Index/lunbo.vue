<template>
    <div class="lunbo-warp">
                <swiper
                    v-if="slidesReal.length > 0" 
                    :autoPlay = "true"
                    :showindicator = "true"
                    interval = "2000"
                    duration = "500"
                >
                    <slide
                        v-for="(value , index) in slidesReal"
                        :key="index"
                    >
                        <img v-bind:src = "value.url" alt="" srcset="">
                    </slide>
                </swiper>               
    </div>       

</template>
<script>
//1.引入vue-swiper-component模块
import { Swiper , Slide } from "vue-swiper-component";

//动态引入图片
import imgOne from "../../assets/190404_4hle2f878443b58c82cl8ac4abfad_750x300.jpg_999x999.v1c0.81.webp";
import imgTwo from "../../assets/190408_0ef32chl36a28cjbg5alkcc3g8d40_750x300.jpg_999x999.v1c0.81.webp";
import imgThree from "../../assets/190411_7i3ic1k8k7hl4hgak2982i3bl18kl_750x300.jpg_999x999.v1c0.81.webp";
    
    export default {

        components :{
            Swiper,
            Slide,
        },
        data (){
            return {
                slidesReal : [
                    {
                        url : imgOne
                    },
                    {
                        url : imgTwo
                    },
                    {
                        url : imgThree
                    },
                ]
            }
        },
        
    }

</script>
<style lang="less" scoped>
.lunbo-warp{
    margin: 0;
    padding: 0;
    width: 100%;
}
swiper{
    width: 100%;
    height: 3rem;
}
img{
    width: 100%;
    height: 100%;
}


</style>
