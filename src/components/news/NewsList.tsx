'use client'
import React from 'react'
import { useNewsHook } from '@/hooks/query/useNewsHook'
import Link from 'next/link'

const NewsList: React.FC = () => {
  const { news, loading } = useNewsHook()

  // 뉴스 타입에 따른 클래스 및 텍스트 매핑
  const NEWS_TYPE_TEXT = {
    R: '언론보도',
    N: '인사이트',
  }

  const NEWS_TYPE_STYLE = {
    R: 'press',
    N: 'insite',
  }

  if (loading) {
    return <div>로딩 중...</div>
  }

  return (
    <div id="sub" className="sub">
      <section className="sub-header">
        <div className="list-header text-left">
          <h2>다큐브의</h2>
          <h1>새로운 소식을 만나보세요.</h1>
        </div>
      </section>
      <section className="sub-content sub-back-gray">
        <div className="sub-wrap">
          <ul className="sub-news-list sublist" id="newsList" data-aos="fade-up">
            {news.map((item) => (
              <li key={item.newsId}>
                <Link
                  href={`/news/detail?newsId=${item.newsId}`}
                  className={NEWS_TYPE_STYLE[item.newsType as 'R' | 'N']}
                >
                  <p className="sub-news-type">{NEWS_TYPE_TEXT[item.newsType as 'R' | 'N']}</p>
                  <p className="sub-news-title">{item.newsTitle}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default NewsList
