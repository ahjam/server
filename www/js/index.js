$(document).ready(function () {
    var index;

    $.ajax({
        url: '/api/question',
        method: 'GET',
        headers: {
            Accept: 'application/json'
        },
        success: function (res) {
            console.log(res);
            index = res.result.index;
            $('#question').html(res.result.question);
        }
    });

    var submitAnswer = function () {
        var inputVal = $('#answer').val();
        console.log(inputVal);
        $.ajax({
            url: '/api/answer',

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: JSON.stringify({
                index: index,
                answer: inputVal
            }),
            success: function (res) {
                console.log(index);
                console.log(res.result);
                if (res.result.isCorrect) {
                    $('.correct').css('display','block');
                    $('.wrong').css('display','none');
                    $('#correct_answer_btn').css('display','none');
                } else {
                    $('.correct').css('display','none');
                    $('.wrong').css('display','block');
                }

            }
        });
    };

    $('#answer').on('keyup', function (e) {
        console.log(e.keyCode);
        if (e.keyCode === 13) submitAnswer();
    });
    $('#submit').on('click', submitAnswer);
    
    $('#show_A').on('click', function () {
        console.log('clicked');
        $.ajax({
            url: '/api/answer?index=' + index,
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
            success: function (res) {
                console.log(res.result.answer);
                    $('#correct_answer').html(res.result.answer);
                    $('#correct_answer_btn').css('display','block');
                    $('.wrong').css('display','none');
            }
        });
    });
    
});