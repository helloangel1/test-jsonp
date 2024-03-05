"use client"

import fetchJsonp from 'fetch-jsonp'
import { useEffect, useState } from 'react'
import { NoticeBanner } from "../ui/notice-banner";

export type Notice = {
  title: string,
  time: string,
  url: string
}
export default function Home() {
  const [noticeList, setNoticeList] = useState<Notice[] | null>(null)

  useEffect(() => {
    fetchJsonp('http://localhost:3003/kima.pm.jsonp', {
      jsonpCallbackFunction: 'notice_list'
    }).then((res) => res.json())
      .then((data) => {
        setNoticeList(data)
      })
  }, [])

  return (
    <>
      <header>
        <div className="flex flex-col items-center">
          {noticeList && noticeList.map((notice, index) => {
            return (
              <NoticeBanner key={index} notice={notice}/>
            )
          })}
        </div>
      </header>
      <main className="flex min-h-screen p-24">
        <section className="w-1/5">
          メニュー
        </section>
        <section className="w-4/5 flex items-start">
          掲示板
        </section>
      </main>
      <footer className="p-24">
        東京都 新宿区
      </footer>
    </>
  )
}
