import airportsData from './airports.dat?raw';

export interface Airport {
    id: number;
    name: string;
    city: string;
    country: string;
    iata: string;
    icao: string;
    lat: number;
    lon: number;
    alt: number;
    timezone: number;
    dst: string;
    tz: string;
}

// Processa il file airports.dat
const processAirports = (): Airport[] => {
    return airportsData
        .split('\n')
        .filter(line => line.trim() !== '')
        .map(line => {
            const [
                id, name, city, country, iata, icao,
                lat, lon, alt, timezone, dst, tz
            ] = line.split(',').map(field => field.replace(/"/g, ''));

            return {
                id: parseInt(id),
                name,
                city,
                country,
                iata: iata || '',
                icao: icao || '',
                lat: parseFloat(lat),
                lon: parseFloat(lon),
                alt: parseFloat(alt),
                timezone: parseFloat(timezone),
                dst,
                tz
            };
        })
        // Filtriamo solo gli aeroporti con codice IATA (sono i più importanti)
        .filter(airport => airport.iata !== '\\N' && airport.iata !== '');
};

export const airports = processAirports(); 