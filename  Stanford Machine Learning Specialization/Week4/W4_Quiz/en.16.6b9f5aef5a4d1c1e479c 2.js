(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+IH+":function(module,e,t){"use strict";var n=t("VkAN"),a=t.n(n),r=t("VbXa"),s=t.n(r),i=t("sbe7"),o=t.n(i),c=t("VYij"),u=t.n(c),l=t("+LJP"),g=t("q3BH"),d=t("lTCR"),m=t.n(d),h=t("oJmH"),f=t.n(h),p=t("/fse"),v=t("yImD"),b=t.n(v);function _templateObject(){var e=a()(["\n  query CourseBySlugQuery($courseSlug: String!) {\n    CoursesV1 @naptime {\n      slug(slug: $courseSlug, showHidden: true) {\n        elements {\n          id\n          brandingImageUrl\n        }\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var N=function(e){function CoursePageHeader(){return e.apply(this,arguments)||this}var t;return s()(CoursePageHeader,e),CoursePageHeader.prototype.render=function render(){var e=this.props,t=e.course,n=e.onMobileNavigationToggle;return o.a.createElement("div",{className:"rc-CoursePageHeader"},o.a.createElement(p.a,{hasCatalogButton:!1,hideEnterprise:!0,toggleMobileMenu:n,catalogSubBannerProps:{hidePromoBanner:!0},course:t.brandingImageUrl?t:void 0}))},CoursePageHeader}(o.a.Component),y=m()(_templateObject());e.a=u.a.compose(Object(l.a)(function(e){return{courseSlug:e.params.courseSlug}}),Object(h.graphql)(y,{options:function options(e){var t;return{variables:{courseSlug:e.courseSlug}}},props:function props(e){var t,n,a=((((e.data||{}).CoursesV1||{}).slug||{}).elements||[])[0]||{},r,s;return{course:{id:a.id,brandingImageUrl:a.brandingImageUrl}}}}),g.a.createTrackedContainer(function(){return{namespace:{page:"course_page_header"}}}))(N)},"+k6Y":function(module,exports,e){},"0F2Y":function(module,exports,e){var t=e("u0kn"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},"0NR+":function(module,e,t){"use strict";t.d(e,"a",function(){return s});var n=t("VbXa"),a=t.n(n),r,s=function(e){function CourseNavigation(){return e.apply(this,arguments)||this}return a()(CourseNavigation,e),CourseNavigation}(t("HlCP").a);s.RESOURCE_NAME="courseNavigation.v1"},"2egT":function(module,e,t){"use strict";t.d(e,"c",function(){return getRelativeUrl}),t.d(e,"d",function(){return getWeekUrl}),t.d(e,"b",function(){return getReferenceUrl}),t.d(e,"a",function(){return canAccessCourse});var n=t("sQ/U");function getRelativeUrl(e,t){return"/learn/".concat(e,"/").concat(t)}function getWelcomeUrl(e){return getRelativeUrl(e,"home/welcome")}function getGradesUrl(e){return getRelativeUrl(e,"home/assignments")}function getNotesUrl(e){return getRelativeUrl(e,"home/notes")}function getWeekUrl(e,t){return getRelativeUrl(e,"home/week/".concat(t))}function getReferenceUrl(e,t){return getRelativeUrl(e,"resources/".concat(t))}function canAccessCourse(e,t){var a=["BROWSER","NOT_ENROLLED","PRE_ENROLLED_LEARNER"],r=!!e[0]&&e[0].courseRole,s=!!t,i=n.a.isSuperuser()||r&&!a.includes(r);return s&&i}},"2k2k":function(module,e,t){"use strict";var n=t("MVZn"),a=t.n(n),r=t("VYij"),s=t.n(r),i=t("sbe7"),o=t.n(i),c=t("q3BH"),u=t("0WYP"),l=t("w/1P"),g=t.n(l),d=t("UAeG"),m=t("sQ/U"),h=t("VXRf"),f=t("+LJP"),p=t("PB6g"),v=t("aCwv"),b=t("eXeP"),N=t("Mko8"),y=t("0Qso"),S=t("0NR+"),E=t("ZLWr"),k=t.n(E),C=t("OUSh"),w=t.n(C),x=function CourseNavigation(e){var t=e.className,n=e.course,a=e.partners,r=e.courseSlug,s=e.navigationItems,i=e.showMobileNavigation,c=[{typeName:"gradesNavigationItem"}],l,d=s&&s.length?s:c,m=a[0],h=!!m&&(n.overridePartnerLogos&&n.overridePartnerLogos[m.id]||m.squareLogo),f=u.a.processImage(h,{width:"56px",height:"56px"});return o.a.createElement("div",{className:g()("rc-CourseNavigation",t,{"mobile-enabled":i})},o.a.createElement(p.a,{tagName:"h2"},k()("Course Navigation")),o.a.createElement(v.a,{name:n.name,partners:a,partnerImage:f,brandingImage:n.brandingImage}),o.a.createElement("nav",{className:"items align-self-stretch","aria-label":k()("Course Navigation")},d.map(function(e){return o.a.createElement(b.a,{key:e.typeName,courseSlug:r,navigationItem:e})})))};e.a=s.a.compose(Object(f.a)(function(e){return{courseSlug:e.params.courseSlug}}),d.a.createContainer(function(e){var t=e.courseSlug;return{course:N.a.bySlug(t,{fields:["name","brandingImage","overridePartnerLogos"],includes:["partnerIds"]}),courseNavigation:S.a.get("".concat(m.a.get().id,"~").concat(t))}}),d.a.createContainer(function(e){var t=e.course;return{partners:y.a.multiGet(t?t.partnerIds:[],{fields:["name","squareLogo"]})}}),Object(h.a)(function(e){var t=e.courseNavigation;return a()({},t)}),c.a.createTrackedContainer(function(){return{namespace:{page:"menu"}}}))(x)},"2rI9":function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("+LJP"),s=t("2egT"),i=t("re8q"),o=t("ZLWr"),c=t.n(o),u=t("kvW3"),l=function WeekNavigationItem(e){var t=e.courseSlug,n=e.weekNumber,r=e.selectedWeekNumber,o=Object(s.d)(t,n),l=r===n,g=a.a.createElement(u.b,{message:c()("Week {weekNumber, number}"),weekNumber:n}),d=l?c()("Week #{weekNumber}. You currently have this week selected",{weekNumber:n}):c()("Week #{weekNumber}",{weekNumber:n});return a.a.createElement(i.a,{trackingName:"nav_week",className:"rc-WeekNavigationItem",url:o,title:g,selected:l,ariaLabel:d})};e.a=Object(r.a)(function(e){return{courseSlug:e.params.courseSlug,selectedWeekNumber:parseInt(e.params.week,10)}})(l)},"3h2j":function(module,exports,e){var t=e("u1je"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},"6VBO":function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("MhTL"),s=t("relr"),i=t("vZaE"),o=t("2rI9"),c=function WeekCollectionNavigationItem(e){var t=e.navigationItem,n=e.courseSlug,c=e.router,u=t.definition,l=u.weeks,g=u.currentWeekNumber,d=Object(r.a)(t,n,c),m=d.title,h=d.url,f=d.selected;return a.a.createElement("div",{className:"rc-WeekCollectionNavigationItem"},a.a.createElement(s.a,{title:m,url:h,selected:f,ariaExpanded:f?"true":"false"}),f&&a.a.createElement(i.a,null,l.map(function(e,t){return a.a.createElement(o.a,{week:e,key:"week".concat(t),weekNumber:t+1,isCurrentWeek:t+1===g})})))};e.a=c},"6s93":function(module,exports,e){},"7lYz":function(module,exports,e){var t=e("nWPP"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},D8Cj:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("+2ZD"),s=t("po9T"),i=t("ku+6"),o=t.n(i),c=function ConfirmVersionChangesModal(e){var t=e.handleConfirm,n=e.handleClose,i=e.changesDescription,c=e.courseId;return a.a.createElement(r.a,{handleClose:n,modalName:o()("Confirm Version Changes")},a.a.createElement("div",{className:"vertical-box align-items-absolute-center",style:{height:"300px"}},a.a.createElement(s.a,{handleConfirm:t,changesDescription:i,courseId:c})))};e.a=c},Eel4:function(module,e,t){"use strict";var n=t("pVnL"),a=t.n(n),r=t("sbe7"),s=t.n(r),i=t("TOZ3"),o=t("vWQi"),c=t("CsdX"),u=t("QVVP"),l=t("Oaer"),g=t("lS+i"),d=t.n(g),m=t("kvW3"),h=function WithNoProgress(e){var t=e.action;return s.a.createElement(m.b,{action:t,message:d()("It looks you missed some important deadlines.\n      Reset your deadlines and get started today. {action}")})},f=function WithProgress(e){var t=e.action;return s.a.createElement(m.b,{action:t,message:d()("Don't let the great things you learned fade away! Reset your deadlines and complete\n      your assignments every week. {action}")})},p=function WithSignificantProgress(e){var t=e.action,n=e.progressPercentage;return s.a.createElement(m.b,{action:t,message:d()("You've already completed {progressPercentage}% of your course! Reset your\n        deadlines so you can finish the rest! {action}"),progressPercentage:Math.round(n)})},v=function WithCompletedProgress(e){var t=e.action,n=e.progressPercentage;return s.a.createElement(m.b,{action:t,message:d()("You completed everything, but some assignments are not graded yet. Reset your deadlines so they can be graded! {action}"),progressPercentage:Math.round(n)})},b=function CourseScheduleAdjustmentNotification(e){var t=e.notification.definition,n=t.courseId,r=t.suggestion,g=new l.a(r),d=g.progressPercentage;if(g.isNoSuggestion)return null;if(null==d)return null;var m=0===d,b=d>0&&d<50,N=d>=50&&d<100,y=100===d,S=s.a.createElement(u.a,{size:"sm",type:"primary",style:{marginLeft:"60px"},trackingName:"sessions_v2_reset_deadlines",trackingData:{progressPercentage:d},courseId:n,courseScheduleSuggestion:g}),E=function NotificationBox(e){return s.a.createElement(i.b,a()({alignItems:"center",flexDirection:"column",justifyContent:"start"},e))};return s.a.createElement("div",{className:"rc-CourseScheduleAdjustmentNotification"},s.a.createElement(o.a,{tag:E,gradient:c.h.sea,style:{padding:"10px",textAlign:"center",fontWeight:"bold"}},m&&s.a.createElement(h,{action:S}),b&&s.a.createElement(f,{action:S}),N&&s.a.createElement(p,{progressPercentage:d,action:S}),y&&s.a.createElement(v,{progressPercentage:d,action:S})))};e.a=b},G9lr:function(module,exports,e){},J9q7:function(module,exports,e){},KVNB:function(module,e,t){"use strict";var n=t("VbXa"),a=t.n(n),r=t("sbe7"),s=t.n(r),i=t("MhTL"),o=t("relr"),c=function(e){function InboxNavigationItem(t){var n;return(n=e.call(this,t)||this).getSelectedFromProps=function(e){var t=e.navigationItem,n=e.courseSlug,a=e.router,r,s;return Object(i.a)(t,n,a).selected},n.state={hasSeenMessages:n.getSelectedFromProps(t)},n}a()(InboxNavigationItem,e);var t=InboxNavigationItem.prototype;return t.componentWillReceiveProps=function componentWillReceiveProps(e){this.state.hasSeenMessages||this.getSelectedFromProps(e)&&this.setState({hasSeenMessages:!0})},t.render=function render(){var e=this.props,t=e.navigationItem,n=e.navigationItem.definition.notificationCount,a=e.courseSlug,r=e.router,c=Object(i.a)(t,a,r),u=c.title,l=c.subtitle,g=c.url,d=c.selected,m=this.state.hasSeenMessages?0:n;return s.a.createElement("div",{className:"rc-InboxNavigationItem"},s.a.createElement(o.a,{url:g,title:u,subtitle:l,selected:d,notificationCount:m}))},InboxNavigationItem}(r.Component);e.a=c},MRTu:function(module,exports,e){},MhTL:function(module,e,t){"use strict";t.d(e,"a",function(){return getDescription});var n=t("2egT"),a=t("ZLWr"),r=t.n(a);function getDescription(e,t,a){var s=a.params,i="",o="",c="",u=!1;switch(e.typeName){case"weeksNavigationItem":o=r()("Overview"),i=Object(n.c)(t,"home/welcome"),u=a.isActive({name:"welcome",params:s})||s.week&&a.isActive({name:"week",params:s});break;case"previewFirstWeekNavigationItem":o=r()("Preview Week 1"),i=Object(n.c)(t,"home/welcome"),u=a.isActive({name:"welcome",params:s})||s.week&&a.isActive({name:"week",params:s});break;case"previewCourseNavigationItem":o=r()("Preview Course"),i=Object(n.c)(t,"home/welcome"),u=a.isActive({name:"welcome",params:s})||s.week&&a.isActive({name:"week",params:s});break;case"gradesNavigationItem":o=r()("Grades"),i=Object(n.c)(t,"home/assignments"),u=a.isActive({name:"assignments",params:s});break;case"notesNavigationItem":o=r()("Notes"),i=Object(n.c)(t,"home/notes"),u=a.isActive({name:"notes",params:s});break;case"discussionForumsNavigationItem":o=r()("Discussion Forums"),i=Object(n.c)(t,"discussions"),u=a.isActive({name:"discussions",params:s});break;case"inboxNavigationItem":o=r()("Messages"),i=Object(n.c)(t,"course-inbox"),u=a.isActive({name:"course-inbox",params:s});break;case"resourcesNavigationItem":o=r()("Resources"),i=Object(n.c)(t,"resources/".concat(e.definition.resources[0].shortId)),u=a.isActive({name:"resources",params:s})||s.reference_id&&a.isActive({name:"resourcesWithRefId",params:s})||s.reference_id&&s.short_slug&&a.isActive({name:"resourcesWithRefIdAndSlug",params:s});break;case"officeHoursNavigationItem":o=r()("Live Events"),i=Object(n.c)(t,"office-hours"),u=a.isActive({name:"office-hours",params:s});break;case"teamworkNavigationItem":o=r()("Teamwork"),i=Object(n.c)(t,"teamwork"),u=a.isActive({name:"teamwork",params:s});break;case"classmatesNavigationItem":o=r()("Classmates"),i=Object(n.c)(t,"classmates"),u=a.isActive({name:"classmates",params:s});break;case"courseInfoNavigationItem":o=r()("Course Info"),i=Object(n.c)(t,"home/info"),u=a.isActive({name:"CDP",params:s});break;case"courseManagerNavigationItem":o=r()("Course Manager"),c=r()("Staff & Mentors Only"),i=Object(n.c)(t,"course-manager"),u=a.isActive({name:"course-manager",params:s})}return{url:i,title:o,subtitle:c,selected:u}}},NPfe:function(module,e,t){"use strict";var n=t("VbXa"),a=t.n(n),r=t("pVnL"),s=t.n(r),i=t("sbe7"),o=t.n(i),c=t("TOZ3"),u=t("AWZ4"),l=t("vWQi"),g=t("CsdX"),d=t("S//u"),m=t("lS+i"),h=t.n(m),f=t("kvW3"),p=function NotificationBox(e){return o.a.createElement(c.b,s()({alignItems:"center",flexDirection:"column",justifyContent:"start"},e))},v=function(e){function NextSessionNotification(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={showModal:!1},t}var t;return a()(NextSessionNotification,e),NextSessionNotification.prototype.render=function render(){var e=this,t=this.state.showModal,n=this.props.notification.definition.courseId,a=o.a.createElement(u.b,{size:"sm",type:"primary",label:h()("Join a session"),style:{marginLeft:"60px"},onClick:function onClick(){return e.setState({showModal:!0})}});return o.a.createElement("div",{className:"rc-NextSessionNotification"},o.a.createElement(l.a,{tag:p,gradient:g.h.sea,style:{padding:"10px",textAlign:"center",fontWeight:"bold"}},o.a.createElement(f.b,{action:a,message:h()("You can pick up where you left off. Just join a new session and we’ll reset your deadlines. {action}")})),t&&o.a.createElement(d.a,{onClose:function onClose(){return e.setState({showModal:!1})},courseId:n}))},NextSessionNotification}(o.a.Component);e.a=v},NglW:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("GXs9"),s=t("lAE2"),i=t.n(s),o=function PartnerLogo(e){var t=e.thumbnail,n=e.altText;return a.a.createElement(r.a,{className:"rc-PartnerLogo bgcolor-white bt3-hidden-xs",src:t,alt:n})};e.a=o},OUSh:function(module,exports,e){var t=e("MRTu"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},Oaer:function(module,e,t){"use strict";var n=t("W8MJ"),a=t.n(n),r=t("VYij"),s=t.n(r),i=function(){function CourseScheduleSuggestion(e){this._suggestion=e}var e;return CourseScheduleSuggestion.prototype.hasVersionChangeForShiftDeadlinesSuggestion=function hasVersionChangeForShiftDeadlinesSuggestion(){if(this.shiftDeadlines&&this.shiftDeadlines.sessionSwitch&&this.shiftDeadlines.sessionSwitch.branchChange)return!0;return!1},a()(CourseScheduleSuggestion,[{key:"extension",get:function get(){if(this.isExtension){if(s()(this._suggestion).has("org.coursera.ondemand.schedule.Extension"))return this._suggestion["org.coursera.ondemand.schedule.Extension"];return this._suggestion["org.coursera.ondemand.schedule.suggestion.Extension"]}return}},{key:"shiftDeadlines",get:function get(){if(this.isShiftDeadlines)return this._suggestion["org.coursera.ondemand.schedule.suggestion.ShiftDeadlines"];return}},{key:"isExtension",get:function get(){return s()(this._suggestion).has("org.coursera.ondemand.schedule.Extension")||s()(this._suggestion).has("org.coursera.ondemand.schedule.suggestion.Extension")}},{key:"isNoSuggestion",get:function get(){return s()(this._suggestion).has("org.coursera.ondemand.schedule.NoSuggestion")||s()(this._suggestion).has("org.coursera.ondemand.schedule.suggestion.NoSuggestion")}},{key:"isShiftDeadlines",get:function get(){return s()(this._suggestion).has("org.coursera.ondemand.schedule.suggestion.ShiftDeadlines")}},{key:"days",get:function get(){if(this.extension&&void 0!==this.extension.days)return this.extension.days;if(this.shiftDeadlines&&this.shiftDeadlines.days)return this.shiftDeadlines.days;return}},{key:"progressPercentage",get:function get(){if(this.extension&&void 0!==this.extension.progressPercentage)return this.extension.progressPercentage;if(this.shiftDeadlines&&this.shiftDeadlines.progressPercentage)return this.shiftDeadlines.progressPercentage;return}},{key:"startsAtForShiftDeadlinesSuggestion",get:function get(){if(this.shiftDeadlines&&this.shiftDeadlines.startsAt)return this.shiftDeadlines.startsAt;return}},{key:"endsAtForShiftDeadlinesSuggestion",get:function get(){if(this.shiftDeadlines&&this.shiftDeadlines.endsAt)return this.shiftDeadlines.endsAt;return}},{key:"changesDescriptionForShiftDeadlinesSuggestion",get:function get(){if(this.shiftDeadlines&&this.shiftDeadlines.sessionSwitch&&this.shiftDeadlines.sessionSwitch.branchChange)return this.shiftDeadlines.sessionSwitch.branchChange.changesDescription;return}},{key:"destinationSessionBranchIdForShiftDeadlinesSuggestion",get:function get(){if(this.shiftDeadlines&&this.shiftDeadlines.sessionSwitch&&this.shiftDeadlines.sessionSwitch["org.coursera.ondemand.session.SuggestedSwitch"])return this.shiftDeadlines.sessionSwitch["org.coursera.ondemand.session.SuggestedSwitch"].destinationSessionBranchId;return}}]),CourseScheduleSuggestion}(),o=function(){function CourseScheduleSuggestionGraphql(e){this._suggestion=e}var e;return CourseScheduleSuggestionGraphql.prototype.hasVersionChangeForShiftDeadlinesSuggestion=function hasVersionChangeForShiftDeadlinesSuggestion(){return!!(this.sessionSwitch||{}).branchChange},a()(CourseScheduleSuggestionGraphql,[{key:"extension",get:function get(){if(this.isExtension)return(this._suggestion||{}).org_coursera_ondemand_schedule_Extension||(this._suggestion||{}).org_coursera_ondemand_schedule_suggestion_Extension;return}},{key:"shiftDeadlines",get:function get(){if(this.isShiftDeadlines)return this._suggestion.org_coursera_ondemand_schedule_suggestion_ShiftDeadlines;return}},{key:"isExtension",get:function get(){var e=(this._suggestion||{}).org_coursera_ondemand_schedule_Extension,t=(this._suggestion||{}).org_coursera_ondemand_schedule_suggestion_Extension;return!(!e&&!t)}},{key:"isNoSuggestion",get:function get(){var e=(this._suggestion||{}).org_coursera_ondemand_scheduleNoSuggestion,t=(this._suggestion||{}).org_coursera_ondemand_schedule_suggestion_NoSuggestion;return!(!e&&!t)}},{key:"isShiftDeadlines",get:function get(){return!!(this._suggestion||{}).org_coursera_ondemand_schedule_suggestion_ShiftDeadlines}},{key:"days",get:function get(){return(this.extension||{}).days||(this.shiftDeadlines||{}).days}},{key:"progressPercentage",get:function get(){return(this.extension||{}).progressPercentage||(this.shiftDeadlines||{}).progressPercentage}},{key:"startsAtForShiftDeadlinesSuggestion",get:function get(){return(this.shiftDeadlines||{}).startsAt}},{key:"endsAtForShiftDeadlinesSuggestion",get:function get(){return(this.shiftDeadlines||{}).endsAt}},{key:"sessionSwitch",get:function get(){return((this.shiftDeadlines||{}).sessionSwitch||{}).org_coursera_ondemand_session_SuggestedSwitch}},{key:"changesDescriptionForShiftDeadlinesSuggestion",get:function get(){return((this.sessionSwitch||{}).branchChange||{}).changesDescription}},{key:"destinationSessionBranchIdForShiftDeadlinesSuggestion",get:function get(){return(this.sessionSwitch||{}).destinationSessionBranchId}}]),CourseScheduleSuggestionGraphql}();e.a=i},PVxx:function(module,e,t){"use strict";var n=t("VbXa"),a=t.n(n),r=t("sbe7"),s=t.n(r),i=t("MnCE"),o=t("UAeG"),c=t("sQ/U"),u=t("jsrg"),l=t("VXRf"),g=t("+LJP"),d=t("PDuk"),m=t.n(d),h=t("L1vm"),f=t("UZuA"),p=t("1mvU"),v=t("BH3y"),b=t("Eel4"),N=t("NPfe"),y=t("pulq"),S=t.n(y),E=v.a.COURSE_GLOBAL,k=function(e){function GlobalNotification(){return e.apply(this,arguments)||this}a()(GlobalNotification,e);var t=GlobalNotification.prototype;return t.getVisibleNotification=function getVisibleNotification(){var e=this.props.notification;if("joinNextSessionMessage"===e.typeName)return{trackingName:"next_session_notification",component:s.a.createElement(N.a,{notification:e})};if("courseScheduleAdjustmentMessage"===e.typeName)return{trackingName:"course_schedule_adjustment_notification",component:s.a.createElement(b.a,{notification:e})};return null},t.render=function render(){var e=this.getVisibleNotification();if(!e)return null;return s.a.createElement(f.a,{className:"rc-GlobalNotification",trackClicks:!1,withVisibilityTracking:!0,trackingName:e.trackingName},e.component)},GlobalNotification}(s.a.Component);e.a=Object(i.compose)(Object(g.a)(function(e){var t;return{courseSlug:e.params.courseSlug}}),o.a.createContainer(function(e){var t=e.courseSlug;return{response:p.a.finder("findCourseMessages",{params:{id:Object(d.tupleToStringKey)([Object(d.tupleToStringKey)([c.a.get().id,t]),E,-1])}})}}),Object(l.a)(function(e){var t=e.response,n=t&&t[0]?t[0].messages:[];if(0===n.length)return{};return{notification:n[0]}}),Object(u.a)(function(e){var t;return!!e.notification}),h.a.createTrackedContainer(function(){return{namespace:{page:"course_global_notification"}}}))(k)},QVVP:function(module,e,t){"use strict";t.d(e,"a",function(){return N});var n=t("VbXa"),a=t.n(n),r=t("sbe7"),s=t.n(r),i=t("sQ/U"),o=t("Ihj9"),c=t("kOHA"),u=t("D8Cj"),l=t("ZgLL"),g=t("AWZ4"),d=t("ku+6"),m=t.n(d),h=t("w+Dm"),f=t.n(h),p=t("3h2j"),v=t.n(p),b=Object(o.a)({type:"BUTTON"})(g.b),N=function(e){function ResetDeadlinesButton(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={showConfirmVersionChangesModal:!1,isAdjustingSchedule:!1,adjustScheduleError:!1},t.handleClose=function(){t.setState({showConfirmVersionChangesModal:!1,adjustScheduleError:!1,isAdjustingSchedule:!1})},t.handleConfirm=function(){t.setState({showConfirmVersionChangesModal:!1}),t.adjustSchedule()},t.onResetDeadlinesClick=function(){var e;t.props.courseScheduleSuggestion.hasVersionChangeForShiftDeadlinesSuggestion()?t.setState({showConfirmVersionChangesModal:!0}):t.adjustSchedule()},t.adjustSchedule=function(){var e=t.props,n=e.courseId,a,r=e.courseScheduleSuggestion.days;t.setState({isAdjustingSchedule:!0}),c.a.adjustSchedule(i.a.get().id,n,r).then(function(){window.location.reload()}).catch(function(){t.setState({isAdjustingSchedule:!1,adjustScheduleError:!0,showConfirmVersionChangesModal:!1})})},t}var t;return a()(ResetDeadlinesButton,e),ResetDeadlinesButton.prototype.render=function render(){var e=this.props,t=e.isThemeDark,n=e.trackingName,a=e.className,r=e.style,i=e.type,o=e.size,c=e.trackingData,g=e.courseScheduleSuggestion,d=e.courseId,h=this.state,f=h.showConfirmVersionChangesModal,p=h.isAdjustingSchedule,v=h.adjustScheduleError,N=p||v,y=g.changesDescriptionForShiftDeadlinesSuggestion;return s.a.createElement("div",{className:"rc-ResetDeadlinesButton"},f&&s.a.createElement(u.a,{handleConfirm:this.handleConfirm,handleClose:this.handleClose,changesDescription:y,courseId:d}),N&&s.a.createElement(l.a,{isAdjustingSchedule:p,adjustScheduleError:v,handleClose:this.handleClose}),s.a.createElement(b,{isThemeDark:t,type:i,size:o,onClick:this.onResetDeadlinesClick,trackingName:n,trackingData:c,className:a,style:r,label:m()("Reset my deadlines")}))},ResetDeadlinesButton}(s.a.Component)},Qr8W:function(module,exports,e){},STaK:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("+LJP"),s=t("2egT"),i=t("re8q"),o=function ReferenceNavigationItem(e){var t=e.courseSlug,n=e.resource,r=n.shortId,o=n.name,c,u=e.selectedResourceId===r,l=Object(s.b)(t,r);return a.a.createElement(i.a,{trackingName:"nav_reference",className:"rc-ReferenceNavigationItem",url:l,title:o,selected:u})};e.a=Object(r.a)(function(e){return{courseSlug:e.params.courseSlug,selectedResourceId:e.params.reference_id}})(o)},U8A0:function(module,e,t){"use strict";t.d(e,"a",function(){return Badge});var n=t("pVnL"),a=t.n(n),r=t("MVZn"),s=t.n(r),i=t("17x9"),o=t.n(i),c=t("sbe7"),u=t.n(c),l=t("VU1B"),g=l.a.create({Badge:{position:"relative",display:"inline-block"},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",top:0,right:0,borderRadius:"50%",color:l.c.white},primary:{backgroundColor:l.c.primary},secondary:{backgroundColor:l.c.accent},info:{backgroundColor:l.c.info},danger:{backgroundColor:l.c.danger},warning:{backgroundColor:l.c.warning},success:{backgroundColor:l.c.success}}),d={primary:"primary",secondary:"secondary",info:"info",danger:"danger",warning:"warning",success:"success"},m={sm:8,md:12,lg:16};function Badge(e){var t=e.rootClassName,n=e.htmlAttributes,r=e.style,i=e.badgeContent,o=e.badgeStyle,c=e.children,d=e.type,h=e.size,f=m[h]||m.md,p=Math.floor(2*f);return u.a.createElement("div",a()({},n,Object(l.d)(t,g.Badge),{style:s()({padding:"".concat(p,"px ").concat(p,"px ").concat(f,"px ").concat(f,"px")},r)}),c,u.a.createElement("span",a()({},Object(l.d)(g.badge,g[d]),{style:s()({fontSize:f,width:p,height:p},o)}),i))}Badge.defaultProps={type:"primary",style:{},badgeStyle:{},size:m.md},Badge.propTypes={rootClassName:o.a.oneOfType([o.a.string,o.a.object]),badgeContent:o.a.node.isRequired,badgeStyle:o.a.object,children:o.a.node,type:o.a.oneOf(Object.keys(d)),size:o.a.oneOf(Object.keys(m))}},ZMXa:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("MhTL"),s=t("relr"),i=t("vZaE"),o=t("STaK"),c=function ReferenceCollectionNavigationItem(e){var t=e.navigationItem,n=e.courseSlug,c=e.router,u=t.definition.resources;if(0===u.length)return null;var l=Object(r.a)(t,n,c),g=l.title,d=l.url,m=l.selected;return a.a.createElement("div",{className:"rc-ReferenceCollectionNavigationItem"},a.a.createElement(s.a,{title:g,url:d,selected:m,ariaExpanded:m?"true":"false"}),m&&a.a.createElement(i.a,null,u.map(function(e,t){return a.a.createElement(o.a,{key:"reference".concat(t),resource:e})})))};e.a=c},ZgLL:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("+2ZD"),s=t("8WNh"),i=t("ku+6"),o=t.n(i),c=t("olCE"),u=t.n(c),l=function AdjustingDeadlinesModal(e){var t=e.isAdjustingSchedule,n=e.adjustScheduleError,i=e.handleClose;return a.a.createElement(r.a,{className:"rc-AdjustingDeadlinesModal",allowClose:!t,handleClose:i,modalName:o()("Adjusting Deadlines Modal")},a.a.createElement("div",{className:"vertical-box align-items-absolute-center",style:{height:"200px"}},n&&a.a.createElement("span",{className:"message"},o()("Something went wrong. Please try again.")),t&&a.a.createElement("div",{className:"vertical-box align-items-absolute-center"},a.a.createElement(s.a,null),a.a.createElement("span",{className:"message"},o()("Resetting your deadlines")))))};e.a=l},aCwv:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("NglW"),s=t("0F2Y"),i=t.n(s),o=function CourseHeader(e){var t=e.brandingImage,n=e.partnerImage,s=e.name,i=e.partners;if(t){var o=80,c=s.substr(0,80);c=c.substr(0,Math.min(c.length,c.lastIndexOf(" ")));var u=s.length>80;return a.a.createElement("div",{className:"rc-CourseHeader"},a.a.createElement("div",{className:"headline-1-text",title:s},u?"".concat(c,"..."):s),a.a.createElement("div",{className:"body-1-text color-secondary-text"},i.map(function(e){return e.name}).join(", ")))}return a.a.createElement("div",{className:"align-horizontal-center od-dark od-container cozy"},1===i.length&&n&&a.a.createElement(r.a,{thumbnail:n,altText:i[0].name}))};e.a=o},aNhj:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},dv1l:function(module,exports,e){var t=e("Qr8W"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},eXeP:function(module,e,t){"use strict";var n=t("VbXa"),a=t.n(n),r=t("sbe7"),s=t.n(r),i=t("17x9"),o=t.n(i),c=t("VYij"),u=t.n(c),l=t("+LJP"),g=t("hU9R"),d=t("6PQb"),m=t("M743"),h=t("KVNB"),f=t("yufQ"),p=t("6VBO"),v=t("ZMXa"),b=function(e){function CourseNavigationItem(){return e.apply(this,arguments)||this}var t;return a()(CourseNavigationItem,e),CourseNavigationItem.prototype.render=function render(){var e=this.context.router,t=this.props,n=t.courseSlug,a=t.navigationItem,r=t.showEnrollmentStateBanner;if("adminNavigationItem"===a.typeName)return r?null:s.a.createElement(g.a,{courseSlug:n});if("weeksNavigationItem"===a.typeName)return s.a.createElement(p.a,{navigationItem:a,courseSlug:n,router:e});if("resourcesNavigationItem"===a.typeName)return s.a.createElement(v.a,{navigationItem:a,courseSlug:n,router:e});if("inboxNavigationItem"===a.typeName)return s.a.createElement(h.a,{navigationItem:a,courseSlug:n,router:e});if("notesNavigationItem"===a.typeName&&!Object(m.a)())return null;return s.a.createElement(f.a,{navigationItem:a,courseSlug:n,router:e})},CourseNavigationItem}(s.a.Component);b.contextTypes={router:o.a.object.isRequired},e.a=u.a.compose(Object(l.a)(function(e){return{courseSlug:e.params.courseSlug}}),Object(d.a)())(b);var N=b},fuxv:function(module,exports,e){var t=e("G9lr"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},hU9R:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("Akn8"),s=t("w/1P"),i=t.n(s),o=t("y1LI"),c=t("9A5E"),u=t("ZLWr"),l=t.n(u),g=t("dv1l"),d=t.n(g),m=function AdminButton(e){var t=e.courseSlug,n=i()("link-button","primary","fullbleed","horizontal-box","align-items-absolute-center");return a.a.createElement("div",{className:"rc-AdminButton menu-item horizontal-box align-items-absolute-center"},a.a.createElement(c.a,{href:r.a.join("/teach",t),className:n,trackingName:"course_admin_button"},a.a.createElement(o.a,{name:"settings"}),"  ",l()("Admin")))};e.a=m},j9jD:function(module,exports,e){},k6qd:function(module,exports,e){var t=e("+k6Y"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},kVUp:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("q3BH"),s=t("9A5E"),i=t("Ed0o"),o=t("y1LI"),c=t("dT9E"),u=t("sQ/U"),l=t("zeiz"),g=t("kaIm"),d=t.n(g),m=t("fuxv"),h=t.n(m),f=function Help(e){var t=e.style,n=e.isEnterprise,r="help-tooltip",g=d()("Help Center");if(c.a.get())return null;var m=u.a.isAuthenticatedUser(),h=n?l.a.getEnterpriseHelpLink(m):l.a.getNewHelpCenterHome(m);return a.a.createElement(i.a,{overlay:g,tooltipId:r,placement:"top"},a.a.createElement(s.a,{className:"rc-Help link-button nostyle",trackingName:"icon",href:h,target:"_blank",rel:"noopener noreferrer","aria-label":d()("Help Center"),style:t||{minWidth:0,bottom:20,right:20}},a.a.createElement("div",{className:"help-widget horizontal-box align-items-absolute-center",role:"tooltip"},a.a.createElement(o.a,{name:"question-circle-o"}))))};e.a=r.a.createTrackedContainer(function(e){return{namespace:{page:"help"}}})(f)},kaIm:function(module,exports,e){var t=e("aNhj"),n=t.default?t.default:{},a,r=(0,e("HdzH").default)(n);r.getLocale=function(){return"en"},module.exports=r},lAE2:function(module,exports,e){var t=e("vyh/"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},nWPP:function(module,exports,e){},olCE:function(module,exports,e){var t=e("j9jD"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},po9T:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("JUgE"),s=t("M743"),i=t("AWZ4"),o=t("ku+6"),c=t.n(o),u=t("3h2j"),l=t.n(u),g=function BranchSwitchInfo(e){var t=e.changesDescription,n=e.handleConfirm,o=e.courseId,u=Object(s.b)(o)?c()("Your instructor has made some changes to the course! Review the information below to learn\n        more. You may need to complete additional assignments to pass the course in this version.\n        If the instructor has removed or altered videos, then your highlights and notes\n        will be preserved, but they may not link back to the original video."):c()("Your instructor has made some changes to the course! Review the information below to learn\n        more. You may need to complete additional assignments to pass the course in this version.");return a.a.createElement("div",{className:"rc-BranchSwitchInfo vertical-box flex-1"},a.a.createElement("h3",{className:"title"},c()("New in this version")),a.a.createElement("div",null,a.a.createElement("p",{className:"body-1-text"},u),a.a.createElement("p",{className:"body-2-text instructor-note"},c()("Note from your instructor:")),a.a.createElement("p",{className:"body-1-text"},a.a.createElement(r.a,{cml:t}))),a.a.createElement("div",{className:"horizontal-box align-items-right wrap"},a.a.createElement(i.b,{rootClassName:"confirm-button",type:"primary",onClick:n},c()("Confirm"))))};e.a=g},pulq:function(module,exports,e){var t=e("ul1z"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},re8q:function(module,e,t){"use strict";var n=t("pVnL"),a=t.n(n),r=t("sbe7"),s=t.n(r),i=t("w/1P"),o=t.n(i),c=t("buno"),u=t("uwz3"),l=t.n(u),g=function NavigationDrawerLink(e){var t=e.className,n=e.children,r=e.url,i=e.title,u=e.selected,l=e.trackingName,g=e.ariaLabel,d=o()("rc-NavigationDrawerLink","headline-1-text","horizontal-box",t,{selected:u});return s.a.createElement(c.a,a()({trackingName:l,href:r,className:d},g?{ariaLabel:g}:{}),s.a.createElement("div",{className:"horizontal-box align-items-vertical-center"},i),n&&s.a.cloneElement(n))};e.a=g},relr:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("w/1P"),s=t.n(r),i=t("ZLWr"),o=t.n(i),c=t("U8A0"),u=t("buno"),l=t("7lYz"),g=t.n(l),d=function NavigationLink(e){var t=e.url,n=e.title,r=e.subtitle,i=e.selected,l=e.notificationCount,g=e.ariaExpanded,d=s()("rc-NavigationLink","horizontal-box","align-items-vertical-center","wrap",{selected:i}),m=i?o()("Currently selected, #{title}",{title:n}):o()("#{title}",{title:n});return a.a.createElement(u.a,{href:t,className:d,trackingName:"nav_item",ariaExpanded:g,ariaLabel:m},a.a.createElement("p",{className:"nav-item headline-1-text"},n),!!l&&a.a.createElement(c.a,{badgeContent:l,badgeStyle:{top:2},style:{paddingTop:15},size:"md"}),!!r&&a.a.createElement("div",{className:"caption-text color-secondary-text"},r))};e.a=d},u0kn:function(module,exports,e){},u1je:function(module,exports,e){},ul1z:function(module,exports,e){},uwz3:function(module,exports,e){var t=e("6s93"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},vWQi:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("17x9"),s=t.n(r),i=t("CsdX"),o=t("mrsT"),c=t.n(o);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n=_objectWithoutPropertiesLoose(e,t),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++){if(a=s[r],t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;n[a]=e[a]}}return n}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n={},a=Object.keys(e),r,s;for(s=0;s<a.length;s++){if(r=a[s],t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var u=function GradientWrapper(e){var t=e.gradient,a=t.start,r=t.end,s=t.deg,c=e.rootClassName,u=e.tag,l=_objectWithoutProperties(e,["gradient","rootClassName","tag"]);return n.createElement(u,_extends({},Object(i.d)(c,o.StyleSheet.create({gradientBg:{backgroundImage:"linear-gradient(".concat(s||90,"deg, ").concat(a,", ").concat(r,")")}}).gradientBg),l))};u.defaultProps={gradient:i.h.coursera,tag:"div"},u.propTypes={rootClassName:s.a.oneOfType([s.a.string,s.a.object]),gradient:s.a.shape({start:s.a.string.isRequired,end:s.a.string.isRequired,deg:s.a.number.isRequired}).isRequired,tag:s.a.oneOfType([s.a.func,s.a.string])},e.a=u},vZaE:function(module,e,t){"use strict";var n=t("VbXa"),a=t.n(n),r=t("sbe7"),s=t.n(r),i=function(e){function NavigationDrawer(){return e.apply(this,arguments)||this}var t;return a()(NavigationDrawer,e),NavigationDrawer.prototype.render=function render(){var e=this.props.children;return s.a.createElement("div",{className:"rc-NavigationDrawer"},e)},NavigationDrawer}(s.a.Component);e.a=i},"vyh/":function(module,exports,e){},"w+Dm":function(module,exports,e){var t=e("J9q7"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},wzwQ:function(module,e,t){"use strict";t.r(e);var n=t("VbXa"),a=t.n(n),r=t("sbe7"),s=t.n(r),i=t("VYij"),o=t.n(i),c=t("w/1P"),u=t.n(c),l=t("kVUp"),g=t("2k2k"),d=t("+IH+"),m=t("PVxx"),h=t("6PQb"),f=t("k6qd"),p=t.n(f),v=function(e){function Home(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={showMobileNavigation:!1},t}var t;return a()(Home,e),Home.prototype.render=function render(){var e=this,t=this.props,n=t.children,a=t.showEnrollmentStateBanner,r=t.courseId,i=this.state.showMobileNavigation,o=a;return s.a.createElement("div",{className:"rc-Home"},s.a.createElement(d.a,{courseId:r,onMobileNavigationToggle:function onMobileNavigationToggle(){return e.setState({showMobileNavigation:!i})}}),s.a.createElement(g.a,{className:u()({pushed:o}),showMobileNavigation:i}),s.a.createElement("main",{id:"main",className:u()("course-content",{pushed:o})},s.a.createElement(m.a,null),s.a.createElement("div",{className:"course-content-body"},n&&s.a.cloneElement(n,{}))),s.a.createElement(l.a,null))},Home}(s.a.Component);e.default=o.a.compose(Object(h.a)())(v)},yImD:function(module,exports,e){var t=e("zKIM"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},yufQ:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("MhTL"),s=t("relr"),i=function DefaultNavigationItemComponent(e){var t=e.navigationItem,n=e.courseSlug,i=e.router,o=Object(r.a)(t,n,i),c=o.title,u=o.subtitle,l=o.url,g=o.selected;return a.a.createElement("div",{className:"rc-DefaultNavigationItem","data-courselenium":t.typeName},a.a.createElement(s.a,{url:l,title:c,subtitle:u,selected:g}))};e.a=i},zKIM:function(module,exports,e){}}]);
//# sourceMappingURL=en.16.6b9f5aef5a4d1c1e479c.js.map