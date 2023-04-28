import React from 'react'

export function MyAbout(){
        return (
            <div style={{textAlign: 'center',color: 'pink'}}> 
                <h1>ข้อมูลส่วนตัว</h1>
                <br></br><br/>
            </div>
        )
    }
export function MyImage(){
    return (
        <div style={{textAlign: 'center'}}>
        <img src="./images/S__14131204.jpg" width="20%"/>
        </div>
    )
}
export function MyData(){
    return (
        <div style={{textAlign: 'center'}}> 
            ชื่อ-สกุล: นางสาวเพชรชมพู ทิพย์รักษ์ <br/>
            ชื่อเล่น: ใบเฟิร์น<br/>
            ชั้น: DT26521N  เลขที่ 17<br/>
            วัน/เดือน/ปีเกิด: 08/09/2545<br/>
            แผนก: บริหารธุรกิจและเทคโนโลยีสารสนเทศ<br/>
            สาขา: เทคโนโลยีธุรกิจดิจิทัล<br/>
        </div>
    )
}