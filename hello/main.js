var app = new Vue({
    el: '#app',
    data: {
      personal:{
        name:"龚海能",
        jobHutter:"软件开发工程师",
        introduce:"热爱GIS，愿意为GIS事业奋斗终身。在校接触过ArcGIS Engine，WebGIS的开发，对GIS软件比较熟悉，无论是MapGIS,QGIS还是ArcGIS,除此之外，有Autocad,3DMax基础，学习过C#,JAVA，C++，HTML，CSS，还自学过Python，JavaScript。自我的评价就是自学，自律能力强，追求的是学无止境，止于至善。"
      },
      education:{
        university:{
            name:"江西农业大学",
            major:"地理信息科学",
            introduce:"在校期间学习了java，cad，3dsmax，c++ etc"
        }
      },
       experience:{
            firstExp:{
                name:"广州奥格智能有限公司",
                post:"软件测试工程师"
            }
        },
      jobExp:{
        firstExp:{
                name:"武汉珞珈德毅股份有限公司",
                post:"软件开发工程师",
                des:"在该公司使用cesium"
            }
      }
    }
})