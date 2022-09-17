$(document).ready(function(){

    //offsetTop 변수

    const homeTop = 0
    const workTop = $('.workContainer').offset().top
    const contactTop = $('.contactContainer').offset().top
    const profileTop = $('.profileContainer').offset().top
    const navBtn = [homeTop, workTop, profileTop, contactTop]

    //새로고침시 최상단으로

    $('html,body').stop().animate({scrollTop : 0}, 1000)

    //navBtn 반복문 처리
    for(let num = 0; num < navBtn.length; num++){
        $(`.navBtn li:nth-child(${num + 1})`).on('click',function(){
            $('html, body').animate({scrollTop : `${navBtn[num]}px` })
            $(this).css('border-bottom','1px solid #000')
            $('.navBtn li').not($(this)).css('border-bottom','0px solid #fff')
            console.log(num)
        })
    }

    //스크롤 이벤트

    $(window).scroll(function(){

        //네비게이션 position 이벤트

        if($(window).scrollTop() > 0){
            $('.navBar').css({'background':'#fff','box-shadow':'0px 5px 3px rgba(0,0,0,0.3)','padding':'10px'})
        }
        else{
            $('.navBar').css({'background':'none', 'box-shadow':'none','padding':'15px'})
        }

        //workList 스크롤 이벤트

        for(let num = 1; num < 6; num++){
            if($(window).scrollTop() > 
            $(`.workList>li:nth-child(${num})`).offset().top - 300)
            {
                $(`.workList>li:nth-child(${num})`).animate().css('opacity' , '1')
            }
        }
        for(let num = 0; num < navBtn.length; num++){
            if($(window).scrollTop() >= navBtn[num]){
                $(`.navBtn>li:nth-child(${num + 1})`).css('border-bottom','1px solid #000')
                $('.navBtn li').not(`.navBtn li:nth-child(${num + 1})`).css('border-bottom','0px solid #fff')
            }
        }  
    })

    //모바일버튼

    function mobileBtnClick(){
        let a = 1;
        $('.fa-bars').on('click',function(){
            if(a == 0){
                $('.mobileVer').fadeOut();
                a = 1;
            }
            else if(a == 1){
                $('.mobileVer').fadeIn();
                a = 0;
            }
        })
        
        //해상도 변화에 따른 모바일 버튼 유무, ex)햄버거 박스 클릭 이후 해상도 변화를 줄 시 모바일 버튼이 꺼지지 않는 기능 방지
        
        $(window).resize(function(){
            if($(window).width() > 768){
                $('.mobileVer').fadeOut();
                console.log('hidden')
            }    
            else {
                
            }
        })
    }
    mobileBtnClick()
    
})