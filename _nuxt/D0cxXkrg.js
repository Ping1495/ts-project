import{a as x,c as i,f as v,g as c,h as a,A as d,B as p,C as o,D as f,t as m,j as g,i as b}from"./Cq7wawvv.js";const y={class:"flex flex-col items-center gap-4"},w={class:"flex flex-row items-center gap-4"},_={class:"flex flex-row items-center gap-4"},B={key:0},k=x({__name:"bmi",setup(C){const l=i(null),t=i(null),e=i(null),s=i(""),h=()=>{if(t.value&&l.value){if(t.value&&t.value>0&&l.value&&l.value>0){const r=t.value/100;e.value=parseFloat((l.value/r**2).toFixed(2))}if(e)e.value&&e.value<18.5?s.value="Underweight / Thin":e.value&&e.value>=18.5&&e.value<=22.9?s.value="Normal weight (healthy)":e.value&&e.value>=23&&e.value<=24.9?s.value="Chubby / Starting to over weight":e.value&&e.value>=25&&e.value<=29.9?s.value="Overweight / Fat":e.value&&e.value>30&&(s.value="Obese / Very overweight");else return}};return(r,u)=>(v(),c("div",null,[u[2]||(u[2]=a("h1",{class:"text-3xl font-bold underline flex flex-col items-center mt-10 mb-10"}," BMI Calculator ",-1)),a("div",y,[a("div",w,[d(a("input",{"onUpdate:modelValue":u[0]||(u[0]=n=>f(t)?t.value=n:null),class:"border py-1 px-2",type:"text",placeholder:"height (cm)"},null,512),[[p,o(t)]])]),a("div",_,[d(a("input",{"onUpdate:modelValue":u[1]||(u[1]=n=>f(l)?l.value=n:null),class:"border py-1 px-2",type:"text",placeholder:"weight (kg)"},null,512),[[p,o(l)]])]),a("button",{class:"border py-1 px-2 rounded-lg",onClick:h}," Calculate "),o(e)?(v(),c("span",B,"your BMI is "+m(o(e)),1)):g("",!0),b(" "+m(o(s)),1)])]))}});export{k as default};
