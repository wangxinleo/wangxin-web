"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 模拟表单提交
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "消息已发送",
      description: "感谢您的留言，我会尽快回复您。",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 导航栏 */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-md bg-teal-500 flex items-center justify-center text-white font-bold text-xl">
              LC
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-500 hover:text-teal-500">
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
              className="lucide lucide-undo-2"
            >
              <path d="M9 14 4 9l5-5" />
              <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
            </svg>
          </Link>
          <Link href="/" className="text-gray-500 hover:text-teal-500">
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
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* 头像 */}
        <div className="w-20 h-20 rounded-full bg-teal-500 mb-8 overflow-hidden">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="个人头像"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 标题 */}
        <div className="text-center max-w-2xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">感谢您抽出时间联系我。</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">今天我能为您做些什么？</h2>
        </div>

        {/* 联系表单 */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                姓名
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                邮箱
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              留言
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full px-12 py-6 border-2 border-teal-500 bg-transparent text-teal-500 hover:bg-teal-50 font-medium text-lg"
            >
              {isSubmitting ? "提交中..." : "提交"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
