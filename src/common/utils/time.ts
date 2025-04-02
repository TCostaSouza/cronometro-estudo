export function tempoParaSegundos(tempo: string) {
  if (!tempo || tempo.split(':').length !== 3) {
    const [horas, minutos] = tempo.split(':');

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;

    return horasEmSegundos + minutosEmSegundos;
  } else {
    const [horas, minutos, segundos] = tempo.split(':');

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;

    return horasEmSegundos + minutosEmSegundos + Number(segundos);
  }

}
