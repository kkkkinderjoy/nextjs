'use client'
import Link from "next/link"
import {useEffect, useState} from "react";
import Logo from '/public/images/120x50.png'
import Image from 'next/image'
import { faUser,faCode,faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";


interface NavItem{
  name:string;
  link:string;
  icon:IconDefinition
}

export default function Nav() {
    
    // const defaultName = "홍길동"
    // const [test, setTest] = useState("테스트")
    const [menuActive,setMenuActive] = useState<boolean>(false);
    const [menuList,setMenuList] = useState<NavItem[]>([]);
    const icons = [faUser,faCode,faWindowMaximize] //배열에 큰따옴표 쓰지않음 (폰트어썸배열)

    useEffect(()=>{
      const fetchData = async() =>{
        try{
          const res = await fetch("/api/portfolio/nav");
          const data = await res.json()
          // console.log(data)
          setMenuList(data.data)
        } catch(error){
          console.log(error)
        }
      }
      fetchData()
    },[])

  const toggleMenu= () =>{
    setMenuActive(!menuActive)
  }
    return (
      <>
        <div className="w-full dark:border-b px-[2%] sticky top-0 bg-white py-2.5 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <Link href="/">
                <h1>
                  <Image width={120} height={50} src={Logo} alt="로고" title="로고" />
                  {/* <Image width={120} height={50} src="https://via.placeholder.com/120x50" alt="로고" title="로고" /> */}
                </h1>
              </Link>
              <div className="basis-3/4 hidden md:block">
                <ul className="flex justify-around">
                  {/* script코드를 써야할때 중괄호 씁니당&& */}
                  {
                    menuList.map((e,i)=>{
                      return(
                        <>
                        <li key={i} className="relative hover:font-bold after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:transition-all after:duration-500 after:scale-x-0 hover:after:scale-x-100"><Link href={e.link}>{e.name}</Link></li>
                        </>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
        </div>
        <div className="fixed right-5 top-5 transition-all duration-500 z-[51] cursor-pointer md:hidden" onClick={toggleMenu}>
          <div className={`w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transiton-all duration-500 ${menuActive && "rotate-45 translate-y-[10px]"}`}>           
          </div>
          <div className={`w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transiton-all duration-500 ${menuActive && "opacity-0 -translate-x-8 "}`}>           
          </div>
          <div className={`w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transiton-all duration-500 ${menuActive && "-rotate-45 -translate-y-[10px]"}`}>           
          </div>
        </div>
        <div className={`w-72 h-full fixed bg-blue-50 p-12 top-0 z-50 box-border transition-all duration-500 md:hidden ${menuActive ? "right-0" : "-right-72"}`} >
          <div className="text-center mt-6">
            <Image src="https://via.placeholder.com/100/fff" alt="100x100" width={100} height={100} title="100x100" className="mx-auto rounded-full mb-4"/>
            <p>프론트엔드 개발자 홍윤정</p>
            {/* 바뀌는 내용만 변수로 설정해주는게 개발하는데 좋음 */}
          </div>
          <ul className="mt-12">
            {
              menuList.map((e,i)=>{
                return(
                 <li key={i} className="pt-5 pb-2 border-b hover:font-bold"><FontAwesomeIcon className='mr-2' icon={e.icon}/><Link href={e.link}>{e.name}</Link></li> 
                )
              })
            }
          </ul>
        </div>       
      </>
    )
  }
  