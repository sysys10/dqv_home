export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm px-4 py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap">
        {/* 왼쪽 텍스트 + 링크 */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <p>
            DAQUV &nbsp;&nbsp;|&nbsp;&nbsp; 서울 영등포구 양산로220 KnK디지털타워 802호 &nbsp;&nbsp;|&nbsp;&nbsp;
            대표이사 윤예지 &nbsp;&nbsp;|&nbsp;&nbsp; 사업자등록번호 763-87-02018
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="underline">
              이용약관
            </a>
            <a href="#" className="underline">
              개인정보처리방침
            </a>
          </div>
        </div>

        {/* 오른쪽 SNS 아이콘 */}
        <div className="flex space-x-3 items-center mt-4 md:mt-0">
          <a href="#">
            <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="/icons/blog.png" alt="Blog" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="/icons/youtube.png" alt="YouTube" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
