"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[2779],{37903:function(e,a,t){t.r(a),t.d(a,{pageTitle:function(){return l},_frontmatter:function(){return c},default:function(){return v}});var r,i=t(63366),n=(t(67294),t(64983)),s=t(89791),o=["components"],l="Adding services to a server",c={},d=(r="TutorialSteps",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),p={pageTitle:l,_frontmatter:c},m=s.Z;function v(e){var a=e.components,t=(0,i.Z)(e,o);return(0,n.kt)(m,Object.assign({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"adding-services-to-a-server",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h1",href:"#adding-services-to-a-server","aria-label":"adding services to a server permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Adding services to a server"),(0,n.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#what-you-need"},"What you need"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#1-create-a-service-file"},"1. Create a service file"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#2-add-a-blog-service-to-server"},"2. Add a blog service to server"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#3-add-the-documentation-service"},"3. Add the Documentation service"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#4-run-the-server-and-services"},"4. Run the server and services"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#5-check-docservice-page"},"5. Check DocService page")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#using-docservice-after-adding-service-methods"},"Using DocService after adding service methods")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#whats-next"},"What's next?")))),(0,n.kt)("p",null,"In this step, we'll add an empty blog service to the server we created in ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/rest/blog/create-server"},"Step 1. Create a server"),". Also, we'll add Armeria's ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docservice"},"Documentation service")," for testing our blog service."),(0,n.kt)(d,{current:3,mdxType:"TutorialSteps"}),(0,n.kt)("h2",{id:"what-you-need",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#what-you-need","aria-label":"what you need permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What you need"),(0,n.kt)("p",null,"No preparation is required for this step."),(0,n.kt)("h2",{id:"1-create-a-service-file",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#1-create-a-service-file","aria-label":"1 create a service file permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"1. Create a service file"),(0,n.kt)("p",null,"Create a service file, BlogService.java. You can see the full version of the file ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria-examples/blob/master/tutorials/rest-api-annotated-service/src/main/java/example/armeria/server/blog/BlogService.java"},"here"),". We'll add on service methods in this class in later steps."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java",filename:"BlogService.java"},"package example.armeria.server.blog;\n\nimport java.util.Map;\nimport java.util.concurrent.ConcurrentHashMap;\n\npublic final class BlogService {\n  private final Map<Integer, BlogPost> blogPosts = new ConcurrentHashMap<>();\n}\n")),(0,n.kt)("h2",{id:"2-add-a-blog-service-to-server",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#2-add-a-blog-service-to-server","aria-label":"2 add a blog service to server permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"2. Add a blog service to server"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/rest/blog/create-server"},"Step 1. Create a server"),", we added a dummy service just to check that a server is launched. Now, let's remove the dummy service and add an empty blog service, instead."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From Main.java, remove the dummy service at line 4.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java highlight=4 showlineno=true",filename:"Main.java",highlight:"4",showlineno:"true"},'static Server newServer(int port) {\n  ...\n  return sb.http(port)\n           .service("/", (ctx, req) -> HttpResponse.of("Hello, Armeria!")) // Remove this\n           .build();\n'))),(0,n.kt)("li",{parentName:"ol"},"Add our service by adding line 4.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java highlight=4 showlineno=true",filename:"Main.java",highlight:"4",showlineno:"true"},"static Server newServer(int port) {\n  ...\n  return sb.http(port)\n           .annotatedService(new BlogService())   // Add this\n           .build();\n}\n")))),(0,n.kt)("h2",{id:"3-add-the-documentation-service",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#3-add-the-documentation-service","aria-label":"3 add the documentation service permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"3. Add the Documentation service"),(0,n.kt)("p",null,"This time, we'll add Armeria's ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docservice"},"Documentation service"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"newServer()")," method, add a ",(0,n.kt)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," and a request example for ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/rest/blog/implement-create"},"creating blog posts"),",\nusing ",(0,n.kt)("a",{parentName:"p",href:"type://DocServiceBuilder#exampleRequests(Class,String,Iterable):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocServiceBuilder.html#exampleRequests(java.lang.Class,java.lang.String,java.lang.Iterable)"},"type://DocServiceBuilder#exampleRequests(Class,String,Iterable)"),". Feel free to add more examples for other service methods."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java highlight=1,6-13",filename:"Main.java",highlight:"1,6-13"},'import com.linecorp.armeria.server.docs.DocService;\n\npublic final class Main {\n  static Server newServer(int port) {\n    ServerBuilder sb = Server.builder();\n    DocService docService =\n            DocService.builder()\n                      .exampleRequests(BlogService.class,\n                          "createBlogPost", // Name of service method\n                          "{\\"title\\":\\"My first blog\\", \\"content\\":\\"Hello Armeria!\\"}")\n                      .build();\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"newServer()")," method, add the ",(0,n.kt)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," to our server builder."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java highlight=5",filename:"Main.java",highlight:"5"},'static Server newServer(int port) {\n  ...\n  return sb.http(port)\n           .annotatedService(new BlogService())\n           .serviceUnder("/docs", docService)  // Add Documentation service\n           .build();\n}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) To access the Documentation service result easily, edit the log message we added in ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/rest/blog/create-server"},"Step 1. Create a server")," to the one specified below."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java highlight=2",filename:"Main.java",highlight:"2"},'public static void main(String[] args) throws Exception {\n    logger.info("Server has been started. Serving DocService at http://127.0.0.1:{}/docs",\n                server.activeLocalPort());\n}\n')))),(0,n.kt)("h2",{id:"4-run-the-server-and-services",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#4-run-the-server-and-services","aria-label":"4 run the server and services permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"4. Run the server and services"),(0,n.kt)("p",null,"Like we did in ",(0,n.kt)("em",{parentName:"p"},"Step 1. Create a server"),", ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/rest/blog/create-server#3-run-the-server-and-service"},"build and run")," the service by running the ",(0,n.kt)("inlineCode",{parentName:"p"},"main()")," method or using Gradle."),(0,n.kt)("p",null,"The server and services are launched successfully if you see this message."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," Server has been started. Serving DocService at http://127.0.0.1:8080/docs\n")),(0,n.kt)("h2",{id:"5-check-docservice-page",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#5-check-docservice-page","aria-label":"5 check docservice page permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"5. Check DocService page"),(0,n.kt)("p",null,"Let's test and call our service operations, using Armeria's Documentation service."),(0,n.kt)("p",null,"Click the URL ",(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/docs")," from the log message or open the URL on a web browser. If you see the Document service page, you've launched the ",(0,n.kt)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," and server successfully. We're seeing no services on the\npage because we're to implement service methods."),(0,n.kt)("p",null,"  ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.355828220858896%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVQY03VPTUvDQBDd3yeCvXgSqVa9CtZfZ/Ug7U0kKYWCSNKKmDZpamM3H/uZHSe7bRTBx+Pt28fM7Cw5PB10zu87Z40edQcHJ3fHVw+Xt8PeDXLU64+s+cuL/rB7/Uj8yZs/maN649Abz5684NkPpy9RMFu/hikymH/+R5Iki+jjPV5GyCRerFZLTNZpkqZxTr+EqAA0GN2oM60HTbZbmmVZnudSKSGElGIPiQlC2lNaKKWRcg+idXMBAFT0YGGMYYy53Jiac2YsMCzLEo2rIVhRVbgb4FuUUtdf1zUWOY8zNxvmhhZF4Sb+NLeLcc7lbtnmC2q3tsJY/fpCi2+M1XYNdEaxXwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"tutorial blogservice docservice start",title:"tutorial blogservice docservice start",src:"/static/2a1766e9cfd0f3ae659db7b334c67873/a6d36/tutorial_blogservice_docservice_start.png",srcSet:["/static/2a1766e9cfd0f3ae659db7b334c67873/222b7/tutorial_blogservice_docservice_start.png 163w","/static/2a1766e9cfd0f3ae659db7b334c67873/ff46a/tutorial_blogservice_docservice_start.png 325w","/static/2a1766e9cfd0f3ae659db7b334c67873/a6d36/tutorial_blogservice_docservice_start.png 650w","/static/2a1766e9cfd0f3ae659db7b334c67873/e548f/tutorial_blogservice_docservice_start.png 975w","/static/2a1766e9cfd0f3ae659db7b334c67873/c23ad/tutorial_blogservice_docservice_start.png 1193w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("h3",{id:"using-docservice-after-adding-service-methods",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h3",href:"#using-docservice-after-adding-service-methods","aria-label":"using docservice after adding service methods permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Using DocService after adding service methods"),(0,n.kt)("p",null,"When you add service methods through later steps, you'll see a result similar to this."),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.355828220858896%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMklEQVQY0z1Py07DMBDM51UgxBlUlSp3BP0m/gEC6gFSDlQpqXikhZIGSp9pE9nIsWM7ccLGkToajWa1s+u10Ti1jlq3B82bw6YFbJxYx2d3Zsc2Oz2z86jZa1/a7Qtb68OerfN74/Vt7o0WwQwHM+R9rPoDfzD8HrjBM+gwcNyp+/IznoSfX7tK/d1kGtUEb/wJRgQrNTin69VvuFmEm+U2XO626224iqJNHIcYRzxNCiXLUu1pOH1/5M0Zo4QklDKMMUKYcyGlFJXILMtEBZnnua4AudQwhs7V+P06jmEKF0UBKaUUNEDhFlDGmNJI0xQCoJTSQsPout3+6CmOYoRQHYUXYAUhBNrgkyTRP8oRSsFACavBVMMCq4zAIwVM1hfWJ3HOodTHi8qIjHO5D9Stf6OtcMAyVHaEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"tutorial blogservice docservice end",title:"tutorial blogservice docservice end",src:"/static/d6d50e14da73d95b6982aa75b8e75849/a6d36/tutorial_blogservice_docservice_end.png",srcSet:["/static/d6d50e14da73d95b6982aa75b8e75849/222b7/tutorial_blogservice_docservice_end.png 163w","/static/d6d50e14da73d95b6982aa75b8e75849/ff46a/tutorial_blogservice_docservice_end.png 325w","/static/d6d50e14da73d95b6982aa75b8e75849/a6d36/tutorial_blogservice_docservice_end.png 650w","/static/d6d50e14da73d95b6982aa75b8e75849/e548f/tutorial_blogservice_docservice_end.png 975w","/static/d6d50e14da73d95b6982aa75b8e75849/d326d/tutorial_blogservice_docservice_end.png 1197w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null,"To test your service methods with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docservice"},"Documentation service"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"createBlogPost()")," method link in the left panel. You can make calls to the creation method from the page opened."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"536px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.91411042944786%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKklEQVQ4y+1UPU/DMBD1j0ViR2JHYq3ExA9gg42RrfwBYEaUIjEgVSEfThw7dnx+xBdalNIWQlfOerJOd36+09lPkHWgRIIKBUorUKkR4qIOYTxEsC2wkEBRA5kCVIOxFomWJtq2hbYNlNEwzkJWJaqqQlmWUEohz3PEHGMMiqJg31qLLMvYJ6IVKVeYpimeZzO8zOd4TxJO0lozYV3XfDASNE3DMSklXxDj64SrCuMB5xy89/iLDVreFByLQYU/JYw1sS/BP+HmoewDQfxnMZjw94f2id9U+JVNvDvyaNcRqIdv+ZfsgriZvuJkcofTswdcXD4CtYHPFasOK5DUvQpFReqEpFci2t7y1fUTDo6mODy+xeT8HtCGCUKnPmG5LwqEtwysTNjd/gcMYelz0MIyjQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"tutorial blogservice reqex",title:"tutorial blogservice reqex",src:"/static/fe7bc50893d685163e6ab61bd07646ea/2d920/tutorial_blogservice_reqex.png",srcSet:["/static/fe7bc50893d685163e6ab61bd07646ea/222b7/tutorial_blogservice_reqex.png 163w","/static/fe7bc50893d685163e6ab61bd07646ea/ff46a/tutorial_blogservice_reqex.png 325w","/static/fe7bc50893d685163e6ab61bd07646ea/2d920/tutorial_blogservice_reqex.png 536w"],sizes:"(max-width: 536px) 100vw, 536px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",{parentName:"li"},"Note that in the ",(0,n.kt)("strong",{parentName:"p"},"REQUEST BODY")," section that the values specified for the ",(0,n.kt)("a",{parentName:"p",href:"type://DocServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocServiceBuilder.html"},"type://DocServiceBuilder")," are automatically entered on the page."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java highlight=5-8",filename:"Main.java",highlight:"5-8"},'static Server newServer(int port) {\n  ServerBuilder sb = Server.builder();\n  DocService docService =\n    DocService.builder()\n              .exampleRequests(\n                BlogService.class,\n                "createBlogPost",\n                "{\\"title\\":\\"My first blog\\",\\"content\\":\\"Hello Armeria!\\"}")\n              .build();\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"SUBMIT")," button, and you'll see the blog post information returned in the right panel."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.31288343558282%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnElEQVQY04WP2w6CMAyGef9XNPEK0BCYHFy7rd1+CxqiMUqTL71o8x8qSRFHk+zHew8RQSnlL1Xde1xHNmjb3S2gc8bwxC0KChFMhJzzoXl1rhfUPeMyJ7RTROuMIaIxsZXLmBC1gL2Cg8ATb6jqJvCVEAtbJzl0HvtgmLG749RMcHP4ENwT0qvK6viL9R5IEEkRpGDmDE55F3yfB/nPiDDTL/YhAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"tutorial blogservice return",title:"tutorial blogservice return",src:"/static/3a76751dde120ef62c03b5b8964be507/a6d36/tutorial_blogservice_return.png",srcSet:["/static/3a76751dde120ef62c03b5b8964be507/222b7/tutorial_blogservice_return.png 163w","/static/3a76751dde120ef62c03b5b8964be507/ff46a/tutorial_blogservice_return.png 325w","/static/3a76751dde120ef62c03b5b8964be507/a6d36/tutorial_blogservice_return.png 650w","/static/3a76751dde120ef62c03b5b8964be507/e548f/tutorial_blogservice_return.png 975w","/static/3a76751dde120ef62c03b5b8964be507/302a4/tutorial_blogservice_return.png 1080w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")))),(0,n.kt)("h2",{id:"whats-next",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#whats-next","aria-label":"whats next permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What's next?"),(0,n.kt)("p",null,"In this step, we've added an empty blog service and the Documentation service to a server."),(0,n.kt)("p",null,"Next, at ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/rest/blog/implement-create"},"Step 4. Implement CREATE"),", we'll finally implement a CREATE\noperation to create blog posts."),(0,n.kt)(d,{current:3,mdxType:"TutorialSteps"}))}v.isMDXComponent=!0},89791:function(e,a,t){t.d(a,{Z:function(){return o}});var r=t(25444),i=t(67294),n=JSON.parse('{"root":["index"],"Useful links":{"User manual":"/docs","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"REST service":["rest/blog","rest/blog/create-server","rest/blog/prepare-data-object","rest/blog/add-services-to-server","rest/blog/implement-create","rest/blog/implement-read","rest/blog/implement-update","rest/blog/implement-delete"],"gRPC service":{"Coming soon":null},"Thrift service":{"Coming soon":null}}'),s=t(46731),o=function(e){var a=(0,r.useStaticQuery)("3172452987").allMdx.nodes;return i.createElement(s.Z,Object.assign({},e,{candidateMdxNodes:a,index:n,prefix:"tutorials",menuTitle:!0,pageTitleSuffix:"Armeria tutorial"}))}}}]);
//# sourceMappingURL=component---src-pages-tutorials-rest-blog-add-services-to-server-mdx-9d90257c1b4c8c74fbd8.js.map