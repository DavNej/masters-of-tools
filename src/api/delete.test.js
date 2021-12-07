import testData from 'test-utils/data';
import api from './axiosInstance';

const {
  mongoId,
  // resources,
} = testData;

jest.mock('./axiosInstance');

beforeEach(() => {
  api.delete.mockClear();
});

describe.skip('DELETE requests', () => {
  test('resources', async () => {
    const mockSuccess = undefined;
    const mockError = { status: 400 };

    api.delete.mockResolvedValueOnce(mockSuccess).mockRejectedValueOnce(mockError);

    await expect(api.delete.resources(mongoId)).resolves.toEqual(mockSuccess);
    await expect(api.delete.resources(mongoId)).rejects.toEqual(mockError);

    expect(api.delete).toHaveBeenCalledWith(`/resources/${mongoId}`);
  });
});
