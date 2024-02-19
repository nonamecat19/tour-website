'use client'
import { Fragment, ReactNode, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '@/assets/logo.jpeg'
import { classNames } from '@/utils/css'
import Image from 'next/image'

interface IProps {
  products: {
    name: string
    description: string
    href: string
    icon: ReactNode
  }[]
  callsToAction: { name: string; href: string; icon: ReactNode }[]
  company: { name: string; href: string }[]
}

export default function BaseHeader({
  products,
  callsToAction,
  company,
}: IProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <Image
              className='h-14 w-auto rounded-xl'
              src={logo}
              alt='logo'
              width={400}
              height={100}
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only' children='Open main menu' />
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
              Product
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        {item.icon}
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p
                          className='mt-1 text-gray-600'
                          children={item.description}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                      children={item.name}
                    />
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href='#'
            className='text-sm font-semibold leading-6 text-gray-900'
            children='Features'
          />
          <a
            href='#'
            className='text-sm font-semibold leading-6 text-gray-900'
            children='Marketplace'
          />

          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
              Company
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5'>
                {company.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50'
                    children={item.name}
                  />
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            Log in <span aria-hidden='true' children='&rarr;' />
          </a>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-end'>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only' children='Close menu' />
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50'>
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                            children={item.name}
                          />
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  children='Features'
                />
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  children='Marketplace'
                />

                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50'>
                        Company
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {company.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                            children={item.name}
                          />
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  children='Log in'
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
