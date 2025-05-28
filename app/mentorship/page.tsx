import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
            指导服务
          </Link>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6" asChild>
            <Link href="/contact">打个招呼</Link>
          </Button>
        </nav>
      </header>

      {/* 英雄区域 */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">我们还未曾相识，这听起来有点疯狂...</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">但如果你需要一位导师，不妨给我发封邮件试试。</p>
        <div className="relative max-w-2xl mx-auto mb-16">
          <Image
            src="/placeholder.svg?height=300&width=600&text=指导服务插图"
            alt="指导服务插图"
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
            <h2 className="text-3xl font-bold mb-6">成为一名设计师并不容易。</h2>
            <p className="text-xl mb-8">
              似乎每天都有新的设计趋势需要学习，新的工具需要掌握，以及无尽的文章需要阅读。
              老实说，这可能会让人感到不知所措和畏惧。我深有体会，因为我也曾经历过这些。
              所以，无论你是刚入行的新人，还是只是寻求一些指导和支持，我都可以帮助你。
            </p>
          </div>
        </div>
      </section>

      {/* 指导服务详情 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">我能如何帮助你</h2>

            <div className="space-y-12">
              {/* 服务项目 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-500"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">职业建议</h3>
                  <p className="text-gray-600">
                    无论你是刚开始你的设计之旅，还是想提升到下一个级别，我都可以提供关于作品集、面试准备和职业发展的建议。
                  </p>
                </div>
              </div>

              {/* 服务项目 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">设计评审</h3>
                  <p className="text-gray-600">
                    我可以对你的设计作品提供专业的反馈和建议，帮助你发现潜在问题并提出改进方案，让你的设计更加出色。
                  </p>
                </div>
              </div>

              {/* 服务项目 3 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-500"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">技能提升</h3>
                  <p className="text-gray-600">
                    我可以帮助你学习新的设计工具和技术，掌握最新的设计趋势和最佳实践，提升你的设计技能和知识。
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
                <span className="text-teal-500 font-medium">contact@example.com</span> 与我联系。
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
              <Link href="#" className="hover:text-teal-200 transition-colors">
                GitHub
              </Link>
              <Link href="#" className="hover:text-teal-200 transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="hover:text-teal-200 transition-colors">
                Instagram
              </Link>
            </div>
            <p className="text-teal-100">手工制作 © 2023 李创 · 保留所有权利</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
