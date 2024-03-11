export interface Anime {
  mal_id: number;
  url: string;
  title: string;
  images: {
    jpg: { image_url: string };
    webp?: { image_url: string };
  };
  type: string;
  aired: {
    from: string;
    to: string;
  };
  status: string;
  synopsis: string;
  episodes: number;
  genres: [
    {
      name: string;
    }
  ];
  rating: string;
}
