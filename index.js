
let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")



const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "`~!@#$%^&*()_+{}[];:,.<>/?|"

    let data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';
    for (index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]
    }

    return generator;

}

const getPassword = () => {
    if (passwordLength.value === "") {
        alert("angka tidak boleh kosong, silahkan isi angka lebih dari satu")
        return
    }
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() => {
        alert("Password telah terbuat!")
    }, 1000)
}

const savePassword = () => {
    document.title = password.value
    if (passwordLength.value === "") {
        alert("angka tidak boleh kosong, silahkan isi angka lebih dari satu")
        return
    } else {
        saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password yang anda buat: ${document.title}`))
        saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
        setTimeout(() => {
            alert("Password telah tersimpan!")
        }, 1000)

    }
}

const reload = () => {
    location.reload()
}

