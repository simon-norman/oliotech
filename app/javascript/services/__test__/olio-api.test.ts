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
});