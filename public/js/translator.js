async function translate(input) {
    const response = await fetch("/translate", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            input
        })
    })
    
    if (!response.ok) {
        throw new Error(await response.text())
    }

    return response.text()
}

(async function() {
    const inputFr = document.getElementById("input-text-fr")
    const outputIg = document.getElementById("output-ig")
    const btnTranlate = document.getElementById("btn-translate")

    btnTranlate.addEventListener("click", async () => {
        const textFr = inputFr.value.trim()

        if (textFr.length == 0) {
            alert("Enter a text in french")
            return
        }

        try {
            const textIg = await translate(textFr)
            outputIg.value = textIg
        } catch(e) {
            alert(e.message)
        }

    })
})()