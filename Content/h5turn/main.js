/**
 * Created by ChengYa on 2016/6/18.
 */

//判断手机类型
window.onload = function () {
    //alert($(window).height());
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        //屏蔽ios下上下弹性
        $(window).on('scroll.elasticity', function (e) {
            e.preventDefault();
        }).on('touchmove.elasticity', function (e) {
            e.preventDefault();
        });
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
    }
    //预加载
    loading();
}

var date_start;
var date_end;
date_start = getNowFormatDate();
//加载图片
var loading_img_url = ["http://b.tuangouba.com/upfile/20220713danye/fm.jpg","http://b.tuangouba.com/upfile/20220713danye/fy.jpg","http://b.tuangouba.com/upfile/20220713danye/ml.jpg","http://b.tuangouba.com/upfile/20220713danye/1.jpg","http://b.tuangouba.com/upfile/20220713danye/2.jpg","http://b.tuangouba.com/upfile/20220713danye/3.jpg","http://b.tuangouba.com/upfile/20220713danye/4.jpg","http://b.tuangouba.com/upfile/20220713danye/5.jpg","http://b.tuangouba.com/upfile/20220713danye/6.jpg","http://b.tuangouba.com/upfile/20220713danye/7.jpg","http://b.tuangouba.com/upfile/20220713danye/8.jpg","http://b.tuangouba.com/upfile/20220713danye/9.jpg","http://b.tuangouba.com/upfile/20220713danye/10.jpg","http://b.tuangouba.com/upfile/20220713danye/11.jpg","http://b.tuangouba.com/upfile/20220713danye/12.jpg","http://b.tuangouba.com/upfile/20220713danye/13.jpg","http://b.tuangouba.com/upfile/20220713danye/14.jpg","http://b.tuangouba.com/upfile/20220713danye/15.jpg","http://b.tuangouba.com/upfile/20220713danye/16.jpg","http://b.tuangouba.com/upfile/20220713danye/17.jpg","http://b.tuangouba.com/upfile/20220713danye/18.jpg","http://b.tuangouba.com/upfile/20220713danye/19.jpg","http://b.tuangouba.com/upfile/20220713danye/20.jpg","http://b.tuangouba.com/upfile/20220713danye/21.jpg","http://b.tuangouba.com/upfile/20220713danye/22.jpg","http://b.tuangouba.com/upfile/20220713danye/23.jpg","http://b.tuangouba.com/upfile/20220713danye/24.jpg","http://b.tuangouba.com/upfile/20220713danye/25.jpg","http://b.tuangouba.com/upfile/20220713danye/26.jpg","http://b.tuangouba.com/upfile/20220713danye/27.jpg","http://b.tuangouba.com/upfile/20220713danye/28.jpg","http://b.tuangouba.com/upfile/20220713danye/29.jpg","http://b.tuangouba.com/upfile/20220713danye/30.jpg","http://b.tuangouba.com/upfile/20220713danye/31.jpg","http://b.tuangouba.com/upfile/20220713danye/32.jpg","http://b.tuangouba.com/upfile/20220713danye/33.jpg","http://b.tuangouba.com/upfile/20220713danye/34.jpg","http://b.tuangouba.com/upfile/20220713danye/35.jpg","http://b.tuangouba.com/upfile/20220713danye/36.jpg","http://b.tuangouba.com/upfile/20220713danye/37.jpg","http://b.tuangouba.com/upfile/20220713danye/38.jpg","http://b.tuangouba.com/upfile/20220713danye/39.jpg","http://b.tuangouba.com/upfile/20220713danye/40.jpg","http://b.tuangouba.com/upfile/20220713danye/41.jpg","http://b.tuangouba.com/upfile/20220713danye/42.jpg","http://b.tuangouba.com/upfile/20220713danye/43.jpg","http://b.tuangouba.com/upfile/20220713danye/44.jpg","http://b.tuangouba.com/upfile/20220713danye/45.jpg","http://b.tuangouba.com/upfile/20220713danye/46.jpg","http://b.tuangouba.com/upfile/20220713danye/47.jpg","http://b.tuangouba.com/upfile/20220713danye/48.jpg","http://b.tuangouba.com/upfile/20220713danye/49.jpg","http://b.tuangouba.com/upfile/20220713danye/50.jpg","http://b.tuangouba.com/upfile/20220713danye/51.jpg","http://b.tuangouba.com/upfile/20220713danye/52.jpg","http://b.tuangouba.com/upfile/20220713danye/53.jpg","http://b.tuangouba.com/upfile/20220713danye/54.jpg","http://b.tuangouba.com/upfile/20220713danye/55.jpg","http://b.tuangouba.com/upfile/20220713danye/56.jpg","http://b.tuangouba.com/upfile/20220713danye/57.jpg","http://b.tuangouba.com/upfile/20220713danye/58.jpg","http://b.tuangouba.com/upfile/20220713danye/59.jpg","http://b.tuangouba.com/upfile/20220713danye/60.jpg","http://b.tuangouba.com/upfile/20220713danye/61.jpg","http://b.tuangouba.com/upfile/20220713danye/62.jpg","http://b.tuangouba.com/upfile/20220713danye/63.jpg","http://b.tuangouba.com/upfile/20220713danye/64.jpg","http://b.tuangouba.com/upfile/20220713danye/65.jpg","http://b.tuangouba.com/upfile/20220713danye/66.jpg","http://b.tuangouba.com/upfile/20220713danye/67.jpg","http://b.tuangouba.com/upfile/20220713danye/68.jpg","http://b.tuangouba.com/upfile/20220713danye/69.jpg","http://b.tuangouba.com/upfile/20220713danye/70.jpg","http://b.tuangouba.com/upfile/20220713danye/71.jpg","http://b.tuangouba.com/upfile/20220713danye/72.jpg","http://b.tuangouba.com/upfile/20220713danye/73.jpg","http://b.tuangouba.com/upfile/20220713danye/74.jpg","http://b.tuangouba.com/upfile/20220713danye/75.jpg","http://b.tuangouba.com/upfile/20220713danye/76.jpg","http://b.tuangouba.com/upfile/20220713danye/77.jpg","http://b.tuangouba.com/upfile/20220713danye/78.jpg","http://b.tuangouba.com/upfile/20220713danye/79.jpg","http://b.tuangouba.com/upfile/20220713danye/80.jpg","http://b.tuangouba.com/upfile/20220713danye/81.jpg","http://b.tuangouba.com/upfile/20220713danye/82.jpg","http://b.tuangouba.com/upfile/20220713danye/83.jpg","http://b.tuangouba.com/upfile/20220713danye/84.jpg","http://b.tuangouba.com/upfile/20220713danye/85.jpg","http://b.tuangouba.com/upfile/20220713danye/86.jpg","http://b.tuangouba.com/upfile/20220713danye/87.jpg","http://b.tuangouba.com/upfile/20220713danye/88.jpg","http://b.tuangouba.com/upfile/20220713danye/89.jpg","http://b.tuangouba.com/upfile/20220713danye/90.jpg","http://b.tuangouba.com/upfile/20220713danye/91.jpg","http://b.tuangouba.com/upfile/20220713danye/92.jpg","http://b.tuangouba.com/upfile/20220713danye/93.jpg","http://b.tuangouba.com/upfile/20220713danye/94.jpg","http://b.tuangouba.com/upfile/20220713danye/95.jpg","http://b.tuangouba.com/upfile/20220713danye/96.jpg","http://b.tuangouba.com/upfile/20220713danye/97.jpg","http://b.tuangouba.com/upfile/20220713danye/98.jpg","http://b.tuangouba.com/upfile/20220713danye/99.jpg","http://b.tuangouba.com/upfile/20220713danye/100.jpg","http://b.tuangouba.com/upfile/20220713danye/101.jpg","http://b.tuangouba.com/upfile/20220713danye/102.jpg","http://b.tuangouba.com/upfile/20220713danye/103.jpg","http://b.tuangouba.com/upfile/20220713danye/104.jpg","http://b.tuangouba.com/upfile/20220713danye/105.jpg","http://b.tuangouba.com/upfile/20220713danye/106.jpg","http://b.tuangouba.com/upfile/20220713danye/107.jpg","http://b.tuangouba.com/upfile/20220713danye/108.jpg","http://b.tuangouba.com/upfile/20220713danye/109.jpg","http://b.tuangouba.com/upfile/20220713danye/110.jpg","http://b.tuangouba.com/upfile/20220713danye/111.jpg","http://b.tuangouba.com/upfile/20220713danye/112.jpg","http://b.tuangouba.com/upfile/20220713danye/113.jpg","http://b.tuangouba.com/upfile/20220713danye/114.jpg","http://b.tuangouba.com/upfile/20220713danye/115.jpg","http://b.tuangouba.com/upfile/20220713danye/116.jpg","http://b.tuangouba.com/upfile/20220713danye/fd.jpg"];

