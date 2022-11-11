$(document).ready(function(){
    $("#start-btn").click(function(){
        $("#start-page").css("display","none");
    });

    $("#start-btn").click(function(){
        $("#main-page").css("display","block");
    });
});

$(document).ready(function(){
    $('#q1-option-1').click(function(){
        $('#q1').attr('id','q1-done');
        $('#q1-done').css("display","none");
        $('#q2').css("display","block");
        $('.progress-bar-current').css('width','16%');
    });

    $('#q1-option-2').click(function(){
        $('#q1').attr('id','q1-done');
        $('#q1-done').css("display","none");
        $('#q2').css("display","block");
        $('.progress-bar-current').css('width','16%');
    });
});

$(document).ready(function(){
    $('#q2-option-1').click(function(){
        $('#q2').attr('id','q2-done');
        $('#q2-done').css("display","none");
        $('#q3').css("display","block");
        $('.progress-bar-current').css('width','25%');
    });

    $('#q2-option-2').click(function(){
        $('#q2').attr('id','q2-done');
        $('#q2-done').css("display","none");
        $('#q3').css("display","block");
        $('.progress-bar-current').css('width','25%');
    });
});

$(document).ready(function(){
    $('#q3-option-1').click(function(){
        $('#q3').attr('id','q3-done');
        $('#q3-done').css("display","none");
        $('#q4').css("display","block");
        $('.progress-bar-current').css('width','33%');
    });

    $('#q3-option-2').click(function(){
        $('#q3').attr('id','q3-done');
        $('#q3-done').css("display","none");
        $('#q4').css("display","block");
        $('.progress-bar-current').css('width','33%');
    });
});

$(document).ready(function(){
    $('#q4-option-1').click(function(){
        $('#q4').attr('id','q4-done');
        $('#q4-done').css("display","none");
        $('#q5').css("display","block");
        $('.progress-bar-current').css('width','42%');
    });

    $('#q4-option-2').click(function(){
        $('#q4').attr('id','q4-done');
        $('#q4-done').css("display","none");
        $('#q5').css("display","block");
        $('.progress-bar-current').css('width','42%');
    });
});

$(document).ready(function(){
    $('#q5-option-1').click(function(){
        $('#q5').attr('id','q5-done');
        $('#q5-done').css("display","none");
        $('#q6').css("display","block");
        $('.progress-bar-current').css('width','50%');
    });

    $('#q5-option-2').click(function(){
        $('#q5').attr('id','q5-done');
        $('#q5-done').css("display","none");
        $('#q6').css("display","block");
        $('.progress-bar-current').css('width','50%');
    });
});

$(document).ready(function(){
    $('#q6-option-1').click(function(){
        $('#q6').attr('id','q6-done');
        $('#q6-done').css("display","none");
        $('#q7').css("display","block");
        $('.progress-bar-current').css('width','58%');
    });

    $('#q6-option-2').click(function(){
        $('#q6').attr('id','q6-done');
        $('#q6-done').css("display","none");
        $('#q7').css("display","block");
        $('.progress-bar-current').css('width','58%');
    });
});

$(document).ready(function(){
    $('#q7-option-1').click(function(){
        $('#q7').attr('id','q7-done');
        $('#q7-done').css("display","none");
        $('#q8').css("display","block");
        $('.progress-bar-current').css('width','66%');
    });

    $('#q7-option-2').click(function(){
        $('#q7').attr('id','q7-done');
        $('#q7-done').css("display","none");
        $('#q8').css("display","block");
        $('.progress-bar-current').css('width','66%');
    });
});

$(document).ready(function(){
    $('#q8-option-1').click(function(){
        $('#q8').attr('id','q8-done');
        $('#q8-done').css("display","none");
        $('#q9').css("display","block");
        $('.progress-bar-current').css('width','75%');
    });

    $('#q8-option-2').click(function(){
        $('#q8').attr('id','q8-done');
        $('#q8-done').css("display","none");
        $('#q9').css("display","block");
        $('.progress-bar-current').css('width','75%');
    });
});

$(document).ready(function(){
    $('#q9-option-1').click(function(){
        $('#q9').attr('id','q9-done');
        $('#q9-done').css("display","none");
        $('#q10').css("display","block");
        $('.progress-bar-current').css('width','83%');
    });

    $('#q9-option-2').click(function(){
        $('#q9').attr('id','q9-done');
        $('#q9-done').css("display","none");
        $('#q10').css("display","block");
        $('.progress-bar-current').css('width','83%');
    });
});

$(document).ready(function(){
    $('#q10-option-1').click(function(){
        $('#q10').attr('id','q10-done');
        $('#q10-done').css("display","none");
        $('#q11').css("display","block");
        $('.progress-bar-current').css('width','92%');
    });

    $('#q10-option-2').click(function(){
        $('#q10').attr('id','q10-done');
        $('#q10-done').css("display","none");
        $('#q11').css("display","block");
        $('.progress-bar-current').css('width','92%');
    });
});

