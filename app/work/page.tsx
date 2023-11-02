import Work2 from "@/components/work"

export default function Work(){ 
    //about 라우터 할때 사용하는것
    return(
        <>
            <div className="w-full pt-12 mt-16 px-[2%] pb-8">
                <div className="max-w-7xl mx-auto p-5 bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1]">
                    <h3 className="text-center font-bold text-xl sm:text-2xl lg:text-3xl">포트폴리오</h3>
                </div>
                <Work2 />
            </div>
        </>
    )
}