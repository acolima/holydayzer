import { getMonthlyHolidays, holidays, isHoliday } from "./utils.js"
import express from "express"

const server = express()

server.get("/holidays", (req, res) => {
  res.send(holidays)
})

server.get("/is-today-holiday", (req, res) => {
    res.send(isHoliday())
})

server.get("/holidays/:id", (req, res) => {
  const id = req.params.id
  res.send(getMonthlyHolidays(id))
})

server.listen(3000)