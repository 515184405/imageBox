
$(function(){
    common.init();
})
    var common = {};
    common.init = function(){
        layui.use(['layer', 'form', 'element'], function(){
            var layer = layui.layer
                ,form = layui.form
                ,element = layui.element
            form.on('select(select-filter)',function(data){
                $('.search').removeAttr('id');
                $('.search').attr('id', 'tab-style-'+data.value);
                $("li[data-tab="+data.value+"]").click();
            })
        });
        layui.use('carousel', function(){
            var carousel = layui.carousel;
            //建造实例
            carousel.render({
                elem: '#test1'
                ,width: '100%' //设置容器宽度
                ,arrow: 'always' //始终显示箭头
                //,anim: 'updown' //切换动画方式
            });
        });
        common.setSearchStyle();
        common.searchPrompt();
        common.scrollNavAbs();
    }

    //设置搜索框切换后的样式
    common.setSearchStyle = function(){
        $(document).delegate('.search-tab li','click',function(){
            $('.search option').removeAttr('selected');
            $('.search').removeAttr('id');
            var tabNum = $(this).attr('data-tab');
            $(".search-select").children('')
            $('.search').attr('id','tab-style-'+tabNum);
            $(".select-search .layui-form-select input").val($(this).text());
        })
    }
    //是否显示搜索提示框
    common.searchPrompt = function(){
        $(document).delegate('.search-input','focus',function(){
            $('.search .layui-show').addClass('layui-anim layui-anim-upbit layui-showImportant');
        })
        $(document).delegate('.search-input','blur',function(){
            $('.search .layui-show').removeClass('layui-anim layui-anim-upbit layui-showImportant').hide();
        })
    }
    //滚动条下拉过100px后导航固定并且搜索框跳到导航顶部
    common.scrollNavAbs = function(){
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            if(scrollTop > 200) {
                $('.header').css({
                    'position': 'fixed'
                }).addClass('animation');
                $(".search-tab,.hot-search").hide();
                $("#search-input").css('width','465px')
                $(".search").addClass('searchAbs animation');
            }else{
                $('.header').css({
                    'position': 'relative'
                }).removeClass('animation');
                $(".search-tab,.hot-search").show();
                $("#search-input").css('width','865px')
                $(".search").removeClass('searchAbs animation');
            }
        })
    }


