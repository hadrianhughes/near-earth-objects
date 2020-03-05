export enum SizeUnit {
  feet = 'feet',
  miles = 'miles',
  kilometers = 'kilometers',
  meters = 'meters'
}

export interface RawResult {
  id: string;
  name: string;
  estimated_diameter: object;
}

export interface ResponseType {
  near_earth_objects: {
    [key: string]: Array<RawResult>;
  }
}
