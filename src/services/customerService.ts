import apiService from './api';
import { CustomerCase } from '../types/customer.types';
import { NewsItem } from '../types/news.types';

export const getAllCustomerCases = async (): Promise<CustomerCase[]> => {
  try {
    const response = await apiService.get('/news/all');
    const newsItems = response.data.data as NewsItem[];
    return newsItems.filter(item => item.newsType === 'C' && item.useYn === 'Y') as CustomerCase[];
  } catch (error) {
    console.error('Error fetching customer cases:', error);
    return [];
  }
};

export const getCustomerCaseById = async (newsId: number): Promise<CustomerCase | null> => {
  try {
    const response = await apiService.get(`/news/${newsId}`);
    const newsItem = response.data.data as NewsItem;
    if (newsItem && newsItem.newsType === 'C') {
      return newsItem as CustomerCase;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching customer case with ID ${newsId}:`, error);
    return null;
  }
};