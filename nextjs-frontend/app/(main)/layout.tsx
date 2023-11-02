import BaseHeader from "@/components/BaseHeader";
import {ReactNode} from "react";
import Footer from "@/components/Footer";

interface IProps {
  children: ReactNode
}

export default function MainLayout({children}: IProps) {
  return (
    <>
      <BaseHeader/>
      <main className="min-h-[400px]">
        {children}
      </main>
      <Footer/>
    </>
  )
}