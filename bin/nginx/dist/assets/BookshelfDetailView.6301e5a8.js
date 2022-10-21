import{d as v,j as b,n as x,r as C,o as i,c as _,a as t,t as r,F as m,p as E,x as h,f as B,k as S,l as w,m as g,s as y}from"./index.0ad1aa9b.js";class F{getDateNow(){const s=new Date,e=s.getUTCFullYear().toString();let n=(s.getUTCMonth()+1).toString();n.length==1&&(n="0"+n);let u=s.getUTCDate().toString();return u.length==1&&(u="0"+u),e+"-"+n+"-"+u}getDateRus(s){const e=s!==void 0?new Date(s):new Date,n=e.getFullYear().toString();let u=(e.getMonth()+1).toString();u.length==1&&(u="0"+u);let a=e.getDate().toString();a.length==1&&(a="0"+a);let d=e.getHours().toString();d.length==1&&(d="0"+d);let c=e.getMinutes().toString();c.length==1&&(c="0"+c);let o=e.getSeconds().toString();return o.length==1&&(o="0"+o),`${a}.${u}.${n} ${d}:${c}:${o}`}}var D=new F;const $={class:"row mt-5"},R={class:"col-sm-12 col-md-6 text-center"},U=["src"],M={class:"col-sm-12 mt-5 mt-sm-5 mt-md-0 col-md-6"},N={class:"table mb-0"},T=t("td",null,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:",-1),V={class:"text-end"},j=t("td",null,"\u0410\u0432\u0442\u043E\u0440:",-1),P={class:"text-end"},Y=t("td",null,"\u0420\u0435\u0439\u0442\u0438\u043D\u0433:",-1),A={class:"text-end"},H=t("td",null,"\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E:",-1),I={key:0,class:"text-end"},J={key:1,class:"text-end"},L=t("td",null,"\u0420\u0435\u0446\u0435\u043D\u0437\u0438\u044E \u0441\u043E\u0437\u0434\u0430\u043B(\u0430):",-1),O={class:"text-end"},q=t("td",null,"\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0440\u0435\u0446\u0435\u043D\u0437\u0438\u0438:",-1),z={class:"text-end"},G=t("td",null,"\u0414\u0430\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0435\u0446\u0435\u043D\u0437\u0438\u0438:",-1),K={class:"text-end"},Q={key:0},W=t("td",null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F:",-1),X={class:"row mt-5"},Z=t("h2",{class:"text-muted text-center"},"\u0420\u0435\u0446\u0435\u043D\u0437\u0438\u044F",-1),et=v({__name:"BookshelfDetailView",setup(f){const s=S(),e=w(),n=JSON.parse(localStorage.getItem("thisUser")).userdata,u=b({id:0,user_created:{id:0,username:"",email:"",first_name:"",last_name:""},title:"",description:"",author:"",photo:"",rating:0,is_read:!1,date_created:"",date_updated:""});function a(){const o=`bookshelf/books/${e.params.id}`;g.get(o).then(l=>{u.value=l.data}).catch(l=>{alert(l)})}function d(){if(confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043D\u0438\u0433\u0443? \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.")){const o=`bookshelf/books/${u.value.id}`;g.delete(o).then(()=>{s.push({name:"bookshelf-index"})}).catch(l=>{alert(l)})}}function c(){s.push({name:"bookshelf-update",params:{id:u.value.id}})}return x(()=>{a()}),(o,l)=>{const p=C("font-awesome-icon");return i(),_(m,null,[t("div",$,[t("div",R,[t("img",{src:u.value.photo,class:"img-fluid",style:{height:"380px"},alt:"..."},null,8,U)]),t("div",M,[t("table",N,[t("tbody",null,[t("tr",null,[T,t("td",V,r(u.value.title),1)]),t("tr",null,[j,t("td",P,r(u.value.author),1)]),t("tr",null,[Y,t("td",A,[(i(!0),_(m,null,E(u.value.rating,(tt,k)=>(i(),y(p,{key:k,icon:["fas","star"]}))),128))])]),t("tr",null,[H,u.value.is_read?(i(),_("td",I,"\u0414\u0430")):(i(),_("td",J,"\u041D\u0435\u0442"))]),t("tr",null,[L,t("td",O,r(u.value.user_created.username),1)]),t("tr",null,[q,t("td",z,r(h(D).getDateRus(u.value.date_created)),1)]),t("tr",null,[G,t("td",K,r(h(D).getDateRus(u.value.date_updated)),1)]),u.value.user_created.id===h(n).id?(i(),_("tr",Q,[W,t("td",{class:"text-end"},[t("div",{class:"btn-group"},[t("button",{class:"btn btn-success",onClick:c},"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"),t("button",{class:"btn btn-danger",onClick:d},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C")])])])):B("",!0)])])])]),t("div",X,[Z,t("p",null,r(u.value.description),1)])],64)}}});export{et as default};
