
let dati: unknown

if (typeof dati === "string") {

  const risultato = dati.toUpperCase()

  console.log(risultato)
} else if (typeof dati === "number") {

  const risultato2 = dati * 2
  console.log(risultato2)

} else if (typeof dati === "boolean") {

  let risultato3: "Sì" | "No" = "No"
  console.log(risultato3 ? "Sì" : "No")

} else if (dati === null) {

  console.log("Il dato è vuoto!")

} else if (Array.isArray(dati) || dati instanceof Array) {

  const risultato4 = dati.length

  console.log(risultato4)
} else if (dati instanceof Promise) {

  dati.then((messaggio) => console.log(messaggio))

} else {

  console.log("Tipo non supportato")

}