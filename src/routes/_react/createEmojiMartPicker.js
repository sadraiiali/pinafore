import { importEmojiMart } from '../_utils/asyncModules/importEmojiMart.js'
import { loadCSS } from '../_utils/loadCSS'

async function fetchEmojiMartData () {
  return (await fetch('/emoji-mart-all.json')).json()
}

let Picker // cache so we don't have to recreate every time

export async function createEmojiMartPicker () {
  if (!Picker) {
    loadCSS('/emoji-mart.css')
    const [data, createEmojiMartPickerFromData] = await Promise.all([
      fetchEmojiMartData(),
      importEmojiMart()
    ])
    Picker = createEmojiMartPickerFromData(data)
  }
  return Picker
}
