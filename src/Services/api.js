import axios from 'axios';
import { API_END_POINT } from '../utils/Constants';

export const getTracks = async () => {
  try {
    const response = await axios.get(`${API_END_POINT}/tracks?limit=10&cursor=1`);
    return response.data?.body?.tracks || [];
  } catch (error) {
    console.error('Error fetching tracks:', error);
    return [];
  }
};
