'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8 text-black"
      >
        会社紹介
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4 text-black">exceedについて</h2>
        <p className="text-gray-700 mb-4">
          exceedは、2010年に創業した釣り具専門店です。私たちは、釣り愛好家のために最高品質の釣り具を提供することを使命とし、
          長年の経験と専門知識を活かし、お客様のニーズに合った最適な製品を提供しています。
        </p>
        <p className="text-gray-700 mb-4">
          2015年には、独自ブランド「bdtail」を立ち上げ、革新的なデザインと高性能な製品で多くの釣り愛好家から支持を得ています。
          私たちは常に最新の技術と素材を研究し、より良い製品の開発に努めています。
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8 mb-8"
      >
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">私たちの特徴</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>豊富な品揃えと専門知識</li>
            <li>独自ブランド「bdtail」の開発と販売</li>
            <li>お客様一人ひとりのニーズに合わせたサービス</li>
            <li>釣りコミュニティの支援と情報提供</li>
            <li>環境に配慮した製品開発と販売</li>
          </ul>
        </div>
        <div>
          <Image
            src="/placeholder.svg"
            alt="exceedスタッフ"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-2 text-black">私たちのビジョン</h3>
        <p className="text-gray-700 mb-4">
          exceedは、これからも釣り愛好家の皆様と共に成長し、より良い釣りの体験を提供し続けることを約束します。私たちは、持続可能な釣りの実践を推進し、次世代の釣り愛好家の育成にも力を入れています。
        </p>
        <p className="text-gray-700">
          私たちのゴールは、単に釣り具を販売するだけでなく、釣りを通じて人々に喜びと感動を提供し、自然との共生を促進することです。exceedは、これからも革新的な製品とサービスを通じて、釣りの世界に新たな価値を創造し続けます。
        </p>
      </motion.div>
    </div>
  )
}

