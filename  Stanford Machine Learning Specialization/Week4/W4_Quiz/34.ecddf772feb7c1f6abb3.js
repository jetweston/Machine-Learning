(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"/m9Y":function(module,exports,e){var r=e("wrXG"),t;"string"==typeof r&&(r=[[module.i,r,""]]);var n={transform:void 0},o=e("aET+")(r,n);r.locals&&(module.exports=r.locals)},"21NG":function(module,e,r){"use strict";var t=r("VbXa"),n=r.n(t),o=r("w/1P"),a=r.n(o),s=r("17x9"),c=r.n(s),i=r("sbe7"),u=r.n(i),d=r("+2ZD"),l=r("8cuT"),p=r.n(l),f=r("vpZN"),m=r("37kS"),h=r.n(m),R=r("myvE"),g=r.n(R),v=function(e){function LockedContentModal(){return e.apply(this,arguments)||this}var r;return n()(LockedContentModal,e),LockedContentModal.prototype.render=function render(){var e=this.props.courseRootPath,r=a()("rc-LockedContentModal","styleguide",this.props.className);return u.a.createElement("div",{className:r},u.a.createElement(d.a,{allowClose:!1,modalName:h()("This content is locked")},u.a.createElement("h3",{className:"title"},h()("This content is locked.")),u.a.createElement("p",null,h()("You can access this content by enrolling in an active session of this course. To enroll or check active dates for upcoming sessions, visit the course description page.")),u.a.createElement("div",{className:"horizontal-box align-items-right wrap"},u.a.createElement("a",{href:Object(f.a)(e)},u.a.createElement("button",{className:"primary"},h()("View sessions"))))))},LockedContentModal}(u.a.Component);v.propTypes={className:c.a.string,courseRootPath:c.a.string},e.a=p()(v,["CourseStore"],function(e){var r;return{courseRootPath:e.CourseStore.getCourseRootPath()}})},ijKk:function(module,e,r){"use strict";r.d(e,"a",function(){return p});var t=r("wiyT"),n=r.n(t),o=r("VYij"),a=r.n(o),s=r("CWYE"),c=r("BDKN"),i=r.n(c),u=r("WMT2"),d=Object(s.a)("/api/onDemandReferences.v1",{type:"rest"}),l=function hydrateResponse(e){return a()(e.elements).each(function(r){var t=r.content["org.coursera.ondemand.reference.AssetReferenceContent"].assetId,n=a()(e.linked["openCourseAssets.v1"]).where({id:t});n.length&&(r.content=n[0])})},p=function getReference(e,r){var t=r.referenceShortId,o=r.courseId,a=e.getStore(u.a).getCachedReference(t);if(!a){var s=(new i.a).addQueryParam("courseId",o).addQueryParam("q","shortId").addQueryParam("shortId",t).addQueryParam("fields","name,shortId,slug,content").addQueryParam("includes","assets"),c=n()(d.get(s.toString())).then(function(r){var t=l(r);e.dispatch("LOAD_REFERENCE",t[0])});return c.done(),c}e.dispatch("LOAD_REFERENCE",a)}},myvE:function(module,exports,e){var r=e("rINV"),t;"string"==typeof r&&(r=[[module.i,r,""]]);var n={transform:void 0},o=e("aET+")(r,n);r.locals&&(module.exports=r.locals)},rINV:function(module,exports,e){},"v+QE":function(module,e,r){"use strict";r.r(e);var t=r("VbXa"),n=r.n(t),o=r("17x9"),a=r.n(o),s=r("sbe7"),c=r.n(s),i=r("8cuT"),u=r.n(i),d=r("sQ/U"),l=r("JUgE"),p=r("ijKk"),f=r("21NG"),m=r("+eFp"),h=r.n(m),R=r("/m9Y"),g=r.n(R),v=function(e){function CourseReferencesPage(r,t){var n;return(n=e.call(this,r,t)||this).componentWillReceiveProps=function(){n.getData()},n.getData=function(){var e=n.props.courseId,r=n.context.router.params;r.reference_id&&n.waitingForReferenceId!==r.reference_id&&(n.waitingForReferenceId=r.reference_id,n.context.executeAction(p.a,{courseId:e,referenceShortId:r.reference_id}))},n.getData(),n}n()(CourseReferencesPage,e);var r=CourseReferencesPage.prototype;return r.renderLockedModal=function renderLockedModal(){return c.a.createElement(h.a,{transitionName:"LockedContentModal",transitionAppear:!0,transitionEnterTimeout:500,transitionAppearTimeout:500,transitionLeaveTimeout:500},c.a.createElement(f.a,{key:"LockedContentModal"}))},r.render=function render(){var e=!d.a.isAuthenticatedUser()||!this.props.isEnrolled;if(this.props.currentReference)return c.a.createElement("section",{className:"rc-CourseReferencesPage"},e&&this.renderLockedModal(),c.a.createElement("h1",{className:"tab-headline"},c.a.createElement("span",null,this.props.currentReference.name)),c.a.createElement(l.a,{key:this.props.currentReference.id,cml:this.props.currentReference.content}));return null},CourseReferencesPage}(c.a.Component);v.propTypes={currentReference:a.a.shape({id:a.a.string.isRequired,content:a.a.object.isRequired,name:a.a.string.isRequired,shortId:a.a.string.isRequired}),courseId:a.a.string.isRequired,isEnrolled:a.a.bool},v.contextTypes={executeAction:a.a.func.isRequired,router:a.a.object.isRequired},v.defaultProps={currentReference:null},e.default=u()(v,["CourseStore","CourseReferencesStore","CourseMembershipStore"],function(e){var r=e.CourseStore,t=e.CourseReferencesStore,n=e.CourseMembershipStore;return{currentReference:t.getCurrentReference(),isEnrolled:n.isEnrolled(),courseId:r.getCourseId()}})},wrXG:function(module,exports,e){}}]);
//# sourceMappingURL=34.ecddf772feb7c1f6abb3.js.map