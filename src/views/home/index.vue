<template>
<div>
    <!-- topbar -->
    <el-row class="topbar" type="flex">
        <el-col :span="24">
            <div class="site-nav">
                <div class="container">
                <ul class="site-nav-l">
                    <li class="menu dropno">
                        <a href="javascript:void(0)"><span class="ico ico-star"></span>花食网(www.huashi.live)</a>
                    </li>
                    <li class="menu dropdown">
                        <a href="javascript:void(0)"><span class="ico ico-weixin"></span>关注微信</a>
                        <div class="dropdown-menu dropdown-weixin">
                            <img src="//img02.hua.com/pc/pimg/wechat_qrcode.jpg" height="124" width="124">
                            <p>扫码关注<br>回复"礼物" 更多惊喜！</p>
                        </div>
                    </li>
                    <li class="menu dropdown">
                        <a href="javascript:void(0)"><span class="ico ico-mobile"></span>花食网app</a>
                        <div class="dropdown-menu dropdown-weixin">
                            <img src="//img02.hua.com/pc/pimg/app_qrcode.jpg" height="124" width="124">
                            <p>新人专享100元APP礼包</p>
                        </div>
                    </li>
                </ul>

                    <ul class="site-nav-r">
                            <!--登陆状态信息显示start-->
                            <li class="menu login" id="LoginInfo"><a href="javascript:void(0)" rel="nofollow">你好，请登录</a><a href="/Passport/Register/" rel="nofollow">注册</a></li>
                            <!--登陆状态信息显示end-->
                            <li class="site-nav-pipe">|</li>
                            <li class="menu">
                                <a href="javascript:void(0)" rel="nofollow" target="_blank">订单查询</a>
                            </li>
                            <li class="site-nav-pipe">|</li>
                            <!--我的花礼信息显示start-->
                            <li class="menu dropdown">
                                <a href="javascript:void(0)" rel="nofollow" data-hover="dropdown" data-delay="0" target="_blank" aria-expanded="false">我的花礼</a>
                            </li>
                            <!--我的花礼信息显示end-->
                            <li class="site-nav-pipe">|</li>
                            <li class="menu dropdown">
                                <a href="javascript:void(0)" data-hover="dropdown" data-delay="0" target="_blank" aria-expanded="false">客户服务<span class="glyphicon glyphicon-triangle-bottom"></span></a>
                                <div class="dropdown-service dropdown-menu ">
                                    <a href="javascript:void(0)" target="_blank">在线付款</a>
                                    <a href="javascript:void(0)" target="_blank">帮助中心</a>
                                    <a href="javascript:void(0)" target="_blank">售后服务</a>
                                    <a href="javascript:void(0)" target="_blank">配送范围</a>
                                    <a href="javascript:void(0)" target="_blank">留言反馈</a>
                                </div>
                            </li>
                            <li class="site-nav-pipe">|</li>
                            <!--购物车信息显示start-->
                            <li class="menu dropdown">
                                <a href="javascript:void(0)" data-hover="dropdown" data-delay="0" rel="nofollow" target="_blank" aria-expanded="false">
                                <span class="ico ico-cart"></span>购物车<span class="text-primary" id="gwcCount">(0)</span><span class="glyphicon glyphicon-triangle-bottom"></span></a>
                                <div class="dropdown-menu dropdown-cart" id="CartInfo"><div class="empty">您的购物车中没有商品，<a href="javascript:void(0)">先去选购吧</a>！</div></div>
                            </li>
                            <!--购物车信息显示end-->
                            <li class="site-nav-pipe">|</li>
                            <li class="menu slogan">
                                花食网:鲜花领先品牌
                            </li>
                        </ul>
                </div>
            </div>
        </el-col>
    </el-row>
    <!-- search -->
    <el-row class="header" type="flex">
        <el-col>
            <div class="site-nav">
                <div class="container">
                    <div class="logo">
                        <h1><a href="javascript:void(0)" class="logo-bd"></a></h1>
                        <i></i>
                        <h2></h2>
                    </div>

                    <div class="search">
			            <form name="i_search" method="post" action="/search/">
                            <div class="input-group">
                                <input name="keyword" type="text" class="form-control" placeholder="商品关键词">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button" onclick="this.form.submit()">搜索</button>
                                </span>
                            </div>
			            </form>

                        <span class="help-block">
                            <a href="javascript:void(0)" target="_blank">六一儿童节礼物</a> | 
                            <a href="javascript:void(0)" target="_blank">红玫瑰</a> | 
                            <a href="javascript:void(0)" target="_blank">永生花</a> | 
                            <a href="javascript:void(0)" target="_blank">生日鲜花</a>  
                        </span>
		            </div>

                    <div class="service">
			            <span class="ico ico-phone"></span>400-889-8188
			            <a href="javascript:void(0)" target="_blank"><span class="ico ico-headset"></span>在线客服</a>
		            </div>
                </div>
		    </div>
        </el-col>
    </el-row>

     <!-- navigation -->
    <el-row class="navigation" type="flex">
        <el-col>
            <div class="site-nav">
                <div class="container">
                    <div class="categorys">
                        <h3 class="categorys-title">
                            <a href="javascript:void(0)" target="_blank">全部商品导购</a>
                        </h3>
                        <div class="dropdown-cate">
                            <h4>鲜花用途</h4>
                            <ul class="cate-list list-inline">
                                <li><a href="javascript:void(0)" target="_blank">爱情鲜花</a></li>
                                <li><a href="javascript:void(0)" target="_blank">生日鲜花</a></li>
                                <li><a href="javascript:void(0)" target="_blank">友情鲜花</a></li>
                                <li><a href="javascript:void(0)" target="_blank">问候长辈</a></li>
                                <li><a href="javascript:void(0)" target="_blank">探病慰问</a></li>
                                <li><a href="javascript:void(0)" target="_blank">道歉鲜花</a></li>
                                <li><a href="javascript:void(0)" target="_blank">祝贺鲜花</a></li>
                                <li><a href="javascript:void(0)" target="_blank">婚庆鲜花</a></li>
                                <li><a href="javascript:void(0)" target="_blank">商务鲜花</a></li>
                            </ul>
                            <h4>鲜花花材</h4>
                            <ul class="cate-list list-inline">
                                <li><a href="javascript:void(0)" target="_blank">玫瑰</a></li>
                                <li><a href="javascript:void(0)" target="_blank">康乃馨</a></li>
                                <li><a href="javascript:void(0)" target="_blank">郁金香</a></li>
                                <li><a href="javascript:void(0)" target="_blank">百合</a></li>
                                <li><a href="javascript:void(0)" target="_blank">扶郎</a></li>
                                <li><a href="javascript:void(0)" target="_blank">马蹄莲</a></li>
                                <li><a href="javascript:void(0)" target="_blank">向日葵</a></li>
                            </ul>
                            <h4>鲜花类别</h4>
                            <ul class="cate-list list-inline catelist">
                                <li><a href="javascript:void(0)" target="_blank">花束</a></li>
                                <li><a href="javascript:void(0)" target="_blank">花盒</a></li>
                                <li><a href="javascript:void(0)" target="_blank">瓶花</a></li>
                                <li><a href="javascript:void(0)" target="_blank">精品鲜花</a></li>
                                <li><a href="javascript:void(0)" target="_blank">果篮</a></li>
                                <li><a href="javascript:void(0)" target="_blank">桌面花篮</a></li>
                                <li><a href="javascript:void(0)" target="_blank">开业花篮</a></li>
                            </ul>
                            <div class="cate-cake stature cate-ysh">
                                <a href="javascript:void(0)" target="_blank"><span class="pull-right glyphicon glyphicon-menu-right"></span>永生花</a>
                                <div class="right-menu">
                                    <b></b>
                                    <h5>永生花类别</h5>
                                    <div class="link-img">
                                        <a href="javascript:void(0)" target="_blank">
                                            <img src="//img02.hua.com/pc/pimg/ysh_brand_menu_01.jpg" height="62" width="96">经典花盒
                                        </a>
                                        <a href="javascript:void(0)" target="_blank">
                                            <img src="//img02.hua.com/pc/pimg/ysh_brand_menu_02.jpg" height="62" width="96">巨型玫瑰
                                        </a>
                                        <a href="javascript:void(0)" target="_blank">
                                            <img src="//img02.hua.com/pc/pimg/ysh_brand_menu_03.jpg" height="62" width="96">薰衣草
                                        </a>
                                        <a href="javascript:void(0)" target="_blank">
                                            <img src="//img02.hua.com/pc/pimg/ysh_brand_menu_04.jpg" height="62" width="96">永生瓶花
                                        </a>
                                        <a href="javascript:void(0)" target="_blank">
                                            <img src="//img02.hua.com/pc/pimg/ysh_brand_menu_05.jpg" height="62" width="96">特色永生花
                                        </a>
                                    </div>
                                </div>
                                <ul class="cate-list list-inline">
                                    <li><a href="javascript:void(0)" target="_blank">经典花盒</a></li>
                                    <li><a href="javascript:void(0)" target="_blank">巨型玫瑰</a></li>
                                    <li><a href="javascript:void(0)" target="_blank">薰衣草</a></li>
                                </ul>
                            </div>
                            <div class="cate-cake">
                                <div class="gifts_toys_plant">
                                    <span class="pull-right glyphicon glyphicon-menu-right"></span>
                                    <a href="javascript:void(0)" target="_blank" style="padding-left:16px;">绿植</a>
                                </div>
                                <div class="right-menu">
                                    <b class="gifts"></b>
                                    <h5><a href="javascript:void(0)" target="_blank">绿植花卉</a></h5>
                                    <div class="link-text">
                                        <a href="javascript:void(0)" target="_blank">绿色植物</a>
                                        <a href="javascript:void(0)" target="_blank">盆栽花卉</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="nav">
                        <li><a href="javascript:void(0)" target="_blank">鲜花</a></li>
                        <li><a href="javascript:void(0)" target="_blank">永生花</a></li>

                        <li><a href="javascript:void(0)" target="_blank">花语大全</a></li>
                        <li><a href="javascript:void(0)" target="_blank">企业团购</a></li>
                        <li><a href="javascript:void(0)" target="_blank">设计师臻选鲜花</a></li>
                        <li><a href="javascript:void(0)" target="_blank" style="color: #ff6600;">六一儿童节鲜花</a></li>
			        </ul>
                </div>
		    </div>
        </el-col>
    </el-row>

    <!-- banner -->
    <el-row class="bannerbar" type="flex">
        <el-col>
            <div class="site-nav">
                    <el-carousel :interval="6000">
                        <el-carousel-item>
                            <div class="fill">
					            <a href="javascript:void(0)" target="_blank"><img src="../../assets/img/pc/banner/17ertongjie_pc.jpg" alt="" width="100%" height="100%"></a>
				            </div>
                        </el-carousel-item>

                        <el-carousel-item>
                            <div class="fill">
                                <a href="javascript:void(0)" target="_blank"><img src="../../assets/img/pc/banner/18_shuangzi_pc.jpg" alt="" width="100%" height="100%"></a>
                            </div>
                         </el-carousel-item>
                    </el-carousel>
		    </div>
        </el-col>
    </el-row>

    <!-- 主要内容 -->
    <el-row class="timelimit" type="flex">
        <el-col>
            <div class="site-nav">
                <div class="container">
                     <!-- 限时推荐 -->
                    <div class="time-limit">
                        <div class="title">
                            <span class="ico ico-clock "></span> 限时推荐
                        </div>
                        <ul class="product-list">
                            <li>
                                <a href="javascript:void(0)" target="_blank">
                                <img src="../../assets/img/pc/picture/xianshi_1_180410.jpg" alt="" width="238" height="198"></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" target="_blank"><img src="../../assets/img/pc/picture/xianshi_2_180521.jpg" alt="" width="238" height="198"></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" target="_blank"><img src="../../assets/img/pc/picture/xianshi_3_180521.jpg" alt="" width="238" height="198"></a>
                            </li>
                        </ul>
                        <div class="comic-choose">
                            <a href="javascript:void(0)" target="_blank"><img src="../../assets/img/pc/picture/18_youflower_pcsmall.jpg" height="200" width="250" alt="" style="display: inline-block; width: 250px; height: 200px; margin: 0px;"></a>
                        </div>
                    </div>
                    <!-- 楼层01 -->
                    <div class="floor f1">
                        <div class="hd">
                            <a class="more" href="javascript:void(0)" target="_blank">更多爱情鲜花 &gt;&gt;</a>
                            <h3><a href="javascript:void(0)" target="_blank">爱情鲜花</a><span>送·让你怦然心动的人</span></h3>
                        </div>
                        <div class="bd">
                            <div class="bd-l">
                                <div class="banner-box">
                                    <a href="javascript:void(0)" target="_blank"><img data-original="//img02.hua.com/pc/pimg/banner_love.jpg" height="438" width="243" src="//img02.hua.com/pc/pimg/banner_love.jpg" style="display: inline;"></a>
                                </div>
                                <a class="banner-link" href="javascript:void(0)" target="_blank">爱情鲜花专区 &gt;&gt;</a>
                            </div>
                            <ul class="floor-products">
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 一往情深</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">245</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 一心一意</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">139</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 忘情巴黎</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">298</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9012177.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9012177.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 不变的承诺</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">569</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9012167.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9012167.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 爱的小确幸</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">308</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9012150.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9012150.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 幸福久久</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">569</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 恋恋情深</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">199</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 真爱如初</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">206</span>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 楼层02 -->
                    <div class="floor f2">
                        <div class="hd">
                            <a class="more" href="javascript:void(0)" target="_blank">更多送长辈鲜花 &gt;&gt;</a>
                            <h3><a href="javascript:void(0)" target="_blank">送长辈鲜花</a><span>赠·父母/恩师/长辈</span></h3>
                        </div>
                        <div class="bd">
                            <div class="bd-l">
                                <div class="banner-box">
                                    <a href="javascript:void(0)" target="_blank"><img data-original="//img02.hua.com/pc/pimg/banner_elder.jpg" height="438" width="243" src="//img02.hua.com/pc/pimg/banner_elder.jpg" style="display: inline;"></a>
                                </div>
                                <a class="banner-link" href="javascript:void(0)" target="_blank">送长辈鲜花专区 &gt;&gt;</a>
                            </div>
                            <ul class="floor-products">
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9012201.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9012201.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 馨情无限</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">246</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 母爱</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">178</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9012200.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9012200.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 暖暖的问候</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">259</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9010736.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9010736.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 感激</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">218</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9012095.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9012095.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 幸福绽放</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">166</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9010964.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9010964.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 天使之祈</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">198</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9012193.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9012193.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 暖暖情意</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">336</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/9010741.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/9010741.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">鲜花 · 健康长久</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">429</span>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 楼层03 -->
                    <div class="floor f3">
                        <div class="hd">
                            <a class="more" href="javascript:void(0)" target="_blank">更多永生花 &gt;&gt;</a>
                            <h3><a href="javascript:void(0)" target="_blank">永生花</a><span>许·她一生承诺</span></h3>
                        </div>
                        <div class="bd">
                            <div class="bd-l">
                                <div class="banner-box">
                                    <a href="javascript:void(0)" target="_blank"><img data-original="//img02.hua.com/pc/pimg/banner_song.jpg" height="438" width="243" src="//img02.hua.com/pc/pimg/banner_song.jpg" style="display: inline;"></a>
                                </div>
                                <a class="banner-link" href="javascript:void(0)" target="_blank">永生花专区 &gt;&gt;</a>
                            </div>
                            <ul class="floor-products">
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/1073147.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/1073147.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">永生花 · 海洋之恋</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">999</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/1073125.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/1073125.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">永生花 · 公主的水晶鞋·粉</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">198</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/1073100.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/1073100.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">永生花 · 彩虹下的约定/花的嫁纱银项链</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">368</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/1073094.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/1073094.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">永生花 · To温暖你心</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">288</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/1073033.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/1073033.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">永生花 · 一生一世</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">198</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/1073112.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/1073112.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">永生花 · 小公主</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">489</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/1073170.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/1073170.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">永生花 · 如沐暖风</span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">398</span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <span class="img-box" href="javascript:void(0)">
                                            <img data-original="//img01.hua.com/uploadpic/newpic/1073171.jpg_220x240.jpg" height="240" width="220" src="//img01.hua.com/uploadpic/newpic/1073171.jpg_220x240.jpg" style="display: inline;">
                                        </span>
                                        <span class="product-title">永生花 · Honey </span>
                                        <p class="price">
                                            <span class="price-sign">¥</span>
                                            <span class="price-num">699</span>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 面板 -->
                    <div class="panel-wrapper">
                        <div class="gray-panel news1">
                            <div class="hd">
                                <a href="javascript:void(0)" target="_blank"><span class="ico ico-plus"></span></a>
                                <h4>感动瞬间</h4>
                            </div>
                            <div class="bd">
                                <ul>
                                    <li><a href="javascript:void(0)" target="_blank" title="8年送花99束，神一样的花礼网客户">8年送花99束，神一样的花礼网客户</a></li>
                                    <li><a href="javascript:void(0)" target="_blank" title="花礼网用户故事 | 那些感动我们的，向来都是大爱">花礼网用户故事 | 那些感动我们的，</a></li>
                                    <li><a href="javascript:void(0)" target="_blank" title="鲜花——见证跨越海峡的异地恋">鲜花——见证跨越海峡的异地恋</a></li>
                                    <li><a href="javascript:void(0)" target="_blank" title="你和恋人都是怎样确定关系的？">你和恋人都是怎样确定关系的？</a></li>
                                    <li><a href="javascript:void(0)" target="_blank" title="超感动 | 花礼网用户真情告白故事">超感动 | 花礼网用户真情告白故事</a></li>
                                    <li><a href="javascript:void(0)" target="_blank" title="盘点花礼用户印象中最深刻的一次亲吻">盘点花礼用户印象中最深刻的一次亲吻</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="gray-panel comments">
                            <div class="hd">
                                <a href="javascript:void(0)" target="_blank"><span class="ico ico-plus"></span></a>
                                <h4>最新评价</h4>
                            </div>
                            <div class="bd">
                                <dl class="comment-item dl-horizontal">
                                    <dt>
                                        <a href="javascript:void(0)" target="_blank">
                                            <img src="//img01.hua.com/uploadpic/newpic/1061006.jpg_80x87.jpg" height="38" width="37" class="img-thumbnail">
                                            138****1566
                                        </a>
                                    </dt>
                                    <dd>
                                        <div class="info">
                                            <div class="rating"><span class="ico-rating r5"></span></div>
                                            <p class="cnt">
                                                <a href="javascript:void(0)" target="_blank">
                                                    内容：
                                                    还是比较满意的
                                                </a>
                                            </p>
                                        </div>
                                        <div class="date">2018-05-29</div>
                                    </dd>
                                </dl>
                                <dl class="comment-item dl-horizontal">
                                    <dt>
                                        <a href="javascript:void(0)" target="_blank">
                                            <img src="//img01.hua.com/uploadpic/newpic/9012177.jpg_80x87.jpg" height="38" width="37" class="img-thumbnail">
                                            138****2137
                                        </a>
                                    </dt>
                                    <dd>
                                        <div class="info">
                                            <div class="rating"><span class="ico-rating r5"></span></div>
                                            <p class="cnt">
                                                <a href="javascript:void(0)" target="_blank">
                                                    内容：
                                                    满意
                                                </a>
                                            </p>
                                        </div>
                                        <div class="date">2018-05-29</div>
                                    </dd>
                                </dl>
                                <dl class="comment-item dl-horizontal">
                                    <dt>
                                        <a href="javascript:void(0)" target="_blank">
                                            <img src="//img01.hua.com/uploadpic/newpic/5017007.jpg_80x87.jpg" height="38" width="37" class="img-thumbnail">
                                            5017212*
                                        </a>
                                    </dt>
                                    <dd>
                                        <div class="info">
                                            <div class="rating"><span class="ico-rating r5"></span></div>
                                            <p class="cnt">
                                                <a href="javascript:void(0)" target="_blank">
                                                    内容：
                                                    很满意
                                                </a>
                                            </p>
                                        </div>
                                        <div class="date">2018-05-29</div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div class="gray-panel news">
                            <div class="hd">
                                <a href="javascript:void(0)" target="_blank"><span class="ico ico-plus"></span></a>
                                <h4>热门资讯</h4>
                            </div>
                            <div class="bd">
                                <ul>
                                    <li><a href="javascript:void(0)" target="_blank" title="12星座异地恋如何维持？送你一份送花攻略！">12星座异地恋如何维持？送你一份</a></li>
                                    <li><a href="javascript:void(0)" target="_blank" title="看十二生肖收花如何反应？一图看出爱情运势">看十二生肖收花如何反应？一图看出</a></li>
                                    <li><a href="javascript:void(0)" target="_blank" title="送花的含义，生活中怎么送花？">送花的含义，生活中怎么送花？</a></li>
                                    <li><a href="javascript:void(0)" target="_blank" title="送女朋友鲜花，送花卡片写什么？">送女朋友鲜花，送花卡片写什么？</a></li>
                                    <li><a href="javascript:void(0)" target="_blank" title="异地恋有大招，教你不分手！">异地恋有大招，教你不分手！</a></li>
                                    <li><a href="javascript:void(0)" target="_blank" title="儿童节礼物送什么好？">儿童节礼物送什么好？</a></li>
                                </ul>
                                <ul>
                                    <li><a href="javascript:void(0)" target="_blank">六一儿童节鲜花</a></li>
                                    <li><a href="javascript:void(0)" target="_blank">鲜花枝数与其对应的含意</a></li>
                                    <li><a href="javascript:void(0)" target="_blank">鲜花寓意 浪漫花语</a></li>
                                    <li><a href="javascript:void(0)" target="_blank">通用送花祝福语-经典送花祝福语</a></li>
                                    <li><a href="javascript:void(0)" target="_blank">送花的常识与技巧</a></li>
                                    <li><a href="javascript:void(0)" target="_blank">女孩都喜欢别人送鲜花吗？</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>

 

    <!-- <el-row class="pictureList">
        <el-col :span="24">
        <picture-view>
        </picture-view>
        </el-col>
    </el-row> -->

    <el-row class="leftbar" type="flex">
        <el-col>
            <!-- 友情链接 End -->
            <div class="mui-mbar-tabs">
                <div class="quick_links_wrap quick_links_dockright">
                    <div class="quick_link_mian">
                        <div class="quick_links_panel">
                            <div id="quick_links" class="quick_links">
                                <li class="user_box">
                                    <a href="javascript:void(0)" class="my_qlinks"><i class="ico_user"></i></a>
                                    <!-- ***** 未登录 ***** -->
                                    <div class="ibar_login_box">
                                        <div class="avatar_box" id="loginStats">
                                            <p class="avatar_imgbox"><img src="//img02.hua.com/pc/assets/img/mbar/avatar_none.jpg"></p>你好！请 <a href="/Passport/Login/?backUrl=https://www.hua.com/?sid=bdaj003000021&amp;utm_source=baidu&amp;utm_medium=cpc&amp;utm_term=PC-22846568403-A003-%E9%B2%9C%E8%8A%B1">登录</a> | <a href="/Passport/Register/">注册</a>
                                        </div>
                                        <div class="login_btnbox">
                                            <a href="javascript:void(0)"><i class="ico_order"></i>我的订单</a>
                                        </div>
                                        <i class="icon_arrow_right_white"></i>
                                    </div>
                                </li>
                                <li id="shopCart">
                                    <a href="javascript:void(0)" class="message_list">
                                        <i class="ico_cart"></i>
                                        <div class="span">购物车</div>
                                        <span class="cart_num" id="cart_num">0</span>
                                    </a>
                                </li>
                                <li class="favorite_list">
                                    <a href="javascript:void(0)" ><i class="ico_collect"></i></a>
                                    <div class="mp_tooltip">
                                        <a href="javascript:void(0)" class="history_list" style="color: #595656;font-size: 14px;width: 100%;background: #fff;border-radius: 3px 0 0 3px;">我的收藏</a>
                                        <i class="icon_arrow_right_white"></i>
                                    </div>
                                </li>
                                <li class="histroy_list">
                                    <a href="javascript:void(0)" class="mpbtn_histroy"><i class="ico_histroy"></i></a>
                                    <div class="mp_tooltip">
                                        <a href="javascript:void(0)" class="mpbtn_histroy" style="color: #595656;font-size: 14px;width: 100%;background: #fff;border-radius: 3px 0 0 3px;">最近查看</a>
                                        <i class="icon_arrow_right_white"></i>
                                    </div>
                                </li>
                                <li class="phone_lable">
                                    <a href="javascript:void(0)" class="leave_message"><i class="ico_phone"></i></a>
                                    <div class="mp_tooltip">400-889-8188<i class="icon_arrow_right_white"></i></div>
                                </li>
                                <li class="headset_list">
                                    <a id="kefu" class="mpbtn_recharge"><i class="ico_headset"></i></a>
                                    <div class="mp_tooltip">
                                        <a id="kefu1" class="mpbtn_recharge" style="color: #595656;font-size: 14px;width: 100%;background: #fff;border-radius: 3px 0 0 3px;" title="在线客服">在线客服</a>
                                        <i class="icon_arrow_right_white"></i>
                                    </div>
                                </li>
                            </div>

                             <div class="quick_toggle">
                                <li class="qr_list">
                                    <a href="javascript:void(0)"><i class="ico_qrcode"></i></a>
                                    <div class="mp_qrcode">
                                        <p>
                                            <img src="//img02.hua.com/pc/assets/img/mbar/QR_wx.jpg" width="110" height="110"> 关注微信公众号
                                        </p>
                                        <p>
                                            <img src="//img02.hua.com/pc/assets/img/mbar/QR_app.jpg" width="110" height="110"> 下载花礼APP
                                        </p>
                                        <i class="icon_arrow_right_white"></i>
                                    </div>
                                </li>
                                <li class="feedback_list">
                                    <a href="javascript:void(0)" class="mpbtn_recharge" target="_blank"><i class="ico_surveys"></i></a>
                                    <div class="mp_tooltip">
                                        <a href="javascript:void(0)" class="mpbtn_recharge" style="color: #595656;font-size: 14px;width: 100%;background: #fff;border-radius: 3px 0 0 3px;" target="_blank">功能反馈</a>
                                        <i class="icon_arrow_right_white"></i>
                                    </div>
                                </li>
                                <li class="return_list" style="height:36px;margin-top:0px;">
                                    <a href="#top" class="return_top"><i class="ico_gotop"></i></a>
                                    <div class="mp_tooltip">
                                        <a href="#top" class="return_top" style="color: #595656;font-size: 14px;width: 100%;background: #fff;border-radius: 3px 0 0 3px;">返回顶部</a>
                                        <i class="icon_arrow_right_white"></i>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>


                    <div id="quick_links_pop" class="quick_links_pop quick_message_list" style="left: 0px;">
                        <a href="javascript:void(0)" class="ibar_closebtn" title="关闭"></a>
                        <div class="ibar_plugin_title"><h3>购物车</h3></div>
                        <div class="pop_panel">
                            <div class="ibar_plugin_content">
                                <div class="sub_title">共 1 件商品</div>
                                <div class="com-list">
                                        <div class="img-box">
                                        <a href="javascript:void(0)"><img src="//img01.hua.com/uploadpic/newpic/9010011.jpg_80x87.jpg"></a>
                                        </div>
                                        <div class="title">
                                            <a href="javascript:void(0)">一心一意—玫瑰11枝，粉色勿忘我0.3扎</a>
                                        </div>
                                        <div class="price">
                                            <span class="price-sign text-primary">¥</span><span class="price-num text-primary strong">139</span><span class="com-num">× 1</span>
                                        </div>
                                    </div>
                                    <div class="com-total">
                                        <div class="info">1 件商品
                                            <div class="price">
                                                <span class="price-sign text-primary">¥ </span><span class="price-num text-primary strong"> 139</span>
                                            </div>
                                        </div>
                                        <a href="javascript:void(0)" class="btn btn-primary">去购物车结算</a>
                                    </div>
                                </div>
                            <div class="arrow"><i></i></div>
                            <div class="fix_bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>


    <footer>
		<div class="auth">
			<!-- <span style="margin-right:8px;">
                <script src="http://kxlogo.knet.cn/seallogo.dll?sn=e15041744030058395oqbo000000&amp;size=4"></script>
            </span> -->
			<a href="https://ss.knet.cn/verifyseal.dll?sn=e15041744030058395oqbo000000&amp;ct=df&amp;a=1&amp;pa=0.8817607406526804" target="_blank"><img style="height:40px;" src="//img02.hua.com/pc/assets/img/cxwz.png"></a>
			<a href="https://search.szfw.org/cert/l/CX20130306002238002312" target="_blank"><img src="//img02.hua.com/pc/assets/img/cxwz.gif" height="40" width="112"></a>
			<a href="http://www.anquan.org/authenticate/cert/?site=www.hua.com&amp;at=realname" rel="nofollow" target="_blank"><img src="//img02.hua.com/pc/assets/img/smyz.gif" height="40" width="106"></a>
			<img src="//img02.hua.com/pc/assets/img/slogan.png" height="50" width="212">
			<a href="/member/payment/fillbyalipay?order_no=&amp;total_fee=" rel="nofollow" target="_blank"><img src="//img02.hua.com/pc/assets/img/zfb.gif" height="49" width="96"></a>
			<a href="/profile/news_20111110.htm" target="_blank"><img src="//img02.hua.com/pc/assets/img/100.jpg" height="49" width="150"></a>
			<a href="/profile/ICP.htm" rel="nofollow" target="_blank"><img src="//img02.hua.com/pc/assets/img/bico1.jpg" alt="ICP" height="46" width="35"></a>
			<!--             <a href="http://www.sznet110.gov.cn/webrecord/innernet/Welcome.jsp?bano=4403301920636" rel="nofollow" target="_blank"><img alt="网警" src="//img02.hua.com/pc/assets/img/bico2.jpg" height="46" width="35"></a> -->
			<a href="http://szcert.ebs.org.cn/fab6de6a-ff80-4e63-89e4-cd531170c256" rel="nofollow" target="_blank"><img alt="工商网监" src="//img02.hua.com/pc/assets/img/bico4.jpg" height="46" width="35"></a>
			<a href="http://www.sznet110.gov.cn/netalarm/index.jsp" rel="nofollow" target="_blank"><img src="//img02.hua.com/pc/assets/img/bico3.jpg" alt="网安" height="46" width="35"></a>
		</div>
		<p><a href="/profile/ChinaFlowerAssociation.htm" rel="nofollow" target="_blank" title="中国花卉协会会员">中国花卉协会会员</a> <a href="/profile/chinaECA.htm" rel="nofollow" target="_blank">中国电子商务协会会员</a> ICP经营许可证：<a href="/profile/ICP.htm" rel="nofollow" target="_blank">粤B2-20050744</a> <b>|</b> <a href="http://www.miibeian.gov.cn" rel="nofollow" target="_blank">粤ICP备09171662号</a> <span class="ico beian"></span>粤公网安备44030502000373号 Copyright © 2005-2018</p>
		<p>花食网 （中国鲜花网） <a href="/">www.huashi.live</a><span> 成都花食信息技术有限公司</span> 中国鲜花网领先品牌，鲜花速递专家！</p>
	</footer>
 </div>
