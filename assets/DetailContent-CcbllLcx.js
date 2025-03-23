import{r as y,u as v,h as m,c as a,o as s,b as t,F as u,e as w,n as b,t as i,i as k,d as C,j as _,k as S}from"./index-CsLnQRpz.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as P}from"./Footer-Cpw5l5cC.js";import{l as D,a as Q,b as x,c as I,d as A}from"./circle-cropped-DAbXIrRu.js";const E={class:"head"},H=["onClick"],W={__name:"Wheader",setup(g){const d=y([{id:1,name:"Home",path:"/"},{id:2,name:"News",path:"/news"},{id:3,name:"Conference",path:"/conference"},{id:4,name:"Research",path:"/research"},{id:5,name:"About",path:"/about"}]),l=v(),c=m(),n=o=>c.path===o,p=o=>{l.push(o.path)};return(o,e)=>(s(),a("div",E,[e[0]||(e[0]=t("div",{class:"title"},"DFSC",-1)),t("ul",null,[(s(!0),a(u,null,w(d,r=>(s(),a("li",{key:r.id,class:b({active:n(r.path)}),onClick:h=>p(r)},i(r.name),11,H))),128))])]))}},F=f(W,[["__scopeId","data-v-cd1d625f"]]),$={key:0,class:"detail-content"},N=["src"],T={class:"main"},L={class:"txt"},V={style:{"background-color":"#fff","border-radius":"5px",padding:"20px","box-shadow":"2px 2px 10px 5px rgba(0, 0, 0, 0.1)"}},z={class:"year"},B=["onClick"],R={__name:"DetailContent",setup(g){const d=y([{id:"QCPQC",logo:D,content_one:"Quantum computation and implementation show strong power. How to protect data secure and users' privacy is very important. Lattice-based cryptography (such as Fully Homomorphic Encryption-FHE) gives us the ways to protect data security and users privacy in the quantum world.",content_two:"QCPQC (Quantum Computation and Post Quantum Cryptography) Conference would like to invite well-known researchers all over the world to present their best works about state-of-art, research hotspots and applications on Post Quantum Cryptography and Quantum Computation. Everyone, who does the best works on above fields, will be invited to attend QCPQC conference, and present their research works. We would like to provide travel funding for the invited speakers.",years:["QCPQC-2017","QCPQC-2018","QCPQC-2019","QCPQC-2020","QCPQC-2021"]},{id:"DSPP",logo:Q,content_one:"Data Security and users privacy is the research hotspots. International Data Secure and Privacy-preserving Computation Conference would like to invite the well-known researchers all over the world to share their research works about data security and privacy-preserving theory, implementation and applications.",content_two:"Everyone, who does the best works on data security and users privacy, will be invited to attend DSPP conference, and present their works. We would like to provide travel funding for the invited speakers. Invited talks including the following topics: (1) Data security and privacy-preserving theory, implementation and application; (2) Data security and users privacy in the quantum world.",years:["DSPP-2018","DSPP-2019","DSPP-2020","DSPP-2021"]},{id:"CCC",logo:x,content_one:"Code and Cryptography are two foundations of communication and CyberSecurity. They protect data, storage, transmission and processing.",content_two:"International Code and Cryptography and Application Conference would like to invite well-known researchers all over the world to present their best works about state-of-art, research trends and applications on Code and Cryptography. Everyone, who does the best works on above fields, will be invited to attend CCC conference, and present their works. We would like to provide travel funding for the invited speakers.",years:["CCC-2018","CCC-2019","CCC-2020","CCC-2021"]},{id:"CSAC",logo:I,content_one:"The threat to CyberSpace is becoming more and more serious, and situation of CyberSecurity is becoming extremely serious. Cryptography is foundation of CyberSecurity, and is the very important method to protect security of users and industry.",content_two:"International Cybersecurity and Applied Cryptography Conference would like to invite well-known researchers all over the world to present their best works about Cybersecurity and Cryptography. Everyone, who does the best works on above fields, will be invited to attend CSAC Conference, and present their works. We would like to provide travel funding for the invited speakers.",years:["CSAC-2018","CSAC-2019","CSAC-2020","CSAC-2021"]},{id:"SHDI",logo:A,content_one:"With rapid development of cyberspace security, artificial intelligence and cloud computing, researchers have constructed a large number of schemes, and designed many algorithms. In the meanwhile, the needs of industry and users are also growing urgently. Therefore, it is necessary to solve the software and hardware implementations of designed schemes and algorithms.",content_two:"The gradual maturity of software design theory and the rapid development and production of hardware design and implementation provide a good foundation and opportunity for solving the above problems. International Software and Hardware Design and Implementation Conference would like to invite well-known researchers all over the world to present their best works about design and implementation of software and hardware on Cybersecurity schemes and algorithms. Everyone, who does the best works on above fields, will be invited to attend SHDI conference, and present their works. We would like to provide travel funding for the invited speakers.",years:["SHDI-2019"]}]),l=m(),c=v(),n=k(()=>{const o=l.params.id;return d.find(e=>e.id===o)}),p=o=>{const e=n.value.id;console.log(o),c.push({path:`/conference/detail/${e}/${o}`})};return(o,e)=>(s(),a(u,null,[C(F),n.value?(s(),a("div",$,[t("img",{src:n.value.logo,alt:""},null,8,N),t("div",T,[t("div",L,[t("p",null,i(n.value.content_one),1),t("p",V,i(n.value.content_two),1)]),t("div",z,[e[1]||(e[1]=t("h3",{style:{"font-size":"18px",color:"rgb(64,137,186)"}},"Conference Years",-1)),t("ul",null,[(s(!0),a(u,null,w(n.value.years,(r,h)=>(s(),a("li",{key:h,onClick:q=>p(r)},[S(i(r)+" ",1),e[0]||(e[0]=t("a",{style:{"border-bottom":"1px solid",color:"rgb(60,101,150)","font-size":"14px"}},"Learn More",-1))],8,B))),128))])])])])):_("",!0),C(P)],64))}},J=f(R,[["__scopeId","data-v-6e0e6ed2"]]);export{J as default};
