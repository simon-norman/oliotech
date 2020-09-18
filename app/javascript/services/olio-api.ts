import { AxiosInstance } from "axios";

export type Article = {
  id: string;
  title: string;
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