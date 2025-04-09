"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '[AI비즈콜] 어떤 서비스인가요?',
    answer: '스마트폰에서 사무실 전화번호로 전화를 걸고 받을 수 있는 서비스입니다. AI 기반 통화 녹음, 텍스트 변환, 요약 기능을 제공해 업무 효율성을 향상시킵니다.'
  },
  {
    question: '[AI비즈콜] AI 기능은 정확한가요?',
    answer: '네. LG유플러스 자체 개발 AI 기술을 활용합니다. 지속적인 학습과 업데이트를 통해 높은 정확도를 제공하며, 업무 특성에 맞는 맞춤형 솔루션도 제공 가능합니다.'
  },
  {
    question: '[AI비즈콜] U+ 고객이 아니어도 이용 가능한가요?',
    answer: '네, 타 통신사 고객도 이용 가능합니다. 다만, 서비스 신청 시 LG유플러스 계정이 필요합니다. 상담원을 통해 쉽게 가입하실 수 있습니다.'
  },
  {
    question: '[AI비즈콜] 기존 LG U+ 기업 전화를 사용 중인데, 추가로 가입해야 하나요?',
    answer: '네. AI비즈콜은 별도의 서비스입니다. 기존 기업전화 서비스에 추가로 가입하시면 됩니다. 기존 고객은 할인 혜택을 받으실 수 있으니 상담원에게 문의해주세요.'
  },
  {
    question: '[AI비즈콜] 회사에 사무실 전화가 없는데, 신청 가능한가요?',
    answer: '가능합니다. 신규로 기업 전화번호를 발급받아 서비스를 이용하실 수 있습니다. 신청 시 원하는 번호 선택도 가능하며, 기존에 사용하던 번호가 있다면, 번호이동을 통해 AI 비즈콜에서 계속 사용하실 수 있습니다.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            자주 묻는 질문
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI 비즈콜 서비스에 대해 자주 묻는 질문과 답변을 확인하세요.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={`faq-${index}`}
              className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-[#343959]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#c0339e]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#343959]" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 mb-4">
            더 궁금한 점이 있으신가요?
          </p>
          <a href="#" className="btn-secondary inline-flex">
            문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
