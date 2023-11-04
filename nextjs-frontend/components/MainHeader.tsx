import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon
} from "@heroicons/react/24/outline";
import {PhoneIcon, PlayCircleIcon} from "@heroicons/react/20/solid";
import BaseHeader from "@/components/BaseHeader";

export default function MainHeader() {
  const products = [
    {
      name: 'Analytics',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: <ChartPieIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true"/> },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers',
      href: '#',
      icon: <CursorArrowRaysIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true"/> },
    {
      name: 'Security',
      description: 'Your customers’ data will be safe and secure',
      href: '#',
      icon: <FingerPrintIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true"/> },
    {
      name: 'Integrations',
      description: 'Connect with third-party tools',
      href: '#',
      icon: <SquaresPlusIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true"/> },
    {
      name: 'Automations',
      description: 'Build strategic funnels that will convert',
      href: '#',
      icon: <ArrowPathIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true"/> },
  ]
  const callsToAction = [
    {
      name: 'Watch demo',
      href: '#',
      icon: <PlayCircleIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/> },
    {
      name: 'Contact sales',
      href: '#',
      icon: <PhoneIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/> },
  ]
  const company = [
    {
      name: 'About us',
      href: '#' },

    {
      name: 'Careers',
      href: '#' },

    {
      name: 'Support',
      href: '#' },

    {
      name: 'Press',
      href: '#' },

    {
      name: 'Blog',
      href: '#' },

  ]
  return <BaseHeader
    products={products}
    callsToAction={callsToAction}
    company={company}
  />
}