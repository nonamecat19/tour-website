import Link from 'next/link'

export default function DebugPanel() {
  return (
    <div>
      <div className='fixed bottom-0 right-0 flex flex-col bg-emerald-800 p-5 text-white'>
        <Link href='/'>Main</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/tours'}>Tours</Link>
        <Link href={'/categories'}>Categories</Link>
        <Link href={'/tour'}>Tour example</Link>
        <Link href={'/error'}>Error page</Link>
      </div>
    </div>
  )
}
