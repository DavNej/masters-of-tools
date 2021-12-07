import api from './axiosInstance';

jest.mock('./axiosInstance');

beforeEach(() => {
  api.post.mockClear();
});

describe.skip('POST requests', () => {
  test('resources', async () => {
    const mockSuccess = undefined;
    const mockError = { status: 400 };
    const payload = {};

    api.post.mockResolvedValueOnce(mockSuccess).mockRejectedValueOnce(mockError);

    await expect(api.post.resources(payload)).resolves.toEqual(mockSuccess);
    await expect(api.post.resources(payload)).rejects.toEqual(mockError);

    expect(api.post).toHaveBeenCalledWith('/resources', payload);
  });
});
