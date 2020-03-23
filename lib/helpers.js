import { Fragment } from 'react'

// sentenceCase()
// --------------
// convert a string to sentence case
export const sentenceCase = (string) => {
    let sentence = string.charAt(0).toUpperCase() + string.slice(1)
    return sentence
}

// getAge()
// --------------
// calculate age give date of birth
export const getAge = (birthday) => {
    let today = new Date()
    let birthDate = new Date(birthday)
    let age = today.getFullYear() - birthDate.getFullYear()
    let m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}

// monthNumberToString()
// --------------
// take month as 1 indexed number and return string
export const monthNumberToString = (monthNumber) => {
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    let monthNumber0 = monthNumber - 1
    return months[monthNumber0]
}

// dateYear()
// --------------
// take a date and return the year
export const dateYear = (date) => {
    let d = new Date(date)
    const year = d.getFullYear()
    return year
}

// newlineBr()
// --------------
// convert new lines in a string to br tags
export const newlineBr = (string) => {
    let text = string.split("\n").map((line,i) => (
        <Fragment key={i}>
            {line}
            <br />
        </Fragment>
    ))
    return text
}

// noHttp()
// --------------
// removes http, https and www from url strings
export const noHttp = (string) => {
    let http = string.replace('http://', '')
    let https = http.replace('https://', '')
    let www = https.replace('www.', '')
    return www
}