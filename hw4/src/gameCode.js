//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var answer, ok, preserved = [];
quastion(0);

//var answers = [];
switch (answer) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        quastion(1)
        switch (answer) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                quastion(3)
            // do {
            //     ok = false;
            //     event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
            //     if (event == -1) {
            //         break;
            //     }
            //     else {
            //         ok = isAnswer(works.d0, event);
            //     }
            // } while (!ok);

            // break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        quastion(2)
        // do {
        //     ok = false;
        //     event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
        //     if (event == -1) {
        //         break;
        //     }
        //     else {
        //         ok = isAnswer(works.c0, event);
        //     }
        // } while (!ok);
        switch (answer) {
            case 1: // Второе действие
            case 2: // Второе действие
                quastion(3)
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
checkAnswers();
//------------------------------------------
function quastion(level) {
    do {//Выводим вопрос
        ok = false;
        var quast = "";
        quast += works[level][0];
        for (var i = 2; i < works[level].length; i++) {   //записываем все варианты ответов
            quast += works[level][i];
        }
        quast += '-1 - Выход из игры';
        answer = +prompt(quast);
        if (answer == -1) {
            break;
        }
        else {
            ok = isAnswer(works[level][1], answer);
        }
    } while (!ok);
    // preserved = [[works[level][0], works[level][answer + 1]]];//
    // console.log(preserved[0]);
    preserved.push(new Move(level, answer));
    preserved[0].show();
}

function Move(level, answer) {
    this.quast = works[level][0];
    this.answer = works[level][answer + 1];
    this.show = function () {
        return ("вопрос:" + this.quast + "\bВаш ответ был: " + this.answer);
    }
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}
function checkAnswers() {

    do {
        ok = false;
        var answer = +prompt("спасибо за игру! теперь вы можете посмотреть вопрос и ваш ответ на него написав номер вопроса. \b Введите -1 - для выхода из игры", 1);
        if (answer == -1) {
            break;
        }
        ok = isAnswer(preserved.length, answer);
        if (!ok) {
            continue;
        }
        do {
            answer = +prompt((preserved[answer - 1].show()) + "\bВведите -1 - для выхода из игры", 1);
            if (answer == -1) {
                break;
            }
            ok = isAnswer(preserved.length, answer);
            if (!ok) {
                while (!ok) {
                    answer = +prompt("Введите номер вопроса", 1)
                    ok = isAnswer(preserved.length, answer);
                }
                ok = true;
                continue;
            }
        } while (ok)
        break;
    } while (!ok);
}

