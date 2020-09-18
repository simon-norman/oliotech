import { AxiosInstance } from "axios";

export type Article = {
  id: string;
  title: string;
  user: {
    rating: number;
    firstName: string;
    avatar: {
      small: string;
    }
  };
  location: {
    distance: number;
  };
  reactions: {
    views: number;
    likes: number;
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

  async incrementLikes(id: string, likes: number): Promise<void> {
    await this.axios.patch(`/articles/${id}`, { likes });
  }
}