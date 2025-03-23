export function tempoParaSegundos (tempo: string) {
    const [horas, minutos, segundos] = tempo.split(':')

    return Number(horas) * 3600 + Number(minutos) * 60 + Number(segundos)
}