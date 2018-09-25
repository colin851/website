;(function($) {
	$.fn.imgLoad = function(options) {
		var opts = $.extend({
			time: 4000, ///等待载入时间，如果超过这个时间就直接执行回调  
			callback: function() {} //默认回调  
		}, options);
		var $this = this,
			i = 0,
			j = 0,
			len = this.length;
		$this.each(function() {
			var _this = this,
				dateSrc = $(_this).attr("date-src"),
				imgsrc = dateSrc ? dateSrc : _this.src;
			var img = new Image();
			img.onload = function() {
				img.onload = null;
				_this.src = imgsrc;
				i++;
			};
			img.src = imgsrc;
		});
		var t = window.setInterval(function() {
			j++;
			$("#msg").html(i);
			if(i == len || j * 200 >= opts.time) {
				window.clearInterval(t);
				opts.callback();
			};
		}, 200);
	}
})(jQuery)
;(function($){
var mainslider;

$(document).ready(function(){
	var isLoaded = false;
	var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
    });
    
    $('.loading-block .span5 i').on('webkitAnimationEnd',function(){
    	$('.contaniner').addClass('scaleBanner');
    	$('.loading-block').hide();
    })
    
    $('.loading-block .span5 i').on('animationEnd',function(){
    	$('.contaniner').addClass('scaleBanner');
    	$('.loading-block').hide();
    })
    
    
    
    $('.loading-block .span4 .slider').on('webkitAnimationEnd',function(){
    	$('.span1 .slider').removeClass('loading1');
    	$('.span2 .slider').removeClass('loading2');
    	$('.span3 .slider').removeClass('loading2');
    	$('.span4 .slider').removeClass('loading2');
    	if(isLoaded){
    		$('.loading-block .span5 .slider').addClass('loading2');
    	}else{
    		setTimeout(function(){
    			$('.span1 .slider').addClass('loading1');
    			$('.span2 .slider').addClass('loading2');
    			$('.span3 .slider').addClass('loading2');
    			$('.span4 .slider').addClass('loading2');
    		},100)
    		
    	}
    	
    })
    
    $('.loading-block .span4 .slider').on('animationEnd',function(){
    	$('.span1 .slider').removeClass('loading1');
    	$('.span2 .slider').removeClass('loading2');
    	$('.span3 .slider').removeClass('loading2');
    	$('.span4 .slider').removeClass('loading2');
    	if(isLoaded){
    		$('.loading-block .span5 .slider').addClass('loading2');
    	}else{
    		setTimeout(function(){
    			$('.span1 .slider').addClass('loading1');
    			$('.span2 .slider').addClass('loading2');
    			$('.span3 .slider').addClass('loading2');
    			$('.span4 .slider').addClass('loading2');
    		},100)
    	}
    })
    
    $('img').imgLoad({
		time: 10000,
		callback: function() {
			isLoaded = true;
		}
	})
    
   
});	
	
	
	
})(jQuery)
