<template>
    <!-- banner -->
    <div>
        <ClubSearch></ClubSearch>
    </div>
    
    <!-- 面包屑导航 -->
    <div class="container ms-3">
        <ul class="breadcrumb py-2 bg-opacity-100"  data-label="面包屑导航">
            <li><a class="mdaohang" href="#">首页</a></li>
            <li><a class="mdaohang" href="#">演示</a></li>
            <li class="active">社团社区</li>
        </ul>
    </div>

    <!-- 社团分类 -->
    <SubTitle v-bind:subtitle="shetuanfenlei"></SubTitle>
    <div class="container-fluid mt-5 col-md-10 offset-md-1 justify-content-center row">
        <li id="card1" class="card me-5 mb-5 p-0" style="width:200px; height: 230px;border-radius: 0;">
            <!-- 遮罩 -->
            <div class="position-absolute cover" style="width: 100%; height:166px; background-color: #a93931; z-index: 2; opacity: 50%;display:none; "></div>
            <div class="arrow" style="z-index: 3;position: absolute;text-align: center;width: 100%;top: 63px;display:none;">
                <img style="width:36px;height:36px;" src="@/assets/images/clubspace/u40.svg"/>
            </div>
            <!-- 图片部分 -->
            <div class="card-img w-100" style="height: 166px; z-index: 1;">
                <img src="@/assets/images/common/default_img.png" alt="社团头像">
            </div>
            <!-- 文字部分 -->
            <div class="card-body pt-2 px-0 pb-0">
              <h5 class="card-title text-center" style="font-size: 16px; font-weight: 900;">思想政治</h5>
              <div class="w-100 d-flex justify-content-end p-0">
                <a href="#" class="btn p-1 pure-text-btn">查看更多>></a></div>
            </div>
        </li>
        <li id="card1" class="card me-5 mb-5 p-0" style="width:200px; height: 230px;border-radius: 0;">
            <!-- 遮罩 -->
            <div class="position-absolute cover" style="width: 100%; height:166px; background-color: #a93931; z-index: 2; opacity: 50%;display:none; "></div>
            <div class="arrow" style="z-index: 3;position: absolute;text-align: center;width: 100%;top: 63px;display:none;">
                <img style="width:36px;height:36px;" src="@/assets/images/clubspace/u40.svg"/>
            </div>
            <!-- 图片部分 -->
            <div class="card-img w-100" style="height: 166px; z-index: 1;">
                <img src="@/assets/images/common/default_img.png" alt="社团头像">
            </div>
            <!-- 文字部分 -->
            <div class="card-body pt-2 px-0 pb-0">
              <h5 class="card-title text-center" style="font-size: 16px; font-weight: 900;">公益服务</h5>
              <div class="w-100 d-flex justify-content-end p-0">
                <a href="#" class="btn p-1 pure-text-btn">查看更多>></a></div>
            </div>
        </li>
        <li id="card1" class="card me-5 mb-5 p-0" style="width:200px; height: 230px;border-radius: 0;">
            <!-- 遮罩 -->
            <div class="position-absolute cover" style="width: 100%; height:166px; background-color: #a93931; z-index: 2; opacity: 50%;display:none; "></div>
            <div class="arrow" style="z-index: 3;position: absolute;text-align: center;width: 100%;top: 63px;display:none;">
                <img style="width:36px;height:36px;" src="@/assets/images/clubspace/u40.svg"/>
            </div>
            <!-- 图片部分 -->
            <div class="card-img w-100" style="height: 166px; z-index: 1;">
                <img src="@/assets/images/common/default_img.png" alt="社团头像">
            </div>
            <!-- 文字部分 -->
            <div class="card-body pt-2 px-0 pb-0">
              <h5 class="card-title text-center" style="font-size: 16px; font-weight: 900;">文化艺术</h5>
              <div class="w-100 d-flex justify-content-end p-0">
                <a href="#" class="btn p-1 pure-text-btn">查看更多>></a></div>
            </div>
        </li>
        <li id="card1" class="card me-5 mb-5 p-0" style="width:200px; height: 230px;border-radius: 0;">
            <!-- 遮罩 -->
            <div class="position-absolute cover" style="width: 100%; height:166px; background-color: #a93931; z-index: 2; opacity: 50%;display:none; "></div>
            <div class="arrow" style="z-index: 3;position: absolute;text-align: center;width: 100%;top: 63px;display:none;">
                <img style="width:36px;height:36px;" src="@/assets/images/clubspace/u40.svg"/>
            </div>
            <!-- 图片部分 -->
            <div class="card-img w-100" style="height: 166px; z-index: 1;">
                <img src="@/assets/images/common/default_img.png" alt="社团头像">
            </div>
            <!-- 文字部分 -->
            <div class="card-body pt-2 px-0 pb-0">
              <h5 class="card-title text-center" style="font-size: 16px; font-weight: 900;">学术科技</h5>
              <div class="w-100 d-flex justify-content-end p-0">
                <a href="#" class="btn p-1 pure-text-btn">查看更多>></a></div>
            </div>
        </li>
        <li id="card1" class="card me-5 mb-5 p-0" style="width:200px; height: 230px;border-radius: 0;">
            <!-- 遮罩 -->
            <div class="position-absolute cover" style="width: 100%; height:166px; background-color: #a93931; z-index: 2; opacity: 50%;display:none; "></div>
            <div class="arrow" style="z-index: 3;position: absolute;text-align: center;width: 100%;top: 63px;display:none;">
                <img style="width:36px;height:36px;" src="@/assets/images/clubspace/u40.svg"/>
            </div>
            <!-- 图片部分 -->
            <div class="card-img w-100" style="height: 166px; z-index: 1;">
                <img src="@/assets/images/common/default_img.png" alt="社团头像">
            </div>
            <!-- 文字部分 -->
            <div class="card-body pt-2 px-0 pb-0">
              <h5 class="card-title text-center" style="font-size: 16px; font-weight: 900;">文化体育</h5>
              <div class="w-100 d-flex justify-content-end p-0">
                <a href="#" class="btn p-1 pure-text-btn">查看更多>></a></div>
            </div>
        </li>
        <li id="card1" class="card me-5 mb-5 p-0" style="width:200px; height: 230px;border-radius: 0;">
            <!-- 遮罩 -->
            <div class="position-absolute cover" style="width: 100%; height:166px; background-color: #a93931; z-index: 2; opacity: 50%;display:none; "></div>
            <div class="arrow" style="z-index: 3;position: absolute;text-align: center;width: 100%;top: 63px;display:none;">
                <img style="width:36px;height:36px;" src="@/assets/images/clubspace/u40.svg"/>
            </div>
            <!-- 图片部分 -->
            <div class="card-img w-100" style="height: 166px; z-index: 1;">
                <img src="@/assets/images/common/default_img.png" alt="社团头像">
            </div>
            <!-- 文字部分 -->
            <div class="card-body pt-2 px-0 pb-0">
              <h5 class="card-title text-center" style="font-size: 16px; font-weight: 900;">实践能力</h5>
              <div class="w-100 d-flex justify-content-end p-0">
                <a href="#" class="btn p-1 pure-text-btn">查看更多>></a></div>
            </div>
        </li>
    </div>

    
    <!-- 中部分区 (组 合) -->
    <div class="container-fluid p-0 mb-5 position-relative" id="middle-banner" style="margin-top: 70px;">
        <h3 id="u77_text" class="text p-0 position-absolute">
            <p><span>不止于社团...</span></p>
        </h3>
        <span id="u78" class="text p-0 position-absolute">
            <router-link to="/habbitspace" class="p-0 btn pure-text-btn" id="u78_text">
                了解爱好社区 <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </router-link>
        </span>

        <!-- 轮播 -->
        <div id="demo" class="carousel slide position-absolute offset-md-7" data-bs-ride="carousel" style="top: 121px;">

            <!-- 指示符 -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            
            <!-- 轮播图片 -->
            <div class="carousel-inner d-flex" style="width: 540px; height: 303px;">
                <div class="carousel-item active">
                    <img src="@/assets/images/common/default_img-large.png" class="d-block" style="height:100%;width:100%;object-fit: cover;object-position: center;">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/images/common/default_img-large.png" class="d-block" style="height:100%;width:100%;object-fit: cover;object-position: center;">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/images/common/default_img-large.png" class="d-block" style="height:100%;width:100%;object-fit: cover;object-position: center;">
                </div>
            </div>
            
            <!-- 左右切换按钮 -->
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>

    </div>
        

    <!-- 热门内容 -->
    <SubTitle v-bind:subtitle="remenneirong"></SubTitle>
    <div class="row container-fluid d-flex justify-content-center my-5">
        <!-- 资讯栏 -->
        <div class="col-md-6 me-5" >
            <!-- News标题 -->
            <div class="small-title mb-3">
                <div class="d-inline-flex ps-1 float-start" style="align-items: flex-end;">
                    <span class="small-icon">
                        <img class="img" src="@/assets/images/shetuanshequ_index/u72.svg"/>
                    </span>
                    News
                </div>
                <div class="p-0">
                    <img class="img" style="width:100%" src="@/assets/images/shetuanshequ_index/u59.svg"/>
                </div>
            </div>

            <div id="news-column" class="list-group" style="border-radius: 0; border: 0;">
                <!-- 新闻最多展示前5项 -->
                <ul v-for="(post,index) in posts_json" class="m-0 p-0">
                    <!-- 列表项 -->
                    <a v-if="index<5" @click="jumpToPost(post.postId)" class="list-group-item list-group-item-action d-flex gap-3 py-3 overflow-hidden" aria-current="true">
                        <div class="img-box flex-shrink-0">
                            <img v-if="post.haveimage" :src="post.imageforurl">
                            <img v-else src="@/assets/images/common/default_img.png">
                        </div>
                        <div class="gap-2 w-100 position-relative">
                            <div class="d-flex w-100 justify-content-between">
                                <div class="text-start justify-content-start">
                                    <h6 class="mb-0" style="font-family:'微软雅黑', sans-serif; font-weight: 600; font-size:16px;">
                                        {{post.title}}
                                    </h6>
                                    <p class="textlines-overflow-2 mt-2 ms-1 mb-0" style="font-family:'微软雅黑', sans-serif;font-weight:400; font-size:13px;color:#999999; text-align:left;">
                                        {{post.context}}
                                    </p>
                                </div>
                                <small class="opacity-50 text-nowrap" style="font-size: 12px;">
                                    <!-- <i class="fa fa-clock-o" aria-hidden="true"></i> 12-13 16:00 -->
                                    <i class="fa fa-clock-o" aria-hidden="true"></i> {{post.date}}
                                </small>
                            </div>
                            <div class="d-flex w-100 position-absolute bottom-0 justify-content-between align-items-baseline">
                                <div class="d-inline-flex align-items-center">
                                    <div class="user-img-box flex-shrink-0 rounded" style="width:24px; height:24px; overflow:hidden" >
                                        <!-- {{post['haveclub profile']}} -->
                                        <img v-if="post['haveclub profile']" aria-label="社团头像" v-bind:src="post['club profileforurl']">
                                        <img v-else aria-label="社团头像" src="@/assets/images/common/default_user.png">
                                    </div>
                                    <span class="ms-2" style="font-family:'微软雅黑', sans-serif; font-weight:400; font-size:12px;
                                            color:#999999;">{{post['club name']}}
                                    </span>
                                </div>
                                <p class="m-0" style="font-family:'FontAwesome', '微软雅黑', sans-serif; font-weight:400; font-size:13px;
                                color:#999999;">
                                     {{post['thumbs-up num']}}&nbsp;  {{post['comments num']}}&nbsp;  --
                                </p>
                            </div>
                        </div>
                    </a>
                </ul>

            </div>


            <a href="#" class="d-flex btn pure-text-btn m-1 justify-content-center">
                <span style=" font-size: 14px;">查看更多 &gt; </span>
            </a>
        </div>

        <!-- 消息栏 -->
        <div class="col-md-4 px-4" style="margin-top: 30px;">
            <!-- 最新评论 -->
            <div class="m-0 p-0">
                <!-- 最新评论标题 -->
                <div class="position-relative m-0 w-100">
                    <div class="d-flex justify-content-between w-100 px-3 position-absolute align-items-center">
                        <span id="latest-review" class="d-inline-flex bg-white justify-content-center align-items-center">
                            最新评论
                        </span>
                        <a href="#" class="m-0 p-0 text-white text-decoration-none position-static" style="font-size: 12px;">
                            &gt;&gt;more
                        </a>
                    </div>
                    <!-- 背景 (矩形) -->
                    <div class="mybg-1 w-100"></div>
                </div>

                <!-- 评论列表 -->
                <div class="list-group-2" style="border-radius: 0; border: 0;">
                    <!-- 列表项 -->
                    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 my-3 py-3 overflow-hidden border-0" aria-current="true" 
                        style="height: 160px; background-color:rgba(242, 242, 242, 1);">
                        <div class="gap-2 w-100 position-relative" >
                            <div class="d-flex w-100 justify-content-between">
                                <div class="mx-2 text-start justify-content-start">
                                    <div class="d-inline-flex">
                                        <div class="sm-tag" style="width: 6px; height: 24px;visibility: inherit"></div>
                                        <h6 class="mb-0" style="font-family:'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;font-weight:700;color:#666666;
                                                font-size:18px;">
                                                &nbsp; 事件
                                        </h6>
                                    </div>
                                    <p class="textlines-overflow-2 mt-2 ps-3 mb-0" style="font-family:'微软雅黑', sans-serif; font-weight:400; font-size:14px;
                                        line-height:24px; color:#999999; ">非常不错的活动，很有意义！
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex w-100 px-3 position-absolute bottom-0 justify-content-between align-items-baseline">
                                <div class="d-inline-flex align-items-center">
                                    <div class="user-img-box flex-shrink-0" style="width:24px; height:24px; overflow:hidden" >
                                        <img src="@/assets/images/common/default_user.png">
                                    </div>
                                    <span class="ms-2" style="font-family:'微软雅黑', sans-serif; font-weight:400; font-size:13px;
                                            color:#999999;">用户名称
                                    </span>
                                </div>
                                <div class="opacity-50 text-nowrap" style="font-size: 13px;">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i> 12-13 16:00
                                </div>
                                <p class="m-0" style="font-weight:400; font-size:13px; color:#999999;">
                                    <i class="fa fa-tag text-black" aria-hidden="true"></i>
                                    xx协会
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 my-3 py-3 overflow-hidden border-0" aria-current="true" 
                        style="height: 160px; background-color:rgba(242, 242, 242, 1);">
                        <div class="gap-2 w-100 position-relative" >
                            <div class="d-flex w-100 justify-content-between">
                                <div class="mx-2 text-start justify-content-start">
                                    <div class="d-inline-flex">
                                        <div class="sm-tag" style="width: 6px; height: 24px;visibility: inherit"></div>
                                        <h6 class="mb-0" style="font-family:'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;font-weight:700;color:#666666;
                                                font-size:18px;">
                                                &nbsp; 事件
                                        </h6>
                                    </div>
                                    <p class="textlines-overflow-2 mt-2 ps-3 mb-0" style="font-family:'微软雅黑', sans-serif; font-weight:400; font-size:14px;
                                        line-height:24px; color:#999999; ">非常不错的活动，很有意义！
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex w-100 px-3 position-absolute bottom-0 justify-content-between align-items-baseline">
                                <div class="d-inline-flex align-items-center">
                                    <div class="user-img-box flex-shrink-0" style="width:24px; height:24px; overflow:hidden" >
                                        <img src="@/assets/images/common/default_user.png">
                                    </div>
                                    <span class="ms-2" style="font-family:'微软雅黑', sans-serif; font-weight:400; font-size:13px;
                                            color:#999999;">用户名称
                                    </span>
                                </div>
                                <div class="opacity-50 text-nowrap" style="font-size: 13px;">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i> 12-13 16:00
                                </div>
                                <p class="m-0" style="font-weight:400; font-size:13px; color:#999999;">
                                    <i class="fa fa-tag text-black" aria-hidden="true"></i>
                                    xx协会
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 my-3 py-3 overflow-hidden border-0" aria-current="true" 
                        style="height: 160px; background-color:rgba(242, 242, 242, 1);">
                        <div class="gap-2 w-100 position-relative" >
                            <div class="d-flex w-100 justify-content-between">
                                <div class="mx-2 text-start justify-content-start">
                                    <div class="d-inline-flex">
                                        <div class="sm-tag" style="width: 6px; height: 24px;visibility: inherit"></div>
                                        <h6 class="mb-0" style="font-family:'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;font-weight:700;color:#666666;
                                                font-size:18px;">
                                                &nbsp; 事件
                                        </h6>
                                    </div>
                                    <p class="textlines-overflow-2 mt-2 ps-3 mb-0" style="font-family:'微软雅黑', sans-serif; font-weight:400; font-size:14px;
                                        line-height:24px; color:#999999; ">非常不错的活动，很有意义！
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex w-100 px-3 position-absolute bottom-0 justify-content-between align-items-baseline">
                                <div class="d-inline-flex align-items-center">
                                    <div class="user-img-box flex-shrink-0" style="width:24px; height:24px; overflow:hidden" >
                                        <img src="@/assets/images/common/default_user.png">
                                    </div>
                                    <span class="ms-2" style="font-family:'微软雅黑', sans-serif; font-weight:400; font-size:13px;
                                            color:#999999;">用户名称
                                    </span>
                                </div>
                                <div class="opacity-50 text-nowrap" style="font-size: 13px;">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i> 12-13 16:00
                                </div>
                                <p class="m-0" style="font-weight:400; font-size:13px; color:#999999;">
                                    <i class="fa fa-tag text-black" aria-hidden="true"></i>
                                    xx协会
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <!-- 消息通知 -->
            <div id="notice">
                <!-- 消息通知标题 -->
                <div class="position-relative m-0 w-100">
                    <div class="d-flex justify-content-between w-100 px-3 position-absolute align-items-center">
                        <span id="latest-review" class="d-inline-flex bg-white justify-content-center align-items-center">
                            消息通知
                        </span>
                        <a href="#" class="m-0 p-0 text-white text-decoration-none position-static" style="font-size: 12px;">
                            &gt;&gt;more
                        </a>
                    </div>
                    <!-- 背景 (矩形) -->
                    <div class="mybg-1 w-100"></div>
                </div>

                <!-- 通知列表 -->
                <!-- 登录状态 -->
                <div v-if="IsLogin" class="list-group" style="border-radius: 0; border: 0; ">
                    <!-- 列表项 -->
                    <a @click="jumpToPost(post_notice.postId)" class="list-group-item list-group-item-action d-flex gap-3 py-3 overflow-hidden" aria-current="true">
                        <div class="gap-2 w-100 position-relative">
                            <div class="d-flex w-100 justify-content-between">
                                <div>
                                    <h6 class="mb-0" style="font-family:'微软雅黑', sans-serif; font-weight: 600; font-size:16px;">
                                        {{post_notice.title}}
                                    </h6>
                                    <p class="textlines-overflow-2 mt-2 ms-1 mb-0" style="font-family:'微软雅黑', sans-serif; font-weight:400; font-size:13px;
                                        color:#999999; text-align:left;">
                                        {{post_notice.context}}
                                    </p>
                                </div>
                                <small class="opacity-50 text-nowrap" style="font-size: 12px;">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i> {{post_notice.date}}
                                </small>
                            </div>
                            <div class="d-flex w-100 position-absolute bottom-0 justify-content-between align-items-baseline">
                                <div class="d-inline-flex align-items-center">
                                    <div class="user-img-box flex-shrink-0" style="width:24px; height:24px; overflow:hidden" >
                                        <img :src="post_notice['club profile']">
                                    </div>
                                    <span class="ms-2" style="font-family:'微软雅黑', sans-serif; font-weight:400; font-size:12px;
                                            color:#999999;">{{post_notice['club name']}}
                                    </span>
                                </div>
                                <p class="m-0" style="font-family:'FontAwesome', '微软雅黑', sans-serif; font-weight:400; font-size:13px;
                                color:#999999;">
                                     {{post_notice['thumbs-up num']}}&nbsp;  {{post_notice['comments num']}}&nbsp;  --
                                </p>
                            </div>
                        </div>
                    </a>

                </div>

                <!-- 未登陆状态 -->
                <div v-else class="p-5 text-white" style=" background-color: #e5e5e5; border-radius:10px;border-top-right-radius:0px; border-top-left-radius:0px;"> 
                    <a href="#" class="text-opacity-50 text-decoration-none" style="color:#8a8a8a">
                        <p style="font-size: large;">您未登陆！请先登录。</p>
                    </a>
                </div>
            </div>
            
        </div>
    </div>

    <!-- 更多发现 -->
    <SubTitle v-bind:subtitle="gengduofaxian"></SubTitle>

