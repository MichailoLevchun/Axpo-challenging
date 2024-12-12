import { test, expect } from '@playwright/test';
import axios from 'axios';
import { apiEndpoints } from '../api/endpoints';

test.describe('API Key and Data Validation', () => {
  const apiKey = 'mocked-api-key'; // Replace with dynamic retrieval if needed

  test('validate API key works and fetch data', async () => {
    const url = `${apiEndpoints.baseURL}${apiEndpoints.antarcticaData('2023-01-01', '2023-01-02', '12345')}`;
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    expect(response.status).toBe(200);

    const data = response.data;
    console.log('Response Data:', data);

    // Validate response structure
    expect(data).toHaveProperty('temp');
    expect(data).toHaveProperty('pres');
    expect(data).toHaveProperty('vel');

    // Additional validations
    expect(data.datetime).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/); // Validate datetime format
  });
});