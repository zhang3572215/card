<!-- login -->
<template>
  <div class="inquire" :style="{backgroundImage:'url('+bg+')'}">
    <div  class='logo'>
        <img :src="logoImage" alt="">
    </div>
    
    <p class='tit'>卡号</p>
    <div class='box'>
        <div class='btn-list'>
            <em class='iconfont iconqiahaoxinxichaxun'></em>
            <input type="text" class='input' placeholder="请输入流量卡号">
            <em class='iconfont iconsaoyisao' @click="getScan"></em>
        </div>
        <button type="button" class='default-btn'@click="checkCard">查询</button>
        <p class='smalltxt'>点击输入卡号右侧“扫一扫”图标，可直接扫码查询</p>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
        logoImage: this.imgs.logoImg,
        bg:this.imgs.loginBg
    };
  },
  computed: {
    
  },
  mounted: function(){
    // this.getWxConfig();
  },
  methods: {
    getScan: function (e) {
        // wx.config({
        //     debug : false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        //     //                                debug : true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        //     appId : data.appId, // 必填，公众号的唯一标识
        //     timestamp : data.timestamp, // 必填，生成签名的时间戳
        //     nonceStr : data.noncestr, // 必填，生成签名的随机串
        //     signature : data.signature,// 必填，签名，见附录1
        //     jsApiList : ['checkJsApi', 'scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        // });
        console.log(wx)
        wx.ready(function() {
            wx.scanQRCode({   
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                    console.log(res);
                    alert(res);
                    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                    sessionStorage.setItem('saomiao_result',result);
                    //其它网页调用二维码扫描结果： 
                    //var result=sessionStorage.getItem('saomiao_result');
                }
            });
        });
    },
    getWxConfig:function(){
        var xhr=null;
        if(window.XMLHttpRequest){
            xhr=new XMLHttpRequest();
        } else if(window.ActiveXObject){
            xhr=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.open('post','getWxConfig.php');
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                data=(xhr.responseText);
            }
        };
        xhr.send(openID); 
    },
    checkCard: function (){
        // getCardCheck().then(res=>{
            this.$router.push('')
        // })
    }
  },
  components: {}
}

</script>
<style scoped>
.inquire {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-top: 20vw;
    position: absolute;
    background-color: #f4f4f4;
    background-size: cover;
    background-repeat: no-repeat;
}
.logo {
    width: 24vw;
    height: 24vw;
    margin: 0 auto 8vw;
    overflow: hidden;
}
.tit {
    color: #4379ec;
    font-size: 5.6vw;
    line-height: 8vw;
    text-align: left;
    padding: 0 6.666667vw 6.666667vw 6.666667vw;
}
.box {
    background: #fff;
    border-radius: 4vw;
    margin: 0 4vw;
    padding: 8vw 6.666667vw 0 6.666667vw;
}
.btn-list {
    display: flex;
    border-bottom: 1px solid #8c8c8c;
}
.btn-list em {
    flex-grow: 1;
    font-size: 3.733333vw;
    line-height: 10.666667vw;
    color: #8c8c8c;
    text-align: center;
    display: inline-block;
}
.btn-list em:last-child {
    flex: none;
}
.btn-list input {
    outline: none;
    background-color: transparent;
    border: none;
    text-align: left;
    flex-grow: 1;
    font-size: 3.733333vw;
    line-height: 10.666667vw;
    color: #8c8c8c;
    text-align: left;
    display: inline-block;
}
.default-btn {
    width:100%;
    margin-top: 5.333333vw;
    background: -ms-linear-gradient(-10deg, #4379ec 0%, #759df4 100%);
    background: -webkit-linear-gradient(-10deg, #4379ec 0%, #759df4 100%);
    box-shadow: 0 0.8vw 1.6vw 0 #4379ec;
    line-height: 12vw;
    font-size: 4vw;
    border-radius: 1.333333vw;
    color: #fff;
    text-align: center;
    display: block;
}
.smalltxt {
    line-height: 13.333333vw;
    color: #ccc;
    font-size: 2.666667vw;
}
</style>