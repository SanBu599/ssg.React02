import {useRef} from 'react';
import FullCalendar from '@fullcalendar/react';
import DayGridPlugin from '@fullcalendar/daygrid';
import TimeGridPlugin from '@fullcalendar/timegrid';
import ListMonth from '@fullcalendar/list'
import InteractionPlugin from '@fullcalendar/interaction'

import './Calendar.css';




function App() {
  const calendarRef = useRef();

 // event 추가
 const onEventAdd = (e) => {
  const api = calendarRef.current.getApi();
  api.addEvent({
      title:'이사장님과 약속',
      start:'2023-08-29 12:30:00',
      constraint:'약속'
    });
}
  // event를 클릭시
  const eventClick = (info)=>{
    //alert('evetClick');
    //alert(JSON.stringify(info));
    //alert(info.event.start)

    let date = new Date(info.event.start);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();

    let promiss = "날짜:"+year+"년"+month+"월"+day+"일 "+hour+"시"+minute+"분\n";
    // alert(promiss)
    promiss += "제목:" + info.event.title + "\n";
    promiss += "내용:" + info.event.constraint;

    alert(promiss)

  }
  // 날짜를 클릭시 (일정 추가)
  const handleDateClick = (args) =>{
    let date = new Date(args.dateStr);
    let year = date.getFullYear();
    let moth = date.getMonth()+1;
    let day = date.getDate();
    let selectDate = year +"-"+moth + "-" + day
    alert(selectDate)

  }
  return (
    <div className='calendar'>
      <FullCalendar 
        headerToolbar ={{
          left: 'prev,next today', // 좌측버튼
          center:'title',
          end:'dayGridMonth, timeGridWeek, timeGridDay, listMonth'
        }}
        locale={'ko'}   // 한국어 버전
        navLinks={true}   // 오른쪽 상단에 week를 클릭하고 상단에 날짜를 클릭하도록
        businessHours={true}  // 주말을 다른 색으로 나오게하는거 
        plugins={ [DayGridPlugin,TimeGridPlugin,ListMonth,InteractionPlugin] }
        initialView='dayGridMonth'
    
        eventClick={eventClick}
        ref={calendarRef}
        dateClick={handleDateClick}
        events={[
            {
              title:"점심약속",
              date:new Date(),    // 오늘 날짜 출력 ex)2023-08-16 11:22
            },
            {
              title:"미팅",
              date:"2023-08-17"
            },
            {
              title:"비즈니스",
              start:"2023-08-18 12:30",
              constraint:"김사장님"      //내용
            },
            {
              title:"워크샵",
              start:"2023-08-23 08:00",
              end: "2023-08-25 12:30",
              constraint:"사내운동회"
            },
            {
              title:"데이트",
              start:"2023-08-27 12:30",
              constraint:"영화관람",
              display:"background-color",
              color:"#ff0000"
            }

        ]}
      />
    <br/>

    <button onClick={onEventAdd} className='btn btn-primary'>일정추가</button> 
      
    </div>
  );
}

export default App;
