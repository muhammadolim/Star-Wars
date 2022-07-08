$(function () {
    // parallax
    var scene1 = document.getElementById("scene1")
    var scene2 = document.getElementById("scene2")
    var scene3 = document.getElementById("scene3")
    var scene4 = document.getElementById("scene4")
    var parallaxInstance = new Parallax(scene1)
    var parallaxInstance = new Parallax(scene2)
    var parallaxInstance = new Parallax(scene3)
    var parallaxInstance = new Parallax(scene4)

    // iphone
    var i = 0
    function slide() {
        $(`.star_img img:nth-of-type(${(i - 1) % 4 + 1}`).animate({ opacity: 0 }, 'slow')
        $(`.star_img img:nth-of-type(${i % 4 + 1})`).animate({ opacity: 1 }, 'slow')
        i++
    }
    slide()
    $('.star_img span').click(slide)




    // navbar
    let $burger = $('.burger')
    let $close = $('#close')
    let $menu = $('.header_menu')
    let $menu_top = $('.menu_top')
    let $links = $('.header_link')

    $burger.click(function () {
        $menu.addClass('active_header').css('transition', '.5s')
        $menu_top.removeClass('fixed-top')
    })

    $close.click(function () {
        $menu.removeClass('active_header').css('transition', '.5s')
        $menu_top.addClass('fixed-top')
    })

    // links
    $links.click(function (e) {
        e.preventDefault()
        $links.removeClass('active_link')
        id = $(this).addClass('active_link').attr('href')
        target = $(id).offset().top

        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })

    $(window).scroll(function () {
        scroll = $(this).scrollTop()

        $links.each(function () {
            id = $(this).attr('href')
            target = $(id).offset().top - 1

            if (target <= scroll) {
                $links.removeClass('active_link')
                $(this).addClass('active_link')
            }
        })
    })

    // tabs
    let $grid = $('.tab-content').isotope({
        itemSelector: '.tab-item'
    })
    let $nav_links = $('.nav_link')

    $nav_links.click(function (e) {
        e.preventDefault()

        $nav_links.removeClass('nav_active')
        $(this).addClass('nav_active')

        let attr = $(this).attr('data-filter')
        $grid.isotope({
            filter: attr,
        })
    })
});