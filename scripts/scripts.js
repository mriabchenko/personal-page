setAge();
setGradient();
setInterval(changeGradient, 20000);

function calculate_age() {
    const date_of_birth = new Date('5.01.1995');
    const diff_ms = Date.now() - date_of_birth.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function setAge() {
    const $age = document.getElementById('age');
    if ($age) {
        $age.innerText = `${calculate_age()} y.o`;
    }
}

function getRandomArrayEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomGradient() {
    const gradients = [
        '45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%',
        'to top, #a18cd1 0%, #fbc2eb 100%',
        'to top, #fbc2eb 0%, #a6c1ee 100%',
        '120deg, #a1c4fd 0%, #c2e9fb 100%',
        '120deg, #d4fc79 0%, #96e6a1 100%',
        '120deg, #84fab0 0%, #8fd3f4 100%',
        '120deg, #e0c3fc 0%, #8ec5fc 100%',
        'to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%',
        'to top, #feada6 0%, #f5efef 100%',
        '15deg, #13547a 0%, #80d0c7 100%',
        'to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%',
        '-20deg, #dcb0ed 0%, #99c99c 100%',
        '-20deg, #00cdac 0%, #8ddad5 100%',
        'to top, #4481eb 0%, #04befe 100%',
        '60deg, #64b3f4 0%, #c2e59c 100%',
        'to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%'
    ];
    return getRandomArrayEl(gradients);
}

function setGradient() {
    const $gradient = document.getElementById('gradient');
    if ($gradient) {
        $gradient.style.backgroundImage = `linear-gradient(${getRandomGradient()})`;
        $gradient.style.opacity = Math.random().toString();
    }
}

function changeGradient() {
    const $gradient = document.getElementById('gradient');
    if ($gradient) {
        const transitionTime = 3000;
        $gradient.style.transition = `opacity ${transitionTime}ms ease-in-out`;
        $gradient.style.opacity = 0;
        setTimeout(() => {
            setGradient();
        }, transitionTime);
    }
}

// transition: opacity 5s ease-in-out;
