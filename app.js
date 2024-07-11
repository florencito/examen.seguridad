const mongoose = require("mongoose")
const url_bd = "mongodb://localhost:27017/olateacher"

mongoose.connect(url_bd)
.then(() => {
    console.log("Si jala")
})
.catch((error) => {
    console.log("No jala ptm")
})

const esquema = new mongoose.Schema({
    name: {
        type:String
    },
    apepat: {
        type:String
    },
    apemat: {
        type:String
    },
    numerotel: {
        type:Number
    }
})

const modelo = new mongoose.model("tabla de alumnos", esquema)
const modelop = new mongoose.model("tabla de maestros", esquema)

modelo.create({
    name: "Florencio",
    apepat: "Reyes",
    apemat: "Peralta",
    numerotel: 4491235207
})
