"use strict";(self["webpackChunkclubflow"]=self["webpackChunkclubflow"]||[]).push([[339],{4927:function(t,s,e){e.r(s),e.d(s,{default:function(){return $}});var a=e(3396),l=e(7139),i=e(100);const n=(0,a._)("div",{class:"container-fluid position-relative",style:{"background-color":"rgba(102, 102, 102, 1)",height:"300px"}},null,-1),o={class:"mt-3 d-flex px-3 py-3 mx-4 align-items-center justify-content-between",style:{"border-bottom":"rgb(233, 233, 233) 1px solid"}},r={class:"mx-5 d-inline-flex align-items-center"},c=(0,a._)("div",{class:"me-4"},[(0,a._)("img",{class:"rounded-circle",src:i,alt:"用户头像",style:{width:"79px",height:"79px"}})],-1),f={class:""},d={class:"mb-0",style:{"font-size":"18px"}},u={style:{"font-family":"'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif","font-weight":"700",color:"#666666"}},m={class:"mb-0",style:{"font-size":"14px"}},p={style:{"font-family":"'微软雅黑', sans-serif","font-weight":"400",color:"#999999"}},h={class:"d-flex",style:{"font-size":"18px",color:"#A4A4A4"}},b={class:"text-center",style:{width:"140px","border-right":"1px rgb(228, 228, 228) solid"}},g=(0,a._)("p",{class:"mb-1",style:{"font-size":"14px"}},[(0,a._)("span",{style:{"font-family":"'微软雅黑', sans-serif","font-weight":"400",color:"#999999"}},"粉丝")],-1),y={class:"mb-0",style:{"font-size":"20px"}},x={style:{"font-family":"'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif","font-weight":"700",color:"#666666"}},v={class:"text-center",style:{width:"140px","border-right":"1px rgb(228, 228, 228) solid"}},w=(0,a._)("p",{class:"mb-1",style:{"font-size":"14px"}},[(0,a._)("span",{style:{"font-family":"'微软雅黑', sans-serif","font-weight":"400",color:"#999999"}},"文章")],-1),_={class:"mb-0",style:{"font-size":"20px"}},I={style:{"font-family":"'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif","font-weight":"700",color:"#666666"}},C={class:"row container-fluid d-flex justify-content-center my-5"},z={class:"col-md-6 me-5"},U={class:"col-md-3 ms-5 px-4"},k={class:"my-5 w-100"};function N(t,s,e,i,N,j){const P=(0,a.up)("HistoryArticles"),D=(0,a.up)("ClubInfo"),T=(0,a.up)("SubTitle");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("div",o,[(0,a._)("div",r,[c,(0,a._)("div",f,[(0,a._)("p",d,[(0,a._)("span",u,(0,l.zw)(N.ClubInfo.Name),1)]),(0,a._)("p",m,[(0,a._)("span",p,(0,l.zw)(N.ClubInfo.Inform),1)])])]),(0,a._)("div",h,[(0,a._)("div",b,[g,(0,a._)("p",y,[(0,a._)("span",x,(0,l.zw)(N.ClubInfo.FansNumber),1)])]),(0,a._)("div",v,[w,(0,a._)("p",_,[(0,a._)("span",I,(0,l.zw)(N.ClubInfo.PubNum),1)])])])]),(0,a._)("div",C,[(0,a._)("div",z,[(0,a.Wm)(P,{ClubId:N.ClubId},null,8,["ClubId"])]),(0,a._)("div",U,[(0,a.Wm)(D,{ClubId:N.ClubId},null,8,["ClubId"])])]),(0,a._)("div",k,[(0,a.Wm)(T,{subtitle:N.cainixihuan},null,8,["subtitle"])])],64)}var j=e(52),P=e(4220),D=e(5036),T={name:"ClubHome",components:{ClubInfo:j.Z,SubTitle:P.Z,HistoryArticles:D.Z},data(){return{cainixihuan:"猜你喜欢",ClubId:0,UserId:0,IsLogin:!1,ClubInfo:{CreateTime:"2011-03-30",Name:"xx协会",Category:"文化艺术类",FansNumber:0,Profile:e(100),PubNum:0,Subscribe:0,CommentNum:0,Inform:"",Announcement:"介绍协会。协会简介。"}}},methods:{checkImgUrl(t){var s=/^http/g,e=s.test(t);return e}},created(){this.ClubId=this.$route.query.ClubId,this.UserId=this.$store.state.UserId,String(this.UserId)?this.IsLogin=!0:this.UserId=0},mounted(){var t=this.UserId;let s=this;this.$axios.get("/club/view",{params:{ClubId:this.ClubId,UserId:t}}).then((t=>{console.log(t);var e=new Date(t.data["created time"]);if(this.ClubInfo.CreateTime=e.Format("yyyy-MM-dd"),this.ClubInfo.Name=t.data.name,this.ClubInfo.FansNumber=t.data["fans number"],t.data.profile){var a=s.checkImgUrl(t.data.profile);a&&(this.ClubInfo.Profile=t.data.profile)}this.ClubInfo.PubNum=t.data["publications number"],this.ClubInfo.Subscribe=t.data.subscribe,this.ClubInfo.CommentNum=t.data["comments number"],this.ClubInfo.Inform=t.data.inform,t.data.announcement&&(this.ClubInfo.Announcement=t.data.announcement)})).catch((t=>{console.log(t)}))}},A=e(89);const F=(0,A.Z)(T,[["render",N]]);var $=F},5036:function(t,s,e){e.d(s,{Z:function(){return D}});var a=e(3396),l=e(7139),i=e(2207),n=e(7940);const o=t=>((0,a.dD)("data-v-4f34acb4"),t=t(),(0,a.Cn)(),t),r=o((()=>(0,a._)("div",{class:""},[(0,a._)("span",{class:"ms-2 me-2",style:{"font-family":"'FontAwesome', sans-serif","font-size":"22px"}},""),(0,a._)("span",{style:{"font-family":"'Microsoft JhengHei UI', sans-serif","font-size":"16px",color:"#B82D29"}},"历史文章"),(0,a._)("div",{class:"mt-1",style:{"background-color":"rgb(228, 228, 228)",height:"8px"}})],-1))),c={class:"list-group m-0 p-0"},f=["onClick"],d={class:"img-box flex-shrink-0"},u=["src"],m={key:1,src:i},p={class:"gap-2 w-100 position-relative"},h={class:"d-flex w-100 justify-content-between"},b={class:"mb-0",style:{"font-family":"'微软雅黑', sans-serif","font-weight":"600","font-size":"16px"}},g={class:"textlines-overflow-2 mt-2 ms-1 mb-0",style:{"font-family":"'微软雅黑', sans-serif","font-weight":"400","font-size":"13px",color:"#999999","text-align":"left"}},y={class:"opacity-50 text-nowrap",style:{"font-size":"12px"}},x=o((()=>(0,a._)("i",{class:"fa fa-clock-o","aria-hidden":"true"},null,-1))),v={class:"d-flex w-100 position-absolute bottom-0 justify-content-between align-items-baseline"},w={class:"d-inline-flex align-items-center"},_={class:"user-img-box flex-shrink-0",style:{width:"24px",height:"24px",overflow:"hidden"}},I=["src"],C={key:1,src:n},z={class:"ms-2",style:{"font-family":"'微软雅黑', sans-serif","font-weight":"400","font-size":"12px",color:"#999999"}},U={class:"m-0",style:{"font-family":"'FontAwesome', '微软雅黑', sans-serif","font-weight":"400","font-size":"13px",color:"#999999"}};function k(t,s,e,i,n,o){return(0,a.wg)(),(0,a.iD)("div",null,[r,(0,a._)("ul",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.posts_json,(t=>((0,a.wg)(),(0,a.iD)("a",{onClick:s=>o.jumpToPost(t.postId),class:"list-group-item list-group-item-action d-flex gap-3 py-3 overflow-hidden","aria-current":"true",style:{"border-radius":"0"}},[(0,a._)("div",d,[t.haveimage?((0,a.wg)(),(0,a.iD)("img",{key:0,src:t.image},null,8,u)):((0,a.wg)(),(0,a.iD)("img",m))]),(0,a._)("div",p,[(0,a._)("div",h,[(0,a._)("div",null,[(0,a._)("h6",b,(0,l.zw)(t.title),1),(0,a._)("p",g,(0,l.zw)(t.context),1)]),(0,a._)("small",y,[x,(0,a.Uk)(" "+(0,l.zw)(t.date),1)])]),(0,a._)("div",v,[(0,a._)("div",w,[(0,a._)("div",_,[t["haveclub profile"]?((0,a.wg)(),(0,a.iD)("img",{key:0,src:t["club profile"]},null,8,I)):((0,a.wg)(),(0,a.iD)("img",C))]),(0,a._)("span",z,(0,l.zw)(t["club name"]),1)]),(0,a._)("p",U,"  "+(0,l.zw)(t["thumbs-up num"])+"   "+(0,l.zw)(t["comments num"])+"   -- ",1)])])],8,f)))),256))])])}e(7658);var N={name:"HistoryArticles",props:["ClubId"],data(){return{Club:0,UserId:0,posts:null,posts_json:[]}},methods:{jumpToPost(t){this.$router.push({path:"/postdetails",query:{PostId:t}})},checkImgUrl(t){var s=/^http/g,e=s.test(t);return e},check_img_fields:function(t){let s=this;this.posts_json.forEach((function(e){void 0!=e[t]&&""!=e[t]&&s.checkImgUrl(e[t])?(e["have"+t]=!0,e[t+"forurl"]=e[t]):e["have"+t]=!1}))},convertIdeogramToNormalCharacter(t){const s={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'};return t.replace(/&(lt|gt|nbsp|amp|quot);/gi,(function(t,e){return s[e]}))},getPlainText(t){let s=t;if(t)return s=s.replace(/\s*/g,""),s=s.replace(/<[^>]+>/g,""),s=s.replace(/↵/g,""),s=s.replace(/[\r\n]/g,""),s=s.replace(/&nbsp;/g,""),s=this.convertIdeogramToNormalCharacter(s),s},getPosts(){let t=this;this.$axios.get("post/view_by_club",{params:{ClubId:this.Club,UserId:this.UserId}}).then((s=>{this.posts=s.data;let e=this.posts;for(let t in e)this.posts_json.push(e[t]);for(var a=["image","club profile"],l=0,i=a.length;l<i;l++){var n=a[l];t.check_img_fields(n)}this.posts_json.forEach((function(s){void 0!=s.context&&(s.context=t.getPlainText(s.context))})),this.posts_json.forEach((function(t){if(void 0!=t.date){var s=new Date(t.date);t.date=s.Format("yyyy-MM-dd hh:mm")}}))})).catch((function(t){console.log(t)}))}},created(){this.UserId=this.$store.state.UserId,String(this.UserId)||(this.UserId=0)},watch:{ClubId:{immediate:!0,deep:!0,handler(t,s){this.Club=t,void 0!=this.Club&&this.getPosts()}}}},j=e(89);const P=(0,j.Z)(N,[["render",k],["__scopeId","data-v-4f34acb4"]]);var D=P},4220:function(t,s,e){e.d(s,{Z:function(){return g}});var a=e(3396),l=e(7139),i=e.p+"img/u95.6cc06372.svg";const n=t=>((0,a.dD)("data-v-714c4350"),t=t(),(0,a.Cn)(),t),o={class:"subtitle container d-flex flex-column justify-content-center",style:{"margin-top":"100px","margin-bottom":"70px"}},r={class:"mt-0 d-flex justify-content-center d-inline-flex text-center align-items-center"},c=n((()=>(0,a._)("div",{class:"myline me-3 px-0"},[(0,a._)("img",{class:"img",src:i})],-1))),f={class:"subtitle text text-center"},d=n((()=>(0,a._)("div",{class:"myline ms-3 px-0"},[(0,a._)("img",{class:"img",src:i})],-1))),u=n((()=>(0,a._)("div",{class:"d-flex mt-1 justify-content-center text-center"},[(0,a._)("div",{id:"u107_div",class:"myunderline"})],-1)));function m(t,s,e,i,n,m){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",r,[c,(0,a._)("div",f,[(0,a._)("span",null,(0,l.zw)(e.subtitle),1)]),d]),u])}var p={name:"SubTitle",components:{},props:["subtitle"]},h=e(89);const b=(0,h.Z)(p,[["render",m],["__scopeId","data-v-714c4350"]]);var g=b},52:function(t,s,e){e.d(s,{Z:function(){return at}});var a=e(3396),l=e(7139),i=e(7434);const n=t=>((0,a.dD)("data-v-426227e5"),t=t(),(0,a.Cn)(),t),o={class:"w-100"},r=["src"],c={class:"ms-4 w-100"},f={class:"mt-1 mb-3",style:{"font-size":"14px"}},d={style:{"font-family":"'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif","font-weight":"700",color:"#666666"}},u={class:"mb-1",style:{"font-size":"12px"}},m={style:{"font-family":"'微软雅黑', sans-serif","font-weight":"400",color:"#999999"}},p={class:"m-0",style:{"font-size":"12px"}},h={style:{"font-family":"'微软雅黑', sans-serif","font-weight":"400",color:"#999999"}},b={class:"w-100 d-flex justify-content-center mt-5 mb-4",style:{"font-size":"13px"}},g=n((()=>(0,a._)("span",{style:{"font-family":"'FontAwesome', sans-serif","font-weight":"400"}}," ",-1))),y=n((()=>(0,a._)("span",{style:{"font-family":"'微软雅黑', sans-serif","font-weight":"400"}}," 已关注",-1))),x=[g,y],v=n((()=>(0,a._)("span",{style:{"font-family":"'FontAwesome', sans-serif","font-weight":"400"}}," ",-1))),w=n((()=>(0,a._)("span",{style:{"font-family":"'微软雅黑', sans-serif","font-weight":"400"}}," 关注",-1))),_=[v,w],I=n((()=>(0,a._)("button",{class:"message-btn ms-3"},[(0,a._)("span",{style:{"font-family":"'FontAwesome', sans-serif","font-weight":"400"}}," "),(0,a._)("span",{style:{"font-family":"'微软雅黑', sans-serif","font-weight":"400"}}," 私信")],-1))),C={class:"w-100"},z={class:"w-100 pb-2 pt-3 px-4 d-inline-flex justify-content-between",style:{"background-color":"rgb(255, 218, 218)","border-radius":"6px","border-bottom-right-radius":"0px","border-bottom-left-radius":"0px"}},U={class:"text-center",style:{width:"20%"}},k=n((()=>(0,a._)("p",{class:"mb-2",style:{"font-size":"14px"}},[(0,a._)("span",{style:{"font-family":"'微软雅黑', sans-serif",color:"#999999"}},"粉丝")],-1))),N={class:"m-0",style:{"font-size":"20px"}},j={style:{"font-family":"'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif","font-weight":"700",color:"#666666"}},P=(0,a.uE)('<div class="text-center" style="width:20%;" data-v-426227e5><p class="mb-2" style="font-size:14px;" data-v-426227e5><span style="font-family:&#39;微软雅黑&#39;, sans-serif;color:#999999;" data-v-426227e5>关注</span></p><p class="m-0" style="font-size:20px;" data-v-426227e5><span style="font-family:&#39;微软雅黑 Bold&#39;, &#39;微软雅黑 Regular&#39;, &#39;微软雅黑&#39;, sans-serif;font-weight:700;color:#666666;" data-v-426227e5>---</span></p></div>',1),D={class:"text-center",style:{width:"20%"}},T=n((()=>(0,a._)("p",{class:"mb-2",style:{"font-size":"14px"}},[(0,a._)("span",{style:{"font-family":"'微软雅黑', sans-serif",color:"#999999"}},"文章")],-1))),A={class:"m-0",style:{"font-size":"20px"}},F={style:{"font-family":"'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif","font-weight":"700",color:"#666666"}},$={class:"w-100 mt-3 p-2 px-4 d-inline-flex justify-content-between",style:{"border-bottom":"1px solid rgba(255, 218, 218, 1)","font-size":"12px"}},E=(0,a.uE)('<div class="text-center" style="width:20%;" data-v-426227e5><p class="mb-2" data-v-426227e5><span style="font-family:&#39;微软雅黑&#39;, sans-serif;color:#999999;" data-v-426227e5>赞</span></p><p class="m-0" style="font-size:14px;" data-v-426227e5><span style="font-family:&#39;微软雅黑 Bold&#39;, &#39;微软雅黑 Regular&#39;, &#39;微软雅黑&#39;, sans-serif;font-weight:700;color:#666666;" data-v-426227e5>---</span></p></div>',1),B={class:"text-center",style:{width:"20%"}},S=n((()=>(0,a._)("p",{class:"mb-2"},[(0,a._)("span",{style:{"font-family":"'微软雅黑', sans-serif",color:"#999999"}},"评论")],-1))),R={class:"m-0",style:{"font-size":"14px"}},Z={style:{"font-family":"'微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif","font-weight":"700",color:"#666666"}},H=(0,a.uE)('<div class="text-center" style="width:20%;" data-v-426227e5><p class="mb-2" data-v-426227e5><span style="font-family:&#39;微软雅黑&#39;, sans-serif;color:#999999;" data-v-426227e5>收藏</span></p><p class="m-0" style="font-size:14px;" data-v-426227e5><span style="font-family:&#39;微软雅黑 Bold&#39;, &#39;微软雅黑 Regular&#39;, &#39;微软雅黑&#39;, sans-serif;font-weight:700;color:#666666;" data-v-426227e5>---</span></p></div>',1),q={class:"w-100 mt-4"},M={class:"w-100 px-3",style:{height:"260px","font-size":"13px","font-family":"'华文宋体', sans-serif","line-height":"17px"}},L={class:"w-100 pe-4 d-flex justify-content-end"},O={id:"act-mems",class:"mt-4 position-relative",style:{"font-family":"'微软雅黑', sans-serif","font-size":"12px",color:"#999999"}},W=n((()=>(0,a._)("div",{class:"back-img"},null,-1))),Y={style:{"background-color":"white"}},K=n((()=>(0,a._)("div",{class:"px-3 py-2",style:{"border-bottom":"1px solid #E4E4E4"}}," 积极成员 ",-1))),J={class:"ms-3 w-100",style:{height:"160px"}},G={class:"m-0 p-0"},Q=["src"],V=(0,a.uE)('<div id="new-mems" class="mt-4 position-relative" style="font-family:&#39;微软雅黑&#39;, sans-serif;font-size:12px;color:#999999;" data-v-426227e5><div class="back-img" data-v-426227e5></div><div style="background-color:white;" data-v-426227e5><div class="px-3 py-2" style="border-bottom:1px solid #E4E4E4;" data-v-426227e5> 最新加入 </div><div class="ms-3 w-100" style="height:160px;" data-v-426227e5><ul class="m-0 p-0" data-v-426227e5><img class="me-3 mt-3 float-start" src="'+i+'" alt="用户头像" style="width:50px;height:50px;" data-v-426227e5><img class="me-3 mt-3 float-start" src="'+i+'" alt="用户头像" style="width:50px;height:50px;" data-v-426227e5><img class="me-3 mt-3 float-start" src="'+i+'" alt="用户头像" style="width:50px;height:50px;" data-v-426227e5><img class="me-3 mt-3 float-start" src="'+i+'" alt="用户头像" style="width:50px;height:50px;" data-v-426227e5><img class="me-3 mt-3 float-start" src="'+i+'" alt="用户头像" style="width:50px;height:50px;" data-v-426227e5><img class="me-3 mt-3 float-start" src="'+i+'" alt="用户头像" style="width:50px;height:50px;" data-v-426227e5><img class="me-3 mt-3 float-start" src="'+i+'" alt="用户头像" style="width:50px;height:50px;" data-v-426227e5></ul></div></div></div>',1);function X(t,s,e,i,n,g){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",{onClick:s[0]||(s[0]=(...t)=>g.jumpToClub&&g.jumpToClub(...t)),id:"id-card",class:"px-3 d-inline-flex w-100",style:{"background-color":"rgb(228, 228, 228)","padding-top":"30px","padding-bottom":"30px"}},[(0,a._)("img",{src:t.ClubInfo.Profile,style:{width:"74px",height:"74px"},alt:"用户头像"},null,8,r),(0,a._)("div",c,[(0,a._)("p",f,[(0,a._)("span",d,(0,l.zw)(t.ClubInfo.Name),1)]),(0,a._)("p",u,[(0,a._)("span",m,(0,l.zw)(t.ClubInfo.Category),1)]),(0,a._)("p",p,[(0,a._)("span",h,(0,l.zw)(t.ClubInfo.CreateTime)+" 成立",1)])])]),(0,a._)("div",b,[t.ClubInfo.Subscribe?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:s[1]||(s[1]=(...t)=>g.subOrUnsub&&g.subOrUnsub(...t)),class:"follow-btn"},x)):((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:s[2]||(s[2]=(...t)=>g.subOrUnsub&&g.subOrUnsub(...t)),class:"follow-btn"},_)),I]),(0,a._)("div",C,[(0,a._)("div",z,[(0,a._)("div",U,[k,(0,a._)("p",N,[(0,a._)("span",j,(0,l.zw)(t.ClubInfo.FansNumber),1)])]),P,(0,a._)("div",D,[T,(0,a._)("p",A,[(0,a._)("span",F,(0,l.zw)(t.ClubInfo.PubNum),1)])])]),(0,a._)("div",$,[E,(0,a._)("div",B,[S,(0,a._)("p",R,[(0,a._)("span",Z,(0,l.zw)(t.ClubInfo.CommentNum),1)])]),H])]),(0,a._)("div",q,[(0,a._)("div",M,(0,l.zw)(t.ClubInfo.Announcement),1),(0,a._)("div",L,[(0,a._)("button",{onClick:s[3]||(s[3]=(...t)=>g.jumpToClub&&g.jumpToClub(...t)),style:{"font-family":"'Cambria', sans-serif","font-size":"13px"}}," >> more ")])]),(0,a._)("div",O,[W,(0,a._)("div",Y,[K,(0,a._)("div",J,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.fanProfiles,(t=>((0,a.wg)(),(0,a.iD)("ul",G,[(0,a._)("img",{class:"me-3 mt-3 float-start",src:t,alt:"用户头像",style:{width:"50px",height:"50px"}},null,8,Q)])))),256))])])]),V])}e(7658);var tt={name:"ClubInfo",props:["ClubId"],components:{},data:function(){return{UserId:0,IsLogin:!1,Club:0,ClubInfo:{CreateTime:"2011-03-30",Name:"xx协会",Category:"文化艺术类",FansNumber:0,Profile:e(9653),PubNum:0,Subscribe:0,CommentNum:0,Inform:"",Announcement:"介绍协会。协会简介。"},fanProfiles:[],fans:null}},methods:{checkImgUrl(t){var s=/^http/g,e=s.test(t);return e},viewFans(){this.$axios.get("/club/view_fans",{params:{ClubId:this.Club}}).then((t=>{console.log(t),this.fans=t.data;let s=this.fans;for(let l in s){var a=this.checkImgUrl(this.fans[l].image);a?this.fanProfiles.push(this.fans[l].image):this.fanProfiles.push(e(7434))}console.log(this.fanProfiles)})).catch((t=>{console.log(t)}))},subOrUnsub(){this.IsLogin?this.ClubInfo.Subscribe?this.$axios.post("/club/unsubscribe",{ClubId:this.Club,UserId:this.UserId}).then((t=>{1===t.data.state?(alert("取消成功！"),location.reload()):alert(t.data.error)})).catch((t=>{alert("取消失败！")})):this.$axios.post("/club/subscribe",{ClubId:this.Club,UserId:this.UserId}).then((t=>{1===t.data.state?(console.log(t.data),alert("关注成功！"),location.reload()):alert(t.data.error)})).catch((t=>{alert("关注失败！")})):(alert("请先登录！"),this.$router.push("/login"))},jumpToClub(){this.$router.push({path:"/clubhome",query:{ClubId:this.Club}})}},created:function(){this.UserId=this.$store.state.UserId,this.UserId?this.IsLogin=!0:this.UserId=0,console.log(this.UserId)},watch:{ClubId:{immediate:!0,deep:!0,handler(t,s){if(!t)return;this.UserId=this.$store.state.UserId,this.UserId?this.IsLogin=!0:this.UserId=0,this.Club=t;let e=this;this.$axios.get("/club/view",{params:{ClubId:this.Club,UserId:this.UserId}}).then((t=>{console.log(t);var s=new Date(t.data["created time"]);if(this.ClubInfo.CreateTime=s.Format("yyyy-MM-dd"),this.ClubInfo.Name=t.data.name,this.ClubInfo.FansNumber=t.data["fans number"],t.data.profile){var a=e.checkImgUrl(t.data.profile);a&&(this.ClubInfo.Profile=t.data.profile)}this.ClubInfo.PubNum=t.data["publications number"],this.ClubInfo.Subscribe=t.data.subscribe,this.ClubInfo.CommentNum=t.data["comments number"],this.ClubInfo.Inform=t.data.inform,t.data.announcement&&(this.ClubInfo.Announcement=t.data.announcement)})).catch((t=>{console.log(t)})),this.viewFans()}}},mounted:function(){}},st=e(89);const et=(0,st.Z)(tt,[["render",X],["__scopeId","data-v-426227e5"]]);var at=et},100:function(t,s,e){t.exports=e.p+"img/default-user-round-dark.17041ec4.png"},9653:function(t,s,e){t.exports=e.p+"img/default-user-square-dark.a4605367.png"},7434:function(t,s,e){t.exports=e.p+"img/default-user-square-light.65dadae9.png"},2207:function(t,s,e){t.exports=e.p+"img/default_img.ea648e07.png"},7940:function(t,s,e){t.exports=e.p+"img/default_user.2903f807.png"}}]);
//# sourceMappingURL=339.0940de3f.js.map