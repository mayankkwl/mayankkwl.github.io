(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(81)},58:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(34),o=a.n(l),r=(a(47),a(9)),i=a(4),s=a(5),u=a(7),m=a(6),d=a(8),p=(a(58),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"header"},this.props.title,this.props.showLogout&&c.a.createElement("a",{href:"#/",className:"text-light float-right"},"Logout"))}}]),t}(n.Component)),h=a(13),E=a.n(h),f=(a(76),a(77),"//synechronliquify-eval-test.apigee.net"),g={LOGIN_URL:"//34.66.216.192:8443/setup/login",ACCOUNT_URL:f+"/account/client/",BALANCE_URL:f+"/account/balance/",TRANSACTIONS_URL:f+"/account/transactions/",LIQUIDITY_URL:f+"/liquify/param/",SECRET_KEY:"I4A0eOWb9iZVO7nplHiwjLuUpUdSJxQv",SECRET_KEY2:"KpUzbs35ZMkp0oqeXeq93bGDeW8rJUC7"},v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={notification:""},a.onSubmit=function(){console.log(g.LOGIN_URL),E()({method:"get",url:g.LOGIN_URL,headers:{username:a.state.username,password:a.state.password},responseType:"json"}).then(function(e){console.log(e),sessionStorage.setItem("clientId",e.data.username),r.e.push("/account/details/"+e.data.username)}).catch(function(e){console.log("ERROR ^^",e,e.response),a.setState({notification:"SOME ERROR OCCORED"})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(p,{title:"Automated Liquidity"}),c.a.createElement("div",{className:"main-container"},c.a.createElement("div",null,c.a.createElement("i",{className:"fas fa-university univ"})),c.a.createElement("h3",{htmlFor:"userid"},"Secure login"),c.a.createElement("div",{className:"text-danger"},this.state&&this.state.notification&&this.state.notification.message),c.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",id:"userid",placeholder:"Enter online ID",onChange:function(t){e.setState({username:t.target.value})},required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter password",onChange:function(t){e.setState({password:t.target.value})},required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"dropdownCheck"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"dropdownCheck"},"Save online ID"),c.a.createElement("label",{className:"form-check-label float-right"},"Security & help"))),c.a.createElement("button",{type:"submit",className:"btn btn-secondary login-btn-secondary"},c.a.createElement("i",{className:"fas fa-lock login-lock"})," Sign in")),c.a.createElement("div",{className:"dropdown-divider"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm text-left"},c.a.createElement(r.b,{to:"/"},"Forgot Id")),c.a.createElement("div",{className:"col-sm text-center"},c.a.createElement(r.b,{to:"/"},"Forgot password?")),c.a.createElement("div",{className:"col-sm text-right"},c.a.createElement(r.b,{to:"/"},"Enroll")))))}}]),t}(n.Component),b=(a(78),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("ul",{className:"nav nav-pills liquidity-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("i",{className:"fas fa-university nav-icon-univ"})),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#/account/details"},"Liquidity Management")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#/account/details"},"My Transactions")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link active",href:"#/account/details"},"Account Details"))),c.a.createElement("div",null))}}]),t}(n.Component)),N=sessionStorage.getItem("clientId"),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={classes:"",arr:[{id:1,name:"Account Details",url:"/account/details/"+N},{id:2,name:"Liquidity Management",url:"/liquidity/"},{id:3,name:"My Transactions",url:""},{id:4,name:"Help & Support",url:""},{id:5,name:"Security & Settings",url:""}],clicked:e.id||1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"setActiveTab",value:function(e,t){this.setState({clicked:e}),t&&r.e.push(t)}},{key:"render",value:function(){var e=this,t=this.state,a=t.arr,n=t.clicked;return c.a.createElement("div",{className:"list-group"},a.map(function(t){return c.a.createElement("button",{key:t.id,className:n===t.id?"list-group-item list-group-item-action active":"list-group-item list-group-item-action",onClick:e.setActiveTab.bind(e,t.id,t.url)},t.name)}))}}]),t}(n.Component),O=a(15),w={EUR:"&#8364;",USD:"&#36;",GBP:"&#163;"},j=(a(79),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){localStorage.getItem("clientId")?a.loadAccounts(localStorage.getItem("clientId")):a.setState({notification:"unable to load client id"})},a.loadAccounts=function(e){var t=Object(O.a)(a);E()({method:"get",url:g.ACCOUNT_URL+e,responseType:"json"}).then(function(e){t.state.accounts=e.data,t.loadBalances(e.data)}).catch(function(e){console.log("exception while loading accounts ",e)})},a.loadBalances=function(e){var t=Object(O.a)(a),n={};e.map(function(c,l){return E()({method:"get",url:g.BALANCE_URL+c.accountId,responseType:"json"}).then(function(o){n[c.accountId]=o.data,e.length-1===l&&(t.state.balances=n,a.loadTransactions(e))}).catch(function(e){console.log("exception while loading balances ",e)})})},a.loadTransactions=function(e){var t=Object(O.a)(a),n={};e.map(function(c,l){return E()({method:"get",url:g.TRANSACTIONS_URL+c.accountId,responseType:"json"}).then(function(o){n[c.accountId]=o.data,t.state.transactions=n,e.length-1===l&&setTimeout(function(){a.setState({loading:!1})},1e3)}).catch(function(e){console.log("exception while loading transactions ",e)})})},a.getCurrencySymbol=function(e){return w[e]?c.a.createElement("span",{dangerouslySetInnerHTML:{__html:w[e]}}):e},a.renderTransactions=function(e){return c.a.createElement("div",null,a.state.transactions&&a.state.transactions[e]&&a.state.transactions[e].map(function(e,t){return c.a.createElement("div",{className:"transactions-row",key:"transaction_"+t},c.a.createElement("span",null,e.productRef),c.a.createElement("span",{className:"text-right"},a.getCurrencySymbol(e.accountDetails.currency)," ",e.notional))}))},a.state={accounts:{},loading:!0,balances:{},transactions:{}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;if(!0===this.state.loading)return c.a.createElement("div",null,"Loading...");var t=null;return this.state.accounts&&(t=c.a.createElement("div",{className:"row"},this.state.accounts.map(function(t,a){return c.a.createElement("div",{className:"col-sm-4",key:a},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},t.currency," account"),c.a.createElement("div",{className:"card-text"},e.state.balances[t.accountId].currency," ",e.state.balances[t.accountId].cashBalance,e.renderTransactions(t.accountId)))))}))),c.a.createElement("div",null,t)}}]),t}(n.Component)),I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p,{title:"Automated Liquidity Management",showLogout:!0}),c.a.createElement("div",{className:"main-container"},c.a.createElement(b,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3"},c.a.createElement(y,{id:1})),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(j,null)))))}}]),t}(n.Component),C=a(39),L=a(40),S=function(e){return c.a.createElement("table",{className:"table table-bordered"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"align-middle"},e.rule.accountCCY),c.a.createElement("td",{className:"align-baseline"},c.a.createElement("label",{htmlFor:"upperThreshold"},"Upper threshold"),c.a.createElement("input",{type:"number",className:"form-control",id:"upperThreshold",name:"upperLimit",onChange:e.changed,value:null!=e.rule.upperLimit?e.rule.upperLimit:""})),c.a.createElement("td",{className:"align-top"},c.a.createElement("label",{htmlFor:"lowerThreshold"},"Lower threshold"),c.a.createElement("input",{type:"number",className:"form-control",id:"lowerThreshold",name:"lowerLimit",onChange:e.changed,value:null!=e.rule.lowerLimit?e.rule.lowerLimit:""})),c.a.createElement("td",{className:"align-top"},c.a.createElement("label",{htmlFor:"sweeepAccount"},"Sweeep Account"),c.a.createElement("input",{type:"text",className:"form-control",id:"sweeepAccount",name:"sweepAccount",onChange:e.changed,value:null!=e.rule.sweepAccount?e.rule.sweepAccount:""})),c.a.createElement("td",{className:"align-middle text-center"},c.a.createElement("i",{className:"fas fa-cog text-primary font-weight-bold"}),c.a.createElement("button",{type:"button",className:"btn btn-primary mb-2",onClick:e.save},"save")))))},k=(a(80),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e=sessionStorage.getItem("clientId");e?a.loadRules(e):a.setState({notification:"unable to load client id"})},a.loadRules=function(e){E()({method:"get",url:g.LIQUIDITY_URL+e,responseType:"json",headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){console.log("resp.data ",e.data),a.setState({loading:!1})}).catch(function(e){a.setState({loading:!1}),console.log("exception while loading rules ",e,e.request,e.message)})},a.changed=function(e,t){var n=e.target.name,c=a.state.rules.findIndex(function(e){return e.accountId===t}),l=Object(L.a)({},a.state.rules[c]);l[n]=e.target.value;var o=Object(C.a)(a.state.rules);o[c]=l,a.setState({rules:o})},a.state={loading:!0,rules:[{clientId:"C01",accountId:"1",accountCCY:"GBP",upperLimit:1e4,lowerLimit:1e3,sweepAccount:"GBP"},{clientId:"C01",accountId:"2",accountCCY:"USD",upperLimit:null,lowerLimit:null,sweepAccount:"GBP"},{clientId:"C01",accountId:"3",accountCCY:"EUR",upperLimit:null,lowerLimit:null,sweepAccount:"GBP"}]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"update",value:function(e,t){console.log("update ",t);var a=this.state.rules.findIndex(function(e){return e.accountId===t});console.log("this.state.rules[ruleIndex] ",this.state.rules[a])}},{key:"render",value:function(){var e=this;return!0===this.state.loading?c.a.createElement("div",null,"Loading..."):c.a.createElement("div",null,this.state.rules.map(function(t,a){return c.a.createElement(S,{key:a,rule:t,changed:function(a){e.changed(a,t.accountId)},save:function(a){e.update(a,t.accountId)}})}))}}]),t}(n.Component)),A=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p,{title:"Automated Liquidity Management",showLogout:!0}),c.a.createElement("div",{className:"main-container"},c.a.createElement(b,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3"},c.a.createElement(y,{id:2})),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(k,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(r.d,{history:r.e},c.a.createElement(r.c,{path:"/",component:function(e){var t=e.children;return c.a.createElement("div",{className:"container"},t)}},c.a.createElement(r.a,{component:v}),c.a.createElement(r.c,{path:"/account/details/:id",component:I}),c.a.createElement(r.c,{path:"/liquidity",component:A}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.ed1db8eb.chunk.js.map