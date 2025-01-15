'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここでフォームの送信処理を実装します
    console.log('Form submitted:', { name, email, message })
    // フォームをリセット
    setName('')
    setEmail('')
    setMessage('')
    setSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8 text-black"
      >
        お問い合わせ
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <p className="text-gray-700 mb-4">
          製品に関するお問い合わせ、カスタムオーダーのご相談、その他ご質問などがございましたら、
          以下のフォームよりお気軽にお問い合わせください。
        </p>
        <p className="text-gray-700 mb-4">
          通常、お問い合わせから2営業日以内にご返答いたします。
        </p>
      </motion.div>
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">送信完了！</strong>
          <span className="block sm:inline"> お問い合わせありがとうございます。近日中にご連絡いたします。</span>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              お名前
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              メッセージ
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            送信
          </button>
        </motion.form>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl mx-auto mt-12 bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4 text-black">お問い合わせ先</h2>
        <p className="text-gray-700 mb-2">株式会社exceed</p>
        <p className="text-gray-700 mb-2">〒123-4567 東京都〇〇区××町1-2-3</p>
        <p className="text-gray-700 mb-2">TEL: 03-1234-5678</p>
        <p className="text-gray-700 mb-2">Email: info@exceed-fishing.com</p>
        <p className="text-gray-700 mb-2">営業時間: 平日 9:00 - 18:00</p>
      </motion.div>
    </div>
  )
}

