(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"2QXy":function(module,e,t){"use strict";t.d(e,"a",function(){return d});var n=t("VbXa"),r=t.n(n),a=t("sbe7"),s=t.n(a),o=t("CsdX"),i=t("6qMG"),m=t("6aOg"),c=t("rerG"),u=t("RWDQ"),l=t.n(u),d=function(e){function WorkspaceProgrammingSubmission(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).getLaunchUrl=function(){var e=t.props.launcher,n=e.courseId,r=e.itemId;return c.c(n,r).then(function(e){return e.launchUrl})},t}var t;return r()(WorkspaceProgrammingSubmission,e),WorkspaceProgrammingSubmission.prototype.render=function render(){var e=this.props.launcher.label;return s.a.createElement("div",{className:"rc-WorkspaceProgrammingSubmission"},s.a.createElement(m.a,{icon:s.a.createElement(i.a,{color:o.b.white}),label:e||l()("Work in Browser"),size:"sm",type:"primary",getLaunchUrl:this.getLaunchUrl}))},WorkspaceProgrammingSubmission}(a.Component)},"50LF":function(module,exports,e){var t=e("IVBn"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},"Bfb/":function(module,exports,e){var t=e("d3m6"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},DK2Q:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("w/1P"),s=t.n(a),o=t("eJMc"),i=t.n(o),m=t("sbe7"),c=t.n(m),u=function(e){function ProgrammingNavItem(){return e.apply(this,arguments)||this}var t;return r()(ProgrammingNavItem,e),ProgrammingNavItem.prototype.render=function render(){var e=this.props,t=e.isActive,n=e.isRight,r=e.link,a=s()("c-peer-review-navlist-item",{active:t,"c-peer-review-navlist-item-right":n});return c.a.createElement("li",{className:a},c.a.createElement(i.a,{className:"nostyle",to:r.path},r.title))},ProgrammingNavItem}(c.a.Component);e.a=u},EmvT:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("sbe7"),s=t.n(a),o=t("BBzL"),i=t.n(o),m=t("b+bd"),c=t("eZJ0"),u=t("GYhX"),l=t("IDuc"),d=function(e){function ProgrammingAssignmentInformation(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={showModal:!1},t.openModal=function(){t.setState({showModal:!0})},t.closeModal=function(){t.setState({showModal:!1})},t}var t;return r()(ProgrammingAssignmentInformation,e),ProgrammingAssignmentInformation.prototype.render=function render(){var e=this.props,t=e.isFirstProgrammingAssignment,n=e.courseSlug,r=this.state.showModal;if(t)return s.a.createElement("div",{className:"rc-ProgrammingAssignmentInformation"},s.a.createElement(c.a,{localStoreName:"seen-prog-".concat(n)},i()("It looks like this is your first programming assignment."),"  ",s.a.createElement(l.a,{trackingName:"show_programming_information",className:"button-link",onClick:this.openModal},i()("Learn more"))),r&&s.a.createElement(u.a,{modalName:"Programming Assignment Information",isPeerReview:!1,handleClose:this.closeModal}));return null},ProgrammingAssignmentInformation}(s.a.Component);e.a=Object(m.a)(d,["CourseStore"],function(e,t){var n=e.CourseStore,r=t.computedItem;return{isFirstProgrammingAssignment:n.isFirstProgrammingAssignment(r.id)}})},FXOV:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("sbe7"),s=t.n(a),o=t("VmRZ"),i=t("oLNK"),m=t("8cuT"),c=t.n(m),u=function(e){function MetaInfoArea(t,n){var r;return(r=e.call(this,t,n)||this).onProgressChange=function(){r.setState(r.getState())},r.onSubmissionSummariesUpdate=function(){r.setState(r.getState())},r.state=r.getState(),r}r()(MetaInfoArea,e);var t=MetaInfoArea.prototype;return t.componentDidMount=function componentDidMount(){var e=this.props.courseProgress;e&&e.on("refreshed",this.onProgressChange),i.a&&i.a.on("update",this.onSubmissionSummariesUpdate)},t.componentWillUnmount=function componentWillUnmount(){var e=this.props.courseProgress;e&&e.off("refreshed",this.onProgressChange),i.a.removeListener("update",this.onSubmissionSummariesUpdate)},t.getState=function getState(){var e=this.props,t=e.itemMetadata,n=e.courseProgress,r=e.itemGrade,a=t.get("id");return{itemGrade:r,itemProgress:n&&n.getItemProgress(a),submissionSummaries:i.a.submissionSummaries}},t.render=function render(){var e=this.props,t=e.computedItem,n=e.learnerAssignment,r=this.state,a=r.itemProgress,i=r.itemGrade,m=r.submissionSummaries;return a&&i?s.a.createElement(o.a,{computedItem:t,learnerAssignment:n,itemProgress:a,itemGrade:i,submissionSummaries:m}):null},MetaInfoArea}(s.a.Component);e.a=c()(["VerificationStore","ProgressStore","CourseViewGradeStore"],function(e,t){var n=e.VerificationStore,r=e.ProgressStore,a=e.CourseViewGradeStore,s=t.itemMetadata;return{courseProgress:r.courseProgress,verificationDisplay:n.getVerificationDisplay(),itemGrade:a.getItemGrade(s.getId())}})(u)},GYhX:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("sbe7"),s=t.n(a),o=t("17x9"),i=t.n(o),m=t("+2ZD"),c=t("JUgE"),u=t("HZHE"),l=function(e){function AssignmentInformationModal(){return e.apply(this,arguments)||this}var t;return r()(AssignmentInformationModal,e),AssignmentInformationModal.prototype.render=function render(){var e=this.props,t=e.modalName,n=e.handleClose,r=e.isPeerReview;return s.a.createElement(m.a,{modalName:t,allowClose:!0,handleClose:n},r?s.a.createElement(c.a,{cml:u.b}):s.a.createElement(c.a,{cml:u.c}))},AssignmentInformationModal}(s.a.Component);l.propTypes={modalName:i.a.string,isPeerReview:i.a.bool,handleClose:i.a.func},l.defaultProps={modalName:"Assignment Information"},e.a=l},HvJW:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("BDKN"),s=t.n(a),o=t("sbe7"),i=t.n(o),m=t("BBzL"),c=t.n(m),u=t("JXQv"),l=t.n(u),d=function(e){function ProgrammingDebugInfo(){return e.apply(this,arguments)||this}var t;return r()(ProgrammingDebugInfo,e),ProgrammingDebugInfo.prototype.render=function render(){var e=this.props,t=e.computedItem,n=e.courseSlug,r=e.courseId,a=new s.a("/teach/".concat(n,"/grading/assignment-grading/").concat(t.id)).addQueryParam("versionId",r).toString();return i.a.createElement("div",{className:"rc-ProgrammingDebugInfo"},i.a.createElement("h5",{className:"heading"},c()("Debug tools")),i.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},c()("View submissions for this assignment")))},ProgrammingDebugInfo}(i.a.Component);e.a=d},IVBn:function(module,exports,e){},J6eC:function(module,exports,e){var t=e("RqxD"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},JXQv:function(module,exports,e){var t=e("fnvf"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},LaLg:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("wd/R"),s=t.n(a),o=t("sbe7"),i=t.n(o),m=t("8cuT"),c=t.n(m),u=t("hbUA"),l=t("BBzL"),d=t.n(l),g=function(e){function ProgrammingDeadline(){return e.apply(this,arguments)||this}var t;return r()(ProgrammingDeadline,e),ProgrammingDeadline.prototype.render=function render(){var e=this.props,t=e.computedItem,n=t.deadline,r=t.isCumulativeGraded,a=e.isEnrolled;if(null==n)return null;var o=s()().isAfter(n);return i.a.createElement("table",{className:"c-deadline-information"},i.a.createElement("tbody",null,a&&i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("strong",null,d()("Deadline"))),o&&i.a.createElement("td",null,i.a.createElement("div",null,d()("The assignment was due on")," ",Object(u.a)(n)),!r&&i.a.createElement("div",{className:"caption-text color-text-secondary"},d()("You can still pass this assignment before the course ends."))),!o&&i.a.createElement("td",null,i.a.createElement("div",null,d()("Pass this assignment by")," ",Object(u.a)(n))))))},ProgrammingDeadline}(i.a.Component);e.a=c()(["SessionStore"],function(e){var t;return{isEnrolled:e.SessionStore.isEnrolled()}})(g)},NMZe:function(module,exports,e){var t=e("iMpf"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},RWDQ:function(module,exports,e){var t=e("i0ok"),n=t.default?t.default:{},r,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},RqxD:function(module,exports,e){},"V+UW":function(module,exports,e){var t=e("zASh"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var r={transform:void 0},a=e("aET+")(t,r);t.locals&&(module.exports=t.locals)},VmRZ:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("sbe7"),s=t.n(a),o=t("VYij"),i=t.n(o),m=t("y1LI"),c=t("us00"),u=t("kvW3"),l=t("BBzL"),d=t.n(l),g=t("50LF"),p=t.n(g),f=t("arny"),v=u.d.FormattedMessage,h=function(e){function Status(){return e.apply(this,arguments)||this}r()(Status,e);var t=Status.prototype;return t.renderLatePenalty=function renderLatePenalty(){var e=this.props.itemGrade;return s.a.createElement(c.a,{tooltipLabel:"Penalty of ".concat(100*e.getLatePenaltyRatio(),"% applied")})},t.renderTryAgain=function renderTryAgain(){var e=this.props,t=e.computedItem,n=t.isCumulativeGraded,r=t.isPassRequiredForCourse,a=e.learnerAssignment,o=e.itemGrade,i,m=e.submissionSummaries.find(function(e){return e.get("isBestSubmission")||e.get("isUsedForGrading")}),c=o.hasLatePenalty(),u=m&&m.get("score")||0,l=n&&r,g=n&&!r;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(v,{message:d()("{status} · {bestScore, number}/{maxScore, number} points earned"),bestScore:u,status:g?d()("Graded"):d()("Try Again"),maxScore:null==a?void 0:a.maxScore}),c&&this.renderLatePenalty()),(!n||l)&&s.a.createElement("div",null,s.a.createElement(v,{message:d()("You must earn {passingScore}/{maxScore} points to pass."),passingScore:null==a?void 0:a.passingScore,maxScore:null==a?void 0:a.maxScore})))},t.renderStatus=function renderStatus(){var e=this.props,t=e.learnerAssignment,n=e.itemProgress,r=e.itemGrade,a=e.submissionSummaries,o=e.computedItem,c=o.isCumulativeGraded,u=o.isPassRequiredForCourse;if(!a||!t)return null;var l=t.maxScore,g=t.passingScore,p=a.find(function(e){return e.get("isBestSubmission")||e.get("isUsedForGrading")}),f=r.hasLatePenalty();if(p&&i()(["Started","Completed"]).contains(n.get("progressState"))){var h,b=c&&u,S=c&&!u;return g&&p.get("score")>=g?s.a.createElement("div",null,(!c||b)&&s.a.createElement("span",{className:"is-used-for-grade-indicator"},s.a.createElement(m.a,{name:"check"})),s.a.createElement(v,{message:S?d()("Graded"):d()("Passed")}),s.a.createElement("span",null," · "),s.a.createElement(v,{message:d()("{score}/{maxScore} points"),score:p.get("score"),maxScore:l}),f&&this.renderLatePenalty()):this.renderTryAgain()}return p&&g&&p.get("score")<g?this.renderTryAgain():s.a.createElement(v,{message:d()("You have not submitted. You must earn {passingScore}/{maxScore} points to pass."),passingScore:g,maxScore:l})},t.render=function render(){return s.a.createElement("div",{className:"rc-Status"},this.renderStatus())},Status}(s.a.Component);e.a=h},YOFi:function(module,e,t){"use strict";t.r(e),t.d(e,"ProgrammingItem",function(){return x});var n=t("VbXa"),r=t.n(n),a=t("hbUA"),s=t("K2XA"),o=t("8cuT"),i=t.n(o),m=t("wiyT"),c=t.n(m),u=t("sbe7"),l=t.n(u),d=t("sQ/U"),g=t("LaLg"),p=t("xqyN"),f=t("FXOV"),v=t("HvJW"),h=t("oLNK"),b=t("jYVy"),S=t("6O2X"),E=t("EmvT"),y=t("2QXy"),I=t("rerG"),P=t("V+UW"),N=t.n(P),A=t("J6eC"),w=t.n(A),C=t("Bfb/"),L=t.n(C),x=function(e){function ProgrammingItem(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={learnerAssignment:null,labLauncher:null},t}r()(ProgrammingItem,e);var t=ProgrammingItem.prototype;return t.componentDidMount=function componentDidMount(){this.fetchData()},t.fetchData=function fetchData(){var e=this,t=this.props,n=t.courseId,r=t.courseSlug,a=t.computedItem,s=a.id,o=a.contentSummary.typeName,i=c()(null);"programming"!==o&&(i=Object(b.a)({itemId:s,courseId:n,courseSlug:r}));var m=c()(null);["gradedProgramming","ungradedProgramming"].includes(o)&&(m=h.a.load({userId:d.a.get().id,courseId:n,courseSlug:r,itemId:s,itemTypeName:o})),c.a.all([i,m]).spread(function(t){var r;return"workspace"===t.submissionBuilderSchema.get("typeName")?Object(I.b)(n,s).then(function(n){e.setState({learnerAssignment:t,labLauncher:n})}):c()().then(function(){e.setState({learnerAssignment:t})})})},t.render=function render(){var e=this.props,t=e.computedItem,n=e.courseId,r=e.courseSlug,o=e.itemMetadata,i=e.children,m=this.state,c=m.learnerAssignment,u=m.labLauncher;return l.a.createElement(s.a,{courseId:n,feedbackType:"programming",computedItem:t,className:"rc-ProgrammingItem body-1-text"},l.a.createElement("div",{className:"programming-item-content"},l.a.createElement("div",{className:"c-peer-review c-body-container bt3-container-fluid styleguide"},l.a.createElement("div",{className:"c-peer-review-body"},l.a.createElement("div",{className:"c-peer-review-header"},l.a.createElement("div",{className:"horizontal-box"},l.a.createElement("div",{className:"flex-1"},l.a.createElement("h2",{className:"c-peer-review-title headline-4-text"},Object(a.f)(t),": ",t.name))),l.a.createElement("div",{className:"c-peer-review-state bt3-row"},l.a.createElement("div",{className:"bt3-col-md-12"},["gradedProgramming","ungradedProgramming"].includes(t.contentSummary.typeName)&&l.a.createElement(f.a,{computedItem:t,itemMetadata:o,learnerAssignment:c}))),S.a.hasAdminPrivileges()&&l.a.createElement(v.a,{courseSlug:r,computedItem:t,courseId:n}),l.a.createElement(E.a,{courseSlug:r,computedItem:t})),l.a.createElement(g.a,{computedItem:t}),u&&l.a.createElement("div",{className:"launcher-container"},l.a.createElement(y.a,{launcher:u})),l.a.createElement(p.a,{courseId:n,courseSlug:r,computedItem:t}),i&&l.a.cloneElement(i,{itemMetadata:o})))))},ProgrammingItem}(l.a.Component);e.default=i()(["CourseStore"],function(e){var t=e.CourseStore;return{courseId:t.getCourseId(),courseSlug:t.getCourseSlug()}})(x)},d3m6:function(module,exports,e){},eZJ0:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("sbe7"),s=t.n(a),o=t("17x9"),i=t.n(o),m=t("y1LI"),c=t("QjkW"),u=t("Yy0d"),l=t.n(u),d=t("NMZe"),g=t.n(d),p=function(e){function AlertBanner(t){var n;return(n=e.call(this,t)||this).onClose=function(){var e=n.props.localStoreName;n.setState({show:!1}),e&&c.a.set(e,!0)},n.state={show:!t.localStoreName||!c.a.get(t.localStoreName)},n}var t;return r()(AlertBanner,e),AlertBanner.prototype.render=function render(){var e=this.props,t=e.iconName,n=e.children,r;if(this.state.show)return s.a.createElement("div",{className:"rc-AlertBanner horizontal-box align-items-vertical-center","aria-label":l()("Alert banner")},t&&s.a.createElement(m.a,{name:t}),!t&&s.a.createElement("div",{className:"info-icon horizontal-box align-items-absolute-center"},s.a.createElement("span",{className:"caption-text"},"i"))," ",s.a.createElement("div",{className:"flex-1"},n),s.a.createElement("button",{type:"button",className:"nostyle",onClick:this.onClose,"aria-label":l()("Close")},s.a.createElement(m.a,{name:"close"})));return null},AlertBanner}(s.a.Component);p.propTypes={localStoreName:i.a.string,iconName:i.a.string,children:i.a.node},e.a=p},fnvf:function(module,exports,e){},i0ok:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},iMpf:function(module,exports,e){},oLNK:function(module,e,t){"use strict";var n=t("VYij"),r=t.n(n),a=t("+203"),s=t.n(a),o=t("HpDP");function onLoadSuccess(e){i.submissionSummaries=e,i.emit("update",e)}function onLoadError(e){i.error=e,i.emit("updateError",e)}function SubmissionSummariesStore(){this.submissionSummaries=null}SubmissionSummariesStore.prototype=r.a.extend({},s.a.prototype,{load:function load(e){var t=e.itemId,n=e.itemTypeName,r=e.courseId,a=e.courseSlug,s=e.userId;Object(o.a)({itemId:t,itemTypeName:n,courseId:r,courseSlug:a,userId:s}).then(onLoadSuccess,onLoadError).done()}});var i=new SubmissionSummariesStore;e.a=i},xqyN:function(module,e,t){"use strict";var n=t("VbXa"),r=t.n(n),a=t("+LJP"),s=t("sbe7"),o=t.n(s),i=t("VYij"),m=t.n(i),c=t("DK2Q"),u=t("Akn8"),l=t("7jZ/"),d=t("eJW0"),g=t.n(d),p=function(e){function ProgrammingNavigation(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).updateLinks=function(e){var n=t.props.computedItem;return m()(e).extend({path:u.a.join(n.resourcePath,e.url),subview:e.subview||e.url})},t}var t;return r()(ProgrammingNavigation,e),ProgrammingNavigation.prototype.render=function render(){var e=this.props,t=e.courseId,n=e.courseSlug,r=e.computedItem.id,a=e.slug,s=e.router,i=null;i=s.isActive({name:"programmingDefault",params:{item_id:r,slug:a,courseSlug:n}},!0)||s.isActive({name:"programmingInstructions",params:{item_id:r,slug:a,courseSlug:n}})?"instructions":s.isActive({name:"programmingSubmission",params:{item_id:r,slug:a,courseSlug:n}})?"submission":"discussions";var m=[{url:"",subview:"instructions",title:g()("Instructions")},{url:"submission",subview:"submission",title:g()("My submission")}],u=Object(l.a)(t)?[]:[{url:"discussions",title:g()("Discussions")}];return o.a.createElement("nav",{className:"c-peer-review-nav bt3-row"},o.a.createElement("div",{className:"bt3-col-md-12"},o.a.createElement("div",{className:"c-peer-review-navlist-container bt3-clearfix"},o.a.createElement("ol",{className:"c-peer-review-navlist inline bt3-pull-left"},m.map(this.updateLinks).map(function(e){return o.a.createElement(c.a,{link:e,isRight:!1,key:e.subview,isActive:e.subview===i})}),u.map(this.updateLinks).map(function(e){return o.a.createElement(c.a,{link:e,isRight:!0,key:e.subview,isActive:e.subview===i})})))))},ProgrammingNavigation}(o.a.Component);e.a=Object(a.a)(function(e){return{router:e,slug:e.params.slug}})(p)},zASh:function(module,exports,e){}}]);
//# sourceMappingURL=en.45.a4a15d1cb00bf49ed4af.js.map