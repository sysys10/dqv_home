import { CustomerCase } from '../types/customer.types'
import { NewsItem } from '../types/news.types'
import { dqvHomeApi } from './axiosInstance'

export const getAllCustomerCases = async (): Promise<CustomerCase[]> => {
  const response = await dqvHomeApi.get('/news/all')
  const newsItems = response.data as NewsItem[]
  return newsItems.filter((item) => item.newsType === 'C' && item.useYn === 'Y') as CustomerCase[]
}

export const getCustomerCaseById = async (newsId: number): Promise<CustomerCase> => {
  const response = await dqvHomeApi.get(`/news/${newsId}`)
  const newsItem = response.data as NewsItem
  if (newsItem && newsItem.newsType === 'C') {
    return newsItem as CustomerCase
  }
  throw new Error('Customer case not found')
}
