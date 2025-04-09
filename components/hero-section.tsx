import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-10 lg:py-20 bg-gradient-to-r from-[#f8f9fb] to-[#f0f2f7]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center px-3 py-1 bg-[#c0339e]/10 text-[#c0339e] text-sm font-medium rounded-full">
              <span className="mr-1">AI 비즈니스 솔루션</span>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#343959] mb-6">
              AI <span className="text-[#c0339e]">비즈콜</span> by ixi
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              휴대폰과 사무실 전화의 스마트 연결로 통화 녹음, 통화 내용 텍스트화,
              음성 메모, 통화 요약 기능으로 업무 기록을 효율적으로 관리합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#" className="btn-primary flex items-center justify-center">
                서비스 신청하기
              </Link>
              <Link href="#" className="flex items-center justify-center text-[#343959] hover:text-[#c0339e]">
                <Play className="w-5 h-5 mr-2" /> 소개 영상 보기
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/tUTMJ45AlyU"
                    title="AI 비즈콜 소개 영상"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <h3 className="text-xl font-semibold text-[#343959] mb-2">AI 비즈콜이란?</h3>
                <p className="text-gray-600 text-sm">
                  사무실 전화와 휴대폰을 연동해 통화 녹음, 통화 내용 텍스트화, 음성 메모, 통화 요약 기능까지
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 z-[-1] w-32 h-32 rounded-full bg-[#c0339e]/10"></div>
              <div className="absolute -top-4 -left-4 z-[-1] w-24 h-24 rounded-full bg-[#58aec5]/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
