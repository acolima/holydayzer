const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "1/3/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" }
]

function isHoliday(){
  const today = new Date().toLocaleDateString()
  const objectHoliday = holidays.find((holiday) => holiday.date === today)
  
  if(objectHoliday)
    return `Sim, hoje é ${objectHoliday.name}`
  else return "Não, hoje não é feriado"
}

function getMonthlyHolidays(id){
  const monthlyHolidays = holidays.filter((holiday) => 
    holiday.date.split("/")[0] === id
  )
  return monthlyHolidays
}

export{
  holidays,
  isHoliday, 
  getMonthlyHolidays
}