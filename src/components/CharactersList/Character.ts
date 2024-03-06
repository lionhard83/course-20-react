type Origin = {
  name: string;
  url: string;
};

export type CharacterModel = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type ApiResponse = {
  info: Info;
  results: CharacterModel[];
};
