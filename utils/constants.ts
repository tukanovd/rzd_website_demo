export const API_V1 = "api/v1";
export const API_PREFIX = "public";
export const PUBLIC_NEWS_HOST = "https://mgn.dzvr.ru";
export const PUBLIC_NEWS_SLUG = "news";
export const PUBLIC_NEWS_URL = `${PUBLIC_NEWS_HOST}/${API_PREFIX}/${PUBLIC_NEWS_SLUG}/${API_V1}/${PUBLIC_NEWS_SLUG}`;

export const PUBLIC_DIRECTORATES_HOST = "https://mgn.dzvr.ru";
export const PUBLIC_DIRECTORATES_SLUG = "directorates";
export const PUBLIC_DIRECTORATE_URL = `${PUBLIC_DIRECTORATES_HOST}/${API_PREFIX}/${PUBLIC_DIRECTORATES_SLUG}/${API_V1}/${PUBLIC_DIRECTORATES_SLUG}`;

export const PUBLIC_CONTACTS_URL = `${PUBLIC_DIRECTORATE_URL}/head`;
export const PUBLIC_ADMINISTRATION_URL = `${PUBLIC_DIRECTORATE_URL}/head`;

export const PUBLIC_STATIONS_HOST = "https://mgn.dzvr.ru";
export const PUBLIC_STATIONS_SLUG = "stations";
export const PUBLIC_STATIONS_URL = `${PUBLIC_STATIONS_HOST}/${API_PREFIX}/${PUBLIC_STATIONS_SLUG}/${API_V1}/${PUBLIC_STATIONS_SLUG}`;

export const PUBLIC_STATION_TRAIN_TABLE_URL = `//dzv.rzdsupport.ru/public/stations/api/v1/online_table`;

export const PAGES_CONFIG = {
  home: { id: "home", url: "/" },
  news: { id: "news", url: "/news" },
  stations: { id: "stations", url: "/stations" },
  directorates: { id: "directorates", url: "/directorates" },
  importantInfo: { id: "importantInfo", url: "/importantInfo" },
  services: { id: "services", url: "/services" },
  stationsByService: { id: "stationsByService", url: "/services/stations" },
};
