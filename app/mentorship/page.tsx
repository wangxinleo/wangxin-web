import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Mentorship() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-md bg-teal-500 flex items-center justify-center text-white font-bold text-xl">
              LC
            </div>
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/mentorship" className="text-teal-500 font-medium">
            工程指导
          </Link>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6" asChild>
            <Link href="/contact">打个招呼</Link>
          </Button>
        </nav>
      </header>

      {/* 英雄区域 */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">加速你的技术成长与工程实践</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">无论你是寻求职业突破的工程师，还是致力于提升团队效能的技术管理者，我都能为你提供实战经验和战略指导。</p>
        <div className="relative max-w-2xl mx-auto mb-16">
          <Image
            src="/placeholder.svg?height=300&width=600&text=工程指导插图"
            alt="工程指导插图"
            width={600}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* 主要内容区域 */}
      <section className="bg-teal-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">在技术浪潮中保持领先并非易事。</h2>
            <p className="text-xl mb-8">
              层出不穷的新框架、不断演进的架构理念、以及AI带来的颠覆性变革，都让技术之路充满挑战。
              我也曾面临同样的困惑与瓶颈。
              现在，我希望将我的实战经验分享出来，无论你是刚起步的工程师，还是寻求突破的管理者，我都能助你一臂之力。
            </p>
          </div>
        </div>
      </section>

      {/* 指导服务详情 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">我能提供的价值</h2>

            <div className="space-y-12">
              {/* 服务项目 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 h-8 w-8">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">技术领袖成长路径</h3>
                  <p className="text-gray-600">
                    面向有志成为技术经理、架构师或团队负责人的工程师，提供关于团队管理、敏捷转型、技术选型和职业发展的实战建议。
                  </p>
                </div>
              </div>

              {/* 服务项目 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 h-8 w-8">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">架构与代码评审</h3>
                  <p className="text-gray-600">
                    提供基于领域驱动设计（DDD）、CI/CD优化和“质量左移”理念的深度代码和架构评审，帮助你的项目识别性能瓶颈、提升代码质量并增强系统稳定性。
                  </p>
                </div>
              </div>

              {/* 服务项目 3 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 h-8 w-8">
                      <path d="M12 8V4H8"></path>
                      <rect x="4" y="12" width="8" height="8" rx="2"></rect>
                      <path d="M8 4H4v4"></path>
                      <path d="m16 4 3 3h-3V4Z"></path>
                      <path d="M16 10h4v4"></path>
                      <path d="M20 14v6-6Z"></path>
                      <path d="M16 20h4v-4"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI工程化与效能提升</h3>
                  <p className="text-gray-600">
                    指导你或你的团队如何将LLM等AI能力融入研发全生命周期，分享构建AI智能体、优化DevOps流程、建立数据度量体系（如DORA）的实战经验。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 指导流程 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">指导流程</h2>

            <div className="space-y-12">
              {/* 流程步骤 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">初次联系</h3>
                  <p className="text-gray-600">通过邮件联系我，简单介绍你自己和你的需求，我们可以确定是否能够合作。</p>
                </div>
              </div>

              {/* 流程步骤 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                {/* 价值证明 */}
                <section className="bg-white py-20">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                      <h2 className="text-3xl font-bold text-gray-900 mb-12">过往成就与价值证明</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* 成就 1 */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-4xl font-bold text-teal-500 mb-2">56.5%</h3>
                          <p className="text-gray-600">将需求平均交付周期从97天锐减至42天，效率提升超56%。</p>
                        </div>
                        {/* 成就 2 */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-4xl font-bold text-teal-500 mb-2">16x</h3>
                          <p className="text-gray-600">通过平台无关的编排设计，将新项目接入CI/CD的效率提升16倍。</p>
                        </div>
                        {/* 成就 3 */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-4xl font-bold text-teal-500 mb-2">2k Stars</h3>
                          <p className="text-gray-600">主导的开源项目在GitHub上获得近2000个Star，具备广泛的社区影响力。</p>
                        </div>
                        {/* 成就 4 */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-4xl font-bold text-teal-500 mb-2">从0到1</h3>
                          <p className="text-gray-600">主导设计并实现企业级AI智能助理平台，解决数据安全与合规风险。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">制定计划</h3>
                  <p className="text-gray-600">我们将一起讨论你的目标和期望，制定一个适合你的个性化指导计划。</p>
                </div>
              </div>

              {/* 流程步骤 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">定期会议</h3>
                  <p className="text-gray-600">
                    我们将通过视频通话进行定期会议，讨论你的进展，解答问题，并提供反馈和建议。
                  </p>
                </div>
              </div>

              {/* 流程步骤 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">持续支持</h3>
                  <p className="text-gray-600">在会议之外，你可以通过邮件或即时消息与我联系，获取额外的支持和建议。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">准备好开始了吗？</h2>
              <p className="text-xl text-gray-600 mb-8">
                如果你对我的指导服务感兴趣，请发送邮件至{" "}
                <span className="text-teal-500 font-medium">wangxin_leo@126.com</span> 与我联系。
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-6 text-lg">
                发送邮件
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-teal-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center text-teal-500 font-bold text-xl mb-6">
              LC
            </div>
            <div className="flex gap-6 mb-8">
              <Link href="#" className="hover:text-teal-200 transition-colors">
                Twitter
              </Link>
              <Link href="https://github.com/wangxinleo" className="hover:text-teal-200 transition-colors">
                GitHub
              </Link>
              <Link href="#" className="hover:text-teal-200 transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="hover:text-teal-200 transition-colors">
                Instagram
              </Link>
            </div>
            <p className="text-teal-100">© 2025 Wang Xin (Leo) · All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