</template>

<script>
import SubTitle from '../common/SubTitle.vue';
import ClubSearch from './ClubSearch.vue';
    export default{
    name:"ClubIndex",
    components:{
        SubTitle, ClubSearch
    },
    data () {
        return {
            posts: null,
            posts_json: [] ,//json对象
            IsLogin: false,
            gengduofaxian:"更多发现",
            remenneirong:"热门内容",
            shetuanfenlei:"社团分类",
            post_notice:{
                clubId:0,
                "club name":"xx协会",
                "club profile":require("@/assets/images/common/default_user.png"),
                "comments num":0,
                context:"您关注的协会没有最新信息",
                date:"12-30 00:00",
                image:"",
                postId:0,
                "thumbs-up num":0,
                title:"[--]您关注的协会没有最新信息"
            }
        }
    },
    created(){
        var UserId=this.$store.state.UserId
        if(String(UserId)){
            this.IsLogin=true
        }
    },
    methods :{
        jumpToPost(postId){
            this.$router.push({path:'/postdetails',query:{PostId:postId}})
        },
        checkImgUrl(str){
            // str="http://localhost:8080/file/3232.jpg"
            var r = /^http/g; // 检查是否是域名
            var a = r.test(str) // true or false
            return a
        },
        check_img_fields : function(field){
            // 检查是否有图片，没有则设havefield为false，field为 'img' 或 'club profile' 等键值
            let _this = this
            this.posts_json.forEach(function(post){
                // console.log(_this.checkImgUrl(post[field]))
                if (post[field]==undefined || post[field]=='' || !_this.checkImgUrl(post[field])){
                    post['have'+field]=false;
                }
                else {
                    post['have'+field]=true;
                    // post[field+'forurl']="data:image/png;base64,"+post[field];//html标签的src中的url
                    post[field+'forurl']=post[field];//html标签的src中的url
                }
            })
        },
        convertIdeogramToNormalCharacter(val) {
            const arrEntities = {'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
            return val.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
        },
        // 获取富文本的纯文字内容
        getPlainText (richCont) {
            const str = richCont;
            let value = richCont;
            if(richCont){
                // 方法一： 
                value= value.replace(/\s*/g, "");  //去掉空格
                value= value.replace(/<[^>]+>/g, ""); //去掉所有的html标记
                value = value.replace(/↵/g, "");     //去掉所有的↵符号
                value = value.replace(/[\r\n]/g, "") //去掉回车换行
                value = value.replace(/&nbsp;/g, "") //去掉空格
                value = this.convertIdeogramToNormalCharacter(value);
                return value;
            }
        }
    },
    mounted () {
        // 动画
        $(".card-img").mouseenter(function(){
            var cover=$(this).siblings(".cover")
            cover.slideDown()
            var arrow=$(this).siblings(".arrow")
            arrow.delay("fast").fadeIn()
        });
        $(".card").mouseleave(function(){
            var arrow=$(this).children(".arrow")
            arrow.fadeOut("fast")
            var cover=$(this).children(".cover")
            cover.delay("fast").slideUp()
        });

        let that = this;
        // console.log(that.$store.state.UserId)
        var UserId=that.$store.state.UserId
        this.$axios
        .get('post/view_list')
        .then( response =>{
            this.posts = JSON.stringify(response.data);
            // console.log(this.posts);
            // this.posts_json = this.posts;

            let obj = JSON.parse(this.posts);
            // const userinfo=[];
            for (let i in obj ){
                this.posts_json.push(obj [i])
            }
            // console.log(JSON.stringify(this.posts_json));
            // console.log(this.posts_json[0]['image']);

            // 验证是否有图片域
            var fields = ['image', 'club profile'];
            for (var i=0,len=fields.length; i<len; i++)
            { 
                
                var field=fields[i];
                that.check_img_fields(field);
                
            }
            // 解析html文本
            this.posts_json.forEach(function(post){
                if (post.context!=undefined){
                    post.context=that.getPlainText(post.context)
                }
            })
            // 转化日期
            this.posts_json.forEach(function(post){
                if (post.date!=undefined){
                    var ct = new Date(post.date);
                    post.date=ct.Format('yyyy-MM-dd hh:mm')
                }
            })
        })
        .catch(function (error) { // 请求失败处理
            console.log(error);
        });

        that = this
        // 消息通知栏
        this.$axios
        .get('post/view_user_subscribed',{params:{UserId:UserId}})
        .then(resp =>{
            console.log(resp.data.club0)
            if(resp.data.club0!=undefined){
                this.post_notice = resp.data.club0;
                // console.log(this.post_notice)
                // 验证是否有图片域
                var a = that.checkImgUrl(this.post_notice['club profile'])
                if(!a){
                    this.post_notice['club profile']=require("@/assets/images/common/default_user.png")
                }
                // 解析html文本
                if (this.post_notice.context!=undefined){
                    this.post_notice.context=that.getPlainText(this.post_notice.context)
                }
                // 转化日期
                if (this.post_notice.date!=undefined){
                    var ct = new Date(this.post_notice.date);
                    this.post_notice.date=ct.Format('yyyy-MM-dd hh:mm')
                }
            }
            
        })
        .catch(function (error) { // 请求失败处理
            console.log(error);
        });
    }
    }

</script>

<style scoped>

.breadcrumb > li + li:before {
    color: #CCCCCC;
    content: "/ ";
    padding: 0 5px;
}
.breadcrumb{
    color: rgb(158, 158, 158);
    font-size: 14px;
}

.mdaohang{
    color: #4e4e4e;
    text-decoration: none;
}
.mdaohang:hover {
    color: #000000;
}


.pure-text-btn {
    font-size: 11px; color: rgb(158, 158, 158);
}

.pure-text-btn:hover {
    color: #4e4e4e;;
}

.img-default {
    background-color:rgba(228, 228, 228, 1);
    font-family:'FontAwesome', sans-serif;
    font-size:100px;
    color:#FFFFFF;
    text-align: center;
}
.card img {
    /* max-width:153px; */
    object-fit: cover; /* background-size */
    object-position: center; /* 类似background-position */
    /* 图片必须width和height为100% */
    width:100%;
    height: 100%;
    /* _width:expression( this.width > 153 ? "153px" : this.width); */
}
#middle-banner{
    height: 446px;
    background-image: url('@/assets/images/shetuanshequ_index/中部背景.png');
    background-position: center center; 
    background-repeat: no-repeat;
    background-size: cover; 
}

