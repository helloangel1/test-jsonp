"use client"

import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon'
import { useState } from 'react'
import { Notice } from '@/src/app/page'

type Props = {
  notice: Notice
}
export const NoticeBanner = ({ notice }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const handleOnClick = () => setIsVisible(false)

  return (
    isVisible && <div className="flex justify-center items-center p-2 bg-red-300 w-full">
      <a href={notice.url} target="_blank" className="text underline text-red-600">
        <span className="text-red-600">{notice.title}</span>
      </a>
      <div onClick={handleOnClick} className="cursor-pointer text-red-600">
        <CloseIcon />
      </div>
    </div>
  )
}
