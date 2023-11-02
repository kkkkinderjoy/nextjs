'use client'
import Image from 'next/image';
import {useEffect, useState} from 'react';

interface workItem{
    img:string;
    descTitle:string;
    desc:string;
    keyword:string[];
    color:string[];
    font:string;
    tools:string[];
    date:string;
    contribution:string;
    type: string;
    orginal ?: string;
    create: string;
    git: string;
}


export default function Work() {

    const [isActive,setIsActive] = useState<number>(0);
    const [itemList,setItemList] = useState<workItem[]>([]);
    const [cateGory,setCateGory] = useState<string>("전체");
        
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const res = await fetch("/api/portfolio?type=work");
                const data = await res.json()
                console.log(data)
                setItemList(data.data)
            } catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[])

    const menuType =["전체","Clone","Project","WebApp"]
    const FilterData = itemList && itemList.filter(e=>{
        return cateGory === "전체" || cateGory === e.type
    })
    const handleCategoryClick = (category: string) => {
        setCateGory(category);
      };

    // const dataFilter = itemList.filter(e=>{
    //     if(cateGory === "전체"){
    //       return true;
    //     }else{
    //       return e.type === cateGory
    //     }
    //   })
    //   console.log(dataFilter)

    const menuArray =['전체','클론','팀프로젝트','웹앱'];

    return(
        <>
        <div className="max-w-7xl mx-auto mt-8">
            <ul className="flex m-4 ml-0">
                {/* <li  className={`${isActive === "i" ? 'bg-violet-500 text-white' :'bg-white text-black'} cursor-pointer mr-4 border dark:bg-[#272929] dark:text-[#ebf4f1] py-2 px-5 rounded-md`} onClick={()=>{setCateGory("전체")}}>전체</li> */}
                {
                    menuType.map((category,i)=>{
                        return(
                            <li key={i} className={`${isActive === i ? 'bg-violet-500 text-white' :'bg-white text-black'} cursor-pointer mr-4 border dark:bg-[#272929] dark:text-[#ebf4f1] py-2 px-5 rounded-md`} onClick={()=>{setIsActive(i); handleCategoryClick(category)}}>{category}</li>
                        )
                    })
                }
            </ul>
            <div className="mt-8">
                {
                    itemList.filter((e)=>cateGory === "전체" || cateGory === e.type).map((e,i)=>{
                        return(
                            <div key={i} className="bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex flex-wrap border">
                                <div className="basis-[48%] relative mokup-img group-even:order-1 xl:group-even:order-2">
                                    <div className="">
                                    <Image src="/images/mokup-1.png" className='w-full' width={500} height={500} alt='1'/>
                                    </div>
                                    <div className="">
                                    <Image src="/images/mokup-2.png" className='w-full' width={500} height={500} alt='1'/>
                                    </div>
                                    <div className="">
                                    <Image src="/images/mokup-3.png" className='w-full' width={500} height={500} alt='1'/>
                                    </div>
                                </div>
                                <div className="basis-[52%] group-even:order-2 xl:group-even:order-1 pt-10">
                                    <h3 className='text-2xl font-bold pt-2.5 py-2.5 lg:pl-[50px] '>{e.descTitle}</h3>
                                    <p className='text-base py-2.5 lg:pl-[50px] '>{e.desc}</p>
                                    <p className='text-base py-2.5 lg:pl-[50px] '>키워드 : {e.keyword}</p>
                                    <p className='text-base py-2.5 lg:pl-[50px] '>컬러 : 
                                        {
                                            e.color.map((el,idx)=>{
                                                return(
                                                    <span className='w-5 h-5 inline-block align-middle mr-2' style={{backgroundColor : el, marginLeft:"5px"}} key={idx}></span>
                                                )
                                            })
                                        }
                                    </p>
                                    <p className="text-base py-2.5 lg:pl-[50px] ">폰트 : {e.font}</p>
                                    <p className='text-base py-2.5 lg:pl-[50px] '>사용툴 : {e.tools}</p>
                                    <p className="text-base py-2.5 lg:pl-[50px] ">작업기간 : {e.date}</p>
                                    <p className="text-base py-2.5 lg:pl-[50px] ">기여도 : {e.contribution}</p>
                                    <ul className="flex justify-center mt-6">
                                        <li className="py-1 px-8 border rounded-md text-sm mr-4"><a href={e.orginal} target='_blank' rel='noopener noreferrer'>Original</a></li>
                                        <li className="py-1 px-8 border rounded-md text-sm mr-4"><a href={e.create} target='_blank' rel='noopener noreferrer'>Create</a></li>
                                        <li className="py-1 px-8 border rounded-md text-sm "><a href={e.git} target='_blank' rel='noopener noreferrer'>Git</a></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}