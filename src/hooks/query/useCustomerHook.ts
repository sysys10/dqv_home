import { getAllCustomerCases, getCustomerCaseById } from '@/apis/customerApi'
import { CustomerCase } from '@/types/customer.types'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useCustomerHook = () => {
  const [customerCases, setCustomerCases] = useState<CustomerCase[]>([])

  const { mutate: fetchCustomer, isPending } = useMutation({
    mutationFn: getAllCustomerCases,
    onSuccess: (data: CustomerCase[]) => {
      setCustomerCases(data)
    },
    onError: (error) => {
      console.error('Error fetching customer:', error)
    },
  })

  useEffect(() => {
    fetchCustomer()
  }, [])

  return { customerCases, loading: isPending }
}

export const useCustomerDetailHook = () => {
  const [customerCase, setCustomerCase] = useState<CustomerCase | null>(null)

  const [relatedCases, setRelatedCases] = useState<CustomerCase[]>([])

  const { mutate: fetchCustomerCase, isPending } = useMutation({
    mutationFn: (newsId: number) => getCustomerCaseById(newsId),
    onSuccess: (data: CustomerCase | null) => {
      setCustomerCase(data)
    },
    onError: (error) => {
      console.error('Error fetching customer case:', error)
    },
  })

  const { mutate: fetchRelatedCases, isPending: isRelatedCasesPending } = useMutation({
    mutationFn: getAllCustomerCases,
    onSuccess: (data: CustomerCase[]) => {
      const related = data.filter((item) => item.newsId !== customerCase?.newsId).slice(0, 3)
      setRelatedCases(related)
    },
    onError: (error) => {
      console.error('Error fetching related cases:', error)
    },
  })

  return {
    customerCase,
    loading: isPending || isRelatedCasesPending,
    fetchCustomerCase,
    relatedCases,
    fetchRelatedCases,
  }
}
