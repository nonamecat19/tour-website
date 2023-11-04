import {ReactNode} from "react";
import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";

interface IProps {
  children: ReactNode
}

export default function MainLayout({children}: IProps) {
  return (
    <>
      <MainHeader/>
      <main className="min-h-[400px]">
        {children}
      </main>
      <Footer/>
    </>
  )
}