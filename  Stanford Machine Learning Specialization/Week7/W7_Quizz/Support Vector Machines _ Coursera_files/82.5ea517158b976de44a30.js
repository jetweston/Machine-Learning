(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"+m0m":function(module,e,n){"use strict";var t=n("xxrO"),r=n("TV8g");e.a=function(e,n){var a=Object(r.a)(e).then(function(e){return new t.a(e.elements)});return a.done(),a}},CMO8:function(module,e,n){"use strict";var t=n("wiyT"),r=n.n(t),a=n("DnuM"),s=n("sQ/U"),o=n("ONUL"),i=n("2FMX"),c=n("+m0m"),u=Object(a.a)("/api/reports.v1",{type:"rest"}),l="teachVisitedAt",d=10080,m={getBannerData:function getBannerData(){var e=this;return this.getTeachingCourse().spread(function(n,t){return[n,t,e.getLearnerCounts(n,t)]})},getVisitedTimestamp:function getVisitedTimestamp(){return localStorage.teachVisitedAt},setVisitedTimestamp:function setVisitedTimestamp(){localStorage.teachVisitedAt=Date.now()},shouldShow:function shouldShow(){var e=this.getVisitedTimestamp();if(e){var n=new Date(parseInt(e)),t=new Date(Date.now()),r,a,s;return 60*t.getHours()+t.getMinutes()-(60*n.getHours()+n.getMinutes())>10080}return!0},getTeachingCourse:function getTeachingCourse(){var e=s.a.get().id;if(!e)return r.a.reject();return Object(c.a)(e).then(function(e){var n=e.find(function(e){return e.hasTeachingRole()});if(n&&"UNIVERSITY_ADMIN"!==n.get("courseRole")){var t=n.get("courseId");return[n,i.a.fromId(t)]}return r.a.reject()}).spread(function(e,n){return o.a.isLaunched(n)?[e,n]:r.a.reject()})},getLearnerCounts:function getLearnerCounts(e,n){var t=this;return r()(u.get("Course~".concat(n.id,"~activity_learner_counts"))).then(function(a){return t.validateLearnerCountsResponse(a)?a.elements[0].body:r.a.reject({membership:e,course:n})})},validateLearnerCountsResponse:function validateLearnerCountsResponse(e){return e.elements&&e.elements[0]&&e.elements[0].body&&e.elements[0].body.latest&&e.elements[0].body.latest.starter_ever_count&&e.elements[0].body.latest.active_learner_past_1w_count&&e.elements[0].body.latest.visitor_ever_count&&e.elements[0].body["1w_ago"]&&e.elements[0].body["1w_ago"].starter_ever_count},getWeeklyNewLearnerCount:function getWeeklyNewLearnerCount(e){return e.latest.starter_ever_count-e["1w_ago"].starter_ever_count},getWeeklyActiveLearnerCount:function getWeeklyActiveLearnerCount(e){return e.latest.active_learner_past_1w_count},getTotalLearnerCount:function getTotalLearnerCount(e){return e.latest.visitor_ever_count}};e.a=m;var h=m.getBannerData,p=m.getVisitedTimestamp,f=m.setVisitedTimestamp,v=m.shouldShow,b=m.getTeachingCourse,g=m.getLearnerCounts,y=m.validateLearnerCountsResponse,E=m.getWeeklyNewLearnerCount,C=m.getWeeklyActiveLearnerCount,L=m.getTotalLearnerCount},DliG:function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("17x9"),s=n.n(a),o=n("sbe7"),i=n.n(o),c=n("CMO8"),u=n("kvW3"),l=function(e){function TotalLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(TotalLearnerBanner,e),TotalLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=c.a.getTotalLearnerCount(this.props.learnerCounts);return i.a.createElement("div",{className:"rc-TotalLearnerBanner"},"A total of"," ",i.a.createElement("a",{href:t},i.a.createElement("strong",{className:"c-teach-banner-learner-count"},i.a.createElement(u.c,{value:r})," learners"))," ","are enrolled in ",i.a.createElement("span",{className:"c-teach-banner-course-name"},n),". View more on the"," ",i.a.createElement("a",{href:t},i.a.createElement("strong",null,"Course Dashboard.")))},TotalLearnerBanner}(i.a.Component);l.propTypes={course:s.a.object.isRequired,learnerCounts:s.a.object.isRequired},e.a=l},EAIP:function(module,exports,e){var n=e("pTQR"),t;"string"==typeof n&&(n=[[module.i,n,""]]);var r={transform:void 0},a=e("aET+")(n,r);n.locals&&(module.exports=n.locals)},ONUL:function(module,e,n){"use strict";var t={isLaunched:function isLaunched(e){return!!e.launchedAt&&e.launchedAt<=Date.now()},isPreEnrollmentEnabled:function isPreEnrollmentEnabled(e){return!this.isLaunched(e)&&"preEnrollmentEnabledAt"in e},isSessionsModeEnabled:function isSessionsModeEnabled(e){return"sessionsEnabledAt"in e&&e.sessionsEnabledAt<=Date.now()},isVerificationEnabled:function isVerificationEnabled(e){return e.verificationEnabledAt<=Date.now()},isPrivate:function isPrivate(e){return e.isRestrictedMembership}};e.a=t;var r=t.isLaunched,a=t.isPreEnrollmentEnabled,s=t.isSessionsModeEnabled,o=t.isVerificationEnabled,i=t.isPrivate},TV8g:function(module,e,n){"use strict";var t=n("wiyT"),r=n.n(t),a=n("BDKN"),s=n.n(a),o=n("43qm");e.a=function(e){var n=(new s.a).addQueryParam("q","findByUser").addQueryParam("userId",e);return r()(o.a.get(n.toString()))}},"j+0V":function(module,e,n){"use strict";n.r(e);var t=n("VbXa"),r=n.n(t),a=n("sbe7"),s=n.n(a),o=n("CMO8"),i=n("DliG"),c=n("xM+b"),u=n("yjYA"),l=n("EAIP"),d=n.n(l),m=[{key:"weeklyActiveLearner",component:c.a},{key:"weeklyNewLearner",component:u.a},{key:"totalLearner",component:i.a}],h=function(e){function TeachBanner(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).state={course:null,membership:null,learnerCounts:{},bannerIndex:-1,dismissed:!1},n.handleDismiss=function(){o.a.setVisitedTimestamp(),n.setState({dismissed:!0})},n}r()(TeachBanner,e);var n=TeachBanner.prototype;return n.componentDidMount=function componentDidMount(){var e=this;o.a.getBannerData().spread(function(n,t,r){var a=Math.round(Math.random()*(m.length-1));e.setState({course:t,membership:n,learnerCounts:r,bannerIndex:a})}).catch(function(){}).done()},n.renderBanner=function renderBanner(){var e=m[this.state.bannerIndex].component;return s.a.createElement(e,{course:this.state.course,learnerCounts:this.state.learnerCounts})},n.render=function render(){if(!this.state.course||this.state.dismissed||!o.a.shouldShow())return s.a.createElement("div",null);return s.a.createElement("div",{className:"rc-TeachBanner bt3-alert bt3-alert-info bt3-alert-dismissable"},s.a.createElement("div",{className:"c-teach-banner-content"},s.a.createElement("button",{onClick:this.handleDismiss,className:"bt3-close","data-dismiss":"alert","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"×")),this.renderBanner()))},TeachBanner}(s.a.Component);e.default=h},pTQR:function(module,exports,e){},"xM+b":function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("17x9"),s=n.n(a),o=n("sbe7"),i=n.n(o),c=n("CMO8"),u=n("kvW3"),l=function(e){function WeeklyActiveLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(WeeklyActiveLearnerBanner,e),WeeklyActiveLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=c.a.getWeeklyActiveLearnerCount(this.props.learnerCounts);return i.a.createElement("div",{className:"rc-WeeklyActiveLearnerBanner"},i.a.createElement("a",{href:t},i.a.createElement("strong",{className:"c-teach-banner-learner-count"},i.a.createElement(u.c,{value:r})," learners"))," ","were active in ",i.a.createElement("span",{className:"c-teach-banner-course-name"},n)," in the past week. View more on the"," ",i.a.createElement("a",{href:t},i.a.createElement("strong",null,"Course Dashboard.")))},WeeklyActiveLearnerBanner}(i.a.Component);l.propTypes={course:s.a.object.isRequired,learnerCounts:s.a.object.isRequired},e.a=l},xxrO:function(module,e,n){"use strict";var t=n("welz"),r=n.n(t),a=n("4uJh"),s=r.a.Collection.extend({model:a.a,getEnrolled:function getEnrolled(){return this.filter(function(e){return e.get("courseRole")!==a.a.NOT_ENROLLED})}});e.a=s},yjYA:function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("17x9"),s=n.n(a),o=n("sbe7"),i=n.n(o),c=n("CMO8"),u=n("kvW3"),l=function(e){function WeeklyNewLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(WeeklyNewLearnerBanner,e),WeeklyNewLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=c.a.getWeeklyNewLearnerCount(this.props.learnerCounts);return i.a.createElement("div",{className:"rc-WeeklyNewLearnerBanner"},i.a.createElement("a",{href:t},i.a.createElement("strong",{className:"c-teach-banner-learner-count"},i.a.createElement(u.c,{value:r})," learners"))," ","enrolled in ",i.a.createElement("span",{className:"c-teach-banner-course-name"},n)," in the past week. View more on the"," ",i.a.createElement("a",{href:t},i.a.createElement("strong",null,"Course Dashboard.")))},WeeklyNewLearnerBanner}(i.a.Component);l.propTypes={course:s.a.object.isRequired,learnerCounts:s.a.object.isRequired},e.a=l}}]);
//# sourceMappingURL=82.5ea517158b976de44a30.js.map