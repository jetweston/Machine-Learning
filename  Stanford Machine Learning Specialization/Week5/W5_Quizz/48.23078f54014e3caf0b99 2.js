(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"+GB+":function(module,e,t){"use strict";t.r(e),t.d(e,"ProgrammingInstructions",function(){return p});var n=t("VbXa"),r=t.n(n),a=t("sbe7"),o=t.n(a),i=t("wiyT"),s=t.n(i),u=t("8WNh"),c=t("X6TH"),l=t("jYVy"),m=t("k6K2"),d=t("rerG"),g=t("+9K8"),p=function(e){function ProgrammingInstructions(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isLoaded:!1,instructions:null,learnerAssignment:null,labLauncher:null},t}r()(ProgrammingInstructions,e);var t=ProgrammingInstructions.prototype;return t.componentDidMount=function componentDidMount(){this.fetchData()},t.fetchData=function fetchData(){var e=this,t=this.props.itemMetadata,n=t.get("id"),r=t.get("course.id");if("programming"===t.getTypeName()){var a=Object(c.a)({itemMetadata:t,courseId:r,itemId:n});s()(a).then(function(t){e.setState({isLoaded:!0,instructions:t})})}else{var o=Object(l.a)({itemId:n,courseId:r,courseSlug:t.get("course.slug")});s()(o).then(function(t){var a;return"workspace"===t.submissionBuilderSchema.get("typeName")?Object(d.b)(r,n).then(function(n){e.setState({isLoaded:!0,instructions:t.submissionLearnerSchema.get("instructions"),learnerAssignment:t,labLauncher:n})}):s()().then(function(){e.setState({isLoaded:!0,instructions:t.submissionLearnerSchema.get("instructions"),learnerAssignment:t})})}).done()}},t.render=function render(){var e=this.props.itemMetadata,t=this.state,n=t.isLoaded,r=t.instructions,a=t.learnerAssignment,i=t.labLauncher;return o.a.createElement("div",{className:"rc-ProgrammingInstructions"},n?o.a.createElement(m.a,{instructions:r,itemMetadata:e,labLauncher:i,learnerAssignment:a}):o.a.createElement(u.a,null))},ProgrammingInstructions}(a.Component);e.default=Object(g.a)(p)},"1vPD":function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("sbe7"),o=t.n(a),i=t("sQ/U"),s=t("BBzL"),u=t.n(s),c=t("4+Xa"),l=function(e){function TokenBox(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={secret:"",status:"empty"},t.handleClickGenerateToken=function(e){e.preventDefault(),t.generateToken()},t.handleClickGetToken=function(e){e.preventDefault(),t.getToken()},t}r()(TokenBox,e);var t=TokenBox.prototype;return t.componentDidMount=function componentDidMount(){this.getToken()},t.getToken=function getToken(){var e=this,t=this.props.itemMetadata;return this.setState({status:"getting"}),c.a.get({itemId:t.get("id"),courseId:t.get("course.id"),courseSlug:t.get("course.slug")}).then(function(t){var n=t.elements[0];e.setState({secret:n.token||n.secret,status:"displaying"})},function(t){return 404===t.status?e.generateToken():e.setState({status:"error"})}).done()},t.generateToken=function generateToken(){var e=this,t=this.props.itemMetadata;return this.setState({status:"generating"}),c.a.newToken({itemId:t.get("id"),courseId:t.get("course.id"),courseSlug:t.get("course.slug")}).then(function(t){var n=t.body.elements[0];e.setState({secret:n.token||n.secret,status:"displaying"})}).done()},t.render=function render(){var e=this.state,t=e.secret,n=e.status;return o.a.createElement("div",{className:"rc-TokenBox well"},o.a.createElement("h5",{className:"headline-2-text"},u()("How to submit")),o.a.createElement("p",null,u()("Copy the token below and run the submission script included in the assignment download. When prompted, use your email address "),o.a.createElement("b",null,i.a.get().email_address),"."),o.a.createElement("div",{className:"token-generator bt3-text-center"},"empty"===n&&o.a.createElement("p",null,u()("no token")),"getting"===n&&o.a.createElement("p",null,u()("Getting token...")),"generating"===n&&o.a.createElement("p",null,u()("Generating token...")),"displaying"===n&&o.a.createElement("div",null,o.a.createElement("h5",{className:"headline-2-text","data-js":"secret"},t),o.a.createElement("p",null,o.a.createElement("button",{type:"button",onClick:this.handleClickGenerateToken},u()("Generate new token")))),"error"===n&&o.a.createElement("div",null,o.a.createElement("p",null,u()("There was an error getting your token:")),o.a.createElement("button",{type:"button",onClick:this.handleClickGetToken},u()("Click here to try to get it again")))),o.a.createElement("p",null,u()("Your submission token is unique to you and should not be shared with anyone. You may submit as many times as you like.")))},TokenBox}(o.a.Component);e.a=l},"4+Xa":function(module,e,t){"use strict";var n=t("eBhw"),r="onDemandProgrammingTokens.v1",a={get:function get(e){var t=e.itemId,a=e.courseId,o=e.courseSlug,i;return new n.a({itemId:t,courseId:a,courseSlug:o}).getWithCourseItemId(r)},newToken:function newToken(e){var t=e.itemId,a=e.courseId,o=e.courseSlug,i,s=null,u={courseId:a,itemId:t};return new n.a({itemId:t,courseId:a,courseSlug:o}).create(r,u,null,!1)}};e.a=a;var o=a.get,i=a.newToken},"4b+W":function(module,e,t){"use strict";var n=t("PDuk"),r=t.n(n),a=t("BDKN"),o=t.n(a),i=t("LeYt");e.a=function(e){var t=e.courseId,n=e.itemId,a=r.a.tupleToStringKey([t,n]),s=new o.a(a);return i.a.get(s.toString())}},"52k5":function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("wd/R"),o=t.n(a),i=t("sbe7"),s=t.n(i),u=t("17x9"),c=t.n(u),l=t("VYij"),m=t.n(l),d=t("CA+Q"),g=t("+2ZD"),p=t("sQ/U"),h=t("F9Z8"),f=t("O+1n"),k=t("hidG"),v=t("kvW3"),I=t("BBzL"),b=t.n(I),T=t("LMJJ"),y=t("OAHX"),w=t("tOcQ"),S=t.n(w),E=t("hOpA"),C=t.n(E),A={gradedProgramming:T.a,ungradedProgramming:y.a},N=function(e){function ScriptTokenBox(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={agreementComplete:!1,currentTime:Date.now(),error:null,fullName:"",generatingToken:!1,isVerifying:!1,state:"ready",token:{}},t.onSubmitHonorCodeAgreement=function(){var e=t.state.fullName;t.setState({generatingToken:!0}),Object(f.a)().then(function(n){Object(f.b)(n,e).then(function(e){t.generateToken(e.get("id")),t.setState({isVerifying:!1,generatingToken:!1,agreementComplete:!1})})})},t.onTokenNotFound=function(){t.isGraded()?t.setState({state:"displaying"}):t.generateToken()},t.onTokenGenerated=function(){t.loadToken()},t.onFailedTokenGeneration=function(e){t.setState({state:"error",error:e})},t.onVerificationModalClose=function(){t.setState({isVerifying:!1})},t.onReceiveToken=function(e){t.setState({state:"displaying",token:e})},t.onHonorCodeAgreementComplete=function(e){t.setState({agreementComplete:!0,fullName:e})},t.onHonorCodeAgreementIncomplete=function(){t.setState({agreementComplete:!1})},t.updateCurrentTime=function(){t.setState({currentTime:Date.now()})},t.verifyAndGenerateToken=function(e){e&&e.preventDefault(),t.isGraded()?t.setState({isVerifying:!0}):t.generateToken()},t.api={},t.currentTimeInterval=null,t}r()(ScriptTokenBox,e);var t=ScriptTokenBox.prototype;return t.componentDidMount=function componentDidMount(){var e,t=this.props.itemMetadata.getTypeName();this.api=A[t],Object(k.a)(this.api,"Unknown assignment type: "+t),this.currentTimeInterval=window.setInterval(this.updateCurrentTime,1e3),this.loadToken()},t.componentWillUnmount=function componentWillUnmount(){this.currentTimeInterval&&clearInterval(this.currentTimeInterval)},t.loadToken=function loadToken(){this.setState({state:"getting"});var e=this.props.itemMetadata,t=e.get("id"),n=e.get("course").get("id"),r=e.get("course").get("slug");this.api.get({itemId:t,courseId:n,courseSlug:r}).then(d.a).then(function(e){return e.elements[0]}).then(this.onReceiveToken,this.onTokenNotFound).done()},t.generateToken=function generateToken(e){this.setState({state:"generating"});var t=this.props.itemMetadata,n=t.get("id"),r=t.get("course").get("id"),a=t.get("course").get("slug");this.api.newToken({itemId:n,courseId:r,courseSlug:a,verifiableId:e}).then(this.onTokenGenerated,this.onFailedTokenGeneration)},t.isGraded=function isGraded(){var e;return"gradedProgramming"===this.props.itemMetadata.getTypeName()},t.render=function render(){var e=this.state,t=e.state,n=e.token,r=e.currentTime,a=e.isVerifying,i=e.error,u=e.agreementComplete,c=e.generatingToken,l=n&&n.expiresAt-r<=0;return s.a.createElement("div",{className:"rc-ScriptTokenBox well card-rich-interaction"},s.a.createElement("h3",{className:"head-2-text"},b()("How to submit")),s.a.createElement("p",null,s.a.createElement(v.b,{message:"Copy the token below and run the submission script included in the assignment download. When prompted, use your email address {userEmailAddress}.",userEmailAddress:s.a.createElement("b",null,p.a.get().email_address)})),s.a.createElement("div",{className:"token-area bt3-text-center"},m()(["getting","generating"]).contains(t)&&s.a.createElement("p",null,b()("Loading token...")),m()(["displaying"]).contains(t)&&s.a.createElement("div",null,n&&s.a.createElement("div",null,(!n.expiresAt||!l)&&s.a.createElement("h4",null,n.secret),n.expiresAt&&!l&&s.a.createElement("p",{className:"caption-text"},s.a.createElement(v.b,{message:b()("This token expires in {expirationTime}"),expirationTime:o()(n.expiresAt).fromNow(!0)})),n.expiresAt&&l&&s.a.createElement("p",{className:"caption-text"},b()("Your token expired"))),s.a.createElement("p",null,s.a.createElement("button",{className:"button-link",type:"button",onClick:this.verifyAndGenerateToken},b()("Generate new token")))),m()(["error"]).contains(t)&&s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement(v.b,{message:b()("There was an error getting your token: {error}"),error:i})," ",s.a.createElement("button",{className:"button-link",type:"button",onClick:this.verifyAndGenerateToken},b()("Click here to try to get it again"))))),s.a.createElement("p",null,b()("Your submission token is unique to you and should not be shared with anyone.\n          You may submit as many times as you like.")),a&&s.a.createElement(g.a,{className:"honor-code-modal",modalName:"Programming Assignment Token",handleClose:this.onVerificationModalClose},s.a.createElement("h2",{className:"head-2-text"},b()("Honor Code")),s.a.createElement(h.a,{onAgreementComplete:this.onHonorCodeAgreementComplete,onAgreementIncomplete:this.onHonorCodeAgreementIncomplete,isShownInsideModal:!0}),s.a.createElement("div",{className:"align-right"},s.a.createElement("button",{className:"agreement-continue-button primary",type:"button",disabled:!u||c,onClick:this.onSubmitHonorCodeAgreement},c?b()("Loading..."):b()("Continue")))))},ScriptTokenBox}(s.a.Component);N.contextTypes={fluxibleContext:c.a.object.isRequired},e.a=N},"7FO1":function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("sbe7"),o=t.n(a),i=t("sQ/U"),s=t("7mPg"),u=t("6aOg"),c=t("BBzL"),l=t.n(c),m=function(e){function SleuthWorkspaceButton(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).getLaunchUrl=function(){var e=t.props,n=e.templateId,r=e.itemId,a=i.a.get().id;return t.workspacePromise||(t.workspacePromise=Object(s.a)(a,n)),t.workspacePromise.then(function(e){var t=e.id;return Object(s.b)(t,r)}).then(function(e){return e.url})},t.workspacePromise=void 0,t}var t;return r()(SleuthWorkspaceButton,e),SleuthWorkspaceButton.prototype.render=function render(){return o.a.createElement(u.a,{appName:l()("Sleuth Game"),getLaunchUrl:this.getLaunchUrl})},SleuthWorkspaceButton}(a.Component);e.a=m},"7mPg":function(module,e,t){"use strict";t.d(e,"a",function(){return h}),t.d(e,"b",function(){return f});var n=t("wiyT"),r=t.n(n),a=t("BDKN"),o=t.n(a),i=t("DnuM"),s=t("sQ/U"),u=t("PDuk"),c=t.n(u),l=Object(i.a)("/api/workspaceMetadata.v1",{type:"rest"}),m=Object(i.a)("/api/workspaceLaunch.v1",{type:"rest"}),d=function checkedPromise(e){return r()(e).done(),e},g=function getWorkspace(e,t){var n=(new o.a).addQueryParam("q","user").addQueryParam("userId",String(e)).addQueryParam("templateId",t);return d(l.get(n.toString()).then(function(e){return e&&e.elements&&e.elements[0]}))},p=function createWorkspace(e,t){var n=new o.a,r={templateId:t,owners:[e],publishDestinations:[]};return d(l.post(n.toString(),{data:r}).then(function(e){return e&&e.elements&&e.elements[0]}))},h=function getOrCreateWorkspace(e,t){return d(g(e,t).then(function(n){return n||p(e,t)}))},f=function getWorkspaceLaunchUrl(e,t){var n=Object(u.tupleToStringKey)([s.a.get().id,e]),r=(new o.a).addQueryParam("action","launch").addQueryParam("userWorkspaceId",n).addQueryParam("itemId",t);return d(m.post(r.toString()))}},LMJJ:function(module,e,t){"use strict";var n=t("sQ/U"),r=t("eBhw"),a="onDemandProgrammingGradedScriptTokens.v1",o={get:function get(e){var t=e.itemId,n=e.courseId,o=e.courseSlug,i;return new r.a({itemId:t,courseId:n,courseSlug:o}).getWithUserCourseItemId(a,{fields:["secret","issuedTo","issuedAt","expiresAt"]})},newToken:function newToken(e){var t=e.itemId,o=e.courseId,i=e.courseSlug,s=e.verifiableId,u=new r.a({itemId:t,courseId:o,courseSlug:i}),c=null,l={courseId:o,itemId:t,learnerId:n.a.get().id,verifiableId:s||null};return u.create(a,l,null,!1)}};e.a=o;var i=o.get,s=o.newToken},LeYt:function(module,e,t){"use strict";var n=t("CWYE");e.a=Object(n.a)("/api/onDemandProgrammingImmediateInstructions.v1/",{type:"rest"})},OAHX:function(module,e,t){"use strict";var n=t("sQ/U"),r=t("eBhw"),a="onDemandProgrammingUngradedScriptTokens.v1",o={get:function get(e){var t=e.itemId,n=e.courseId,o=e.courseSlug,i;return new r.a({itemId:t,courseId:n,courseSlug:o}).getWithUserCourseItemId(a,{fields:["secret","issuedTo","issuedAt","expiresAt"]})},newToken:function newToken(e){var t=e.itemId,o=e.courseId,i=e.courseSlug,s=new r.a({itemId:t,courseId:o,courseSlug:i}),u=null,c={courseId:o,itemId:t,learnerId:n.a.get().id};return s.create(a,c,null,!1)}};e.a=o;var i=o.get,s=o.newToken},X6TH:function(module,e,t){"use strict";var n=t("wiyT"),r=t.n(n),a=t("CA+Q"),o=t("sQ/U"),i=t("4b+W"),s=t("/KA1");e.a=function(e){return o.a.isAuthenticatedUser()?Object(i.a)(e).then(a.a).then(function(e){var t=e.elements[0];return new s.a(t,{parse:!0})}):r()({})}},aN20:function(module,exports,e){},hOpA:function(module,exports,e){var t=e("yVVM"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},k6K2:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("sbe7"),o=t.n(a),i=t("BBzL"),s=t.n(i),u=t("1vPD"),c=t("52k5"),l=t("uMx8"),m=t("JUgE"),d=t("7FO1"),g=function(e){function Instructions(){return e.apply(this,arguments)||this}var t;return r()(Instructions,e),Instructions.prototype.render=function render(){var e=this.props,t=e.instructions,n=e.itemMetadata,r=e.labLauncher,a=e.learnerAssignment,i=n.get("course.id"),g=n.get("id"),p=Object(l.a)(i,g),h=n.getTypeName(),f=Object(l.b)(i,g),k="programming"===h,v=("gradedProgramming"===h||"ungradedProgramming"===h)&&"script"===(null==a?void 0:a.submissionBuilderSchema.get("typeName")),I,b=!k&&!v&&!(f||r);return o.a.createElement("div",{className:"rc-Instructions c-programming-instructions bt3-row"},o.a.createElement("div",{className:"bt3-col-md-8"},o.a.createElement("div",{className:"c-programming-instructions-content"},t&&o.a.createElement(m.a,{cml:t.get("assignmentInstructions")}))),o.a.createElement("div",{className:"bt3-col-md-4"},p&&p.templateId&&o.a.createElement(d.a,{templateId:p.templateId,itemId:g}),k&&o.a.createElement(u.a,{itemMetadata:n}),v&&o.a.createElement(c.a,{itemMetadata:n}),b&&o.a.createElement("div",{className:"well theme-light"},o.a.createElement("h3",{className:"c-title"},s()("How to submit")),o.a.createElement("p",null,s()('When you\'re ready to submit, you can upload files for each part of the assignment on the "My submission" tab.')))))},Instructions}(o.a.Component);e.a=g},tOcQ:function(module,exports,e){var t=e("aN20"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},uMx8:function(module,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return s});var n=t("MVZn"),r=t.n(n),a=t("KMW/"),o={templateId:"IIknfCCpTv2JJ3wgqU79KA"},i=function getSleuthConfig(e,t){var n,i=(a.a.get("Workspaces","sleuthAssignments")||[]).find(function(n){return n.courseId===e&&n.itemId===t});return i?r()({},o,i):null},s=function isSleuthAssignment(e,t){return!!i(e,t)}},yVVM:function(module,exports,e){}}]);
//# sourceMappingURL=48.23078f54014e3caf0b99.js.map