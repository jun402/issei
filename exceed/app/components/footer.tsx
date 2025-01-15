import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">exceed</h3>
          <p className="text-sm">高品質な釣り具と独自ブランドbdtailを提供する釣り具専門店</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">リンク</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-300 transition-colors">ホーム</Link></li>
            <li><Link href="/about" className="hover:text-blue-300 transition-colors">会社紹介</Link></li>
            <li><Link href="/products" className="hover:text-blue-300 transition-colors">商品紹介</Link></li>
            <li><Link href="/contact" className="hover:text-blue-300 transition-colors">お問い合わせ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
          <p className="text-sm">〒123-4567<br />東京都〇〇区××町1-2-3</p>
          <p className="text-sm mt-2">TEL: 03-1234-5678<br />Email: info@exceed-fishing.com</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2023 exceed. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

