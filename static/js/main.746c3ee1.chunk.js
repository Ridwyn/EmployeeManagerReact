(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(55)},32:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),s=a.n(r),c=a(57),m=(a(32),a(59)),o=a(58),i=a(6),u=a(7),p=a(9),h=a(8),d=a(10),f=a(11),E=a.n(f),v=a(56),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={item:e.item},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(v.a,{to:"/employee/".concat(this.state.item._id)},l.a.createElement("div",{className:"col s12 m6"},l.a.createElement("div",{className:"card blue-grey darken-1"},l.a.createElement("div",{className:"card-content white-text"},l.a.createElement("span",{className:"card-title"},this.state.item.firstname)),l.a.createElement("div",{className:"card-action"},l.a.createElement("span",{className:"amber-text text-darken-2"},this.state.item.role,"|"," "),l.a.createElement("span",{className:"amber-text text-darken-2",href:"#"},this.state.item.department)))))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={employees:[]},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.getEmployees()}},{key:"getEmployees",value:function(){var e=this;E.a.get("https://flaskemployeeapi.herokuapp.com/api/employees").then(function(t){e.setState({employees:t.data},function(){return console.log(e.state)})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.employees.map(function(e){return l.a.createElement(b,{key:e._id,item:e})});return l.a.createElement("div",null,l.a.createElement("h1",null,"Employees"),l.a.createElement("div",{className:"row"},e))}}]),t}(n.Component);function g(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About"),l.a.createElement("h5",null,"Welcome to the Employe manager app. Built with React Front-end and Flask with MongoDB Back-end. Feel free to add, manage and delete employees to this open source project."),l.a.createElement("div",{className:"center-text"},l.a.createElement("h6",null,l.a.createElement("span",null,"Portfolio:")," ",l.a.createElement("a",{href:"https://ridwynidriss.com",target:"_blank"},"ridwynidriss.com")),l.a.createElement("h6",null,"Code and Design by Ridwyn Idrissou")))}var N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={details:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.getEmployee()}},{key:"getEmployee",value:function(){var e=this,t=this.props.match.params.id;E.a.get("https://flaskemployeeapi.herokuapp.com/api/get/".concat(t)).then(function(t){e.setState({details:t.data})}).catch(function(e){console.log(e)})}},{key:"onDelete",value:function(){var e=this,t=this.props.match.params.id;E.a.delete("https://flaskemployeeapi.herokuapp.com/api/delete/".concat(t)).then(function(t){e.props.history.push("/"),console.log("deleted")}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(v.a,{className:"btn grey",to:"/"},"Back"),l.a.createElement("h1",null," ",this.state.details.firstname),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},l.a.createElement("img",{className:"activator",src:"",alt:""})),l.a.createElement("div",{className:"card-content"},l.a.createElement("h6",null,"Firstname: ",this.state.details.firstname),l.a.createElement("h6",null,"Lastname: ",this.state.details.lastname),l.a.createElement("h6",null,"Role: ",this.state.details.role),l.a.createElement("h6",null,"Department: ",this.state.details.department))),l.a.createElement(v.a,{className:"btn",to:"/employee/edit/".concat(this.state.details._id)},"Edit"),l.a.createElement("button",{onClick:this.onDelete.bind(this),className:"btn red right"},"Delete"),l.a.createElement("hr",null))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"addEmployees",value:function(e){var t=this;E.a.post("https://flaskemployeeapi.herokuapp.com/api/add",e,{headers:{"Content-Type":"application/json"}}).then(function(e){t.props.history.push("/")}).catch(function(e){return console.log(e)})}},{key:"onSubmit",value:function(e){var t={firstname:this.refs.firstname.value,lastname:this.refs.lastname.value,role:this.refs.role.value,department:this.refs.department.value};this.addEmployees(t),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v.a,{className:"btn grey",to:"/"},"Back"),l.a.createElement("h2",null,"Add a New Employee"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"firstname"},"Firstname"),l.a.createElement("input",{type:"text",className:"form-control",name:"firstname",ref:"firstname"})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"lastname"},"Lastname"),l.a.createElement("input",{type:"text",className:"form-control",name:"lastname",ref:"lastname"})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"role"},"Role"),l.a.createElement("input",{type:"text",className:"form-control",name:"role",ref:"role"})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"department"},"Department"),l.a.createElement("input",{type:"text",className:"form-control",name:"department",ref:"department"})),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),t}(n.Component),j=a(24),O=a(13),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={firstname:"",lastname:"",role:"",department:""},a.handleInputChange=a.handleInputChange.bind(Object(O.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.getEmployeeDetails()}},{key:"getEmployeeDetails",value:function(){var e=this,t=this.props.match.params.id;E.a.get("https://flaskemployeeapi.herokuapp.com/api/get/".concat(t)).then(function(t){e.setState({firstname:t.data.firstname,lastname:t.data.lastname,role:t.data.role,department:t.data.department}),console.log(e.state)}).catch(function(e){console.log(e)})}},{key:"updateEmployee",value:function(e){var t=this,a=this.props.match.params.id;E()({method:"put",url:"https://flaskemployeeapi.herokuapp.com/api/update/".concat(a),data:e,headers:{"Content-Type":"application/json"}}).then(function(e){t.props.history.push("/")}).catch(function(e){console.log(e)})}},{key:"onSubmit",value:function(e){var t={firstname:this.refs.firstname.value,lastname:this.refs.lastname.value,role:this.refs.role.value,department:this.refs.department.value};this.updateEmployee(t),e.preventDefault()}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(j.a)({},n,a))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v.a,{className:"btn grey",to:"/"},"Back"),l.a.createElement("h2",null,"Add a New Employee"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"firstname"},"Firstname"),l.a.createElement("input",{type:"text",className:"form-control",name:"firstname",ref:"firstname",value:this.state.firstname,onChange:this.handleInputChange.bind(this)})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"lastname"},"Lastname"),l.a.createElement("input",{type:"text",className:"form-control",name:"lastname",ref:"lastname",value:this.state.lastname,onChange:this.handleInputChange.bind(this)})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"role"},"Role"),l.a.createElement("input",{type:"text",className:"form-control",name:"role",ref:"role",value:this.state.role,onChange:this.handleInputChange.bind(this)})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"department"},"Department"),l.a.createElement("input",{type:"text",className:"form-control",name:"department",ref:"department",value:this.state.department,onChange:this.handleInputChange.bind(this)})),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),t}(n.Component);function x(){return l.a.createElement("main",null,l.a.createElement(m.a,null,l.a.createElement(o.a,{exact:!0,path:"/",component:y}),l.a.createElement(o.a,{exact:!0,path:"/about",component:g}),l.a.createElement(o.a,{exact:!0,path:"/employees/add",component:k}),l.a.createElement(o.a,{exact:!0,path:"/employee/edit/:id",component:w}),l.a.createElement(o.a,{exact:!0,path:"/employee/:id",component:N})))}var C=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"blue darken-3"},l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(v.a,{to:"/",className:"brand-logo left"},"Employee Manager"),l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(v.a,{to:"/"},"Employees",l.a.createElement("i",{className:"fa fa-users fa-2x"}))),l.a.createElement("li",null,l.a.createElement(v.a,{to:"/employees/add"},"Add Employee",l.a.createElement("i",{className:"fa fa-plus fa-2x"}))),l.a.createElement("li",null,l.a.createElement(v.a,{to:"/about"},"About",l.a.createElement("i",{className:"fa fa-question-circle fa-2x"})))))))}}]),t}(n.Component),F=function(){return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement("div",{className:"container"},l.a.createElement(x,null)),l.a.createElement(v.a,{to:"/employees/add",className:"btn-floating right btn-large red"},l.a.createElement("i",{className:"fa fa-plus fa-4x"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(c.a,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.746c3ee1.chunk.js.map