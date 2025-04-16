'use client'
import { useState } from 'react'

export default function ConsultForm() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showMarketingModal, setShowMarketingModal] = useState(false)

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8 md:mt-12">
      <div className="flex-1 space-y-4 text-left">
        <h3 className="text-xl md:text-2xl font-semibold">
          AI에이전트, <br /> 다큐브와 함께 시작하세요
        </h3>
        <p className="text-lg font-medium text-gray-900">02-889-8425</p>
        <p className="text-[#202F76] font-semibold">business@daquv.com</p>
      </div>

      <form className="flex-1 space-y-3">
        {['이름 *', '회사 이메일 *', '연락처 *', '회사(단체)명 *', '부서/직함'].map((placeholder, i) => (
          <input
            key={i}
            type="text"
            placeholder={placeholder}
            className="w-full px-4 py-2 rounded bg-[#647AE1] text-white placeholder-white"
          />
        ))}

        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <input type="checkbox" id="privacy" className="mt-1" />
            <label htmlFor="privacy" className="text-sm text-gray-700">
              개인정보 수집 동의 (필수)
              <button
                type="button"
                onClick={() => setShowPrivacyModal(true)}
                className="text-xs text-red-600 ml-1 underline"
              >
                자세히
              </button>
            </label>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="marketing" className="mt-1" />
            <label htmlFor="marketing" className="text-sm text-gray-700">
              마케팅 수신 동의 (선택)
              <button
                type="button"
                onClick={() => setShowMarketingModal(true)}
                className="text-xs text-red-600 ml-1 underline"
              >
                자세히
              </button>
            </label>
          </div>
        </div>

        <button type="submit" className="w-full bg-[#202F76] text-white py-2 rounded hover:opacity-90">
          보내기
        </button>
      </form>

      {/* 팝업 예시 */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h4 className="font-semibold text-lg mb-4">개인정보 수집 동의</h4>
            <p className="text-sm text-gray-700">여기에 상세 내용 입력</p>
            <button onClick={() => setShowPrivacyModal(false)} className="mt-4 text-blue-600 underline text-sm">
              닫기
            </button>
          </div>
        </div>
      )}

      {showMarketingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h4 className="font-semibold text-lg mb-4">마케팅 수신 동의</h4>
            <p className="text-sm text-gray-700">여기에 상세 내용 입력</p>
            <button onClick={() => setShowMarketingModal(false)} className="mt-4 text-blue-600 underline text-sm">
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
