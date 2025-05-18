import React from "react";
import ChatHistory from "@/components/Pages/ChatsPage/ChatCard";

const posts = [
  {
    date: "Feb 10, 2025",
    title:
      "Ako sa úspešne pripraviť na prijímacie skúšky na TUKE – tipy a rady pre uchádzačov",
    views: 24,
  },
  {
    date: "Feb 6, 2025",
    title:
      "Štipendiá, granty a iné formy finančnej podpory pre budúcich študentov TUKE",
    views: 32,
  },
  {
    date: "Feb 5, 2025",
    title:
      "Podmienky a požiadavky prijatia na fakulty TUKE – čo potrebujete vedieť?",
    views: 16,
  },
  {
    date: "Jan 29, 2025",
    title:
      "Prijímací proces na TUKE krok za krokom – ako prebieha a čo očakávať",
    views: 8,
  },
  {
    date: "Jan 27, 2025",
    title:
      "Život na TUKE internátoch – podmienky, vybavenie a tipy pre študentov",
    views: 40,
  },
  {
    date: "Feb 10, 2025",
    title:
      "Tipy pre nováčikov: Ako sa úspešne adaptovať na prvý rok štúdia na TUKE",
    views: 5,
  },
];

const ChatsGrid: React.FC = () => {
  return (
    <div className="h-full overflow-hidden overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
        {posts.map((post, index) => (
          <ChatHistory
            key={index}
            date={post.date}
            title={post.title}
            views={post.views}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatsGrid;
