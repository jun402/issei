'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const products = [
  { 
    id: 1, 
    name: 'bdtail ワーム Aタイプ', 
    description: '水中での自然な動きを再現した革新的なワーム。特殊な素材と形状により、魚の興味を引き付けます。',
    features: ['高い耐久性', '自然な動き', '多様なカラーバリエーション']
  },
  { 
    id: 2, 
    name: 'bdtail ワーム Bタイプ', 
    description: '深場での使用に適した重量バランスのワーム。沈み具合と動きのバランスが絶妙です。',
    features: ['深場対応', '長時間の使用が可能', 'ソフトな食感']
  },
  { 
    id: 3, 
    name: 'bdtail ジグヘッド', 
    description: 'bdtailワームとの相性抜群のジグヘッド。様々な状況に対応できる多機能設計。',
    features: ['軽量設計', '強力フック', '多様なサイズ展開']
  },
  { 
    id: 4, 
    name: 'bdtail ロッド', 
    description: 'bdtailワームの特性を最大限に引き出すための専用ロッド。感度と操作性を両立。',
    features: ['高感度', '軽量', 'コンパクト設計']
  },
]

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8 text-black"
      >
        商品紹介
      </motion.h1>
      <p className="text-center text-gray-700 mb-8">
        exceedの独自ブランド「bdtail」は、革新的な設計と高品質な素材で、
        あなたの釣りの体験を一段と向上させます。
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src="/placeholder.svg"
              alt={product.name}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-black">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <h3 className="text-lg font-semibold mb-2 text-black">特徴</h3>
              <ul className="list-disc list-inside text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-black">カスタムオーダー</h2>
        <p className="text-gray-700 mb-4">
          お客様のニーズに合わせたカスタム製品も承っております。
          詳細については、お問い合わせページよりご連絡ください。
        </p>
      </motion.div>
    </div>
  )
}

