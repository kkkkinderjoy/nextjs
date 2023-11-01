export default function Layout(props:{children:React.ReactNode}) {
    return (
        <>
          {/* <p>페이지 레이아웃</p> */}
          {props.children} 
        {/* 자동으로 page.tsx가 layout.tsx의 자식요소로 구성되게 만들어져있음 */}
        </> 
    )
}