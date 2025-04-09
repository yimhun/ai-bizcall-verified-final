import Link from 'next/link';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    id: 'basic',
    name: '3인',
    price: '3,300',
    description: '소규모 비즈니스용',
    features: [
      'AI 통화 녹음 및 텍스트 변환',
      '통화 내용 자동 요약',
      '기본 통계 기능',
      '클라우드 기반 저장'
    ]
  },
  {
    id: 'standard',
    name: '10인',
    price: '4,400',
    description: '중소규모 비즈니스용',
    popular: true,
    features: [
      'AI 통화 녹음 및 텍스트 변환',
      '통화 내용 자동 요약',
      '상세 통계 및 분석',
      '팀 공유 기능',
      '24/7 기술 지원'
    ]
  },
  {
    id: 'premium',
    name: '20인',
    price: '5,500',
    description: '중견기업용',
    features: [
      'AI 통화 녹음 및 텍스트 변환',
      '통화 내용 자동 요약',
      '고급 분석 및 인사이트',
      '무제한 팀 공유',
      '우선 기술 지원',
      'API 연동 지원'
    ]
  },
  {
    id: 'enterprise',
    name: '50인 이상',
    price: '6,600',
    description: '대기업용',
    features: [
      'AI 통화 녹음 및 텍스트 변환',
      '통화 내용 자동 요약',
      '맞춤형 분석 대시보드',
      '엔터프라이즈급 보안',
      '전담 계정 관리자',
      'API 완전 지원',
      '맞춤형 통합 솔루션'
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            요금제
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI 비즈콜 by ixi는 귀사의 규모에 맞는 다양한 요금제를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-xl p-6 flex flex-col h-full transition-all hover:shadow-lg ${
                plan.popular ? 'border-[#c0339e] shadow-md' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-[#c0339e] text-white text-xs font-medium px-3 py-1 rounded-full self-start mb-3">
                  인기 요금제
                </div>
              )}
              <h3 className="text-xl font-bold text-[#343959]">
                {plan.name}
              </h3>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-bold text-[#343959]">{plan.price}</span>
                <span className="text-gray-500">/월</span>
                <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={`${plan.id}-feature-${idx}`} className="flex items-start">
                    <Check className="w-5 h-5 text-[#c0339e] flex-shrink-0 mr-2" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className={`w-full py-2 px-4 rounded-lg text-center ${
                  plan.popular
                    ? 'bg-[#c0339e] text-white hover:bg-[#c0339e]/90'
                    : 'bg-gray-100 text-[#343959] hover:bg-gray-200'
                }`}
              >
                지금 신청하기
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>* 모든 요금은 1인당 기준 가격이며, 부가세는 별도입니다.</p>
          <p>* LG U+ 기업전화 가입자는 할인 혜택을 받을 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
}
