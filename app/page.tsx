import Header, { type HeaderProps } from "@/components/home/Header";
import Footer, { type FooterProps } from "@/components/home/Footer";
import HeroSection, { type HeroSectionProps } from "@/components/home/HeroSection";
import AboutSection, { type AboutSectionProps } from "@/components/home/AboutSection";
import SkillsSection, { type SkillsSectionProps } from "@/components/home/SkillsSection";
import ProjectsSection, { type ProjectsSectionProps } from "@/components/home/ProjectsSection";
import AchievementsSection, { type AchievementsSectionProps } from "@/components/home/AchievementsSection";
import ContactSection, { type ContactSectionProps } from "@/components/home/ContactSection";

export default function Home() {
  const headerData: HeaderProps = {
    logoText: "wangxinleo",
    mentorshipLinkText: "开源项目",
    mentorshipLinkHref: "https://github.com/wangxinleo",
    contactButtonText: "联系我",
    contactButtonHref: "mailto:wangxin_leo@126.com",
  };

  const footerData: FooterProps = {
    logoText: "wangxinleo",
    twitterLink: "#",
    githubLink: "https://github.com/wangxinleo",
    linkedinLink: "#",
    instagramLink: "#",
    copyrightText: "Copyright © 2025 wangxinleo",
  };

  const heroSectionData: HeroSectionProps = {
    title: "AI效能架构师 & 技术领导者",
    subtitle: "我致力于将AI融入软件开发全生命周期，构筑“智能体驱动的研发新范式”，实现研发模式从“自动化”至“自主化”的跃迁。",
    imageSrc: "/hero.png",
    imageAlt: "wangxinleo",
    imageWidth: 240,
    imageHeight: 240,
  };

  const aboutSectionData: AboutSectionProps = {
    mainImageSrc: "/placeholder.png?height=300&width=800",
    mainImageAlt: "工作区插图",
    mainImageWidth: 800,
    mainImageHeight: 300,
    title: "你好，很高兴在这里与你相遇。",
    description: "拥有7年从业经验，我从一名全栈工程师成长为技术领导者，专注于通过AI与DevOps提升研发效能。我热衷于领导跨职能团队，在大型企业环境中攻克复杂的技术挑战，并主导实施从“自动化”到“自主化”的研发模式变革。我坚信技术的核心价值在于驱动业务创新与效率革命。",
  };

  const skillsSectionData: SkillsSectionProps = {
    cards: [
      {
        iconSvgPath: "M15.5,12c2.5,0,4.5-2,4.5-4.5S18,3,15.5,3S11,5,11,7.5S13,12,15.5,12z M15.5,5c1.4,0,2.5,1.1,2.5,2.5S16.9,10,15.5,10S13,8.9,13,7.5S14.1,5,15.5,5z M8.5,12c2.5,0,4.5-2,4.5-4.5S11,3,8.5,3S4,5,4,7.5S6,12,8.5,12z M8.5,5C9.9,5,11,6.1,11,7.5S9.9,10,8.5,10S6,8.9,6,7.5S7.1,5,8.5,5z M15.5,14c-1.8,0-3.4,0.8-4.5,2c-1.1-1.2-2.7-2-4.5-2C3.8,14,2,15.8,2,18v3h12v-3c0-2.2,1.8-4,4-4h2v-2h-2.5C17.3,14,16.4,14,15.5,14z M4,18c0-1.1,0.9-2,2.5-2s2.5,0.9,2.5,2v1H4V18z M15.5,16c1.1,0,2,0.9,2,2v1h-4v-1C13.5,16.9,14.4,16,15.5,16z",
        title: "AI工程与效能优化",
        description: "精通LLM应用架构设计，擅长将AI融入软件开发全生命周期，并通过数据度量体系驱动研发效能持续提升。",
        skillsTitle: "核心能力:",
        skills: ["LLM应用与集成", "AI驱动开发", "数据驱动决策"],
        toolsTitle: "实践平台/工具:",
        tools: ["Dify", "n8n", "Python", "DORA指标"],
      },
      {
        iconSvgPath: "M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 17H4V8h16v13z",
        title: "全栈技术与架构设计",
        description: "熟悉现代前端工程化与Node.js后端服务，掌握领域驱动设计理念，在复杂SPA与跨平台应用领域有丰富实践。",
        skillsTitle: "技术栈:",
        skills: ["Vue/React/Angular", "Node.js (Koa/Express)", "Electron", "GraphQL"],
        toolsTitle: "架构理念:",
        tools: ["领域驱动设计(DDD)", "零信任安全", "原子化更新", "BFF"],
      },
      {
        iconSvgPath: "M13.5 5.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 7.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm10 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM18 13H6c-1.1 0-2 .9-2 2v3h16v-3c0-1.1-.9-2-2-2z",
        title: "DevOps与自动化",
        description: "擅长将AI智能体与CI/CD流水线深度融合，实现自主调度与风险熔断，并通过标准化设计将新项目接入效率提升16倍。",
        skillsTitle: "核心能力:",
        skills: ["AI融合CI/CD", "自主化流水线", "容器化部署"],
        toolsTitle: "实践平台/工具:",
        tools: ["Docker", "GitLab API", "蓝鲸CI", "Shell/Python"],
      },
      {
        iconSvgPath: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
        title: "技术领导与项目管理",
        description: "持有PMP认证，具备领导16人以上跨职能团队经验，擅长推行敏捷实践，并通过开源社区协作扩大技术影响力。",
        skillsTitle: "核心能力:",
        skills: ["16人+团队管理", "敏捷转型 (Scrum/Kanban)", "质量左移"],
        toolsTitle: "专业认证/成就:",
        tools: ["PMP", "敏捷教练", "开源项目(近2k Star)"],
      },
    ],
  };

  const projectsSectionData: ProjectsSectionProps = {
    title: "我的核心项目",
    subtitle: "这里是我近期主导设计和实现的一些项目。想了解更多？",
    emailLinkText: "给我发邮件",
    emailLinkHref: "mailto:wangxin_leo@126.com",
    projects: [
      {
        imageSrc: `/placeholder.svg?height=192&width=384&text=企业级AI智能助理`,
        imageAlt: `企业级AI智能助理平台`,
        title: `企业级AI智能助理平台（桌面端）`,
        description: "从0到1主导设计，为企业构建安全、可控、可扩展的桌面端AI工作入口，解决公有大模型的数据安全与合规风险。",
        tags: ["Electron", "Vue3", "Node.js", "LLM", "Dify"],
      },
      {
        imageSrc: `/placeholder.svg?height=192&width=384&text=自主化DevOps体系`,
        imageAlt: `自主化DevOps体系`,
        title: `AI智能体驱动的自主化DevOps体系`,
        description: "将传统CI/CD流程从“自动化”升级为“自主化”，通过AI智能体实现流水线自主调度、质量保障与发布风险熔断。",
        tags: ["AI Agent", "CI/CD", "Python", "Docker", "GitLab API"],
      },
      {
        imageSrc: `/placeholder.svg?height=192&width=384&text=微信推送服务`,
        imageAlt: `定制化微信推送服务`,
        title: `定制化微信推送服务 (1.6k+ Stars)`,
        description: "广受欢迎的开源微信推送服务平台，支持多渠道、可编排、自定义模板的消息推送，并通过社区协作持续迭代。",
        tags: ["Node.js", "Redis", "Docker", "GitHub Actions", "开源"],
      },
    ],
  };

  const achievementsSectionData: AchievementsSectionProps = {
    title: "核心价值与成就",
    subtitle: "我专注于通过技术与数据驱动业务增长，以下是我在关键领域取得的一些量化成果。",
    achievements: [
      {
        value: "56.5%",
        description: "将需求平均交付周期从97.95天锐减至42.59天",
        iconSvgPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z M11 8h2v3h-2zm0 5h2v2h-2zm-5-5h2v5H6z",
      },
      {
        value: "16x",
        description: "通过标准化设计将新项目接入CI/CD体系的效率提升16倍",
        iconSvgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
      },
      {
        value: "60%",
        description: "引入AI代码审查助手，在提测前拦截60%的设计类缺陷",
        iconSvgPath: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
      },
      {
        value: "1.6k+",
        description: "主导的开源项目在GitHub上获得超过1.6k Star",
        iconSvgPath: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
      },
    ],
  };

  const contactSectionData: ContactSectionProps = {
    title: "开启一次合作",
    subtitle: "对我的经验或项目感兴趣？我们可以安排一次沟通来深入交流。",
    buttonText: "给我发邮件",
    buttonLink: "mailto:wangxin_leo@126.com",
  };

  return (
    <div className="min-h-screen bg-white">
      <Header {...headerData} />
      <main>
        <HeroSection {...heroSectionData} />
        <AboutSection {...aboutSectionData} />
        <SkillsSection {...skillsSectionData} />
        <ProjectsSection {...projectsSectionData} />
        <AchievementsSection {...achievementsSectionData} />
        <ContactSection {...contactSectionData} />
      </main>
      <Footer {...footerData} />
    </div>
  );
}
