const express = require("express")
const app = express()
const port = 5000

let name = "Fulanito";

app.get('/api/name', (req, res) => {

    return res.status(200).json({message: `Hello ${name} wellcome!!!`})
})

app.listen(port, () => console.log(`Escuchando el puerto ${port}`))