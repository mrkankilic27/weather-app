export interface Location {
    city: string;
    region: string;
    woeid: number;
    country: string;
    lat: number;
    long: number;
    timezone_id: string;
}

export interface Wind {
    chill: number;
    direction: number;
    speed: number;
}

export interface Atmosphere {
    humidity: number;
    visibility: number;
    pressure: number;
    rising: number;
}

export interface Astronomy {
    sunrise: string;
    sunset: string;
}

export interface Condition {
    code: number;
    text: string;
    temperature: number;
}

export interface CurrentObservation {
    wind: Wind;
    atmosphere: Atmosphere;
    astronomy: Astronomy;
    condition: Condition;
    pubDate: number;
}

export interface Forecast {
    day: string;
    date: number;
    low: number;
    high: number;
    text: string;
    code: number;
}

export interface WeatherData {
    location: Location;
    current_observation: CurrentObservation;
    forecasts: Forecast[];
}