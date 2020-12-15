var kt1 = document.getElementById("kt1");
    var kt2 = document.getElementById("kt2");
    var kt3 = document.getElementById("kt3");
    var kt4 = document.getElementById("kt4");
    var kt5 = document.getElementById("kt5");

    //事件，，kt类型被点击，调转到相应的学习页面
    var kc1=document.getElementById("kc1");
    var kc2=document.getElementById("kc2");
    var kc3=document.getElementById("kc3");
    var kc4=document.getElementById("kc4");
    var kc5=document.getElementById("kc5");
    var app = document.getElementById("app");
    kt1.onclick =function(){
        app.style.display="none";
        kc1.style.display="block";
    }
    kt2.onclick =function(){
        app.style.display="none";
        kc2.style.display="block";
    }
    kt3.onclick =function(){
        app.style.display="none";
        kc3.style.display="block";
    }
    kt4.onclick =function(){
        app.style.display="none";
        kc4.style.display="block";
    }
    kt5.onclick =function(){
        app.style.display="none";
        kc5.style.display="block";
    }