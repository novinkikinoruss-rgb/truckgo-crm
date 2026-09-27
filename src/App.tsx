import { useState } from "react";

const nav = ["Dashboard","Рейсы","Автопарк","Водители","Клиенты","Подрядчики","Взаиморасчёты","Карта"];

export default function App() {
  const [active,setActive] = useState("Dashboard");
  return <div className="app">
    <aside>
      <div className="brand"><span className="mark">TG</span><div><b>TruckGO</b><small>CRM логистики</small></div></div>
      <nav>{nav.map(item=><button className={active===item?"active":""} onClick={()=>setActive(item)} key={item}>{item}</button>)}</nav>
      <div className="aside-bottom"><span className="dot"/> Система онлайн</div>
    </aside>
    <main>
      <header><div><span className="eyebrow">ТРАНСПОРТНАЯ CRM</span><h1>{active}</h1></div><div className="user">Администратор <span>●</span></div></header>
      <section className="grid">
        <Card title="Рейсы сегодня" value="0" note="Нет активных рейсов"/>
        <Card title="Автомобили" value="0" note="Данные подключаются"/>
        <Card title="Клиенты" value="0" note="Готово к загрузке"/>
        <Card title="Задолженность" value="0 ₽" note="Расчёт по операциям"/>
      </section>
      <section className="panel">
        <div className="panel-head"><div><h2>{active === "Dashboard" ? "Рабочая область CRM" : active}</h2><p>Интерфейс TruckGO опубликован через Vercel.</p></div><span className="status">● READY</span></div>
        <div className="empty"><div className="truck">▣</div><h3>CRM готова к подключению данных</h3><p>Следующий этап — подключение Supabase и восстановление бизнес-модулей.</p></div>
      </section>
    </main>
  </div>
}
function Card({title,value,note}:{title:string,value:string,note:string}) {
 return <div className="card"><span>{title}</span><strong>{value}</strong><small>{note}</small></div>
}
