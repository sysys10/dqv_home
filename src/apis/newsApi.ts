import { NewsItem } from '../types/news.types'
import { dqvHomeApi } from './axiosInstance'

export const getAllNews = async (): Promise<NewsItem[]> => {
  const { data } = await dqvHomeApi.get('/news/all')
  return data as NewsItem[]
}

export const getNewsById = async (newsId: number): Promise<NewsItem | null> => {
  const { data } = await dqvHomeApi.get(`/news/${newsId}`)
  return data as NewsItem
}
