function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("rotate").classList.toggle("rotate");

};



$(function () {
    let header = $('.main-head');
    let menu = $('.menu');
    let hederHeight = header.height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            header.addClass('headerfixed');
            menu.addClass('menufixed');
            $('body').css({
                'paddingTop': hederHeight + 'px'
            });
        } else {
            header.removeClass('headerfixed');
            menu.removeClass('menufixed');
            $('body').css({
                'paddingTop': 0
            })
        };
    });
});

$(function () {
    if (screen.width <= 480) {
        let header = $('.main-head');
        let menu = $('.menu');

        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                header.addClass('headerfixed');
                menu.addClass('menufixed');
            } else {
                header.removeClass('headerfixed');
                menu.removeClass('menufixed');
            };
        });
    };
});

var w = $(window).width();

if (w > 480) {
    $(function () {
        let address = $('.address');
        let bcl = $('.bcl');

        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                address.fadeOut(100);
                bcl.fadeOut(10);
                $('.logo').css({
                    'margin-right': '16px',
                    'margin-top': '10px',
                    'height': '40px',
                    'transition': '.5s'
                });
                $('.number').css({
                    'padding-top': '22px',
                    'transition': '.5s'
                });
                $('.mail').css({
                    'padding-top': '25px',
                    'transition': '.5s'
                });
                $('.menu').css({
                    'height': '40px',
                    'width': '100vw',
                    'padding-left': '3000px',
                    'margin-left': '-3000px',
                    'transition': '.5s'
                });
                $('.menu-links').css({
                    'margin': '0px',
                    'width': '1140px',
                    'padding-top': '13px',
                    'transition': '.5s'
                });
                $('.first').css({
                    'margin-left': '0',
                    'transition': '.5s'
                });
                $('.last').css({
                    'margin-right': '0',
                    'transition': '.5s'
                });


            } else {
                address.fadeIn(100);
                bcl.fadeIn(10);
                $('.logo').css({
                    'margin-right': '0px',
                    'margin-top': '0px',
                    'height': '120px',
                    'transition': '.5s'
                });
                $('.number').css({
                    'padding-top': '0px',
                    'transition': '.5s'
                });
                $('.mail').css({
                    'padding-top': '0px',
                    'transition': '.5s'
                });
                $('.menu').css({
                    'height': '52px',
                    'width': '980px',
                    'margin-left': '0',
                    'padding-left': '0',
                    'transition': '.5s'
                });
                $('.menu-links').css({
                    'margin': '0px',
                    'width': '980px',
                    'padding-top': '18px',
                    'transition': '.5s'
                });
                $('.first').css({
                    'margin-left': '20px',
                    'transition': '.5s'
                });
                $('.last').css({
                    'margin-right': '20px',
                    'transition': '.5s'
                });
            };
        });
    })
};

function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdownlink > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text('Gender: ' + obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};


function viewdiv(id) {
    var el = document.getElementById(id);
    if (el.style.opacity == "1") {
        el.style.opacity = "0";
        el.style.transition = "0.5s";
    } else {
        el.style.opacity = "1";
        el.style.transition = "0.5s";

    }
};


