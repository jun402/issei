'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8 text-black"
      >
        exceed釣り具専門店へようこそ
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8 items-center mb-12"
      >
        <div>
          <Image
            src="/placeholder.svg"
            alt="釣り具イメージ"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-black">高品質な釣り具と独自ブランド</h2>
          <p className="text-gray-700 mb-4">
            exceedは、釣り愛好家の皆様に最高品質の釣り具をお届けします。
            私たちの独自ブランド「bdtail」は、革新的なデザインと優れた性能で、
            あなたの釣りの体験を一段と向上させます。
          </p>
          <Link href="/products" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            商品を見る
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4 text-black">最新情報</h2>
        <ul className="space-y-4">
          <li>
            <span className="text-blue-600 font-semibold">2023年6月1日</span>
            <p className="text-gray-700">新商品「bdtail ワーム Cタイプ」発売開始！</p>
          </li>
          <li>
            <span className="text-blue-600 font-semibold">2023年5月15日</span>
            <p className="text-gray-700">夏季限定キャンペーン実施中！全商品10%オフ</p>
          </li>
          <li>
            <span className="text-blue-600 font-semibold">2023年5月1日</span>
            <p className="text-gray-700">釣りテクニック講座の参加者募集開始</p>
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-black">お客様の声</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 mb-4">「bdtailのワームで大物が釣れました！本当に使いやすくて、魚の食いつきも良いです。」</p>
            <p className="font-semibold">- 田中さん</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 mb-4">「スタッフの方の親切な対応に感謝しています。初心者の私にも丁寧に説明してくれました。」</p>
            <p className="font-semibold">- 佐藤さん</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 mb-4">「品揃えが豊富で、いつも欲しい商品が見つかります。これからも利用させていただきます。」</p>
            <p className="font-semibold">- 鈴木さん</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

