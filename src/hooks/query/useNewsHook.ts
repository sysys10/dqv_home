import { getAllNews, getNewsById } from '@/apis/newsApi'
import { NewsItem } from '@/types/news.types'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useNewsHook = () => {
  const [news, setNews] = useState<NewsItem[]>([])

  const { mutate: fetchNews, isPending } = useMutation({
    mutationFn: getAllNews,
    onSuccess: (data: NewsItem[]) => {
      // 언론보도(R)와 인사이트(N) 타입만 필터링하고, useYn이 'Y'인 것만 표시
      const filteredNews = data.filter((item) => (item.newsType === 'R' || item.newsType === 'N') && item.useYn === 'Y')
      setNews(filteredNews)
    },
    onError: (error) => {
      console.error('Error fetching news:', error)
    },
  })

  useEffect(() => {
    fetchNews()
  }, [])

  return { news, loading: isPending }
}

export const useNewsDetailHook = () => {
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null)
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([])

  const { mutate: fetchNewsItem, isPending } = useMutation({
    mutationFn: (newsId: number) => getNewsById(newsId),
    onSuccess: (data: NewsItem | null) => {
      if (data && (data.newsType === 'R' || data.newsType === 'N')) {
        setNewsItem(data)
      }
    },
    onError: (error) => {
      console.error('Error fetching news item:', error)
    },
  })

  const { mutate: fetchRelatedNews, isPending: isRelatedNewsPending } = useMutation({
    mutationFn: getAllNews,
    onSuccess: (data: NewsItem[]) => {
      if (newsItem) {
        const related = data
          .filter(
            (item) => item.newsId !== newsItem.newsId && item.newsType === newsItem.newsType && item.useYn === 'Y',
          )
          .slice(0, 3)
        setRelatedNews(related)
      }
    },
    onError: (error) => {
      console.error('Error fetching related news:', error)
    },
  })

  return {
    newsItem,
    loading: isPending || isRelatedNewsPending,
    fetchNewsItem,
    relatedNews,
    fetchRelatedNews,
  }
}
