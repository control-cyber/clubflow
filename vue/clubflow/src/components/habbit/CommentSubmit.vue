<template>
    
    <QuillEditor ref="myQuillEditor" v-model:content="content" :options="editorOption" contentType="html" />
    <div id="comment-submit" class="w-100 mt-2 justify-content-end d-flex">
        <button @click="submit" >发布</button>
    </div>
    
 
</template>
 
<script>

 
// 工具栏配置
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
    // ["blockquote", "code-block"], // 引用
    // [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
    // [{ script: "sub" }, { script: "super" }], // 上标/下标
    // [{ indent: '-1' }, { indent: '+1' }], // 缩进
    // [{ direction: 'rtl' }], // 文本方向
    [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
    // [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
    [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
    [{ font: [] }], // 字体种类
    [{ align: [] }], // 对齐方式
    ['clean'], // 清除文本格式
    // ['link', 'image', 'video'] // 链接、图片、视频
    ['image'] // 图片
]
import {getCurrentInstance, ref, toRaw, watch} from 'vue';
import {QuillEditor, Quill } from '@vueup/vue-quill'
import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
import quillTool from '@/utils/quillTool'
Quill.register(quillTool, true)
Quill.register('modules/ImageExtend', ImageExtend)
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
    name:"CommentSubmit",
    components: { QuillEditor },
    props: ['HabbitId','model'],
    data() {
        return {
            content: '',
            myQuillEditor : ref(),
            editorOption: {
                theme: 'snow',
                placeholder: '发表你的动态吧！',
                modules: {
                    ImageExtend: {
                        loading:true,
                        name: 'file', // 参数名
                        action: getCurrentInstance()?.appContext.config.globalProperties.$Baseurl + 'comment/image', // 服务器地址，如果为空则采用base64插入图片
                        headers: xhr => { // 设置请求头参数（选填）
                            //xhr.setRequestHeader('s', '疯狂星期四v50')
                        },
                        response: res => {
                            console.log(res)
                            return res.imgURL // 新的url
                        },
                        size: 8, // 图片不能超过8M
                        sizeError: () => {
                            this.$message.error('粘贴图片大小不能超过8MB!')
                        }
                    },
                    toolbar: {
                        container: toolbarOptions,
                        handlers: {
                            image: function(value) {
                                QuillWatch.emit(this.quill.id)
                            },
                            link: function(value) {
                                if (value) {
                                    var href = prompt('请输入链接地址：')
                                    this.quill.format('link', href)
                                } else {
                                    this.quill.format('link', false)
                                }
                            }
                        }
                    }
                }
            },
        }
    },
    methods:{
        submit(){
            console.log(this.content)
            let time = new Date()
            var _this = this
            this.$axios
            .post('/habbit/post', { // 记得改这里！！
                content: _this.content,
                HabbitId: _this.HabbitId,
                time: time.toLocaleString(),
                UserId: _this.$store.state.UserId
            })
            .then(resp => {
                if (resp.data.code === 200) {
                    alert("发布成功！")
                } else {
                    alert("发布失败！")
                }
            })
            .catch(failResponse => {
                alert("发布失败！")
            })
            location.reload() // 刷新页面
        }
    }
}
</script>
 

<style scoped>
#comment-submit button {
  width:107px;
  height:40px;
  border-radius: 4px;
  background-color:rgba(184, 45, 41, 1);
  /* display:flex; */
  text-align: center;
  font-family:'微软雅黑', sans-serif;
  font-weight:400;
  font-style:normal;
  font-size: 14px;
  color:#FFFFFF;
  line-height:20px;
}

#comment-submit button:hover {
  opacity:0.8;
}


</style>


<style>
 
    .ql-container {
        height: 300px;
        line-height: normal;
        width: auto;
    }
 
    span.ql-size {
        max-width: 80px !important;
    }
 
    .ql-tooltip[data-mode="link"]::before {
        content: "请输入链接地址:";
    }
 
    .ql-tooltip.ql-editing a.ql-action::after {
        border-right: 0px;
        content: "保存";
        padding-right: 0px;
    }
 
    .ql-tooltip[data-mode="video"] {
        left: 0 !important;
    }
 
    .ql-tooltip[data-mode="video"]::before {
        content: "请输入视频地址:";
    }
 
    .ql-picker.ql-size .ql-picker-label::before,
    .ql-picker.ql-size .ql-picker-item::before {
        content: "14px";
    }
 
    .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
    .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
        content: "10px";
    }
 
    .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
    .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
        content: "18px";
    }
 
    .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
    .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
        content: "32px";
    }
 
    .ql-picker.ql-header .ql-picker-label::before,
    .ql-picker.ql-header .ql-picker-item::before {
        content: "文本";
    }
 
    .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
    .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
        content: "标题1";
    }
 
    .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
    .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
        content: "标题2";
    }
 
    .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
    .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
        content: "标题3";
    }
 
    .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
    .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
        content: "标题4";
    }
 
    .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
    .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
        content: "标题5";
    }
 
    .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
    .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
        content: "标题6";
    }
 
    .ql-picker.ql-font .ql-picker-label::before,
    .ql-picker.ql-font .ql-picker-item::before {
        content: "标准字体";
    }
 
    .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
    .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
        content: "衬线字体";
    }
 
    .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
    .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
        content: "等宽字体";
    }
 
</style>

    
