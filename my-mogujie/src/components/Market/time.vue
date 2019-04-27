<template>
<div>
    <div 
        class="div" 
        v-for="(i,index) in mydata" 
        :key="index"
    >
        <!-- {{countDownList[index].day}}天 -->
        <p> {{countDownList[index].hou}} </p>
        <p>:</p>
        <p> {{countDownList[index].min}} </p>
        <p>:</p>
        <p> {{countDownList[index].sec}}   </p>
    </div>
</div>
    
</template>
<script>
export default {
    data() {
　　　　return {
　　　　　　mydata: [
                {
　　　　　　　　    actEndTime: '2019-4-18 20:00:00'
　　　　　　      }
            ],
　　　　　
　　　　　　countDownList: []
　　　　};
　　},

　　created() {
　　　　this.dataName();
　　},

　　methods: {

　　　　dataName() {
　　　　　　let endTimeList = [];
　　　　　　// 将活动的结束时间参数提成一个单独的数组，方便操作
　　　　　　this.mydata.forEach(o => {
　　　　　　　　endTimeList.push(o.actEndTime);
　　　　　　});
　　　　　　this.actEndTimeList = endTimeList;
　　　　　　this.countDown();
　　　　},

　　　　timeFormat(param) {

　　　　　　return param < 10 ? '0' + param : param;
　　　　},

　　　　countDown(it) {
　　　　　　// 获取当前时间，同时得到活动结束时间数组
　　　　　　let newTime = new Date().getTime();
　　　　　　let endTimeList = this.actEndTimeList;
　　　　　　let countDownArr = [];
　　　　　　// 对结束时间进行处理渲染到页面
　　　　　　endTimeList.forEach(o => {
　　　　　　　　let endTime = new Date(o).getTime();
　　　　　　　　let obj = null;
　　　　　　　　// 如果活动未结束，对时间进行处理
　　　　　　　　if (endTime - newTime > 0) {
　　　　　　　　　　let time = (endTime - newTime) / 1000;
　　　　　　　　　　// 获取天、时、分、秒
　　　　　　　　　　let day = parseInt(time / (60 * 60 * 24));
　　　　　　　　　　let hou = parseInt(time % (60 * 60 * 24) / 3600);
　　　　　　　　　　let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
　　　　　　　　　　let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
　　　　　　　　　　obj = {
　　　　　　　　　　　　day: this.timeFormat(day),
　　　　　　　　　　　　hou: this.timeFormat(hou),
　　　　　　　　　　　　min: this.timeFormat(min),
　　　　　　　　　　　　sec: this.timeFormat(sec)
　　　　　　　　　　};
　　　　　　　　} else { // 活动已结束，全部设置为'00'
　　　　　　　　　　obj = {
　　　　　　　　　　　　day: '00',
　　　　　　　　　　　　hou: '00',
　　　　　　　　　　　　min: '00',
　　　　　　　　　　　　sec: '00'
　　　　　　　　　　};
　　　　　　　　}
　　　　　　　　countDownArr.push(obj);
　　　　　　});
　　　　　　this.countDownList = countDownArr;
　　　　　　setTimeout(this.countDown, 1000);
　　　　}

　　}
}
</script>
<style lang="less" scoped>
.div{
    width: 1.2rem;
    display: flex;
    justify-content: space-around;
}
.div p:nth-child(1), p:nth-child(3), p:nth-child(5){
    height: 0.32rem;
    width: 0.32rem;
    background-color: rgb(59, 58, 58);
    text-align: center;
    line-height: 0.35rem; 
    color: white;
    font-size: 0.22rem;
    font-weight: 600;
}
.div p:nth-child(2) , p:nth-child(4){
    width: 0.05rem;
    font-size: 0.3rem;
    height: 0.32rem;
    display: flex;
    justify-content: center;
}
</style>
