let BT = document.querySelector('div');
var FTimer, t1, t2, n, tD, tSum, tDelay, tAll, i, k;
    tSum = 0;
    tD = 0;
    n = 0;
    i = 0;
    k = 0;
    tDelay = Date.now();

function BTSwitch() {
    let ColorChange = function() {
        BT.style.backgroundColor = "green";
        t2 = Date.now();
        tD = t2 - t1;
        tSum = tSum + tD;
        tAll = tSum + tDelay;
        k = k + 1;
        n = t2;
        console.log('Цикл ' + k + ' закончен. Длительность: ' + tD + ' мс.');
        console.log('Общее время на данный момент: ' + tAll + ' мс.');
    };

    BT.addEventListener('click', () => {
        clearTimeout(FTimer);
        t1 = Date.now();
        i = i + 1;
        if (i == 1) {
            n = t1;
            tDelay = t1 - tDelay;
            console.log('Щелчок ' + i + '. Задержка времени перед 1-м щелчком: ' + tDelay + ' мс.');
        };
        n = t1 - n;
        tSum = tSum + n;
        if (i > 1) {
            console.log('Щелчок ' + i + '. Прошло времени с последнего действия: ' + n + ' мс.');
        };
        n = t1;
        BT.style.backgroundColor = "red";
        FTimer = setTimeout(ColorChange, 2000);
    });
};

BTSwitch();