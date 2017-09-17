let vart={
	toObject:function(_array){// 数组转对象 
	    let obj={};
	    for(let i=0;i<_array.length;i++){
	        obj[_array[i]]=name;
	    }
	    return obj;
	},
	toArray:function(obj){// 对象转数组
    	let arr=[];
	    for(let attr in obj){
	        if(obj.hasOwnProperty(attr)){
	            arr.push(attr);
	        }
	    }
	    return arr;
	}
}
window.vart=vart;
$(function(){
	//表格全选反选 checkbox_all
	$('body').on('click','input[type=checkbox][data-selector=all]',function(){
		let $_this=$(this),
			$_input=$_this.closest('table').find('tbody input[type=checkbox]');
		if($_this.prop('checked') == true){
			$_input.prop('checked',true);
		}else{
			$_input.prop('checked',false);
		}
	});

});

$(function(){//时分秒
	let date=new Date(),
		hours=date.getHours(),
		mins=date.getMinutes(),
		secs=date.getSeconds();
	if(mins<10){
		mins='0'+mins;
		return mins;
	}
	if(secs<10){
		secs='0'+secs;
		return secs;
	}
});
$(function(){//输入验证
	//同时限制汉字和数字长度
		$(document).on('keyup','input[data-inputtype=bytelimit]',function(event){
            var maxLen=parseInt($(this).attr('data-bytelimit'));
            WidthCheck(this, maxLen);
        });
        $(document).on('change','input[data-inputtype=bytelimit]',function(event){

            var maxLen=parseInt($(this).attr('data-bytelimit'));
            WidthCheck(this, maxLen);
        });
        function WidthCheck(str, maxLen) {
          var w = 0;
          var tempCount = 0;
          //length 获取字数数，不区分汉字和英文 
          for (var i = 0; i < str.value.length; i++) {
            //charCodeAt()获取字符串中某一个字符的编码 
            var c = str.value.charCodeAt(i);
            //单字节加1  
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
              w++;
            } else {
              w += 2;
            }
            if (w > maxLen) {
              str.value = str.value.substr(0, i);
              break;
            }
          }
        }
	//禁止输入中文
	$(document).on('keyup','input[input-type=not-CN]',function(event){
		var _value = $(this).val();
		if(!(/\w/.test(_value))){
		}

	})
	$(document).on('change','input[input-type=not-CN]',function(event){
		var _value = $(this).val();
		if(!(/\w/.test(_value))){
		}

	})

});

// document.addEventListener('visibilitychange',function(){
// 	alert(1);
// 	if(document.visibilityState == 'hidden'){
// 		window.open('https://www.baidu.com/');
// 		alert(2);
// 	}

// })


