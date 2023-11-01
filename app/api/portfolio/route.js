import { NextResponse } from "next/server";

export async function GET(){
    const data = [   
        {
            "title":"Parcel Tracking",
            "type":"personal",
            "kind":"",
            "period":"3일",
            "skill":"React /Typescript",
            "img":"images/parcel_logo.svg"
        },
        {
            "title":"Toy Project",
            "type":"study",
            "period":"in progress...",
            "skill":"HTML5 / CSS3 / Javascript",
            "img":"images/toyproject.svg"
        },
        {
            "title":"Portfolio",
            "type":"personal",
            "kind":"",
            "period":"13일",
            "skill":"React / tailwindcss / Figma ",
            "img":"images/logo.svg"
    
        },
        {
            "title":"Greenping",
            "type":"team",
            "period":"30일",
            "skill":"React / Redux / styled-components / Firebase / Figma",
            "img":"images/greenpingtxt.svg"
    
        },
        {
            "title":"Todo App",
            "type":"personal",
            "period":"5일",
            "skill":"Node.js / React / MongoDB",
            "img":"images/toyproject.svg"
    
        },
        {
            "title":"Subway Website",
            "type":"clone",
            "period":"7일",
            "skill":"HTML5 / CSS3",
            "img":"images/subwaylogo.svg"
    
        },
        {
            "title":"Mcdonald's Website",
            "type":"clone",
            "period":"15일",
            "skill":"HTML5 / CSS3 / Javascript",
            "img":"images/mcdonaldslogo.svg"
        }
    ]
    
    return NextResponse.json({data})
}