'use client'
import React, { useEffect, useState } from "react"

interface SkillItem{
    title : string;
    progressBefore: number;
    progressAfter : number;
    desc : string;
}

export default function Skill() {
    const [itemList,setItemList] = useState<SkillItem[]>([]);
    const [progressbar,setProgressbar] = useState<boolean>(false);

       
    
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await fetch("/api/skill");
                const data = await res.json()
                console.log(data)
                setItemList(data.data)
                setTimeout(() => {
                    setProgressbar(true);
                }, 500);
            }catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[])

    return(
        <>
            {
                itemList.map((e,i)=>{
                    return(
                        <div className="w-full h-20" key={i}>
                          <div className="w-full h-5 bg-[#e0e0de] rounded-[50px]">
                                <div className="h-full bg-red-300 duration-1000 ease-in-out rounded-[50px] text-right relative mb-3 first:mt-10"  style={{width: !progressbar ? e.progressBefore : e.progressAfter + "%"}}>
                                    <p className="absolute -top-6 md:-top-7 left-1 text-sm md:text-lg">{e.title}</p>
                                </div>
                                <p className="text-sm md:text-base text-gray-600 mt-1">{e.desc}</p>
                            </div>  
                        </div>
                    )
                })
            }
        </>
    )
}
