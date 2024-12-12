export const apiEndpoints = {
    baseURL: 'https://opendata.aemet.es/api/antartida/datos',
    antarcticaData: (startDate: string, endDate: string, stationId: string) =>
      `/fechaini/${startDate}/fechafin/${endDate}/estacion/${stationId}`,
  };
  