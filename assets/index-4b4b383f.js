import{d as f,r as _,a as u,o as k,c as x,b as o,w as a,e as i,i as n,u as c,g as C,E as d}from"./index-d46f4040.js";const w=C("div",{style:{color:"#ccc","font-size":"12px"}}," jpg/png files with a size less than 500KB. ",-1),B=f({__name:"index",setup(q){let e=_(!1),g=[{type:"input",label:"用户名",prop:"username",value:"",placeholder:"请输入用户名",rules:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:6,message:"用户名在2-6位之间",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",label:"密码",prop:"password",value:"",placeholder:"请输入密码",rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:15,message:"密码在6-15位之间",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",label:"职位",prop:"role",value:"",placeholder:"请选择职位",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"职位不能为空",trigger:"change"}],children:[{type:"option",label:"经理",value:"1"},{type:"option",label:"主管",value:"2"},{type:"option",label:"员工",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"爱好",rules:[{required:!0,message:"爱好不能为空",trigger:"change"}],children:[{type:"checkbox",label:"足球",value:"1"},{type:"checkbox",label:"篮球",value:"2"},{type:"checkbox",label:"排球",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"性别",rules:[{required:!0,message:"性别不能为空",trigger:"change"}],children:[{type:"radio",label:"男",value:"male"},{type:"radio",label:"女",value:"female"},{type:"radio",label:"保密",value:"not"}]},{type:"upload",label:"上传",prop:"pic",uploadAttrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,limit:3},rules:[{required:!0,message:"图片不能为空",trigger:"blur"}]},{type:"editor",value:"welcome to beijing",prop:"desc",label:"描述",placeholder:"请输入描述",rules:[{required:!0,message:"描述不能为空",trigger:"blur"}]}];const m=l=>{let t=l.validate(),r=l.getFormData();t(p=>{p?(console.log("KAI :-> confirm :-> model:",r),d.success("验证成功")):d.error("验证失败")})},b=l=>{console.log("KAI :-> handleChange :-> val:",l)},v=l=>{console.log("KAI :-> handleSuccess:",l)},h=()=>{e.value=!0};return(l,t)=>{const r=u("el-button"),p=u("k-modal-form");return k(),x("div",null,[o(r,{type:"primary",onClick:h},{default:a(()=>[i("open")]),_:1}),o(p,{title:"编辑用户",width:"50%",isScroll:"",options:c(g),visible:c(e),"onUpdate:visible":t[1]||(t[1]=s=>n(e)?e.value=s:e=s),"on-change":b,"on-success":v},{uploadArea:a(()=>[o(r,{size:"small",type:"primary"},{default:a(()=>[i("Click to upload")]),_:1})]),uploadTip:a(()=>[w]),footer:a(({form:s})=>[o(r,{onClick:t[0]||(t[0]=y=>n(e)?e.value=!1:e=!1)},{default:a(()=>[i("取消")]),_:1}),o(r,{type:"primary",onClick:y=>m(s)},{default:a(()=>[i(" 确认 ")]),_:2},1032,["onClick"])]),_:1},8,["options","visible"])])}}});export{B as default};
