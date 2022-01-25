import { FC } from 'react'
import { Input } from '@components/ui'
import { SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const Header: FC = () => {
  const getNavigationMenuElement = (menuName: string) => {
    return (
      <div className="mr-4 cursor-pointer p-1 hover:rounded-md hover:bg-slate-200 hover:opacity-60">
        {menuName}
      </div>
    )
  }
  return (
    <header className="bg-gray-50 py-3">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="text-neutral-800">e-commerce</div>
          <Input
            placeholder="検索したいワードを入力してください"
            bgColor="bg-gray-100"
            className="ml-6 w-96"
            icon={<SearchIcon className="h-4 text-slate-400" />}
          />
        </div>
        <div className="mr-4 flex items-center">
          {getNavigationMenuElement('マイページ')}
          {getNavigationMenuElement('ログイン')}
          <Link href="/signup">
            {getNavigationMenuElement('会員登録')}
          </Link>
          {getNavigationMenuElement('出品')}
        </div>
      </div>
    </header>
  )
}

export default Header
