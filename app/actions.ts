"use server"

export async function submitContactForm(formData: FormData) {
  // 在实际应用中，这里会处理表单数据，例如发送电子邮件或保存到数据库
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // 模拟处理时间
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // 返回成功响应
  return {
    success: true,
    message: "感谢您的留言，我会尽快回复您。",
  }
}
