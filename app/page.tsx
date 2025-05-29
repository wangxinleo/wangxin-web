import Header, { type HeaderProps } from "@/components/home/Header";
import Footer, { type FooterProps } from "@/components/home/Footer";
import HeroSection, { type HeroSectionProps } from "@/components/home/HeroSection";
import AboutSection, { type AboutSectionProps } from "@/components/home/AboutSection";
import SkillsSection, { type SkillsSectionProps } from "@/components/home/SkillsSection";
import ProjectsSection, { type ProjectsSectionProps } from "@/components/home/ProjectsSection";
import ClientsSection, { type ClientsSectionProps } from "@/components/home/ClientsSection";
import ContactSection, { type ContactSectionProps } from "@/components/home/ContactSection";

export default function Home() {
  const headerData: HeaderProps = {
    logoText: "L5Code",
    mentorshipLinkText: "Mentorship",
    mentorshipLinkHref: "/mentorship",
    contactButtonText: "Say Hello",
    contactButtonHref: "/contact",
  };

  const footerData: FooterProps = {
    logoText: "L5Code",
    twitterLink: "#",
    githubLink: "#",
    linkedinLink: "#",
    instagramLink: "#",
    copyrightText: "Copyright © 2025 wangxinleo",
  };

  const heroSectionData: HeroSectionProps = {
    title: "设计师，前端开发者 & 导师",
    subtitle: "我设计并编写优美简洁的作品，我热爱我所做的一切。",
    imageSrc: "/hero.png",
    imageAlt: "个人头像",
    imageWidth: 240,
    imageHeight: 240,
  };

  const aboutSectionData: AboutSectionProps = {
    mainImageSrc: "/placeholder.png?height=300&width=800",
    mainImageAlt: "工作区插图",
    mainImageWidth: 800,
    mainImageHeight: 300,
    title: "你好，我是王鑫。很高兴见到你。",
    description: "自从7年前开始我的自由设计师之旅以来，我已经为代理机构进行远程工作，为初创公司提供咨询，并与有才华的人合作，为企业和消费者创造数字产品。我低调自信，天生好奇，永远在努力提高我的技能。",
  };

  const skillsSectionData: SkillsSectionProps = {
    cards: [
      {
        iconSvgPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
        title: "设计师",
        description: "我重视简单的内容结构、干净的设计模式和周到的交互。",
        skillsTitle: "我喜欢设计的内容：",
        skills: ["UX", "UI", "网页", "应用", "标志"],
        toolsTitle: "设计工具：",
        tools: ["Affinity Designer", "Figma", "纸笔", "Sketch"],
      },
      {
        iconSvgPath: "M8 3v3.4L12 10l4-3.6V3h4v18h-4v-2.6L12 14l-4 3.4V20H4V3h4z",
        title: "前端开发者",
        description: "我喜欢从零开始编写代码，并享受在浏览器中将想法变为现实。",
        skillsTitle: "我使用的语言：",
        skills: ["HTML", "Pug", "Slim", "CSS", "Sass", "Git"],
        toolsTitle: "开发工具：",
        tools: ["Astro JS", "Bitbucket", "Bootstrap", "Bulma", "Github", "Netlify", "Tailwind CSS", "VS Code"],
      },
      {
        iconSvgPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
        title: "导师",
        description: "我真诚地关心他人，并享受帮助他们提升自己的技艺。",
        skillsTitle: "我的经验来源：",
        skills: ["UX/UI", "产品设计", "自由职业"],
        toolsTitle: "导师统计：",
        tools: ["9+ 年经验", "30+ 短期课程", "65+ 训练营", "250+ 学生", "2,500+ 指导会话", "60+ 小组评审", "18,000+ 反馈"],
      },
    ],
  };

  const projectsSectionData: ProjectsSectionProps = {
    title: "我的最新项目",
    subtitle: "这里是我最近完成的一些项目。想了解更多？",
    emailLinkText: "给我发邮件",
    emailLinkHref: "mailto:example@example.com",
    projects: Array.from({ length: 6 }).map((_, i) => ({
      imageSrc: `/placeholder.svg?height=192&width=384&text=项目${i + 1}`,
      imageAlt: `项目 ${i + 1}`,
      title: `项目 ${i + 1}`,
      description: "一个很棒的项目描述放在这里。",
      tags: ["React", "Next.js", "Tailwind"],
    })),
  };

  const clientsSectionData: ClientsSectionProps = {
    title: "我曾与谁合作",
    subtitle: "我很幸运能与这些出色的公司合作。",
    clients: Array.from({ length: 8 }).map((_, i) => ({ name: `客户 ${i + 1}` })),
  };

  const contactSectionData: ContactSectionProps = {
    title: "开始一个项目",
    subtitle: "对我的服务感兴趣吗？我们可以安排一次通话来讨论您的项目需求。",
    buttonText: "给我发消息",
    buttonLink: "mailto:your.email@example.com",
  };

  return (
    <div className="min-h-screen bg-white">
      <Header {...headerData} />
      <main>
        <HeroSection {...heroSectionData} />
        <AboutSection {...aboutSectionData} />
        <SkillsSection {...skillsSectionData} />
        <ProjectsSection {...projectsSectionData} />
        <ClientsSection {...clientsSectionData} />
        <ContactSection {...contactSectionData} />
      </main>
      <Footer {...footerData} />
    </div>
  );
}
