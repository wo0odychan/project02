$(function () {
    $(window).on('scroll', function () {
        //변수를 만들어 스크롤한 양을 담음.//x
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')

        }
    });
    $('.main_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    });
    $('.product_slide').slick({
        arrows: false,
        dots: false,
        // 슬라이드 사진 n개 넣기//
        slidesToShow: 3,
        // 반응형으로 사이트 화면을 줄였을 때 슬라이드 사진 하나만 돌아가기//
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }]
    });
    // 슬라이드 화살표//
    $('#product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev')
    });
    $('#product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    });

})