import { AxiosInstance } from "axios";


export type Article = {
  id: string;
  title: string;
  user: {
    rating: number;
    firstName: string;
  };
  location: {
    distance: number;
  };
  reactions: {
    views: number;
  };
  images: {
    medium: string;
  }
};

export class OlioApi {
  constructor(
    private readonly axios: AxiosInstance,
  ) {
  }

  async getArticles(): Promise<Article[]> {
    const articles = await this.axios.get<Article[]>('/articles');

    return articles.data;
  }
}