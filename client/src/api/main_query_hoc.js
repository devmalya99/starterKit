

import axios from 'axios';


export const main_post_query_hof = async (apiRoute, userData) => {
    try {
      const response = await axios.post(apiRoute, userData);
      console.log('API Response:', response.data); // Log the response
      return response.data;
    } catch (error) {
      console.error('API Error:', error); // Log if an error occurs
      throw error; // Re-throw to handle it in the hook
    }
  };
  