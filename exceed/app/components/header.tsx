'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-400">ex</span>ceed
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-blue-300 transition-colors">ホーム</Link>
          <Link href="/about" className="hover:text-blue-300 transition-colors">会社紹介</Link>
          <Link href="/products" className="hover:text-blue-300 transition-colors">商品紹介</Link>
          <Link href="/contact" className="hover:text-blue-300 transition-colors">お問い合わせ</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 space-y-2"
        >
          <Link href="/" className="block hover:text-blue-300 transition-colors">ホーム</Link>
          <Link href="/about" className="block hover:text-blue-300 transition-colors">会社紹介</Link>
          <Link href="/products" className="block hover:text-blue-300 transition-colors">商品紹介</Link>
          <Link href="/contact" className="block hover:text-blue-300 transition-colors">お問い合わせ</Link>
        </motion.nav>
      )}
    </header>
  )
}

export default Header

