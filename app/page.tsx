import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
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
          <Link href="/mentorship" className="text-gray-700 hover:text-teal-500 transition-colors">
            指导服务
          </Link>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6" asChild>
            <Link href="/contact">打个招呼</Link>
          </Button>
        </nav>
      </header>

      {/* 英雄区域 */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">设计师，前端开发者 & 导师</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          我设计并编写优美简洁的作品，我热爱我所做的一切。
        </p>
        <div className="relative w-40 h-40 mx-auto mb-16">
          <Image
            src="/hero.png?height=160&width=160"
            alt="个人头像"
            width={160}
            height={160}
            className="rounded-full bg-teal-500"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
          <Image
            src="/placeholder.png?height=300&width=800"
            alt="工作区插图"
            width={800}
            height={300}
            className="w-full h-auto"
          />
        </div>
      {/* 个人介绍区域 */}
      <section className="bg-teal-500 text-white py-20 text-center pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">你好，我是Matt。很高兴见到你。</h1>
            <h2 className="text-lg md:text-xl font-normal leading-relaxed">
              自从12年前开始我的自由设计师之旅以来，我已经为代理机构进行远程工作，为初创公司提供咨询，
              并与有才华的人合作，为企业和消费者创造数字产品。我低调自信，天生好奇，永远在努力提高我的技能。
            </h2>
          </div>
        </div>
      </section>

      {/* 技能展示 */}
      <section>
          <div className="max-w-6xl mx-auto -mt-20">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* 设计师卡片 */}
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">设计师</h3>
                  <p className="text-gray-600 mb-6">我重视简单的内容结构、干净的设计模式和周到的交互。</p>
                  
                  <p className="text-teal-500 font-medium mb-2">我喜欢设计的内容：</p>
                  <p className="text-gray-700 mb-4">UX, UI, 网页, 应用, 标志</p>
                  
                  <p className="text-teal-500 font-medium mb-2">设计工具：</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>Affinity Designer</li>
                    <li>Figma</li>
                    <li>纸笔</li>
                    <li>Sketch</li>
                  </ul>
                </div>

                {/* 前端开发者卡片 */}
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 3v3.4L12 10l4-3.6V3h4v18h-4v-2.6L12 14l-4 3.4V20H4V3h4z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">前端开发者</h3>
                  <p className="text-gray-600 mb-6">我喜欢从零开始编写代码，并享受在浏览器中将想法变为现实。</p>
                  
                  <p className="text-teal-500 font-medium mb-2">我使用的语言：</p>
                  <p className="text-gray-700 mb-4">HTML, Pug, Slim, CSS, Sass, Git</p>
                  
                  <p className="text-teal-500 font-medium mb-2">开发工具：</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>Astro JS</li>
                    <li>Bitbucket</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>Github</li>
                    <li>Netlify</li>
                    <li>Tailwind CSS</li>
                    <li>VS Code</li>
                  </ul>
                </div>

                {/* 导师卡片 */}
                <div className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">导师</h3>
                  <p className="text-gray-600 mb-6">我真诚地关心他人，并享受帮助他们提升自己的技艺。</p>
                  
                  <p className="text-teal-500 font-medium mb-2">我的经验来源：</p>
                  <p className="text-gray-700 mb-4">UX/UI, 产品设计, 自由职业</p>
                  
                  <p className="text-teal-500 font-medium mb-2">导师统计：</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>9+ 年经验</li>
                    <li>30+ 短期课程</li>
                    <li>65+ 训练营</li>
                    <li>250+ 学生</li>
                    <li>2,500+ 指导会话</li>
                    <li>60+ 小组评审</li>
                    <li>18,000+ 反馈</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
      </section>

      {/* 我的项目 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我的最新项目</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              这里是我最近完成的一些项目。想了解更多？
              <Link href="#" className="text-teal-500 hover:underline ml-1">
                给我发邮件
              </Link>
              。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 项目卡片 1-6 */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200">
                  <Image
                    src={`/placeholder.svg?height=192&width=384&text=项目${i + 1}`}
                    alt={`项目 ${i + 1}`}
                    width={384}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">项目 {i + 1}</h3>
                  <p className="text-gray-600 mb-4">一个很棒的项目描述放在这里。</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">Tailwind</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 我的客户 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我曾与谁合作</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">我很幸运能与这些出色的公司合作。</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* 客户标志 1-8 */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-400">客户 {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">开始一个项目</h2>
              <p className="text-xl text-gray-600 mb-8">对我的服务感兴趣吗？我们可以安排一次通话来讨论您的项目需求。</p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-6 text-lg">
                给我发消息
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
