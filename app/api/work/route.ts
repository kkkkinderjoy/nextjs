// ts 와 tsx의 차이점에 대해서 >> tsx는 리엑트 문법이 적용됨
import { NextResponse } from "next/server";


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

interface workData{
    data:workItem[];
}

export async function GET() : Promise<NextResponse>{
    const data:workItem[] = [
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
    return NextResponse.json({data} as workData);
}
