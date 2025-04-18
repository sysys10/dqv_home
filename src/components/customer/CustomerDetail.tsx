import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useCustomerDetailHook } from '@/hooks/query/useCustomerHook'

const CustomerDetail: React.FC = () => {
  const searchParams = useSearchParams()
  const newsId = Number(searchParams.get('newsId') || '0')

  const { customerCase, loading, relatedCases, fetchCustomerCase, fetchRelatedCases } = useCustomerDetailHook()

  useEffect(() => {
    if (newsId !== 0) {
      fetchCustomerCase(newsId)
      fetchRelatedCases()
    }
  }, [newsId])

  if (loading) {
    return <div>로딩 중...</div>
  }

  if (!customerCase) {
    return <div>고객 사례를 찾을 수 없습니다.</div>
  }

  return (
    <div id="sub" className="sub">
      <section className="sub-content">
        <div className="sub-wrap">
          <div className="customer-content" dangerouslySetInnerHTML={{ __html: customerCase.newsBody }} />
        </div>
      </section>

      {relatedCases.length > 0 && (
        <section className="sub-recomend sub-back-gray">
          <div className="sub-wrap">
            <h4>관련 정보</h4>
            <div className="sub-recomend-swiper">
              <ul className="sub-customer-list swiper-wrapper pt-0 pb-0">
                {relatedCases.map((item) => {
                  const titleParts = item.newsTitle.split(':')
                  const customerName = titleParts[0]
                  const description = titleParts[1] || ''
                  const hashTags = item.hashTags.split(',').slice(0, 3)

                  return (
                    <li key={item.newsId} className="swiper-slide">
                      <Link href={`/customer/contents?newsId=${item.newsId}`}>
                        <img src={item.imgUrl} alt={`${customerName} 고객사례 이미지`} />
                        <p className="customer-tit">{customerName}</p>
                        <p className="customer-text">{description}</p>
                        <ul className="customer-tag">
                          {hashTags.map((tag, idx) => (
                            <li key={idx}>
                              <p>{tag}</p>
                            </li>
                          ))}
                        </ul>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default CustomerDetail
