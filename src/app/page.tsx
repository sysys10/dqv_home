import TopNav from "@/components/layout/TopNav";
import ExampleFolder from "@/components/ui/ExampleFolder";
import InfoTab from "@/components/ui/InfoTab";
import SectionHeader from "@/components/ui/SectionHeader";
import TeamMember from "@/components/ui/TeamProfiles";
import VideoSection from "@/components/ui/VideoSection";
import { exampleFolders } from "@/constants/example.constant";
import { infoTabs, qv1advantage } from "@/constants/infotab.constant";
import { teamMembers } from "@/constants/teamMembers.constant";
import { dqvIntroVideoId } from "@/constants/video.constant";

export default function Home() {
  return (
    <div>
      <TopNav />
      <main className="w-full pt-28 max-w-4xl mx-auto pb-20">
        <SectionHeader
          title="SYSTEM to AGENT, 시스템의 에이전트화"
          subtitle={
            <>
              다큐브는 TEXT-to-SQL AI 에이전트를 연구/개발합니다. <br /> AI
              에이전트 개발의 핵심기술입니다. <br /> IT기업들과 협력하여
              시스템을 에이전트로 전환합니다.
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 px-4 md:px-10">
          {infoTabs.map((tab) => (
            <InfoTab key={tab.title} {...tab} />
          ))}
        </div>

        <div className="mt-32">
          <SectionHeader
            title="QV-1 큐비원 소개"
            subtitle={
              <>
                QV-1은 TEXT-to-SQL AI에이전트 플랫폼입니다. <br />
                관계형 데이터베이스의 데이터를 자연어로 검색하고, 분석하고,
                예측합니다. <br />
                QV-1을 활용하여 AI 에이전트 신상품을 개발하거나 기존 시스템을
                에이전트로 전환합니다.
              </>
            }
          />
          <VideoSection videoId={dqvIntroVideoId} />
        </div>

        <section className="mt-28">
          <SectionHeader
            title="QV-1 큐비원 특장점"
            subtitle={
              <>
                &quot;비용이 많이 든다.&quot; &quot;데이터 유출이
                걱정이다.&quot;
                <br />
                QV-1은 비용과 보안 걱정이 없는 보급형 AI 에이전트입니다.
              </>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 px-4 md:px-10">
            {qv1advantage.map((advantage) => (
              <InfoTab key={advantage.title} {...advantage} />
            ))}
          </div>
        </section>

        <section className="mt-24" id="customer-cases">
          <SectionHeader
            title="QV-1 적용 에이전트 구축 사례"
            subtitle="IT기업들과 협력하여 AI 에이전트 전환/개발 사업을 추진하고 있습니다"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16 mt-12">
            {exampleFolders.map((folder, index) => (
              <ExampleFolder key={`${folder.name}-${index}`} {...folder} />
            ))}
          </div>
        </section>

        <div className="mt-24">
          <SectionHeader title="구성 멤버" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
