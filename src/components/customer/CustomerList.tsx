import React, { useEffect, useState } from 'react'
import { CustomerCase } from '../../types/customer.types'
import { getAllCustomerCases } from '../../services/customerService'
import Link from 'next/link'

const CustomerList: React.FC = () => {
  const [customerCases, setCustomerCases] = useState<CustomerCase[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCustomerCases = async () => {
      try {
        const cases = await getAllCustomerCases()
        setCustomerCases(cases)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching customer cases:', error)
        setLoading(false)
      }
    }

    fetchCustomerCases()
  }, [])

  if (loading) {
    return <div>로딩 중...</div>
  }

  return (
    <div id="sub" className="sub">
      <section className="sub-header">
        <div className="list-header text-left">
          <h2>다큐브의</h2>
          <h1>고객사례를 소개합니다.</h1>
        </div>
      </section>
      <section className="sub-content sub-back-gray">
        <div className="sub-wrap">
          <ul className="sub-customer-list sublist" id="customerList" data-aos="fade-up">
            {customerCases.map((item) => {
              const titleParts = item.newsTitle.split(':')
              const customerName = titleParts[0]
              const description = titleParts[1] || ''
              const hashTags = item.hashTags.split(',').slice(0, 3)

              return (
                <li key={item.newsId}>
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
      </section>
    </div>
  )
}

export default CustomerList
