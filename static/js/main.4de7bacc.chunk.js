(this.webpackJsonpmovie_app_test=this.webpackJsonpmovie_app_test||[]).push([[0],{44:function(C,t,e){},45:function(C,t,e){},46:function(C,t,e){"use strict";e.r(t);var s=e(0),a=e(2),i=e.n(a),r=e(13),c=e.n(r),n=e(4),o=e.n(n),h=e(14),d=e(15),j=e(16),l=e(19),m=e(18),p=e(17),u=e.n(p);e(44);var b=function(C){var t=C.poster,e=C.title,a=C.year,i=C.rating,r=C.summary,c=C.genres;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("div",{className:"movie__poster",children:Object(s.jsx)("img",{src:t,alt:e,title:e})}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:e}),Object(s.jsx)("h5",{className:"movie__year",children:a}),Object(s.jsx)("ul",{className:"movie__genres",children:c.map((function(C,t){return Object(s.jsx)("li",{className:"genres__genre",children:C},t)}))}),Object(s.jsx)("div",{className:"movie__rating",children:i}),Object(s.jsxs)("div",{className:"movie__summary",children:[r.slice(0,180),"..."]})]})]})},x=(e(45),function(C){Object(l.a)(e,C);var t=Object(m.a)(e);function e(){var C;Object(d.a)(this,e);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(C=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},C.getMovies=Object(h.a)(o.a.mark((function t(){var e,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:e=t.sent,s=e.data.data.movies,C.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),C}return Object(j.a)(e,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var C=this.state,t=C.isLoading,e=C.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("div",{className:"loader__text",children:Object(s.jsxs)("svg",{id:"logo",width:"635",height:"154",viewBox:"0 0 635 154",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsxs)("mask",{id:"path-1-outside-1",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"635",height:"154",fill:"black",children:[Object(s.jsx)("rect",{fill:"white",width:"635",height:"154"}),Object(s.jsx)("path",{d:"M5 114.406V11.6094H16.9531V103.578H62.3047V114.406H5Z"}),Object(s.jsx)("path",{d:"M144.57 75.8047C144.57 88.3672 141.406 98.1875 135.078 105.266C128.75 112.297 120.008 115.812 108.852 115.812C101.961 115.812 95.8438 114.195 90.5 110.961C85.1562 107.727 81.0312 103.086 78.125 97.0391C75.2188 90.9922 73.7656 83.9141 73.7656 75.8047C73.7656 63.2422 76.9062 53.4688 83.1875 46.4844C89.4688 39.4531 98.1875 35.9375 109.344 35.9375C120.125 35.9375 128.68 39.5234 135.008 46.6953C141.383 53.8672 144.57 63.5703 144.57 75.8047ZM85.8594 75.8047C85.8594 85.6484 87.8281 93.1484 91.7656 98.3047C95.7031 103.461 101.492 106.039 109.133 106.039C116.773 106.039 122.562 103.484 126.5 98.375C130.484 93.2188 132.477 85.6953 132.477 75.8047C132.477 66.0078 130.484 58.5781 126.5 53.5156C122.562 48.4062 116.727 45.8516 108.992 45.8516C101.352 45.8516 95.5859 48.3594 91.6953 53.375C87.8047 58.3906 85.8594 65.8672 85.8594 75.8047Z"}),Object(s.jsx)("path",{d:"M212.492 114.406L210.172 103.438H209.609C205.766 108.266 201.922 111.547 198.078 113.281C194.281 114.969 189.523 115.812 183.805 115.812C176.164 115.812 170.164 113.844 165.805 109.906C161.492 105.969 159.336 100.367 159.336 93.1016C159.336 77.5391 171.781 69.3828 196.672 68.6328L209.75 68.2109V63.4297C209.75 57.3828 208.438 52.9297 205.812 50.0703C203.234 47.1641 199.086 45.7109 193.367 45.7109C186.945 45.7109 179.68 47.6797 171.57 51.6172L167.984 42.6875C171.781 40.625 175.93 39.0078 180.43 37.8359C184.977 36.6641 189.523 36.0781 194.07 36.0781C203.258 36.0781 210.055 38.1172 214.461 42.1953C218.914 46.2734 221.141 52.8125 221.141 61.8125V114.406H212.492ZM186.125 106.18C193.391 106.18 199.086 104.188 203.211 100.203C207.383 96.2188 209.469 90.6406 209.469 83.4688V76.5078L197.797 77C188.516 77.3281 181.812 78.7812 177.688 81.3594C173.609 83.8906 171.57 87.8516 171.57 93.2422C171.57 97.4609 172.836 100.672 175.367 102.875C177.945 105.078 181.531 106.18 186.125 106.18Z"}),Object(s.jsx)("path",{d:"M297.711 104.07H297.078C291.688 111.898 283.625 115.812 272.891 115.812C262.812 115.812 254.961 112.367 249.336 105.477C243.758 98.5859 240.969 88.7891 240.969 76.0859C240.969 63.3828 243.781 53.5156 249.406 46.4844C255.031 39.4531 262.859 35.9375 272.891 35.9375C283.344 35.9375 291.359 39.7344 296.938 47.3281H297.852L297.359 41.7734L297.078 36.3594V5H308.75V114.406H299.258L297.711 104.07ZM274.367 106.039C282.336 106.039 288.102 103.883 291.664 99.5703C295.273 95.2109 297.078 88.2031 297.078 78.5469V76.0859C297.078 65.1641 295.25 57.3828 291.594 52.7422C287.984 48.0547 282.195 45.7109 274.227 45.7109C267.383 45.7109 262.133 48.3828 258.477 53.7266C254.867 59.0234 253.062 66.5234 253.062 76.2266C253.062 86.0703 254.867 93.5 258.477 98.5156C262.086 103.531 267.383 106.039 274.367 106.039Z"}),Object(s.jsx)("path",{d:"M345.242 114.406H333.57V37.3438H345.242V114.406ZM332.586 16.4609C332.586 13.7891 333.242 11.8438 334.555 10.625C335.867 9.35938 337.508 8.72656 339.477 8.72656C341.352 8.72656 342.969 9.35938 344.328 10.625C345.688 11.8906 346.367 13.8359 346.367 16.4609C346.367 19.0859 345.688 21.0547 344.328 22.3672C342.969 23.6328 341.352 24.2656 339.477 24.2656C337.508 24.2656 335.867 23.6328 334.555 22.3672C333.242 21.0547 332.586 19.0859 332.586 16.4609Z"}),Object(s.jsx)("path",{d:"M422.727 114.406V64.5547C422.727 58.2734 421.297 53.5859 418.438 50.4922C415.578 47.3984 411.102 45.8516 405.008 45.8516C396.945 45.8516 391.039 48.0312 387.289 52.3906C383.539 56.75 381.664 63.9453 381.664 73.9766V114.406H369.992V37.3438H379.484L381.383 47.8906H381.945C384.336 44.0938 387.688 41.1641 392 39.1016C396.312 36.9922 401.117 35.9375 406.414 35.9375C415.695 35.9375 422.68 38.1875 427.367 42.6875C432.055 47.1406 434.398 54.2891 434.398 64.1328V114.406H422.727Z"}),Object(s.jsx)("path",{d:"M521.516 37.3438V44.7266L507.242 46.4141C508.555 48.0547 509.727 50.2109 510.758 52.8828C511.789 55.5078 512.305 58.4844 512.305 61.8125C512.305 69.3594 509.727 75.3828 504.57 79.8828C499.414 84.3828 492.336 86.6328 483.336 86.6328C481.039 86.6328 478.883 86.4453 476.867 86.0703C471.898 88.6953 469.414 92 469.414 95.9844C469.414 98.0938 470.281 99.6641 472.016 100.695C473.75 101.68 476.727 102.172 480.945 102.172H494.586C502.93 102.172 509.328 103.93 513.781 107.445C518.281 110.961 520.531 116.07 520.531 122.773C520.531 131.305 517.109 137.797 510.266 142.25C503.422 146.75 493.438 149 480.312 149C470.234 149 462.453 147.125 456.969 143.375C451.531 139.625 448.812 134.328 448.812 127.484C448.812 122.797 450.312 118.742 453.312 115.32C456.312 111.898 460.531 109.578 465.969 108.359C464 107.469 462.336 106.086 460.977 104.211C459.664 102.336 459.008 100.156 459.008 97.6719C459.008 94.8594 459.758 92.3984 461.258 90.2891C462.758 88.1797 465.125 86.1406 468.359 84.1719C464.375 82.5312 461.117 79.7422 458.586 75.8047C456.102 71.8672 454.859 67.3672 454.859 62.3047C454.859 53.8672 457.391 47.375 462.453 42.8281C467.516 38.2344 474.688 35.9375 483.969 35.9375C488 35.9375 491.633 36.4062 494.867 37.3438H521.516ZM460.062 127.344C460.062 131.516 461.82 134.68 465.336 136.836C468.852 138.992 473.891 140.07 480.453 140.07C490.25 140.07 497.492 138.594 502.18 135.641C506.914 132.734 509.281 128.773 509.281 123.758C509.281 119.586 507.992 116.68 505.414 115.039C502.836 113.445 497.984 112.648 490.859 112.648H476.867C471.57 112.648 467.445 113.914 464.492 116.445C461.539 118.977 460.062 122.609 460.062 127.344ZM466.391 62.0234C466.391 67.4141 467.914 71.4922 470.961 74.2578C474.008 77.0234 478.25 78.4062 483.688 78.4062C495.078 78.4062 500.773 72.875 500.773 61.8125C500.773 50.2344 495.008 44.4453 483.477 44.4453C477.992 44.4453 473.773 45.9219 470.82 48.875C467.867 51.8281 466.391 56.2109 466.391 62.0234Z"}),Object(s.jsx)("path",{d:"M535.648 106.953C535.648 103.812 536.352 101.445 537.758 99.8516C539.211 98.2109 541.273 97.3906 543.945 97.3906C546.664 97.3906 548.773 98.2109 550.273 99.8516C551.82 101.445 552.594 103.812 552.594 106.953C552.594 110 551.82 112.344 550.273 113.984C548.727 115.625 546.617 116.445 543.945 116.445C541.555 116.445 539.562 115.719 537.969 114.266C536.422 112.766 535.648 110.328 535.648 106.953Z"}),Object(s.jsx)("path",{d:"M574.039 106.953C574.039 103.812 574.742 101.445 576.148 99.8516C577.602 98.2109 579.664 97.3906 582.336 97.3906C585.055 97.3906 587.164 98.2109 588.664 99.8516C590.211 101.445 590.984 103.812 590.984 106.953C590.984 110 590.211 112.344 588.664 113.984C587.117 115.625 585.008 116.445 582.336 116.445C579.945 116.445 577.953 115.719 576.359 114.266C574.812 112.766 574.039 110.328 574.039 106.953Z"}),Object(s.jsx)("path",{d:"M612.43 106.953C612.43 103.812 613.133 101.445 614.539 99.8516C615.992 98.2109 618.055 97.3906 620.727 97.3906C623.445 97.3906 625.555 98.2109 627.055 99.8516C628.602 101.445 629.375 103.812 629.375 106.953C629.375 110 628.602 112.344 627.055 113.984C625.508 115.625 623.398 116.445 620.727 116.445C618.336 116.445 616.344 115.719 614.75 114.266C613.203 112.766 612.43 110.328 612.43 106.953Z"})]}),Object(s.jsx)("path",{d:"M5 114.406V11.6094H16.9531V103.578H62.3047V114.406H5Z",stroke:"white",strokeWidth:"10",mask:"url(#path-1-outside-1)"}),Object(s.jsx)("path",{d:"M144.57 75.8047C144.57 88.3672 141.406 98.1875 135.078 105.266C128.75 112.297 120.008 115.812 108.852 115.812C101.961 115.812 95.8438 114.195 90.5 110.961C85.1562 107.727 81.0312 103.086 78.125 97.0391C75.2188 90.9922 73.7656 83.9141 73.7656 75.8047C73.7656 63.2422 76.9062 53.4688 83.1875 46.4844C89.4688 39.4531 98.1875 35.9375 109.344 35.9375C120.125 35.9375 128.68 39.5234 135.008 46.6953C141.383 53.8672 144.57 63.5703 144.57 75.8047ZM85.8594 75.8047C85.8594 85.6484 87.8281 93.1484 91.7656 98.3047C95.7031 103.461 101.492 106.039 109.133 106.039C116.773 106.039 122.562 103.484 126.5 98.375C130.484 93.2188 132.477 85.6953 132.477 75.8047C132.477 66.0078 130.484 58.5781 126.5 53.5156C122.562 48.4062 116.727 45.8516 108.992 45.8516C101.352 45.8516 95.5859 48.3594 91.6953 53.375C87.8047 58.3906 85.8594 65.8672 85.8594 75.8047Z",stroke:"white",strokeWidth:"10",mask:"url(#path-1-outside-1)"}),Object(s.jsx)("path",{d:"M212.492 114.406L210.172 103.438H209.609C205.766 108.266 201.922 111.547 198.078 113.281C194.281 114.969 189.523 115.812 183.805 115.812C176.164 115.812 170.164 113.844 165.805 109.906C161.492 105.969 159.336 100.367 159.336 93.1016C159.336 77.5391 171.781 69.3828 196.672 68.6328L209.75 68.2109V63.4297C209.75 57.3828 208.438 52.9297 205.812 50.0703C203.234 47.1641 199.086 45.7109 193.367 45.7109C186.945 45.7109 179.68 47.6797 171.57 51.6172L167.984 42.6875C171.781 40.625 175.93 39.0078 180.43 37.8359C184.977 36.6641 189.523 36.0781 194.07 36.0781C203.258 36.0781 210.055 38.1172 214.461 42.1953C218.914 46.2734 221.141 52.8125 221.141 61.8125V114.406H212.492ZM186.125 106.18C193.391 106.18 199.086 104.188 203.211 100.203C207.383 96.2188 209.469 90.6406 209.469 83.4688V76.5078L197.797 77C188.516 77.3281 181.812 78.7812 177.688 81.3594C173.609 83.8906 171.57 87.8516 171.57 93.2422C171.57 97.4609 172.836 100.672 175.367 102.875C177.945 105.078 181.531 106.18 186.125 106.18Z",stroke:"white",strokeWidth:"10",mask:"url(#path-1-outside-1)"}),Object(s.jsx)("path",{d:"M297.711 104.07H297.078C291.688 111.898 283.625 115.812 272.891 115.812C262.812 115.812 254.961 112.367 249.336 105.477C243.758 98.5859 240.969 88.7891 240.969 76.0859C240.969 63.3828 243.781 53.5156 249.406 46.4844C255.031 39.4531 262.859 35.9375 272.891 35.9375C283.344 35.9375 291.359 39.7344 296.938 47.3281H297.852L297.359 41.7734L297.078 36.3594V5H308.75V114.406H299.258L297.711 104.07ZM274.367 106.039C282.336 106.039 288.102 103.883 291.664 99.5703C295.273 95.2109 297.078 88.2031 297.078 78.5469V76.0859C297.078 65.1641 295.25 57.3828 291.594 52.7422C287.984 48.0547 282.195 45.7109 274.227 45.7109C267.383 45.7109 262.133 48.3828 258.477 53.7266C254.867 59.0234 253.062 66.5234 253.062 76.2266C253.062 86.0703 254.867 93.5 258.477 98.5156C262.086 103.531 267.383 106.039 274.367 106.039Z",stroke:"white",strokeWidth:"10",mask:"url(#path-1-outside-1)"}),Object(s.jsx)("path",{d:"M345.242 114.406H333.57V37.3438H345.242V114.406ZM332.586 16.4609C332.586 13.7891 333.242 11.8438 334.555 10.625C335.867 9.35938 337.508 8.72656 339.477 8.72656C341.352 8.72656 342.969 9.35938 344.328 10.625C345.688 11.8906 346.367 13.8359 346.367 16.4609C346.367 19.0859 345.688 21.0547 344.328 22.3672C342.969 23.6328 341.352 24.2656 339.477 24.2656C337.508 24.2656 335.867 23.6328 334.555 22.3672C333.242 21.0547 332.586 19.0859 332.586 16.4609Z",stroke:"white",strokeWidth:"10",mask:"url(#path-1-outside-1)"}),Object(s.jsx)("path",{d:"M422.727 114.406V64.5547C422.727 58.2734 421.297 53.5859 418.438 50.4922C415.578 47.3984 411.102 45.8516 405.008 45.8516C396.945 45.8516 391.039 48.0312 387.289 52.3906C383.539 56.75 381.664 63.9453 381.664 73.9766V114.406H369.992V37.3438H379.484L381.383 47.8906H381.945C384.336 44.0938 387.688 41.1641 392 39.1016C396.312 36.9922 401.117 35.9375 406.414 35.9375C415.695 35.9375 422.68 38.1875 427.367 42.6875C432.055 47.1406 434.398 54.2891 434.398 64.1328V114.406H422.727Z",stroke:"white",strokeWidth:"10",mask:"url(#path-1-outside-1)"}),Object(s.jsx)("path",{d:"M521.516 37.3438V44.7266L507.242 46.4141C508.555 48.0547 509.727 50.2109 510.758 52.8828C511.789 55.5078 512.305 58.4844 512.305 61.8125C512.305 69.3594 509.727 75.3828 504.57 79.8828C499.414 84.3828 492.336 86.6328 483.336 86.6328C481.039 86.6328 478.883 86.4453 476.867 86.0703C471.898 88.6953 469.414 92 469.414 95.9844C469.414 98.0938 470.281 99.6641 472.016 100.695C473.75 101.68 476.727 102.172 480.945 102.172H494.586C502.93 102.172 509.328 103.93 513.781 107.445C518.281 110.961 520.531 116.07 520.531 122.773C520.531 131.305 517.109 137.797 510.266 142.25C503.422 146.75 493.438 149 480.312 149C470.234 149 462.453 147.125 456.969 143.375C451.531 139.625 448.812 134.328 448.812 127.484C448.812 122.797 450.312 118.742 453.312 115.32C456.312 111.898 460.531 109.578 465.969 108.359C464 107.469 462.336 106.086 460.977 104.211C459.664 102.336 459.008 100.156 459.008 97.6719C459.008 94.8594 459.758 92.3984 461.258 90.2891C462.758 88.1797 465.125 86.1406 468.359 84.1719C464.375 82.5312 461.117 79.7422 458.586 75.8047C456.102 71.8672 454.859 67.3672 454.859 62.3047C454.859 53.8672 457.391 47.375 462.453 42.8281C467.516 38.2344 474.688 35.9375 483.969 35.9375C488 35.9375 491.633 36.4062 494.867 37.3438H521.516ZM460.062 127.344C460.062 131.516 461.82 134.68 465.336 136.836C468.852 138.992 473.891 140.07 480.453 140.07C490.25 140.07 497.492 138.594 502.18 135.641C506.914 132.734 509.281 128.773 509.281 123.758C509.281 119.586 507.992 116.68 505.414 115.039C502.836 113.445 497.984 112.648 490.859 112.648H476.867C471.57 112.648 467.445 113.914 464.492 116.445C461.539 118.977 460.062 122.609 460.062 127.344ZM466.391 62.0234C466.391 67.4141 467.914 71.4922 470.961 74.2578C474.008 77.0234 478.25 78.4062 483.688 78.4062C495.078 78.4062 500.773 72.875 500.773 61.8125C500.773 50.2344 495.008 44.4453 483.477 44.4453C477.992 44.4453 473.773 45.9219 470.82 48.875C467.867 51.8281 466.391 56.2109 466.391 62.0234Z",stroke:"white",strokeWidth:"10",mask:"url(#path-1-outside-1)"}),Object(s.jsx)("path",{d:"M535.648 106.953C535.648 103.812 536.352 101.445 537.758 99.8516C539.211 98.2109 541.273 97.3906 543.945 97.3906C546.664 97.3906 548.773 98.2109 550.273 99.8516C551.82 101.445 552.594 103.812 552.594 106.953C552.594 110 551.82 112.344 550.273 113.984C548.727 115.625 546.617 116.445 543.945 116.445C541.555 116.445 539.562 115.719 537.969 114.266C536.422 112.766 535.648 110.328 535.648 106.953Z",stroke:"white",strokeWidth:"10",mask:"url(#path-1-outside-1)"}),Object(s.jsx)("path",{d:"M574.039 106.953C574.039 103.812 574.742 101.445 576.148 99.8516C577.602 98.2109 579.664 97.3906 582.336 97.3906C585.055 97.3906 587.164 98.2109 588.664 99.8516C590.211 101.445 590.984 103.812 590.984 106.953C590.984 110 590.211 112.344 588.664 113.984C587.117 115.625 585.008 116.445 582.336 116.445C579.945 116.445 577.953 115.719 576.359 114.266C574.812 112.766 574.039 110.328 574.039 106.953Z",stroke:"white",strokeWidth:"10",mask:"url(#path-1-outside-1)"}),Object(s.jsx)("path",{d:"M612.43 106.953C612.43 103.812 613.133 101.445 614.539 99.8516C615.992 98.2109 618.055 97.3906 620.727 97.3906C623.445 97.3906 625.555 98.2109 627.055 99.8516C628.602 101.445 629.375 103.812 629.375 106.953C629.375 110 628.602 112.344 627.055 113.984C625.508 115.625 623.398 116.445 620.727 116.445C618.336 116.445 616.344 115.719 614.75 114.266C613.203 112.766 612.43 110.328 612.43 106.953Z",stroke:"white",strokeWidth:"10",mask:"url(#path-1-outside-1)"})]})})}):Object(s.jsx)("div",{className:"movies",children:e.map((function(C){return Object(s.jsx)(b,{id:C.id,title:C.title,rating:C.rating,summary:C.summary,poster:C.medium_cover_image,year:C.year,genres:C.genres},C.id)}))})})}}]),e}(i.a.Component));c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4de7bacc.chunk.js.map