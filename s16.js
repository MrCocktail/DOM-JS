const form = document.querySelector("form")
const button = document.querySelector('button')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
})

button.onclick = () => {
    let texte = document.querySelectorAll('p')
    let val = document.querySelector('input').value
    let i = 0
    for (el of texte){
        texte = el.innerHTML
        texte = texte.split("<span style=\"color:green; font-weight:bold;\">").join("")
        texte = texte.split("</span>").join("")

        if (val != ""){
            let expReg = new RegExp(val, "ig")
            let nvlleForm = `<span style='color:green; font-weight:bold;'>${val}</span>`

            texte = texte.replace(expReg, nvlleForm)
            document.querySelectorAll('p')[i].innerHTML = texte
            i++
    }
    }
    
}