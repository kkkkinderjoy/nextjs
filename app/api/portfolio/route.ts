// ts 와 tsx의 차이점에 대해서 >> tsx는 리엑트 문법이 적용됨
import { IconDefinition, faCode, faUser, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { NextRequest, NextResponse } from "next/server";

interface AboutItem{
    title:string;
    desc?:string;
    desc2?:string;
    date?: string[];
    dateDesc?: string[];
}

interface NavItem{
    name:string;
    link:string;
    icon:IconDefinition
}

interface SkillItem{
    title : string;
    progressBefore: number;
    progressAfter : number;
    desc : string;
}

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

export const GET = async(req:NextRequest): Promise<NextResponse>=>{
    
    const type = req.nextUrl.searchParams.get("type");
    // /api/portfolio?type=nav about
    console.log(type)
    switch(type){
        case 'about': 
        const dataAbout:AboutItem[] = [
            {
                title:"◆ MIND",
                desc:"혼자 부딪혀봐야 온전히 내것이 된다",
                desc2:"는 마인드를 가지고 있어, 혼자 찾아보고 고민하여 문제 해결하는 것을 좋아합니다"
            },
            {
                title:"◆ EDUCATION",
                date:[
                    "2023.06.29~2023.11.30",
                    "2023.01.01~2023.12.31",
                    "2023.01.01~2023.12.31",
                    "2023.01.01~2023.12.31"
                ],
                dateDesc:[
                    "(혼합+디지털컨버저스) React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발)A ",
                    "설명2",
                    "설명3",
                    "설명4"
                ]
            },
            {
                title:"◆ LICENSE",
                date:[
                    "2023.06",
                    "2023.05",
                    "2023.04",
                ],
                dateDesc:[
                    "자격증 이름 1",
                    "자격증 이름 2",
                    "자격증 이름 3"
                ]
            }
        ]
        return NextResponse.json({dataAbout});
        case 'nav':
        const dataNav:NavItem[] = [
                {
                    name:"소개",
                    link:"/about",
                    icon:faUser
                },
                {
                    name:"스킬",
                    link:"/skill",
                    icon:faCode
                },
                {
                    name:"포트폴리오",
                    link:"/work",
                    icon:faWindowMaximize
                }
            ]
        return NextResponse.json({dataNav});
        case 'skill':
            const dataSkill:SkillItem[] = [
                {
                    title : "html",
                    progressBefore: 0,
                    progressAfter : 90,
                    desc : "웹 표준에 준수하여, 마크업을 할 수 있으며, flex or grid를 활용하여 레이아웃 구성을 할 수 있다"
                },
                {
                    title : "css",
                    progressBefore: 0,
                    progressAfter : 80,
                    desc : "마크업에 작성된 CLASS를 토대로, 디자인을 할 수 있다"
                },
                {
                    title : "javscript",
                    progressBefore: 0,
                    progressAfter : 70,
                    desc : "웹 페이지 내 동적인 기능을 구현, 서버의 데이터를 수신해 가공할 수 있다"
                },
                {
                    title : "React",
                    progressBefore: 0,
                    progressAfter : 70,
                    desc : "REACT를 활용하여, SPA 사이트 제작을 할 수 있다. Redux, Router DOM 등 다양한 라이브러리 활용을 할 수 있다"
                },
                {
                    title : "Next.js",
                    progressBefore: 0,
                    progressAfter : 60,
                    desc : "REACT 프레임워크 NEXTJS를 활용하여 SSR 사이트 제작을 할 수 있다"
                },
        
            ]
            return NextResponse.json({dataSkill});
        case 'work':
            const dataWork:workItem[] = [
                {
                    img:"https://via.placeholder.com/500",
                    descTitle:"맥도날드 사이트",
                    desc:"html,css,javascript를 이용한 맥도날드 사이트 클론 코딩",
                    keyword:['#심플','#스크롤이벤트',"#스와이퍼"],
                    color:['#DA0B12','#D87E1D','#274A36'],
                    font:'Noto Sans KR',
                    tools:['Figma',"VS Code","Git"],
                    date:'14일',
                    contribution:"100%",
                    type:"Clone",
                    orginal : "https://www.mcdonalds.co.kr/kor/main.do",
                    create: 'https://mcdonalds-ten.vercel.app/',
                    git: 'https://kkkkinderjoy.github.io/mcdonalds/',
                },
                {
                    img:"https://via.placeholder.com/500",
                    descTitle:"서브웨이 사이트",
                    desc:"html,css,jQuery 이용한 맥도날드 사이트 클론 코딩",
                    keyword:['#심플','#스크롤이벤트',"#스와이퍼"],
                    color:['#DA0B12','#D87E1D','#274A36'],
                    font:'Noto Sans KR',
                    tools:['Figma',"VS Code","Git"],
                    date:'7일',
                    contribution:"100%",
                    type:"Clone",
                    orginal : "https://www.mcdonalds.co.kr/kor/main.do",
                    create: 'https://mcdonalds-ten.vercel.app/',
                    git: 'https://kkkkinderjoy.github.io/mcdonalds/',
                },
                {
                    img:"https://via.placeholder.com/500",
                    descTitle:"그린핑",
                    desc:"React를 이용한 팀프로젝트",
                    keyword:['#반응형','#라우트',"#공공데이터API"],
                    color:['#DA0B12','#D87E1D','#274A36'],
                    font:'Noto Sans KR',
                    tools:['Figma',"VS Code","Git"],
                    date:'30일',
                    contribution:"20%",
                    type:"Project",
                    orginal : "https://www.mcdonalds.co.kr/kor/main.do",
                    create: 'https://mcdonalds-ten.vercel.app/',
                    git: 'https://kkkkinderjoy.github.io/mcdonalds/',
                },
                {
                    img:"https://via.placeholder.com/500",
                    descTitle:"택배 배송조회",
                    desc:"typescript,react를 택배 배송조회사이트",
                    keyword:['#심플','#공공데이터API'],
                    color:['#DA0B12','#D87E1D','#274A36'],
                    font:'Noto Sans KR',
                    tools:['Figma',"VS Code","Git"],
                    date:'7일',
                    contribution:"100%",
                    type:"Project",
                    orginal : "https://www.mcdonalds.co.kr/kor/main.do",
                    create: 'https://mcdonalds-ten.vercel.app/',
                    git: 'https://kkkkinderjoy.github.io/mcdonalds/',
                },
                {
                    img:"https://via.placeholder.com/500",
                    descTitle:"포트폴리오1",
                    desc:"react를 이용한 포트폴리오",
                    keyword:['#심플','#공공데이터API'],
                    color:['#DA0B12','#D87E1D','#274A36'],
                    font:'Noto Sans KR',
                    tools:['Figma',"VS Code","Git"],
                    date:'14일',
                    contribution:"100%",
                    type:"Project",
                    orginal : "https://www.mcdonalds.co.kr/kor/main.do",
                    create: 'https://mcdonalds-ten.vercel.app/',
                    git: 'https://kkkkinderjoy.github.io/mcdonalds/',
                },
                {
                    img:"https://via.placeholder.com/500",
                    descTitle:"포트폴리오2",
                    desc:"react를 이용한 포트폴리오",
                    keyword:['#심플','#공공데이터API'],
                    color:['#DA0B12','#D87E1D','#274A36'],
                    font:'Noto Sans KR',
                    tools:['Figma',"VS Code","Git"],
                    date:'14일',
                    contribution:"100%",
                    type:"Project",
                    orginal : "https://www.mcdonalds.co.kr/kor/main.do",
                    create: 'https://mcdonalds-ten.vercel.app/',
                    git: 'https://kkkkinderjoy.github.io/mcdonalds/',
                },
                {
                    img:"https://via.placeholder.com/500",
                    descTitle:"연습1",
                    desc:"Next.js를 활용한 연습용 어쩌구",
                    keyword:['#심플','#공공데이터API'],
                    color:['#DA0B12','#D87E1D','#274A36'],
                    font:'Noto Sans KR',
                    tools:['Figma',"VS Code","Git"],
                    date:'14일',
                    contribution:"100%",
                    type:"WebApp",
                    orginal : "https://www.mcdonalds.co.kr/kor/main.do",
                    create: 'https://mcdonalds-ten.vercel.app/',
                    git: 'https://kkkkinderjoy.github.io/mcdonalds/',
                },
                {
                    img:"https://via.placeholder.com/500",
                    descTitle:"연습2",
                    desc:"Next.js를 활용한 연습용 어쩌구",
                    keyword:['#심플','#공공데이터API'],
                    color:['#DA0B12','#D87E1D','#274A36'],
                    font:'Noto Sans KR',
                    tools:['Figma',"VS Code","Git"],
                    date:'14일',
                    contribution:"100%",
                    type:"WebApp",
                    orginal : "https://www.mcdonalds.co.kr/kor/main.do",
                    create: 'https://mcdonalds-ten.vercel.app/',
                    git: 'https://kkkkinderjoy.github.io/mcdonalds/',
                },
                {
                    img:"https://via.placeholder.com/500",
                    descTitle:"연습3",
                    desc:"Next.js를 활용한 연습용 어쩌구",
                    keyword:['#심플','#공공데이터API'],
                    color:['#DA0B12','#D87E1D','#274A36'],
                    font:'Noto Sans KR',
                    tools:['Figma',"VS Code","Git"],
                    date:'14일',
                    contribution:"100%",
                    type:"WebApp",
                    orginal : "https://www.mcdonalds.co.kr/kor/main.do",
                    create: 'https://mcdonalds-ten.vercel.app/',
                    git: 'https://kkkkinderjoy.github.io/mcdonalds/',
                },
        
            ]
            return NextResponse.json({dataWork});
        default :
        return NextResponse.json({error:"파라미터가 에러"})
    }
    
}
