import Image from 'next/image';
import { Check } from 'lucide-react';

const benefits = [
  '클라우드 기반으로 설치 필요 없음',
  '스마트폰에서 사무실 번호로 통화',
  '통화 내용 자동 녹음 및 텍스트 변환',
  '핵심 내용 AI가 자동 요약 제공',
  '팀원 간 쉬운 통화 내용 공유',
  '개인정보 보호 및 보안 강화'
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative mx-auto max-w-md">
              <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10">
                <div className="bg-[#c0339e]/10 p-4 rounded-xl mb-6">
                  <Image
                    src="/images/app-screenshot.png"
                    alt="AI 비즈콜 앱 스크린샷"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#343959] mb-3">AI 비즈콜 by ixi</h3>
                <p className="text-gray-600 text-sm">
                  스마트한 통화 관리로 비즈니스 효율성을 높이는 AI 기반 통화 솔루션
                </p>
              </div>
              <div className="absolute -bottom-4 -left-4 z-0 w-32 h-32 bg-[#e9ad44]/20 rounded-full"></div>
              <div className="absolute -top-4 -right-4 z-0 w-24 h-24 bg-[#58aec5]/20 rounded-full"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="section-title">
              어떤 혜택이 있나요?
            </h2>
            <p className="text-gray-600 mb-8">
              AI 비즈콜은 사무실 전화와 휴대폰을 연동해 업무 효율성을 크게 높여주는 다양한 혜택을 제공합니다.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={`benefit-${index}`} className="flex items-start">
                  <span className="flex-shrink-0 mr-3 mt-1 bg-[#c0339e] text-white p-1 rounded-full">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-[#343959]">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a href="#" className="btn-primary inline-flex">
                서비스 신청하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
