const CDN_URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api";

type PowerStats = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

type Appearance = {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
};

type Biography = {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
};

type Work = {
  occupation: string;
  base: string;
};

type Connections = {
  groupAffiliation: string;
  relatives: string[];
};

type SuperheroImage = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export type Superhero = {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: SuperheroImage;
};

async function fetchData<T>(endpoint: string): Promise<T> {
  const url = `${CDN_URL}/${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API call failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export async function getAllSuperheroes(): Promise<Superhero[]> {
  return fetchData<Superhero[]>("all.json");
}

export async function getSuperheroById(id: number): Promise<Superhero> {
  return fetchData<Superhero>(`id/${id}.json`);
}
