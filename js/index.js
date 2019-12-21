document.getElementsByTagName("body")[0].style.cursor = "url('img/dot.png'), auto";

$(window).on('load', function() {
    setTimeout(function() {
        $(window).scrollTop(0);
        $.scrollify.update();
    });
});
$(document).ready(function() {

          setInterval(function() {
            $('.pulsate').animate({
              opacity: '.6'
            }, 1000, function() {
              $('.pulsate').animate({
                opacity: '.3',
              }, 100)
            });
          }, 1000);

          setInterval(function() {
            $('.pulse-button').animate({
              opacity: '1',
            }, 200, function() {
              $('.pulse-button').animate({
                opacity: '.3',
              }, 100)
            });
          }, 1000);

    $("#click_logo").click(function() {
        window.location.href = "./";
    });
});
window.onload = function(e) {
    setTimeout(addScroll, 7500);
    setTimeout(kill_intro_scene, 10000);
    $("html,body").scrollTop(0);
}

function addScroll() {
    $("html").css({
        position: "absolute"
    });
}

function kill_intro_scene() {
    $('#canvas_loading').hide();
}
var x = window.matchMedia("(max-width: 750px)")
width(x)
x.addListener(width)

function width(x) {
    if (x.matches) {
        $("#sidebar_right").hide();
        $("#sidebar_left").hide();
        $("#links_mobile").show();
    } else {
        $("#sidebar_right").show();
        $("#sidebar_left").show();
        $("#links_mobile").hide();
    }
}
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
    $("html,body").scrollTop(0);
}
$('#click_l1').click(function() {
    $('.navTrigger').toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
});
$('#click_l2').click(function() {
    $('.navTrigger').toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
});
$('#click_l3').click(function() {
    $('.navTrigger').toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
});
$('#click_l4').click(function() {
    $('.navTrigger').toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
});
$('.navTrigger').click(function() {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});
$(document).ready(function() {
    $('#canvas_loading').delay(100).fadeIn(1200);
    $('#canvas_loading').delay(5000).fadeOut(1000);
    $("#UI").delay(5800).animate({
        opacity: "1"
    }, 1);
    $(".notified").delay(5000).animate({
        opacity: "1"
    }, 500);
    $(".header_02").delay(5000).animate({
        opacity: "1"
    }, 500);
    $(".sidebars").delay(6000).animate({
        opacity: "1"
    }, 500);
    $(".icon-scroll").delay(6000).animate({
        opacity: "1"
    }, 500);
    $(".scroll_text").delay(6000).animate({
        opacity: "1"
    }, 500);
    $("#header_info").delay(6200).animate({
        opacity: "1"
    }, 1000);
    $(".nav").delay(6200).animate({
        opacity: "1"
    }, 250);
    $(".follower").delay(6200).animate({
        opacity: "1"
    }, 250);
    $(".cursor").delay(6200).animate({
        opacity: "1"
    }, 250);
    $(".scene").delay(6200).animate({
        opacity: "1"
    }, 250);
    $("#header_backdrop").delay(7500).animate({
        opacity: ".5"
    }, 1);
    $("#header_info_img").delay(7500).animate({
        opacity: "1"
    }, 1000);
    $("#header_logo").delay(7500).animate({
        opacity: "1"
    }, 5000);
    $("#footer").delay(7500).animate({
        opacity: "1"
    }, 500);
    $("#sidebar_left").delay(8500).animate({
        opacity: "1"
    }, 500);
    $("#sidebar_right").delay(8500).animate({
        opacity: "1"
    }, 500);
    $("#canvas_01").delay(8500).animate({
        opacity: "1"
    }, 500);
    $(".center").delay(9000).animate({
        opacity: "1"
    }, 500);
    $("html,body").scrollTop(0);
    window.scrollTo(0, 0);
})
$(document).ready(function() {
    $('#show-hidden-menu_01').click(function() {
        $('.hidden-menu_01').slideToggle("fast");
        var x = document.getElementById("show-hidden-menu_01");
        if (x.innerHTML === "+") {
            x.innerHTML = "-";
        } else {
            x.innerHTML = "+";
        }
    });
});
$(document).ready(function() {
    $('#show-hidden-menu_02').click(function() {
        $('.hidden-menu_02').slideToggle("fast");
        var x = document.getElementById("show-hidden-menu_02");
        if (x.innerHTML === "+") {
            x.innerHTML = "-";
        } else {
            x.innerHTML = "+";
        }
    });
});
$(document).ready(function() {
    $('#show-hidden-menu_03').click(function() {
        $('.hidden-menu_03').slideToggle("fast");
        var x = document.getElementById("show-hidden-menu_03");
        if (x.innerHTML === "+") {
            x.innerHTML = "-";
        } else {
            x.innerHTML = "+";
        }
    });
});
$(document).ready(function() {
    $('#show-hidden-menu_04').click(function() {
        $('.hidden-menu_04').slideToggle("fast");
        var x = document.getElementById("show-hidden-menu_04");
        if (x.innerHTML === "+") {
            x.innerHTML = "-";
        } else {
            x.innerHTML = "+";
        }
    });
});
$(document).on('mousemove', (event) => {
    $('.arrows').css({
        left: event.clientX,
        top: event.clientY,
    });
});