import{d as g,j as _,n as h,r as v,o as i,c as l,F as f,p as b,f as x,a as e,q as m,m as y,t as c,g as C,e as P}from"./index.0ad1aa9b.js";/* empty css                                                                     */const k={class:"row"},w=e("h1",null,"\u041D\u043E\u0432\u044B\u0435 \u0440\u0435\u0446\u0435\u043D\u0437\u0438\u0438",-1),$=["onClick"],B=["src"],D={class:"card-body"},L={class:"card-title"},N={class:"card-subtitle mb-2 text-muted"},V={class:"d-flex justify-content-between"},F={key:0},j=e("div",{class:"text-center",colspan:"6"},[e("div",{class:"spinner-border",style:{width:"1.3rem",height:"1.3rem"},role:"status"},[e("span",{class:"visually-hidden"},"Loading...")])],-1),z=[j],E={class:"btn-group"},A=g({__name:"DashboardPage",setup(T){const s={page:1,limit:8,nextPage:null,previousPage:null},d=_(),n=_(!1);function r(o){o?s.page+=1:s.page-=1,window.scrollTo(0,0),p(s.limit,s.page)}function p(o,a){const u=`bookshelf/books/?page_size=${o}&page_num=${a}`;n.value=!0,y.get(u).then(t=>{d.value=t.data.results,s.nextPage=t.data.next,s.previousPage=t.data.previous,n.value=!1}).catch(t=>{alert(t),n.value=!1})}return h(()=>{p(s.limit,s.page)}),(o,a)=>{const u=v("font-awesome-icon");return i(),l("div",k,[w,(i(!0),l(f,null,b(d.value,t=>(i(),l("div",{key:t.id,class:"col-sm-6 col-md-3"},[e("div",{class:"card",onClick:q=>o.$router.push({name:"bookshelf-detail",params:{id:t.id}})},[e("img",{src:t.photo,class:"card-img-top",style:{height:"380px"},alt:"..."},null,8,B),e("div",D,[e("h5",L,c(t.title),1),e("h6",N,[e("div",V,[e("div",null,[C(u,{icon:["fas","star"]}),P(c(t.rating),1)]),e("div",null,c(t.author),1)])])])],8,$)]))),128)),n.value?(i(),l("div",F,z)):x("",!0),e("div",E,[e("button",{class:m([{disabled:!s.previousPage},"btn btn-secondary"]),onClick:a[0]||(a[0]=t=>r(0))}," \u041D\u0430\u0437\u0430\u0434 ",2),e("button",{class:m([{disabled:!s.nextPage},"btn btn-primary"]),onClick:a[1]||(a[1]=t=>r(1))},"\u0412\u043F\u0435\u0440\u0435\u0434",2)])])}}});export{A as default};
