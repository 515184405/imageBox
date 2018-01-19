
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
            //����ʵ��
            carousel.render({
                elem: '#test1'
                ,width: '100%' //�����������
                ,arrow: 'always' //ʼ����ʾ��ͷ
                //,anim: 'updown' //�л�������ʽ
            });
        });
        common.setSearchStyle();
        common.searchPrompt();
        common.scrollNavAbs();
    }

    //�����������л������ʽ
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
    //�Ƿ���ʾ������ʾ��
    common.searchPrompt = function(){
        $(document).delegate('.search-input','focus',function(){
            $('.search .layui-show').addClass('layui-anim layui-anim-upbit layui-showImportant');
        })
        $(document).delegate('.search-input','blur',function(){
            $('.search .layui-show').removeClass('layui-anim layui-anim-upbit layui-showImportant').hide();
        })
    }
    //������������100px�󵼺��̶�����������������������
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