//加载页面
function loading() {
    var numbers = 0;
    var length = loading_img_url.length;

    for (var i = 0; i < length; i++) {
        var img = new Image();
        img.src = loading_img_url[i];
        img.onerror = function () {
            numbers += (1 / length) * 100;
        }
        img.onload = function () {
            numbers += (1 / length) * 100;
            $('.number').html(parseInt(numbers) + "%");
            console.log(numbers);
            if (Math.round(numbers) == 100) {
                //$('.number').hide();
                date_end = getNowFormatDate();
                var loading_time = date_end - date_start;
                //预加载图片
                $(function progressbar() {
                    //拼接图片
                    $('.shade').hide();
                    var tagHtml = "";
                    for (var i = 1; i <= 41; i++) {
                        if (i == 1) {
                            tagHtml += ' <div id="first" style="background:url(' + loading_img_url[i] + ') center top no-repeat;background-size:100%"></div>';
                        } else if (i == 41) {
                            tagHtml += ' <div id="end" style="background:url('+loading_img_url[i]+') center top no-repeat;background-size:100%"></div>';
                        } else {
                            tagHtml += ' <div style="background:url('+loading_img_url[i]+') center top no-repeat;background-size:100%"></div>';
                        }
                    }
                    $(".flipbook").append(tagHtml);
                    var w = $(".graph").width();
                    $(".flipbook-viewport").show();
                });
                //配置turn.js
                function loadApp() {
                    var w = $(window).width();
                    var h = $(window).height();
                    $('.flipboox').width(w).height(h);
                    $(window).resize(function () {
                        w = $(window).width();
                        h = $(window).height();
                        $('.flipboox').width(w).height(h);
                    });
                    $('.flipbook').turn({
                        // Width
                        width: w,
                        // Height
                        height: h,
                        // Elevation
                        elevation: 50,
                        display: 'single',
                        // Enable gradients
                        gradients: true,
                        // Auto center this flipbook
                        autoCenter: true,
                        when: {
                            turning: function (e, page, view) {
                                if (page == 1) {
                                    $(".btnImg").css("display", "none");
                                    $(".mark").css("display", "block");
                                } else {
                                    $(".btnImg").css("display", "block");
                                    $(".mark").css("display", "none");
                                }
                                if (page == 41) {
                                    $(".nextPage").css("display", "none");
                                } else {
                                    $(".nextPage").css("display", "block");
                                }
                            },
                            turned: function (e, page, view) {
                                console.log(page);
                                var total = $(".flipbook").turn("pages");//总页数
                                if (page == 1) {
                                    $(".return").css("display", "none");
                                    $(".btnImg").css("display", "none");
                                } else {
                                    $(".return").css("display", "block");
                                    $(".btnImg").css("display", "block");
                                }
                                if (page == 2) {
                                    $(".catalog").css("display", "block");
                                } else {
                                    $(".catalog").css("display", "none");
                                }
                            }
                        }
                    })
                }
                yepnope({
                    test: Modernizr.csstransforms,
                    yep: ['turn.js'],
                    complete: loadApp
                });
            }
            ;
        }
    }
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "";
    var seperator2 = "";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + "" + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}


