import axios, { AxiosError, AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const response: AxiosResponse = await axios.get('http://13.60.194.15:80');
    res.status(response.status).json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    res
      .status(axiosError.response?.status || 500)
      .json({ error: axiosError.message });
  }
}
