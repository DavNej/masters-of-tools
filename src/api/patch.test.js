import api from './axiosInstance';

jest.mock('./axiosInstance');

beforeEach(() => {
  api.patch.mockClear();
});

describe.skip('PATCH requests', () => {
  test('resources', async () => {
    const mockSuccess = undefined;
    const mockError = { status: 400 };
    const payload = {};

    api.patch.mockResolvedValueOnce(mockSuccess).mockRejectedValueOnce(mockError);

    await expect(api.patch.resources(payload)).resolves.toEqual(mockSuccess);
    await expect(api.patch.resources(payload)).rejects.toEqual(mockError);

    expect(api.patch).toHaveBeenCalledWith('/resources', payload);
  });
});
