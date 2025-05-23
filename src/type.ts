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


type Team = {
    nome: string,
    progettoAttuale: string | null,
    budget: number,
    membri: [ProjectManager, Developer, ...Developer[]]
    //Una tuple in cui il primo elemento è sempre un Project Manager, seguito da uno o più Developers (almeno un developer obbligatorio).
}