#u77_text {
    border-width:0px;
    /* position:absolute; */
    left: 315px;
    top:193px;
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
    font-size: 32px;
    font-weight:700;
    font-style:normal;
    color:#FFFEF1;
  }
#u78 {
    position:absolute; 
    left:316px;
    top: 260px;
}
#u78_text {
    border-width:0px;
    width:126px;
    height:21px;
    font-family:'Arial Normal', 'Arial', sans-serif;
    font-weight:400;
    font-style:normal;
    font-size:18px;
    color:#E4E4E4;
  }

#u78_text:hover {
    text-decoration: underline;
    cursor: pointer;
  }

.small-title {
    font-family:'Microsoft JhengHei UI', sans-serif;
  font-weight:400;
  font-style:normal;
  font-size:16px;
  color:var(--themecolor);
}

.small-icon::after {
    content: "   ";
    white-space: pre;
}

.list-group a {
    border-width: 0;
}

.list-group a:hover {
    background-color: white;
    border-width:2px;
    border-top: 0;
    border-left:0 ;
    border-right: 0;
    border-color: var(--themecolor);
    cursor: pointer;
}

.list-group-item {
    height: 140px;
    overflow:hidden
}
.img-box {
    width:153px; height:108px;overflow:hidden;
}
.img-box>img {
    /* max-width:153px; */
    object-fit: cover; /* background-size */
    object-position: center; /* 类似background-position */
    /* 图片必须width和height为100% */
    width:100%;
    height: 100%;
    /* _width:expression( this.width > 153 ? "153px" : this.width); */
}
.user-img-box>img {
    /* max-width:24px; */
    object-fit: cover; /* background-size */
    object-position: center; /* 类似background-position */
    /* 图片必须width和height为100% */
    width:100%;
    height: 100%;
    /* _width:expression( this.width > 24 ? "24px" : this.width); */
}



.mybg-1 {
    z-index: -1;
    height:40px;
    background-color:rgba(184, 45, 41, 1);
  }

#latest-review {
    width:85px;
    height:40px;border-radius:10px;
    border-bottom-right-radius:0px;
    border-bottom-left-radius:0px;
    font-family:'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
    font-weight:700;
    font-style:normal;
    font-size:13px;
    text-align: center;
}

.sm-tag {
    width:6px;
    height:24px;
    background-color:rgba(46, 130, 230, 1);
}

.list-group-2 a:hover {
    -moz-box-shadow:3px 3px 5px rgba(0, 0, 0, 0.349019607843137);
    -webkit-box-shadow:3px 3px 5px rgba(0, 0, 0, 0.349019607843137);
    box-shadow:3px 3px 5px rgba(0, 0, 0, 0.349019607843137);
}


</style>