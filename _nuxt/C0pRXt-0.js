import{b as S,a as N,c as w,u as _,o as B,af as T,ag as U,P as I,ah as F,M as A,E as L,ai as H,aj as V,X as x,ak as D,al as k,am as j,a6 as M,s as z,L as W,a7 as $}from"./Cq7wawvv.js";async function E(t,a=S()){const{path:v,matched:p}=a.resolve(t);if(!p.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(v)))return;const g=a._preloadPromises=a._preloadPromises||[];if(g.length>4)return Promise.all(g).then(()=>E(t,a));a._routePreloaded.add(v);const e=p.map(n=>{var s;return(s=n.components)==null?void 0:s.default}).filter(n=>typeof n=="function");for(const n of e){const s=Promise.resolve(n()).catch(()=>{}).finally(()=>g.splice(g.indexOf(s)));g.push(s)}await Promise.all(g)}const G=(...t)=>t.find(a=>a!==void 0);function Q(t){const a=t.componentName||"NuxtLink";function v(e){return typeof e=="string"&&e.startsWith("#")}function p(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return O(e,t.trailingSlash);const s="path"in e&&e.path!==void 0?e.path:n(e).path;return{...e,name:void 0,path:O(s,t.trailingSlash)}}function g(e){const n=S(),s=z(),u=x(()=>!!e.target&&e.target!=="_self"),d=x(()=>{const f=e.to||e.href||"";return typeof f=="string"&&j(f,{acceptRelative:!0})}),P=L("RouterLink"),y=P&&typeof P!="string"?P.useLink:void 0,m=x(()=>{if(e.external)return!0;const f=e.to||e.href||"";return typeof f=="object"?!1:f===""||d.value}),r=x(()=>{const f=e.to||e.href||"";return m.value?f:p(f,n.resolve)}),c=m.value||y==null?void 0:y({...e,to:r}),b=x(()=>{var f;if(!r.value||d.value||v(r.value))return r.value;if(m.value){const C=typeof r.value=="object"&&"path"in r.value?k(r.value):r.value,R=typeof C=="object"?n.resolve(C).href:C;return p(R,n.resolve)}return typeof r.value=="object"?((f=n.resolve(r.value))==null?void 0:f.href)??null:p(M(s.app.baseURL,r.value),n.resolve)});return{to:r,hasTarget:u,isAbsoluteUrl:d,isExternal:m,href:b,isActive:(c==null?void 0:c.isActive)??x(()=>r.value===n.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??x(()=>r.value===n.currentRoute.value.path),route:(c==null?void 0:c.route)??x(()=>n.resolve(r.value)),async navigate(){await D(b.value,{replace:e.replace,external:m.value||u.value})}}}return N({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:g,setup(e,{slots:n}){const s=S(),{to:u,href:d,navigate:P,isExternal:y,hasTarget:m,isAbsoluteUrl:r}=g(e),c=w(!1),b=w(null),f=l=>{var o;b.value=e.custom?(o=l==null?void 0:l.$el)==null?void 0:o.nextElementSibling:l==null?void 0:l.$el};function C(l){var o,i;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===l:((o=e.prefetchOn)==null?void 0:o[l])??((i=t.prefetchOn)==null?void 0:i[l]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!K()}async function R(l=_()){if(c.value)return;c.value=!0;const o=typeof u.value=="string"?u.value:y.value?k(u.value):s.resolve(u.value).fullPath,i=y.value?new URL(o,window.location.href).href:o;await Promise.all([l.hooks.callHook("link:prefetch",i).catch(()=>{}),!y.value&&!m.value&&E(u.value,s).catch(()=>{})])}if(C("visibility")){const l=_();let o,i=null;B(()=>{const h=X();T(()=>{o=U(()=>{var q;(q=b==null?void 0:b.value)!=null&&q.tagName&&(i=h.observe(b.value,async()=>{i==null||i(),i=null,await R(l)}))})})}),I(()=>{o&&F(o),i==null||i(),i=null})}return()=>{var i;if(!y.value&&!m.value&&!v(u.value)){const h={ref:f,to:u.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(C("interaction")&&(h.onPointerenter=R.bind(null,void 0),h.onFocus=R.bind(null,void 0)),c.value&&(h.class=e.prefetchedClass||t.prefetchedClass),h.rel=e.rel||void 0),A(L("RouterLink"),h,n.default)}const l=e.target||null,o=G(e.noRel?"":e.rel,t.externalRelAttribute,r.value||m.value?"noopener noreferrer":"")||null;return e.custom?n.default?n.default({href:d.value,navigate:P,prefetch:R,get route(){if(!d.value)return;const h=new URL(d.value,window.location.href);return{path:h.pathname,fullPath:h.pathname,get query(){return H(h.search)},hash:h.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:d.value}},rel:o,target:l,isExternal:y.value||m.value,isActive:!1,isExactActive:!1}):null:A("a",{ref:b,href:d.value||null,rel:o,target:l},(i=n.default)==null?void 0:i.call(n))}}})}const Z=Q(V);function O(t,a){const v=a==="append"?W:$;return j(t)&&!t.startsWith("http")?t:v(t,!0)}function X(){const t=_();if(t._observer)return t._observer;let a=null;const v=new Map,p=(e,n)=>(a||(a=new IntersectionObserver(s=>{for(const u of s){const d=v.get(u.target);(u.isIntersecting||u.intersectionRatio>0)&&d&&d()}})),v.set(e,n),a.observe(e),()=>{v.delete(e),a==null||a.unobserve(e),v.size===0&&(a==null||a.disconnect(),a=null)});return t._observer={observe:p}}const J=/2g/;function K(){const t=navigator.connection;return!!(t&&(t.saveData||J.test(t.effectiveType)))}export{Z as _};
