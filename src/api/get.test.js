import testData from 'test-utils/data';
import api from './axiosInstance';

const {
  mongoId,
  // resources,
} = testData;

jest.mock('./axiosInstance');

beforeEach(() => {
  api.get.mockClear();
});

describe.skip('GET requests', () => {
  test('resources', async () => {
    const mockSuccess = undefined;
    const mockError = { status: 400 };

    api.get.mockResolvedValueOnce(mockSuccess).mockRejectedValueOnce(mockError);

    await expect(api.get.resources(mongoId)).resolves.toEqual(mockSuccess);
    await expect(api.get.resources(mongoId)).rejects.toEqual(mockError);

    expect(api.get).toHaveBeenCalledWith(`/resources/${mongoId}`);
  });
});
