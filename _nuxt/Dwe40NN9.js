import{a as v,c as r,f as a,g as n,h as e,A as u,B as f,C as p,D as _,F as h,G as b,H as k,n as y,t as g,m as C}from"./Cq7wawvv.js";const w={class:"flex flex-col items-center p-4"},T={class:""},B={class:"mt-4 w-80"},D={class:"flex items-center"},M=["onUpdate:modelValue"],V=["onClick"],L=v({__name:"todo-list",setup(U){const t=r(""),l=r([]),m=()=>{t.value.trim()&&(l.value.push({text:t.value.trim(),checked:!1}),t.value="")},x=c=>{l.value.splice(c,1)};return(c,o)=>(a(),n("div",null,[o[1]||(o[1]=e("h1",{class:"text-3xl font-bold underline flex flex-col items-center mt-10 mb-2"}," TO-DO LIST ",-1)),e("div",w,[e("div",T,[u(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>_(t)?t.value=s:null),type:"text",placeholder:"today Task",class:"border rounded p-2 mx-4 w-80 mb-4"},null,512),[[f,p(t)]]),e("button",{onClick:m,class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"}," Next ")]),e("div",B,[(a(!0),n(h,null,b(p(l),(s,d)=>(a(),n("div",{key:d,class:"flex items-center justify-between p-2"},[e("div",D,[u(e("input",{type:"checkbox","onUpdate:modelValue":i=>s.checked=i,class:"mr-2"},null,8,M),[[k,s.checked]]),e("span",{class:y([{"line-through":s.checked},"text-gray-800"])},g(s.text),3)]),e("button",{onClick:i=>x(d),class:"text-red-500 hover:text-red-700"}," Remove ",8,V)]))),128))])])]))}}),I=C(L,[["__scopeId","data-v-3f641629"]]);export{I as default};
