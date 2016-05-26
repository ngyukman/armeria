"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[292],{92228:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return h}});var r,i=a(63366),n=(a(67294),a(64983)),o=a(20370),l=["components"],s={},c=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),m={_frontmatter:s},p=o.Z;function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,n.kt)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{className:"date"},"22nd September 2020"),(0,n.kt)("h2",{id:"-new-features",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can now inject your own ",(0,n.kt)("a",{parentName:"li",href:"type://MeterIdPrefixFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/metric/MeterIdPrefixFunction.html"},"type://MeterIdPrefixFunction")," when using Armeria Spring Boot integration. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3034"},"#3034"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic MeterIdPrefixFunction myMeterIdPrefixFunction() {\n    return MeterIdPrefixFunction.of("custom.armeria.server");\n}\n'))),(0,n.kt)("li",{parentName:"ul"},"You can now disable TLS verification for certain hosts only. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2722"},"#2722")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3057"},"#3057"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'ClientFactoryBuilder builder = ...\n// You should never use this in production but only for a testing purpose.\nbuilder.tlsNoVerifyHosts("trustin.com", "trustus.com");\n'))),(0,n.kt)("li",{parentName:"ul"},"You can now use a string to specify the ",(0,n.kt)("inlineCode",{parentName:"li"},"Logger")," for ",(0,n.kt)("a",{parentName:"li",href:"type://LoggingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/logging/LoggingService.html"},"type://LoggingService")," and ",(0,n.kt)("a",{parentName:"li",href:"type://LoggingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/logging/LoggingClient.html"},"type://LoggingClient"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3035"},"#3035"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = ...\nsb.decorator(LoggingService.builder()\n                           .logger("com.foo")\n                           .build());\n')))),(0,n.kt)("h2",{id:"-improvements",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://RequestLog#serviceName()"},"type://RequestLog#serviceName()")," is now used as a span name if you use the default ",(0,n.kt)("inlineCode",{parentName:"li"},"HttpRequestParser"),"\nand ",(0,n.kt)("inlineCode",{parentName:"li"},"HttpResponseParser")," with ",(0,n.kt)("a",{parentName:"li",href:"type://BraveClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/brave/BraveClient.html"},"type://BraveClient")," and ",(0,n.kt)("a",{parentName:"li",href:"type://BraveService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/brave/BraveService.html"},"type://BraveService")," for recognizing\na span easily. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3023"},"#3023")),(0,n.kt)("li",{parentName:"ul"},"You can now easily find out whether SPI service interfaces are applied from the logs. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3039"},"#3039")),(0,n.kt)("li",{parentName:"ul"},"You can now get the log of the exception which is raised while converting a ",(0,n.kt)("a",{parentName:"li",href:"type://RequestLog:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logging/RequestLog.html"},"type://RequestLog")," into a\n",(0,n.kt)("inlineCode",{parentName:"li"},"String"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3043"},"#3043")),(0,n.kt)("li",{parentName:"ul"},"The stack trace of ",(0,n.kt)("a",{parentName:"li",href:"type://HttpStatusException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/HttpStatusException.html"},"type://HttpStatusException")," and ",(0,n.kt)("a",{parentName:"li",href:"type://HttpResponseException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/HttpResponseException.html"},"type://HttpResponseException")," are not logged anymore by\n",(0,n.kt)("a",{parentName:"li",href:"type://LoggingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/logging/LoggingService.html"},"type://LoggingService")," because a user already knows where they are come from. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3053"},"#3053"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3054"},"#3054"))),(0,n.kt)("h2",{id:"️-bug-fixes",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TimeoutScheduler")," is now initialized exactly once. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3066"},"#3066")),(0,n.kt)("li",{parentName:"ul"},"Reactor subscriber context is now properly propagated. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3058"},"#3058")),(0,n.kt)("li",{parentName:"ul"},"Armeria Spring Boot integration collects metrics correctly if ",(0,n.kt)("a",{parentName:"li",href:"type://ArmeriaSettings#enableMetrics"},"type://ArmeriaSettings#enableMetrics"),"\nis ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3048"},"#3048")),(0,n.kt)("li",{parentName:"ul"},"You now see the proper exception from WebFlux ",(0,n.kt)("inlineCode",{parentName:"li"},"WebClient")," when ",(0,n.kt)("a",{parentName:"li",href:"type://CircuitBreakerClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html"},"type://CircuitBreakerClient")," is applied. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3064"},"#3064")),(0,n.kt)("li",{parentName:"ul"},"Armeria client now rejects a ",(0,n.kt)("inlineCode",{parentName:"li"},"PUSH_PROMISE")," frame correctly because it doesn't support it yet. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3045"},"#3045"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SETTINGS_ENABLE_PUSH")," is now disabled."))),(0,n.kt)("li",{parentName:"ul"},"Armeria gRPC server does not raise a ",(0,n.kt)("inlineCode",{parentName:"li"},"NullPointerException")," anymore when a gRPC server interceptor closes\nthe ",(0,n.kt)("inlineCode",{parentName:"li"},"ServerCall"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3022"},"#3022"))),(0,n.kt)("h2",{id:"-dependencies",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Brave 5.12.4 → 5.12.6"),(0,n.kt)("li",{parentName:"ul"},"Dropwizard 2.0.12 → 2.0.13"),(0,n.kt)("li",{parentName:"ul"},"gRPC 1.31.1 → 1.32.1"),(0,n.kt)("li",{parentName:"ul"},"grpc-kotlin-stub 0.1.5 → 0.2.0"),(0,n.kt)("li",{parentName:"ul"},"Micrometer 1.5.4 → 1.5.5"),(0,n.kt)("li",{parentName:"ul"},"Netty 4.1.51.FINAL → 4.1.52.FINAL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"netty-tcnative-boringssl-static 2.0.31.Final → 2.0.34.Final"))),(0,n.kt)("li",{parentName:"ul"},"Tomcat 9.0.37 → 9.0.38"),(0,n.kt)("li",{parentName:"ul"},"org.jetbrains.kotlinx 1.3.8 → 1.3.9"),(0,n.kt)("li",{parentName:"ul"},"Spring 5.2.8.RELEASE → 5.2.9.RELEASE"),(0,n.kt)("li",{parentName:"ul"},"Spring Boot 2.3.3.RELEASE → 2.3.4.RELEASE"),(0,n.kt)("li",{parentName:"ul"},"Examples:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dagger 2.28.3 → 2.29.1"),(0,n.kt)("li",{parentName:"ul"},"monix-reactive_2.13 3.2.2+43-36c1ada8 → 3.2.2+45-5c6c8b9e"),(0,n.kt)("li",{parentName:"ul"},"org.jetbrains.kotlin 1.3.72 → 1.4.10")))),(0,n.kt)("h2",{id:"-thank-you",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),(0,n.kt)(c,{usernames:["aanrii","anuraaga","codefromthecrypt","eonezhang","ghkim3221","ikhoon","kojilin","mauhiz","minwoox","okue","rickyrattlesnake","trustin","tumile","wooyeong"],mdxType:"ThankYou"}))}h.isMDXComponent=!0},20370:function(e,t,a){a(88025);var r=a(1923),i=a(25444),n=a(67294),o=a(55746),l=a(8284),s=a(96759),c=a(46731),m=a(9396),p=r.Z.Title,h=Object.keys(l)[0],u=d(h);function d(e){return e.substring(e.lastIndexOf("/")+1)}t.Z=function(e){var t={},a={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(o).forEach((function(e){var a=e[0],r=e[1];t[r]=a})),Object.entries(l).forEach((function(e){var t=e[0],r=e[1];a[r]=t}));var v=(0,m.Z)(e.location),k=e.version||d(v);return k.match(/^[0-9]/)||(k=void 0),n.createElement(c.Z,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:k?k+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),k&&k!==u?n.createElement(s.Ch,null,"You're seeing the release note of an old version. Check out"," ",n.createElement(i.Link,{to:h},"the latest release note"),"."):"",k?n.createElement(p,{id:"release-notes",level:1},n.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},n.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),k," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.16.0":"v1.16.0","/release-notes/1.15.0":"v1.15.0","/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-1-1-0-mdx-cd7d929f0496abbf1239.js.map