$(document).ready(function(){
    $('#q11-option-1').click(function(){
        $('#q11').attr('id','q11-done');
        $('#q11-done').css("display","none");
        $('#q12').css("display","block");
        $('.progress-bar-current').css('width','100%');
    });

    $('#q11-option-2').click(function(){
        $('#q11').attr('id','q11-done');
        $('#q11-done').css("display","none");
        $('#q12').css("display","block");
        $('.progress-bar-current').css('width','100%');
    });
});

$(document).ready(function(){
    $('#q12-option-1').click(function(){
        $('#q12').attr('id','q12-done');
        $('#q12-done').css("display","none");
        $('#loading-page').css("display","block");
        setTimeout(() => {
            $('#loading-img-1').css('opacity','100%');
        },"150")

        setTimeout(() => {
            $('#loading-img-2').css('opacity','100%');
        },"300")

        setTimeout(() => {
            $('#loading-img-3').css('opacity','100%');
        },"450")

        setTimeout(() => {
            $('#loading-img-4').css('opacity','100%');
        },"600")

        setTimeout(() => {
            $('#loading-img-5').css('opacity','100%');
        },"750")

        setTimeout(() => {
            $('#loading-img-6').css('opacity','100%');
        },"900")

        setTimeout(() => {
            $('#loading-img-7').css('opacity','100%');
        },"1050")

        setTimeout(() => {
            $('#loading-img-8').css('opacity','100%');
        },"1200")

        setTimeout(() => {
            $('#result-btn').css('display','block');
        },"1200")
    });

    $('#q12-option-2').click(function(){
        $('#q12').attr('id','q12-done');
        $('#q12-done').css("display","none");
        $('#loading-page').css("display","block");
        setTimeout(() => {
            $('#loading-img-1').css('opacity','100%');
        },"150")

        setTimeout(() => {
            $('#loading-img-2').css('opacity','100%');
        },"300")

        setTimeout(() => {
            $('#loading-img-3').css('opacity','100%');
        },"450")

        setTimeout(() => {
            $('#loading-img-4').css('opacity','100%');
        },"600")

        setTimeout(() => {
            $('#loading-img-5').css('opacity','100%');
        },"750")

        setTimeout(() => {
            $('#loading-img-6').css('opacity','100%');
        },"900")

        setTimeout(() => {
            $('#loading-img-7').css('opacity','100%');
        },"1050")

        setTimeout(() => {
            $('#loading-img-8').css('opacity','100%');
        },"1200")

        setTimeout(() => {
            $('#result-btn').css('display','block');
        },"1200")
    });
});

// result 구하는 영역!!!
//여기서부터~!
let getResultArr = [];
$('.quest-1').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

$('.quest-2').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

$('.quest-3').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

$('.quest-4').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

$('.quest-5').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

$('.quest-6').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

$('.quest-7').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

$('.quest-8').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

$('.quest-9').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

$('.quest-10').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

$('.quest-11').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

$('.quest-12').click(function(){
    let clicked = $(this).val();
    getResultArr.push(clicked);
    console.log(getResultArr);
})

let MBTI = '';

function getResult() {
    window.localStorage.clear();
    let defineEI = Number(getResultArr[3])+Number(getResultArr[8])+Number(getResultArr[10]);
    if (defineEI <=4) {
        MBTI = MBTI+'I';
        console.log(MBTI)
    } else {
        MBTI = MBTI+'E';
        console.log(MBTI)
    }

    let defineSN = Number(getResultArr[6])+Number(getResultArr[7])+Number(getResultArr[11]);
    if (defineSN <=4) {
        MBTI = MBTI+'S';
        console.log(MBTI)
    } else {
        MBTI = MBTI+'N';
        console.log(MBTI)
    }

    let defineTF = Number(getResultArr[4])+Number(getResultArr[5])+Number(getResultArr[9]);
    if (defineTF <=4) {
        MBTI = MBTI+'T';
        console.log(MBTI)
    } else {
        MBTI = MBTI+'F';
        console.log(MBTI)
    }

    let defineJP = Number(getResultArr[0])+Number(getResultArr[1])+Number(getResultArr[2]);
    if (defineJP <=4) {
        MBTI = MBTI+'J';
        console.log(MBTI)
    } else {
        MBTI = MBTI+'P';
        console.log(MBTI)
    }

    window.localStorage.setItem('mbti',MBTI);
}


$(document).ready(function(){
    $('#result-btn').click(function(){
        getResult();
        window.location = './result.html?mbti=ESTJ';
    });
});
