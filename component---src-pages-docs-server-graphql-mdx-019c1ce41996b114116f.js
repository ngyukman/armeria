"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[1941],{57670:function(e,a,r){r.r(a),r.d(a,{pageTitle:function(){return c},_frontmatter:function(){return o},default:function(){return v}});var t=r(63366),n=(r(67294),r(64983)),i=r(28819),l=["components"],c="Running a GraphQL service",o={},s=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)}},p=s("Tip"),h=s("RequiredDependencies"),m={pageTitle:c,_frontmatter:o},d=i.Z;function v(e){var a=e.components,r=(0,t.Z)(e,l);return(0,n.kt)(d,Object.assign({},m,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"running-a-graphql-service",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h1",href:"#running-a-graphql-service","aria-label":"running a graphql service permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Running a GraphQL service"),(0,n.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#graphqlservice"},"GraphqlService")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#blocking-service-implementation"},"Blocking service implementation"))),(0,n.kt)(p,{mdxType:"Tip"},(0,n.kt)("p",null,"Visit ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria-examples"},"armeria-examples")," to find a fully working example.")),(0,n.kt)("p",null,"First, You need the ",(0,n.kt)("inlineCode",{parentName:"p"},"armeria-graphql")," dependency:"),(0,n.kt)(h,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-graphql"}],mdxType:"RequiredDependencies"}),(0,n.kt)("p",null,"Let's assume we have the following ",(0,n.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"GraphQL Schema"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  user(id: ID): User\n}\n\ntype User {\n  id: ID\n  name: String\n}\n")),(0,n.kt)("p",null,"The schema describes that if a client requests a ",(0,n.kt)("inlineCode",{parentName:"p"},"User")," data using the ",(0,n.kt)("inlineCode",{parentName:"p"},"ID")," field, the GraphQL server will\nreturn the ",(0,n.kt)("inlineCode",{parentName:"p"},"User")," data. The GraphQL engine uses a ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/graphql/schema/DataFetcher.html"},"DataFetcher"),"\nto resolve the ID and fetch the corresponding object. For the sake of simplicity, let's implement\n",(0,n.kt)("inlineCode",{parentName:"p"},"UserDataFetcher")," that stores ",(0,n.kt)("inlineCode",{parentName:"p"},"User"),"s in a ",(0,n.kt)("inlineCode",{parentName:"p"},"Map"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import graphql.schema.DataFetcher;\nimport graphql.schema.DataFetchingEnvironment;\n\nclass UserDataFetcher implements DataFetcher<User> {\n\n    private final Map<String, User> data = Map.of("1", new User("1", "hero"),\n                                                  "2", new User("2", "human"),\n                                                  "3", new User("3", "droid"));\n\n    @Override\n    public User get(DataFetchingEnvironment environment) throws Exception {\n        final String id = environment.getArgument("id");\n        return data.get(id);\n    }\n}\n')),(0,n.kt)(p,{mdxType:"Tip"},(0,n.kt)("p",null,"Please note that this is entirely based on ",(0,n.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/"},"graphql-java"),".")),(0,n.kt)("h2",{id:"graphqlservice",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#graphqlservice","aria-label":"graphqlservice permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),(0,n.kt)("inlineCode",{parentName:"h2"},"GraphqlService")),(0,n.kt)("p",null,"Once you've finished the implementation of the ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/graphql/schema/DataFetcher.html"},"DataFetcher"),", you need to build a ",(0,n.kt)("a",{parentName:"p",href:"type://GraphqlService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/graphql/GraphqlService.html"},"type://GraphqlService")," using\na ",(0,n.kt)("a",{parentName:"p",href:"type://GraphqlServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/graphql/GraphqlServiceBuilder.html"},"type://GraphqlServiceBuilder")," and add it to the ",(0,n.kt)("a",{parentName:"p",href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"},"type://ServerBuilder"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.ServerBuilder;\nimport com.linecorp.armeria.server.graphql.GraphqlService;\n\nServerBuilder sb = Server.builder();\n...\nsb.service("/graphql",\n           GraphqlService.builder()\n                         .runtimeWiring(c -> {\n                            c.type("Query",\n                                   typeWiring -> typeWiring.dataFetcher("user", new UserDataFetcher()));\n                         })\n                         .build());\n...\nServer server = sb.build();\nserver.start();\n')),(0,n.kt)("p",null,"We used ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/graphql/schema/idl/RuntimeWiring.html"},"RuntimeWiring")," to wire the type with DataFetcher. Please see ",(0,n.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/master/schema/#creating-a-schema-using-the-sdl"},"Creating a schema using the SDL")," to find more wiring examples."),(0,n.kt)("h2",{id:"blocking-service-implementation",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#blocking-service-implementation","aria-label":"blocking service implementation permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Blocking service implementation"),(0,n.kt)("p",null,"Armeria does not run service logic in a separate thread pool by default. If your service implementation\nrequires blocking, either run the individual blocking logic in a thread pool, or set\n",(0,n.kt)("a",{parentName:"p",href:"type://GraphqlServiceBuilder#useBlockingTaskExecutor(boolean):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/graphql/GraphqlServiceBuilder.html#useBlockingTaskExecutor(boolean)"},"type://GraphqlServiceBuilder#useBlockingTaskExecutor(boolean)")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," so the service runs in\nall service methods and lifecycle callbacks."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = Server.builder();\nsb.service("/graphql",\n           GraphqlService.builder()\n                         .runtimeWiring(c -> {\n                            c.type("Query",\n                                   typeWiring -> typeWiring.dataFetcher("user", new UserDataFetcher()));\n                         })\n                         // All service methods will be run within\n                         // the blocking executor.\n                         .useBlockingTaskExecutor(true)\n                         .build());\n')),(0,n.kt)(p,{mdxType:"Tip"},(0,n.kt)("p",null,"You can wrap a ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/graphql/schema/DataFetcher.html"},"DataFetcher")," using ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/graphql/schema/AsyncDataFetcher.html"},"AsyncDataFetcher")," to run it asynchronously.")))}v.isMDXComponent=!0},28819:function(e,a,r){r.d(a,{Z:function(){return c}});var t=r(25444),n=r(67294),i=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-graphql"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}'),l=r(46731),c=function(e){var a=(0,t.useStaticQuery)("1217743243").allMdx.nodes;return n.createElement(l.Z,Object.assign({},e,{candidateMdxNodes:a,index:i,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-graphql-mdx-019c1ce41996b114116f.js.map