const calculateBMI = w => h => !(isNaN(+w) && isNaN(+h)) ? +((w / (h / 100) ** 2).toFixed(2)) : console.error("error")

const checkBMIRange = bmi => (l, h) => (l <= bmi && bmi < h)

const getBMIStatus = function (w, h) {
    const val = calculateBMI(w)(h);
    switch (true) {
        case (val < 17): return "Severely underweight 💀"
        case (checkBMIRange(val)(17, 18)): return "Moderately underweight🦴🤨"
        case (checkBMIRange(val)(18, 19.5)): return "Slightly underweight 🚶‍♀️"
        case (checkBMIRange(val)(19.5, 26)): return "normal weight 👌"
        case (checkBMIRange(val)(26, 31)): return "incipient obesity 🚴‍♀️"
        case (checkBMIRange(val)(31, 36)): return "Grade 1 obesity ⚠"
        case (checkBMIRange(val)(36, 41)): return "Grade 2 obesity ⚠"
        case (41 <= val): return "Grade 2 obesity ⚠"
    }
}

console.log((getBMIStatus(90, 190)))