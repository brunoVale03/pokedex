export interface PokemonDetails {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    sprites: {
      front_default: string;
    };
    types: { type: { name: string } }[];
  }
  
  export interface FlavorTextEntry {
    flavor_text: string;
    language: {
      name: string;
    };
  }
  
  export interface PokemonSpecies {
    flavor_text_entries: FlavorTextEntry[];
  }
  