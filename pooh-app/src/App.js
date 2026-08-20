import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'นทนันทร์ แสงเทียน', nickname: 'นท',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ก๋วยเตี๋ยว', 'สุนัข'] },
  { id: 2, name: 'เจษฎาพร อมรจิตรเวชกุล', nickname: 'โอเว่น',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['โค้ก', 'แมว'] },
  { id: 3, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;