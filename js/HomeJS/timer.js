const days_el = document.getElementById('days');
const daysbf_el = document.getElementById('days_bf');
const to_date = "31 Aug 2022";

function countDownToDate() {
    const to_dateDate = new Date(to_date);
    const curDate = new Date();

    const daysLeft = Math.floor(((to_dateDate - curDate) / 1000) / 3600 / 24);

    console.log(daysLeft);

    days_el.innerHTML = daysLeft;
    daysbf_el.innerHTML = to_date + " !";
}

countDownToDate();

setInterval(countDownToDate, 1000);