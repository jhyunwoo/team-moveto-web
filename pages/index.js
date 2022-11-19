import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import cntextbook from "../public/cntextbook-logo.png";

export default function Home() {
  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EM4LGH318V"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-EM4LGH318V');
        `}
      </Script>
      <div className=" h-screen flex bg-black justify-center items-center">
        <div className="text-6xl font-bold text-white text-center">
          Team Moveto
        </div>
      </div>
      <div className=" flex p-4 bg-slate-50 flex-col items-center">
        <div className="text-3xl font-bold">Products</div>
        <div className="flex flex-col p-4">
          <div className=" rounded-lg shadow-xl p-4 flex">
            <Image
              src={cntextbook}
              className="w-24 h-24 m-auto rounded-2xl"
              alt="cntextbook"
            />
            <div className="ml-4 flex flex-col">
              <div className="text-xl font-semibold mb-2">CN교과서</div>
              <div>충남삼성고등학교 시험 대비를 위한 모바일 전용 교과서</div>
              <Link
                href="https://cntextbook.moveto.kr"
                className="bg-orange-400 p-1 px-2 text-white hover:bg-orange-500 mt-2 rounded-lg text-center hover:ring-2 hover:ring-orange-500 hover:ring-offset-1 transition duration-300"
              >
                더 자세한 정보
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 flex flex-col items-center p-2">
        <div className="text-3xl font-bold">Contacts</div>
        <div className="flex flex-col w-full items-center">
          <div className="flex py-2  my-2 items-center justify-between">
            <div className="font-semibold ml-2">E-mail</div>
            <div className="mx-2 sm:mx-4 md:mx-5 lg:mx-6">
              jhyunwoo@moveto.kr
            </div>
            <Link
              href="mailto:jhyunwoo@moveto.kr"
              className="text-center bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 text-white p-1 rounded-lg px-2"
            >
              Send E-mail
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 text-center p-4 py-8">
        <div className="text-slate-500">
          Copyright 2022. Team Moveto. All rights reserved.
        </div>
      </div>
    </div>
  );
}
