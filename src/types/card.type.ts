export interface ICardData {
  label: string;
  product: {
    src: string;
    title: string;
    hilight: number;
    crossOut: number;
    rating?: number;
    comment?: string;
  };
}
