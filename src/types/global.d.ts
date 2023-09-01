export {};

declare global {
  interface IIdea {
    id: number;
    title: string;
    description: string;
    lastUpdated: Date;
  }
}
