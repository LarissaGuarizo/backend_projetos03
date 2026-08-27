const express = require("express")
const pacientes = require("../dados.json")

const mostrarPacientes = (req, res) => {
    calcularIMC()
    res.send(pacientes)
}

const novoPaciente = (req, res) => {
    if (req.body) {
        res.send("Paciente recebido, em análise")
        pacientes.push(req.body)
    } else {
        res.send("Erro ao receber pedido")
    }
}

const calcularIMC = () => {
    pacientes.forEach(p=>{
        p.IMC = p.peso / (p.altura * p.altura)
    })
}

const app = express()
app.use(express.urlencoded({ extended: true }))
const porta = 3000

app.post("/", novoPaciente)
app.get("/", mostrarPacientes)

app.listen(porta, () => {
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
    console.log(`Servidor: http://127.0.0.1:${porta}`)
})