</template>




 <script>

    import pictureView from '@/views/pictureView/index.vue'

    export default {
        name: 'hello',
        components: {
            pictureView
        }
    }

 </script>


<style >
    .topbar{
        position: fixed;
        height: 35px;
        min-width: 1315px;
        width: 100%;
        z-index: 3;
    }

    .header{
        position: relative;
        top: 35px;
        height: 120px;
        min-width: 1315px;
        width: 100%;
        z-index: 2;
    }

    .navigation{
        position: relative;
        top: 35px;
        height: 40px;
        min-width: 1315px;
        width: 100%;
        z-index: 2;
        min-width: 1200px;
        border-bottom: 3px solid #ff6a00;
    }

     .bannerbar {
        position: relative;
        top: 35px;
        height: 440px;
        min-width: 1315px;
        width: 100%;
        z-index: 1;
    }

     .timelimit{
        position: relative;
        top: 35px;
        height: 2797px;
        min-width: 1315px;
        width: 100%;
        z-index: 1;
    }


    .time-limit {
        height: 200px;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .time-limit .title {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        font-size: 24px;
        float: left;
        width: 232px;
        height: 200px;
        text-align: center;
        color: #fff;
        background-color: #aacc03;
    }

   

    .time-limit .product-list {
        float: left;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .time-limit .product-list li {
        position: relative;
        z-index: 9;
        float: left;
        overflow: hidden;
        width: 240px;
        height: 200px;
        margin-right: -1px;
        border: 1px solid #e5e5e5;
        background-color: #fff;
    }

    .time-limit .product-list li:hover {
        z-index: 99;
        border: 1px solid #ccc;
    }
    
   
    .el-carousel__container {
        position: relative;
        height: 439px;
    }

    .el-carousel__arrow--left {
        left: 636px;
    }

    .el-carousel__arrow--right {
        right: 636px;
    }

    .el-carousel__arrow {
        border-radius:0%;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .fill {
        width: 100%;
        height: 100%;
        background-position: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .fill a {
        display: block;
        width: 100%;
        height: 100%;
    }

    .el-carousel__item.is-animating {
        -webkit-transition: -webkit-transform .4s ease-in-out;
        transition: -webkit-transform .4s ease-in-out;
        transition: transform .4s ease-in-out;
        transition: transform .4s ease-in-out, -webkit-transform .4s ease-in-out;
        transition: transform .4s ease-in-out,-webkit-transform 2s ease-in-out;
    }

    .pictureList{
        position: fixed;
        top: 635px;
        right: 0;
        left: 0;
        margin-right: auto;
        margin-left: auto;
        width: 1315px;
        height: 100%;
        z-index: 1;
    }




    .navigation .categorys {
        width: 230px;
        height: 40px;
        position: relative;
        display: block;
        float: left;
        background-color: #ff6a00;
    }

    .categorys .categorys-title {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        font-size: 15px;
        font-weight: bold;
        line-height: 40px;
        display: block;
        margin: 0 0 -5px;
        padding: 0 15px;
        color: #fff;
    }

    .categorys .categorys-title a {
        color: #fff;
    }

    .categorys .categorys-title a:hover,
    .categorys .dropdown-cate h4 > a:hover, 
    .categorys .dropdown-cate .cate-cake > a:hover {
        text-decoration: none;
    }

    .categorys .dropdown-cate .cate-cake.stature.cate-ysh > a {
        margin: 0;
    }

    .categorys .dropdown-cate h4.stature > a, .categorys .dropdown-cate .cate-cake.stature > a {
        height: 30px;
        margin: 0 0 2px;
        padding: 8px 15px;
    }

    .panel-wrapper {
        margin-bottom: 15px;
    }

    .panel-wrapper:before, .panel-wrapper:after {
        content: " ";
        display: table;
    }

    .gray-panel.news1 {
        width: 240px;
        margin-right: 15px;
    }

    .gray-panel {
        float: left;
    }

    .gray-panel.news1:before, 
    .gray-panel.news1:after {
        content: " ";
        display: table;
    }

    .gray-panel .hd {
        height: 32px;
        padding: 7px 10px 7px 15px;
        background-color: #898989;
    }

    .gray-panel .hd a {
        float: right;
        margin-top: -3px;
    }

    .gray-panel .hd h4 {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        font-size: 14px;
        font-weight: bold;
        margin: 0;
        color: 14px;
        color: #fff;
    }

    .gray-panel.news {
        width: 460px;
    }

    .gray-panel.news1 .bd {
        padding-top: 15px;
    }

    
    .gray-panel.comments {
        width: 470px;
        margin-right: 15px;
    }

    .gray-panel.comments .bd {
        padding-top: 15px;
    }

    .gray-panel.comments .comment-item {
        margin-bottom: 0;
        padding: 10px 0;
        border-bottom: 1px solid #e5e5e5;
    }

    .gray-panel.comments .comment-item dt {
        font-size: 12px;
        font-weight: normal;
        float: left !important;
        width: 50px;
        text-align: center;
    }

    .gray-panel.comments .comment-item dd {
        font-size: 12px;
        margin-left: 75px;
    }

    .gray-panel.comments .comment-item dd .info {
        float: left;
        width: 270px;
    }

    .gray-panel.comments .comment-item dd .info .rating {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        font-weight: bold;
        margin-bottom: 6px;
    }

    .gray-panel.comments .comment-item dd .info .cnt {
        line-height: 16px;
        margin: 0;
    }

    .gray-panel.comments .comment-item dt img {
        display: block;
        margin: 0 auto 2px;
        width: 37px;
        height: 38px;
    }

    .img-thumbnail {
        padding: 4px;
        line-height: 1.42857143;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 4px;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        display: inline-block;
        max-width: 100%;
        height: auto;
    }

    .gray-panel.news .bd {
        padding-top: 15px;
    }

    .gray-panel .bd {
        height: 260px;
        padding: 20px 15px;
        background-color: #f2f2f2;
    }

    .gray-panel .bd:before, .gray-panel .bd:after {
        content: " ";
        display: table;
    }

    .gray-panel.news:before, .gray-panel.news:after {
        content: " ";
        display: table;
    }

    .gray-panel.news1 ul {
        float: left;
        width: 216px;
        margin: 0;
        padding: 0 0 0 6px;
    }

    .gray-panel.news1 ul li {
        font-size: 12px;
        line-height: 35px;
    }

    .gray-panel.news ul:first-child {
        margin-right: 15px;
        border-right: 1px solid #e5e5e5;
    }

    .gray-panel.news ul {
        float: left;
        width: 206px;
        margin: 0;
        padding: 0 0 0 10px;
    }

    .categorys .dropdown-cate .cate-cake > a {
        display: block;
        height: 40px;
        padding: 12px 15px;
    }

    .gifts_toys_plant a:hover, .gifts_toys_plant a:visited {
        text-decoration: none;
    }
    .gifts_toys_plant a {
        display: inline-block;
        color: #f60;
        padding: 12px 0 0 0;
    }

    .gifts_toys_plant span {
        padding: 12px 15px 0 0;
    }

    .gifts_toys_plant {
        height: 40px;
    }


     .cate-cake:hover  {
        box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.175);
        border-top: 1px solid #e9e9e9;
    }

    .cate-cake:hover .right-menu {
        display: block;
    }

   
  
    .categorys .dropdown-cate {
         height: 440px !important;
    }

    .navigation .categorys .dropdown-cate {
        position: absolute;
        z-index: 999;
        top: 40px;
        left: 0;
        width: 230px;
        height: 440px;
        padding: 10px 15px 0;
        padding: 8px 15px 0\0;
        border-bottom: 3px solid #ff6a00;
        background-color: #fff;
        height: auto;
        -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.175);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.175);
    }

    .categorys .dropdown-cate h4, 
    .categorys .dropdown-cate .cate-cake {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        font-size: 14px;
        font-weight: bold;
        margin: 0 0 6px;
        padding: 0;
        color: #ff6a00;
    }

    .categorys .dropdown-cate .cate-list {
        margin: 0 0 8px;
        padding: 0 0 8px;
        border-bottom: 1px solid #e9e9e9;
    }

    .cate-cake:hover .cate-list{
         border-bottom: 1px solid transparent;
    }

    .list-inline {
        padding-left: 0;
        list-style: none;
        margin-left: -5px;
    }

   

    .categorys .dropdown-cate .cate-list li {
        font-size: 12px;
        line-height: 22px;
        margin-right: 10px;
        padding: 0;
    }

      .categorys .dropdown-cate .cate-list li a {
        font-weight: normal;
    }

    .list-inline > li {
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;
    }

    .categorys .dropdown-cate h4 > a, 
    .categorys .dropdown-cate .cate-cake > a {
        border-top: 1px solid transparent;
        color: #ff6a00;
    }

   

    .categorys .dropdown-cate .cate-cake.stature.cate-ysh > a {
        margin: 0;
    }

    .pull-right {
        float: right !important;
    }

    .cate-ysh .right-menu {
        height: 210px;
        bottom: -3px;
        top: auto;
    }

      .cate-cake .right-menu {
        height: 210px;
        bottom: -3px;
        top: auto;
    }

    .cate-cake .gifts {  
        top: 100px;
        height: 40px;
    }


    .right-menu {
        display: none;
        font-size: 12px;
        font-weight: normal;
        position: absolute;
        top: 0px;
        float: left;
        width: 730px;
        height: 440px;
        margin-left: 233px;
        padding: 15px;
        border: none;
        background-color: #fff;
        border-radius: 0;
        -webkit-box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.175);
        box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.175);
    }

    .categorys .dropdown-cate .cate-cake.stature.cate-ysh .right-menu > b {
        height: 61px;
        bottom: 109px;
    }

     .categorys .dropdown-cate .cate-cake {
        margin: -9px -15px 0 -15px;
    }

   .categorys .dropdown-cate h4, .categorys .dropdown-cate .cate-cake {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        font-size: 14px;
        font-weight: bold;
        padding: 0;
        color: #ff6a00;
    }

    .categorys .dropdown-cate h4 .cate-list, 
    .categorys .dropdown-cate .cate-cake .cate-list {
        margin-left: 15px;
        margin-right: 15px;
    }

    .categorys .dropdown-cate h4.stature > a, 
    .categorys .dropdown-cate .cate-cake.stature > a {
        height: 30px;
        margin: 0 0 2px;
        padding: 8px 15px;
    }

  
    .right-menu b {
        position: absolute;
        bottom: 3px;
        left: -5px;
        width: 5px;
        height: 46px;
        background-color: #fff;
    }

 

    .right-menu h5 {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        font-size: 12px;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 12px;
        padding-left: 8px;
        color: #707070;
        border-left: 2px solid #707070;
    }

    .right-menu .link-img {
        margin-bottom: 20px;
    }

    .right-menu .link-img a {
        position: relative;
        z-index: 9;
        display: block;
        float: left;
        width: 98px;
        height: 86px;
        margin-right: -1px;
        text-align: center;
        margin-bottom: 10px;
        border: 1px solid #e5e5e5;
    }

    .right-menu a {
        line-height: 20px;
        display: inline-block;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .right-menu .link-img a:hover {
        z-index: 10;
        border: 1px solid #ccc;
    }

    .categorys .dropdown-cate .cate-cake .cate-list {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
    }

    .nav {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        font-size: 15px;
        margin: 0 0 0 230px;
        margin-bottom: 0;
        padding-left: 0;
        list-style: none;
    }

    .nav > li {
        float: left;
        position: relative;
        display: block;
    }

    .nav > li > a {
        color: #4d4d4d;
        font-weight: bold;
        padding: 9px 24px;
        position: relative;
        display: block;
        padding: 10px;
    }

    .nav > li > a:hover, 
    .nav > li > a:focus {
        color: #ff6a00;
        background-color: transparent !important;
    }

    .floor {
        margin-bottom: 40px;
    }

    .floor .hd {
        margin: 0 10px 15px;
        position: relative;
    }

    .floor .hd .more {
        font-size: 12px;
        left: 22px;
        float: right;
        margin-top: 6px;
    }

    .floor .hd h3 {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        font-size: 20px;
        margin: 0;
    }

    .floor .hd h3 span {
        font-size: 14px;
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        margin-left: 20px;
    }

    .f1 .bd .bd-l {
        background-color: #ffc0bb;
    }

    .f2 .bd .bd-l {
        background-color: #c2acd1;
    }

    .f3 .bd .bd-l {
        background-color: #d6d8ec;
    }

    .floor .bd .bd-l {
        position: relative;
        float: left;
        width: 243px;
        height: 639px;
    }

    .floor .bd .bd-l .banner-link {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        font-size: 18px;
        line-height: 48px;
        display: block;
        width: 194px;
        height: 52px;
        margin: 70px auto;
        text-align: center;
        color: #fff;
        border: 2px solid #fff;
    }

    .floor .bd .floor-products {
        float: right;
        width: 957px;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .floor .bd .floor-products li {
        position: relative;
        z-index: 9;
        float: left;
        overflow: hidden;
        width: 240px;
        height: 320px;
        margin-right: -1px;
        margin-bottom: -1px;
        padding-top: 10px;
        text-align: center;
        border: 1px solid #e5e5e5;
        background-color: #fff;
    }

    .floor .bd .floor-products li a {
        display: block;
        color: #737373;
    }

    .floor .bd .floor-products li a:hover {
        text-decoration: none;
        color: #ff6a00;
    }

    .floor .bd .floor-products li .img-box {
        display: block;
        overflow: hidden;
        width: 220px;
        height: 240px;
        margin: 0 auto 15px;
        background-color: #fff;
    }

    .floor .bd .floor-products li .product-title {
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .floor .bd .floor-products li a:hover .price {
        color: #ff6a00;
    }

    .floor .bd .floor-products li .price {
        font-size: 14px;
        font-weight: bold;
        color: #000;
    }

    .price-sign {
        font-family: arial;
        margin-right: -4px;
    }

    .price-num {
        font-family: arial,Verdana,Arial;
    }

    



   

   


   

    .leftbar{
        position: fixed;
        top: 0px;
        bottom: 0;
        right: 0;
        width: 268px;
        z-index: 2;
    }

    .header .logo {
        float: left;
        width: 500px;
        height: 64px;
        margin-top: 28px;
        background: url(../../assets/img/pc/logo/logo.png) 0 0 no-repeat;
    }

    .header .logo i {
        display: inline-block;
        float: left;
        overflow: hidden;
        width: 0;
        height: 36px;
        margin-top: 13px;
        margin-right: 12px;
        margin-left: 12px;
        vertical-align: middle;
        border-right: 1px solid #d9d9d9;
    }

    .header .logo h1 {
        position: relative;
        display: inline-block;
        float: left;
        margin-top: -20px;
    }

     .header .logo h1 a {
        display: block;
        overflow: hidden;
        width: 220px;
        height: 0;
        margin-top: 20px;
        padding-top: 64px;
        color: #fff;
    }
 
    .header .logo h2 {
        position: relative;
        display: inline-block;
        float: left;
        overflow: hidden;
        width: 116px;
        height: 36px;
        margin-top: 13px;
        padding-top: 36px;
        color: #fff;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-position: -294px 0px;
    }

    .search {
        float: left;
        width: 320px;
        margin-top: 40px;
    }

    .search .input-group .form-control:first-child {
        border-radius: 0;
    }

    .search .input-group .form-control {
        border-color: #ff6a00;
    }

    .input-group .form-control:first-child, 
    .input-group-addon:first-child, 
    .input-group-btn:first-child > .btn, 
    .input-group-btn:first-child > .btn-group > .btn, 
    .input-group-btn:first-child > .dropdown-toggle, 
    .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle), 
    .input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }

    .input-group-addon, 
    .input-group-btn, 
    .input-group .form-control {
        display: table-cell;
    }

    .input-group .form-control {
        position: relative;  
        z-index: 2;  
        float: left;  
        width: 100%; 
        margin-bottom: 0;  
    }

    .form-control {
        padding: 6px;
        border-radius: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #4d4d4d;
        background-color: #ffffff;
        background-image: none;
        border: 1px solid #d2d2d2;
        border-radius: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }

    .input-group-btn {
        position: relative;
        font-size: 0;
        white-space: nowrap;
    }

    .input-group-addon, 
    .input-group-btn {
        width: 1%;
        white-space: nowrap;
        vertical-align: middle;
    }

    .search .input-group .input-group-btn .btn {
        font-family: tahoma, arial, 'Hiragino Sans GB', '\5FAE\8F6F\96C5\9ED1', sans-serif;
        font-size: 16px;
        padding: 5px 24px;
        border-radius: 0;
    }

    .input-group-btn:last-child > .btn, 
    .input-group-btn:last-child > .btn-group {
        margin-left: -1px;
    }

    .input-group .form-control:last-child, 
    .input-group-addon:last-child, 
    .input-group-btn:last-child > .btn, 
    .input-group-btn:last-child > .btn-group > .btn, 
    .input-group-btn:last-child > .dropdown-toggle, 
    .input-group-btn:first-child > .btn:not(:first-child), 
    .input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
        border-bottom-left-radius: 0; 
        border-top-left-radius: 0; 
    }

    .input-group-btn > .btn {
        position: relative;
    }

    .search .help-block {
        font-size: 12px;
        color: #d9d9d9;
    }
   

   .help-block {
        display: block;
        margin-top: 5px;
        margin-bottom: 10px;
        color: #b3b3b3;
    }

    .header .service {
        float: right;
        margin-top: 40px;
        position: relative;
    }

    .header .service span {
        margin-right: 6px;
    }

    .header .service a {
        font-size: 12px;
        margin-left: 20px;
        padding-left: 20px;
        border-left: 1px solid #d9d9d9;
    }

  
   

    .topbar .site-nav {
        font-size: 12px;
        min-width: 1200px;
        height: 35px;
        border-bottom: 1px solid #e6e6e6;
        background-color: #f2f2f2;
    }

    .site-nav .container {
        width: 1200px;
        max-width: none !important;
        padding-right: 0;
        padding-left: 0;
        margin-right: auto;
        margin-left: auto;
    }
 
    .topbar .site-nav .container ul .menu {
        line-height: 34px;
        display: block;
        float: left;
    }

    .topbar .site-nav .container ul .menu > a {
        position: relative;
        display: block;
        height: 35px;
        padding: 0 8px;
    }

     

    .topbar .site-nav .container ul .menu > a:hover {
      text-decoration: none;
      color: #ff6a00;
    }

   .topbar .site-nav .container ul .dropdown {
       position: relative;
    }

    .topbar .site-nav .container ul .dropdown > a:hover {
        color: #ff6a00;
        border-color: #d9d9d9;
        border-bottom-color: #fff;
        background-color: #fff;
    }

    .topbar .site-nav .container ul .dropdown:hover .dropdown-menu{
        display:block;
    }

 
    .topbar .site-nav .container ul .dropdown > .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1000;
        display: none;
        float: left;
        min-width: 160px;
        padding: 10px;
        margin: 0;
        list-style: none;      
        font-size: 12px;  
        background-color: #ffffff;      
        border: 1px solid #d9d9d9;
        border-radius: 0;
        -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        background-clip: padding-box;
        -webkit-box-shadow: none;
    }
 

    .topbar .site-nav .container ul .dropdown .dropdown-weixin {
        line-height: 18px;
        min-width: 160px;
        padding-top: 20px;
        text-align: center;
    }

    .topbar .site-nav .container .site-nav-r {
        padding-right: 30px;
        float: right;
    }

    .topbar .site-nav .container .site-nav-r .login {
        padding-right: 6px;
    }

    .topbar .site-nav .container .site-nav-r .login > a {
        display: inline-block;
        padding-right: 2px;
    }

   .topbar .site-nav .container .site-nav-r .site-nav-pipe {
        float: left;
        overflow: hidden;
        width: 1px;
        height: 12px;
        margin: 11px 1px;
        padding: 0;
        background-color: #d9d9d9;
    }

    .topbar .site-nav .container .site-nav-r .dropdown-service {
        width: 78px !important;
        min-width: 78px !important;
        width: 76px !important;
        min-width: 76px !important;
        padding: 0 0 10px !important;
        margin-right: 2px !important;
        text-align: center ;
    }

    .topbar .site-nav .container .site-nav-r .dropdown-service a {
        line-height: 24px;
        display: block;
    }

    .topbar .site-nav .container .site-nav-r .dropdown-cart {
      min-width: 268px;
      padding: 15px;
    }

    .topbar .site-nav .container .text-primary {
        color: #ff6a00 !important;
    }

    .topbar .site-nav .container .dropdown-cart {
        min-width: 268px !important;
        padding: 15px;
    }

    .topbar .site-nav .container .dropdown-myhua, 
    .topbar .site-nav .container .dropdown-service, 
    .topbar .site-nav .container .dropdown-cart {
        right: 0 !important;
        left: auto !important;
    }

    .topbar .site-nav .container .dropdown-cart .empty {
        padding: 30px 0;
        text-align: center;
    }
 
    .leftbar .quick_links_panel {
      position: absolute;
      z-index: 2;
      top: 0;
      right: 0px;
      width: 36px;
      height: 100%;
      background-color: #595656;
    }

   
    .leftbar .quick_links_panel a {
        font-size: 12px;
        position: relative;
        z-index: 1;
        top: 0;
        left: 0;
        display: block;
        overflow: hidden;
        width: 36px;
        height: 36px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: #d8d8d8;
    }

    .leftbar .quick_links_panel .quick_links {
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -190px;
        z-index: 2;
        width: 34px;
    }


    .leftbar .quick_links_panel .quick_links li, 
    .leftbar .quick_links_panel .quick_toggle li {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        margin-top: 10px;
    }


    .leftbar .quick_links_panel .quick_links .ibar_login_box {
        position: absolute;
        z-index: 3;
        top: 0;
        left: -288px;
        display: none;
        width: 288px;
        height: 200px;
        border-radius: 3px 0 0 3px;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(0,0,0,.2);
    }


   .leftbar .quick_links_panel .quick_links .ibar_login_box a:hover {
        color: #ff6600;
        text-decoration: underline;
        background-color: transparent !important;
    }

 
    .leftbar .quick_links_panel .quick_links .ibar_login_box .login_btnbox {
        width: 100%;
        height: 40px;
        overflow: hidden;
        background-color: #f8f8f8;
        text-align: center;
    }

    .leftbar .quick_links_panel .quick_links .ibar_login_box a {
        display: inline-block;
        width: 94px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: #595656;
        text-decoration: none;
    }

    .leftbar .quick_links_panel .quick_links .ibar_login_box .avatar_box {
        overflow: hidden;
        height: 160px;
        font-size: 12px;
        text-align: center;
        line-height: 24px;
        padding-top: 20px;
    }

    .leftbar .quick_links_panel .quick_links .ibar_login_box .avatar_box p {
      font-size: 14px;
      color: #333;
      text-align: center;
    }

    .leftbar .quick_links_panel .quick_links .ibar_login_box .avatar_imgbox {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        display: block;
        margin: 0 auto 10px;
    }

    .leftbar .quick_links_panel .quick_links .ibar_login_box .avatar_box a {
        display: inline;
        width: auto;
        height: 24px;
        line-height: 24px;
        color: #ff6600;
    }


    .leftbar .quick_links_panel .quick_links a:hover, 
    .leftbar .quick_links_panel .quick_links a.current, 
    .leftbar .quick_links_panel .quick_toggle a:hover {
        background: #ff6600;
        text-decoration: none;
    }
 

    .leftbar .quick_links_panel .user_box:hover .ibar_login_box{
        display: block;
    }

    .leftbar .quick_links_panel .quick_links a.message_list {
        line-height: 16px;
        height: 133px;
        margin: 10px 0;
        color: #fff;
        background: url(../../assets/img/pc/mbar/ibar_sprites.png) no-repeat;
        background-position: -36px -216px;
    }

    .leftbar .quick_links_panel .quick_links a.message_list .span {
        width: 16px;
        display: block;
        height: 48px;
        margin: 38px 0 0 13px;
        cursor: pointer;
    }


    .leftbar .quick_links_panel .quick_links a.message_list .cart_num {
        line-height: 21px;
        display: block;
        width: 21px;
        height: 21px;
        margin: 9px 0 0 8px;
        cursor: pointer;
        text-align: center;
        color: #fff;
        border-radius: 50%;
        background: #ff6600;
    }

    .leftbar .quick_links_panel .quick_links a.message_list:hover {
        background: #ff6a00;
    }

    .leftbar .quick_links_panel .mp_tooltip {
        line-height: 36px;
        position: absolute;
        z-index: 2;
        top: 0;
        left: -150px;
        display: block;
        visibility: hidden;
        width: 120px;
        height: 36px;
        text-align: center;
        color: #595656;
        background-color: #fff;
        border-radius: 3px 0 0 3px;
        box-shadow: 0 0 2px rgba(0,0,0,.2);
        transition: left 200ms;
    }

    .leftbar .favorite_list:hover .mp_tooltip {
        visibility: visible;
        left: -120px;
    }

    .leftbar .histroy_list:hover .mp_tooltip {
        visibility: visible;
        left: -120px;
    }

    .leftbar .headset_list:hover .mp_tooltip {
        visibility: visible;
        left: -120px;
    }

    .leftbar .phone_lable:hover .mp_tooltip {
        visibility: visible;
        left: -120px;
    }

    .leftbar .return_list:hover .mp_tooltip {
        visibility: visible;
        left: -120px;
    }
    
    .leftbar .feedback_list:hover .mp_tooltip {
        visibility: visible;
        left: -120px;
    }

    .leftbar .quick_links_panel .quick_toggle {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 36px;
        z-index: 1;
    }


    .leftbar .quick_links_panel .mp_qrcode {
        position: absolute;
        z-index: 3;
        top: -162px;
        left: -288px;
        display: none;
        width: 288px;
        height: 200px;
        text-align: center;
        border-radius: 3px 0 0 3px;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(0,0,0,.2);
    }


    .leftbar .quick_links_panel .mp_qrcode p {
        font-weight: bold;
        display: inline-block;
        width: 110px;
        margin: 30px 10px 0;
        text-align: center;
        color: #595656;
    }

     .leftbar .quick_links_panel .qr_list:hover .mp_qrcode {
        display: block !important;
    }


    .leftbar .quick_links_pop {
        position: absolute;
        top: 0;
        right: 0;
        display: none;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(0,0,0,.2);
    }


     .leftbar .mui-mbar-tabs,
    .leftbar .quick_links_wrap {
      position: fixed;
      z-index: 9;
      right: 0;
      bottom: 0;
      width: 268px;
      height: 100%;
      height: 100%;
      -webkit-transition: width linear .4s;
      -moz-transition: width linear .4s;
      -ms-transition: width linear .4s;
      transition: width linear .4s;
    }


    .quick_cart_list, 
    .quick_history_list, 
    .quick_links_pop .links, 
    .quick_my_qlinks, 
    .quick_message_list, 
    .quick_leave_message, 
    .quick_mpbtn_histroy, 
    .quick_mpbtn_wdsc, 
    .quick_mpbtn_recharge {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 284px;
    height: 100%;
    background: #fff;
}

    









    .mui-mbar-tabs i, .ibar_closebtn {
        position: absolute;
        display: inline-block;
        top: 0;
        left: 0;
        width: 36px;
        height: 36px;
        cursor: pointer;
        vertical-align: top;
        background: url(../../assets/img/pc/mbar/ibar_sprites.png) no-repeat;
    }


    .ico {
        display: inline-block;
        vertical-align: middle;
        background-repeat: no-repeat;
    }

    .active a:focus .ico-member1, 
    .ico-about2, .ico-about1, 
    .ico-cart-white, 
    .ico-cart, 
    .ico-member6, 
    .ico-star, 
    .ico-about3, 
    .ico-back, 
    .ico-check, 
    .ico-member, 
    .ico-calendar,
    .ico-dropdown-arrow, 
    .ico-pop, 
    .ico-pic, 
    .ico-cart-m, 
    .ico-heart, 
    .ico-lock, 
    .ico-user, 
    .ico-rating, 
    .ico-notice, 
    .ico-plus, 
    #fullCarousel.carousel .carousel-indicators li, 
    #fullCarousel.carousel .carousel-indicators li.active, 
    #flowerCarousel.carousel .carousel-indicators li, 
    #flowerCarousel.carousel .carousel-indicators li.active, 
    .flowersong #fullCarousel.carousel .carousel-indicators li, 
    .flowersong #fullCarousel.carousel .carousel-indicators li.active, 
    .ico-d-arrow-top, 
    .ico-d-arrow-bottom, 
    .ico-empty, 
    .ico-pthy {
        background-image: url(../../assets/img/pc/common/common_z.png);
    }

    .owl-prev, 
    .ico-m-comment, 
    .ico-m-receive, 
    .ico-plus, 
    .ico-m-pay, 
    .ico-phone, 
    .ico-headset, 
    .ico-search, 
    .ico-weixin, 
    .ico-mobile, 
    .ico-member5, 
    .ico-member4, 
    .ico-member3, 
    .ico-weixin-pay, 
    .ico-member2, 
    .ico-member1, 
    .ico-help6, 
    .ico-help5, 
    .ico-help7, 
    .ico-dropdown-arrow, 
    .ico-help8, 
    .ico-help9, 
    .ico-cart, 
    .ico-lock, 
    .ico-star, 
    .ico-user, 
    .ico-help4, 
    .ico-help3, 
    .ico-help2, 
    .ico-help1, 
    .ico-about8, 
    .ico-about7, 
    .ico-about6, 
    .ico-about5, 
    .ico-about4, 
    .ico-about3, 
    .ico-about2, 
    .ico-about1, 
    a:hover .ico-member1, 
    a:focus .ico-member1, 
    .active a .ico-member1, 
    .active a:hover .ico-member1 {
        background-image: url(../../assets/img/pc/common/common_z.png);
    }

    .ico-clock, 
    .flowersong-list .owl-next, 
    .flowersong-list .owl-prev, 
    .ico-android, 
    .ico-apple, 
    .ico-weixin-app, 
    .ico-server-w8, 
    .ico-server-w7, 
    .ico-server-w6, 
    .ico-server-w5, 
    .ico-server-w4, 
    .ico-server-w3, 
    .ico-server-w2, 
    .ico-server-w1, 
    .ico-server-o5, 
    .ico-server-o4, 
    .ico-server-o3, 
    .ico-server-o2, 
    .ico-server-o1, 
    .ico-brand, 
    .ico-flower, 
    .ico-ysh, 
    .ico-Plant, 
    .ico-heart, 
    .ico-city, 
    .ico-num, 
    .ico-color, 
    .ico-price, 
    .ico-sort, 
    .ico-calendar, 
    .ico-pop, 
    .ico-texture, 
    .ico-effect, 
    .ico-sort-gift, 
    .header .logo h2, 
    .owl-next, 
    .ico-wxrwm, 
    .ico-xjt, 
    .ico-cart-white {
        background-image: url(../../assets/img/pc/common/common_z.png);
    }

    .ico-star, 
    .ico-weixin, 
    .ico-mobile, 
    .ico-cart, 
    .ico-cart-white, 
    .ico-about1, 
    .ico-about2, 
    .ico-about3, 
    .ico-about4, 
    .ico-about5, 
    .ico-about6, 
    .ico-about7, 
    .ico-about8, 
    .ico-help1, 
    .ico-help2, 
    .ico-help3, 
    .ico-help4, 
    .ico-help5, 
    .ico-help6, 
    .ico-help7, 
    .ico-help8, 
    .ico-help9, 
    .ico-member1, 
    .ico-member2, 
    .ico-member3, 
    .ico-member4, 
    .ico-member5, 
    .ico-member6, 
    .ico-weixin-pay, 
    .ico-wxrwm, 
    .ico-xjt {
        width: 24px;
        height: 24px;
    }

    .ico-plus, 
    .ico-heart, 
    .ico-user, 
    .ico-lock, 
    .ico-notice, 
    .ico-heart-d, 
    .ico-cart-d, 
    .ico-member, 
    .ico-pthy, 
    .ico-calendar, 
    .ico-dropdown-arrow, 
    .ico-pop, 
    .ico-pic, 
    .ico-cart-m {
    width: 16px;
    height: 16px;
}

    .time-limit .title .ico {
        display: block;
        margin: 40px auto 25px;
    }

     .ico-phone, .ico-headset, .ico-search {
        width: 30px;
        height: 30px;
    }

    .site-nav ul .menu > a .ico {
        margin-right: 2px;
    }

    .site-nav ul .ico-star, .site-nav ul .ico-cart {
        margin-top: -2px;
    }

    .ico-star {
        background-repeat: no-repeat;
        background-position: 0px -318px;
    }

    .ico-weixin {
        background-repeat: no-repeat;
        background-position: -374px -131px;
    }
 
    .ico-mobile {
        background-repeat: no-repeat;
        background-position: -294px -171px;
    }

    .ico-cart {
        background-repeat: no-repeat;
        background-position: -340px -284px;
    }

      .ico-phone {
        background-repeat: no-repeat;
        background-position: -380px -46px;
    }

    .ico-headset {
        background-repeat: no-repeat;
        background-position: -294px -131px;
    }

    .ico-clock {
        width: 64px;
        height: 64px;
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }

    .ico-plus {
        background-repeat: no-repeat;
        background-position: -390px -318px;
    }
 
    .r5 {
        width: 70px;
    }

    .ico-rating {
        display: inline-block;
        height: 16px;
        margin-top: -4px;
        margin-left: 4px;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-position: 0px -352px;
    }
 
    
    
   



    .quick_links i.ico_user, 
    .quick_links .current i.ico_user {
        background-position: 0 0;
    }

    .quick_links i.ico_order, 
    .quick_links .current i.ico_order {
        background-position: -36px -72px;
        position: relative;
    }

    .quick_links i.ico_cart, 
    .quick_links .current i.ico_cart {
        background-position: 0 -36px;
    }

    .quick_links i.ico_collect, 
    .quick_links .current i.ico_collect {
        background-position: 0 -72px;
    }

    .quick_links i.ico_histroy, 
    .quick_links .current i.ico_histroy {
        background-position: 0 -108px;
    }

    .quick_links i.ico_phone, 
    .quick_links .current i.ico_phone {
        background-position: 0 -144px;
    }
    .quick_links i.ico_headset, 
    .quick_links .current i.ico_headset {
        background-position: 0 -180px;
    }

    .quick_toggle i.ico_qrcode, 
    .quick_toggle .current i.ico_qrcode {
        background-position: 0 -216px;
    }

    .quick_toggle i.ico_surveys {
        background-position: 0 -362px;
    }

    .quick_toggle .ico_gotop, 
    .quick_toggle a:hover .ico_gotop, 
    .quick_links a.current .ico_gotop {
        background-position: 0 -252px;
    }

    .quick_links_panel .icon_arrow_right_white {
        position: absolute;
        top: 15px;
        right: -6px;
        left: auto;
        overflow: hidden;
        width: 6px;
        height: 9px;
        background-position: 0 -302px;
    }

    .quick_links_panel .mp_qrcode .icon_arrow_right_white {
        top: auto;
        bottom: 15px;
    }
    

    .glyphicon {
          position: relative;
          top: 1px;
          display: inline-block;
          font-family: 'Glyphicons Halflings';
          font-style: normal;
          font-weight: normal;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
      }


   .topbar .site-nav .container ul .menu > a .glyphicon {
        font-size: 10px;
        margin-left: 2px;
        color: #d9d9d9;
    }
    .topbar .site-nav .container ul .dropdown .glyphicon {
        color: #d9d9d9 !important;
    }

    .topbar .site-nav .container ul .menu > a:hover .glyphicon {
        color: #ff6a00 !important;
    }

    .floor .bd:before, .floor .bd:after {
        content: " ";
        display: table;
    }

    .floor .bd:after {
        clear: both;
    }
 
 


</style>

