type Dipendente = {
    nome: string,
    cognome: string,
    annoNascita: number,
    sesso: "m" | "f",
    anniDiServizio: number[]
    readonly emailAziendale: string
    contratto: "indeterminato" | "deterdminato" | "freelance"

}

type Developer = Dipendente & {
    livelloEsperienza: "Junior" | "Mind" | "Senior",
    linguaggi?: string[],
    certificazioni: string[]
}

type ProjectManager = Dipendente & {
    teamSize: number | null,
    budgetGestito?: number
    stakeholderPrincipali: string[]
}