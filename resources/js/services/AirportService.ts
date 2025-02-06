import { Airport, airports } from '../data/airports';

class AirportService {
    searchAirports(query: string): Airport[] {
        if (!query || query.length < 2) return [];

        const searchTerm = query.toLowerCase();
        return airports
            .filter(airport => 
                airport.city.toLowerCase().includes(searchTerm) ||
                airport.iata.toLowerCase().includes(searchTerm) ||
                airport.name.toLowerCase().includes(searchTerm) ||
                airport.country.toLowerCase().includes(searchTerm)
            )
            .slice(0, 10); // Limitiamo a 10 risultati per una migliore UX
    }

    // Formatta la visualizzazione dell'aeroporto
    formatAirportDisplay(airport: Airport): string {
        return `${airport.city} (${airport.iata}) - ${airport.name}`;
    }

    // Ottiene un aeroporto dal suo codice IATA
    getAirportByIata(iata: string): Airport | undefined {
        return airports.find(airport => airport.iata.toLowerCase() === iata.toLowerCase());
    }

    // Calcola la distanza tra due aeroporti (in km)
    calculateDistance(from: Airport, to: Airport): number {
        const R = 6371; // Raggio della Terra in km
        const dLat = this.toRad(to.lat - from.lat);
        const dLon = this.toRad(to.lon - from.lon);
        const lat1 = this.toRad(from.lat);
        const lat2 = this.toRad(to.lat);

        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    // Ottiene il fuso orario di un aeroporto
    getTimezone(airport: Airport): string {
        return airport.tz;
    }

    // Ottiene l'altitudine di un aeroporto in metri
    getAltitude(airport: Airport): number {
        return airport.alt;
    }

    private toRad(degrees: number): number {
        return degrees * (Math.PI / 180);
    }
}

export default new AirportService(); 