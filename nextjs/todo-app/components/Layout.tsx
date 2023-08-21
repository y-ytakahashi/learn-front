import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { BadgeCheckIcon } from '@heroicons/react/solid'

type title = {
  title: string
  children: ReactNode
}

export const Layout: FC<title> = ({ children, title = 'Todo app' }) => {
  return <div className="flex min-h-screen">Layout</div>
}
