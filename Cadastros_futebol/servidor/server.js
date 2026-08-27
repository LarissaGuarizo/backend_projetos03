const express = require("express")
const cadastros = require("../dados.json")

const mostrarcadastros = (req, res) => {
    calcularPontos()
    res.send(cadastros)
}

const novoCadatros = (req, res) => {
    if (req.body) {
        res.send("Cadastro recebido, em análise")
        cadastros.push(req.body)
    } else {
        res.send("Erro ao receber cadastro")
    }
}
const calcularJogos = () => {
    jogos.forEach(p=>{
        p.jogos = p.vitorias + p.derrotas + p.empates
    })
}
const calcularPontos = () => {
    cadastros.forEach(p=>{
        p.pontos =Number(p.vitorias * 3) + Number(p.derrotas * 0) + Number(p.empates * 1)
    })
}

const app = express()
app.use(express.urlencoded({ extended: true }))
const porta = 3000

app.post("/", novoCadatros)
app.get("/", mostrarcadastros)

app.listen(porta, () => {
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
    console.log(`Servidor: http://127.0.0.1:${porta}`)
})