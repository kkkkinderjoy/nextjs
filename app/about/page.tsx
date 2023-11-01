import Image from "next/image";
import About2 from "@/components/about";

export default function About(){ 
    //about 라우터 할때 사용하는것
    return(
        <>
            <div className="w-full pt-12 mt-16 px-[2%] pb-8">
                <div className="max-w-7xl mx-auto p-5 bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1]">
                    <h3 className="text-center font-bold text-xl sm:text-2xl lg:text-3xl">프로필</h3>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="h-auto flex overflow-hidden mt-8 flex-wrap justify-between">
                        <div className="basis-full md:basis-[30%] py-12 px-4 bg-white rounded-md dark:bg-[#272929] dark:text-[#ebf4f1] text-center border">
                            <Image src="https://via.placeholder.com/300" alt="300x300" width={300} height={300} className ="rounded-full mx-auto" />
                            <ul>
                                <li className="pl-5 box-border pt-6">홍윤정 / Hong Yoon Jung</li>
                                <li className="pl-5 box-border pt-6"><a href="mailto:kkkkinderjoy@naver.com">kkkkinderjoy@naver.com</a></li>
                                {/* Link(next.js) / a 태그 차이는? 내부에서 움직일때는 Link를 쓰고 외부로 움직일때는 a태그를 사용하면 됨 */}
                            </ul>
                        </div>
                        <div className="basis-full md:basis-[67.5%] mt-8 md:mt-0">
                            <div className="">
                                <About2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}