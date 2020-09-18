import axios from 'axios';
import { OlioApi } from '../olio-api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Olio api', () => {
  test('Fetch list of articles', async () => {
    const articleData = [{ title: 'Pastries' }, { title: 'Assorted toys' }];
  
    mockedAxios.get.mockImplementationOnce(async () => ({ data: articleData }));
    const olioApi = new OlioApi(mockedAxios);
  
    const articles = await olioApi.getArticles();
    expect(articles).toEqual(articleData);
  });

  test('Increment article likes', async () => {
    const olioApi = new OlioApi(mockedAxios);
    const id = '1';
    const likes = 10;
  
    await olioApi.incrementLikes(id, likes);
    expect(mockedAxios.patch.mock.calls[0]).toEqual([`/articles/${id}`, { likes }]);
  });
});