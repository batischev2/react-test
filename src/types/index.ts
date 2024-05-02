export interface CompanyUSA {
  компания: string
  тикер: string
  сектор: string
  доля: string
  ['Текущая цена']: string
  ['Точка входа']: string
  Потенциал: string
  ['Уровень риска']: string
  ['Ср-срочн. потенциал']: string
  Дивиденды: string
  ['Потенциал роста']: string
  ['Долгосрочный потенциал роста']: string
  ['FWD P/E']: string
  ['Sales 5 past years']: string
}

export interface CompanyCHN {
  Название: string
  Тикер: string
  Сектор: string
  Отрасль: string
  ['Уровень риска']: string
  ['Ср-срочн. потенциал']: string
  ['Текущая цена']: string
  ['Точка входа']: string
  ['Точка входа $']: string
  Потенциал: string
  ['Долгосрочный потенциал']: string
  Валюта: string
  ['Потенциал роста']: string
  ['Долгосрочный потенциал роста']: string
}
