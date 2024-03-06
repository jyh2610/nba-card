export interface PlayerShortProfile {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  jersey_number: string;
  weight: string;
  team: {
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    id: number;
  };
  height: string;
}
