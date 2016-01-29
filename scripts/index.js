window.onload=function(){
    var show1=document.getElementById('show1');
    var dl,ROW=12,NUM=Math.floor((600-ROW)/ROW);

    var kaiguan=true,kaiguan1=true;
    start.onclick=function(){
        if(kaiguan1){
            start.innerHTML='重新开始';
            end.style.display="block";
            mu.style.display='none';
            kaiguan1=false;
        }else{
            location.reload();
        }
        
    }
    end.onclick=function(){
        if(kaiguan){
            mu.style.display='block';
            zimu.innerHTML='暂停';
            end.innerHTML='开始';
            kaiguan=false;
        }else{
            mu.style.display='none';
            end.innerHTML='暂停';
            kaiguan=true;
        }
        
    }
    var el1,el2;
    for(var t=0;t<ROW;t++){
        el1=document.createElement('div');
        el1.style.position='absolute';
        el1.style.top=(600/ROW)/2+(600/ROW)*t+'px';
        el1.style.left=0+'px';
        el1.style.width=600+'px';
        el1.style.height=1+'px';
        el1.style.background='white';
        show1.appendChild(el1);

        el2=document.createElement('div');
        el2.style.position='absolute';
        el2.style.left=(600/ROW)/2+(600/ROW)*t+'px';
        el2.style.top=0+'px';
        el2.style.width=1+'px';
        el2.style.height=600+'px';
        el2.style.background='white';
        show1.appendChild(el2);
    }
    var el3,el4;

    el3=document.createElement('div');
    el3.setAttribute('class','ying');
    el3.innerHTML="~O(∩_∩)O~ 白色方赢了！！！";

    el4=document.createElement('div');
    el4.setAttribute('class','ying1');
    el4.innerHTML="再来一局";
    el3.appendChild(el4);

    var el5,el6;

    el5=document.createElement('div');
    el5.setAttribute('class','ying');
    el5.innerHTML="~O(∩_∩)O~ 黑色方赢了！！！";

    el6=document.createElement('div');
    el6.setAttribute('class','ying1');
    el6.innerHTML="再来一局";
    el5.appendChild(el6);

    el4.onclick=function(){
        location.reload();
    };
    el6.onclick=function(){
        location.reload();
    };

    for(var d=0;d<ROW;d++){
        for(var e=0;e<ROW;e++){
            dl=document.createElement('div');
            dl.setAttribute('class','block');
            dl.setAttribute('id',d+'_'+e);
            dl.style.webkitTransform='scale(0.93)';
            dl.style.width=NUM+'px';
            dl.style.height=NUM+'px';
            show1.appendChild(dl);
        }
    }

    var blocks=document.getElementsByClassName('block');

    var dict1={},dict2={},kaiguan2=true;

    var panduan=function(id,dict){
        var g=Number(id.split('_')[0]);
        var h=Number(id.split('_')[1]);

        var tg,th,hang=1,lie=1,zuo=1,you=1;
        tg=g;
        th=h;
        while(dict[tg+'_'+(th+1)]){hang++;th++;}
        tg=g;
        th=h;
        while(dict[tg+'_'+(th-1)]){hang++;th--;}
        if(hang==5){return true;}

        tg=g;
        th=h;
        while(dict[(tg+1)+'_'+th]){lie++;tg++;}
        tg=g;
        th=h;
        while(dict[(tg-1)+'_'+th]){lie++;tg--;}
        if(lie==5){return true;}

        tg=g;
        th=h;
        while(dict[(tg+1)+'_'+(th+1)]){zuo++;tg++;th++;}
        tg=g;
        th=h;
        while(dict[(tg-1)+'_'+(th-1)]){zuo++;tg--;th--;}
        if(zuo==5){return true;}

        tg=g;
        th=h;
        while(dict[(tg-1)+'_'+(th+1)]){you++;tg--;th++;}
        tg=g;
        th=h;
        while(dict[(tg+1)+'_'+(th-1)]){you++;tg++;th--;}
        if(you==5){return true;}
    };

    for(var f=0;f<blocks.length;f++){
        blocks[f].onclick=function(){
            if(this.hasAttribute('hasColor')){return;}
            if(kaiguan2){
                this.style.background='black';
                this.style.boxShadow=' 0 1px 8px #111';
                dict1[this.getAttribute('id')]=true;
                var id=this.getAttribute('id');             
                kaiguan2=false;     

                if(panduan(id,dict1)){show1.appendChild(el5);}      
            }else{
                this.style.background='white';
                dict2[this.getAttribute('id')]=true;
                this.style.boxShadow=' 0 1px 8px #111';
                var id=this.getAttribute('id');
                kaiguan2=true;

                if(panduan(id,dict2)){show1.appendChild(el3);}
            }
            this.setAttribute('hasColor','true');
        };
    }
};
    