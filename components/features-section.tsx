import { Phone, MessageSquare, FileText, Clock, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: <Phone className="feature-icon" />,
    title: '사무실/휴대폰',
    description: '사무실 전화번호로 휴대폰에서 통화할 수 있습니다.',
  },
  {
    icon: <MessageSquare className="feature-icon" />,
    title: '통화기록/메모',
    description: '통화내용을 텍스트로 변환하고 요약합니다.',
  },
  {
    icon: <FileText className="feature-icon" />,
    title: '업무/회의',
    description: 'AI 기술로 회의 내용을 기록하고 의사결정을 지원합니다.',
  },
  {
    icon: <Clock className="feature-icon" />,
    title: '시간/비용',
    description: '통화내용 기록 자동화로 업무 시간과 비용을 절감합니다.',
  },
  {
    icon: <Users className="feature-icon" />,
    title: '협업',
    description: '통화 내용을 팀원들과 쉽게 공유하고 협업할 수 있습니다.',
  },
  {
    icon: <Shield className="feature-icon" />,
    title: '보안',
    description: '개인정보 보호와 통신 보안을 강화합니다.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block relative">
            AI 비즈콜이란?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#c0339e]/20"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            휴대폰과 사무실 전화의 스마트한 연결, 통화 기록 자동화로 업무 효율을 높이는 AI 기반 비즈니스 통화 솔루션입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              {feature.icon}
              <h3 className="text-xl font-semibold text-[#343959] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
