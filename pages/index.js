import Image from "next/image";
import Link from "next/link";
import cntextbook from "../public/cntextbook-logo.png"

export default function Home() {
  return (
    <div>
      <div className=" h-screen flex bg-black">
        <div className="mx-auto my-auto text-6xl font-bold text-white">
          Team Moveto
        </div>
      </div>
      <div className=" flex p-4 bg-slate-50 flex-col items-center">
        <div className="text-3xl font-bold">Products</div>
        <div className="flex flex-col p-4">
          <div className=" rounded-lg shadow-xl p-4 flex">
            <Image src={cntextbook} className="w-24 h-24 m-auto rounded-2xl" alt="cntextbook"/>
            <div className="ml-4 flex flex-col">
              <div className="text-xl font-semibold mb-2">CN교과서</div>
              <div>충남삼성고등학교 시험 대비를 위한 모바일 전용 교과서</div>
              <Link href="https://cntextbook.moveto.kr" className="bg-orange-400 p-1 px-2 text-white hover:bg-orange-500 mt-2 rounded-lg text-center hover:ring-2 hover:ring-orange-500 hover:ring-offset-1 transition duration-300">
                더 자세한 정보
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 flex flex-col items-center p-4">
        <div className="text-3xl font-bold">Contacts</div>
        <div className="grid grid-cols-1 lg:grid-cols-2  w-full">
          <div className="flex p-2  rounded-lg my-2 items-center justify-between shadow-xl bg-white">
            <div className="text-xl font-semibold mr-4 ml-2">E-mail</div>
            <div>jhyunwoo@moveto.kr</div>
            <Link href="mailto:jhyunwoo@moveto.kr" className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 text-white p-1 rounded-lg px-2">
              Send E-mail
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 text-center p-4 py-8">
        <div className="text-slate-500">Copyright 2022. Team Moveto. All rights reserved.</div>
      </div>
    </div>
  );
}
