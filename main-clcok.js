/* ===== CLOCK ===== */
const hour = document.getElementById('clock-hour'),
    mins = document.getElementById('clock-minutes'),
    sec = document.getElementById('clock-seconds');

const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

    //we add a rotainon to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    mins.style.transform = `rotateZ(${mm}deg)`
    sec.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) // 1000ms = 1s


/* ===== CLOCK & DATE TEXT ===== */
const textHour = document.getElementById('text-hour'),
    textMins = document.getElementById('text-minutes'),
    textSec = document.getElementById('text-sec'),
    textAmPm = document.getElementById('text-ampm'),
    dateDay = document.getElementById('date-day'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year')

const clockText = () => {
    let date = new Date()
    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        ss = date.getSeconds(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()
    // we change the hours from 24 to 12 hours and estab
    if (hh >= 12) {
        hh = hh - 12
        ampm = "PM"
    } else {
        ampm = "AM"
    }

    // we detect when  it's 0 AM and transform to 12 AM
    if (hh == 0) { hh = 12 }

    // show a zero before hours
    if (hh < 10) { hh = `0${hh}` }

    // show time
    textHour.innerHTML = `${hh}:`

    // show a zero before minutes
    if (mm < 10) { mm = `0${mm}` }

    // show minutes
    textMins.innerHTML = `${mm}:`

    // show a zero before seconds
    if (ss < 10) { ss = `0${ss}` }

    // show minutes
    textSec.innerHTML = ss

    // show am or pm
    textAmPm.innerHTML = ampm

    // we get the months of the year and show it 
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // show the day, the month and the year
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]}`
    dateYear.innerHTML = year

}
setInterval(clockText, 1000);

/* ===== DARK/LIGHT THEME ===== */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtian the current them that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// we validate if the user previously chose a topic
if (selectedTheme) {
    //if the validation is fulfilled, we ask what the issue was to know if we activated or desactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate / desactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Color Switcher
const colorsDiv = document.querySelectorAll(".color div")
colorsDiv.forEach(div => {
    div.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--hue-clr', e.target.dataset.color)
        // Remove Active class from all element:
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        })
        e.target.classList.add('active')
    })
})