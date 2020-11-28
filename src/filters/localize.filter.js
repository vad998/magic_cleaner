import { setTimeout } from "core-js"
import ru from "../locales/ru.json"
import en from "../locales/en.json"

const locales = {
  'ru-RU': ru,
  'en-US': en
}

export default function localizeFilter(key) {
  var check
  var locale
  setTimeout(check = document.getElementById("customSwitch1"), 1)
  if (check == null) {
    locale = navigator.language
  } else if (check.checked == false) {
    locale = 'en-US'
  } else if (check.checked == true) {
    locale = 'ru-RU'
  }
  return locales[locale][key]
}