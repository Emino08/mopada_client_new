import { useState } from "react";
import {
  BiCalendar,
  BiCalendarEvent,
  BiLeftArrowAlt,
  BiListUl,
  BiRightArrowAlt,
} from "react-icons/bi";
import { Button } from "flowbite-react";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

export default function Events() {
  const [events, setEvents] = useState([
    { date: "2024-01-05", title: "Gender Violence Meeting" },
    { date: "2024-01-10", title: "Wash Meeting" },
    // Add more events as needed
  ]);
  // const [view, setView] = useState("month"); // 'day', 'week', 'month'
  //
  // const hours = Array.from({ length: 24 }, (_, i) => i);

  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  return (
    <div className="mt-28">
      <Helmet>
        <title>
          Events - Movement towards Peace And Development Agency (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Stay updated with our latest events."
        />
      </Helmet>
      <Section label="Events" />
      <div className="bg-white p-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <Button
              className="bg-gray-200"
              variant="ghost"
              onClick={handlePrevMonth}
            >
              <BiLeftArrowAlt className="text-gray-600" />
            </Button>
            <Button
              className="bg-gray-200"
              variant="ghost"
              onClick={handleNextMonth}
            >
              <BiRightArrowAlt className="text-gray-600" />
            </Button>
          </div>
          <span className="text-xl font-semibold">
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </span>
          <Button className="bg-gray-200" variant="ghost">
            Today
          </Button>
          <div className="flex space-x-2">
            <Button className="bg-gray-200" variant="ghost">
              <BiCalendarEvent className="text-gray-600" />
            </Button>
            <Button className="bg-gray-200" variant="ghost">
              <BiCalendarEvent className="text-gray-600" />
            </Button>
            <Button className="bg-[#065f46] text-white" variant="ghost">
              <BiCalendar className="text-white" />
            </Button>
            <Button className="bg-gray-200" variant="ghost">
              <BiListUl className="text-gray-600" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-7 gap-4 text-center">
            <div className="font-semibold text-[#065f46]">Sun</div>
            <div className="font-semibold text-[#065f46]">Mon</div>
            <div className="font-semibold text-[#065f46]">Tue</div>
            <div className="font-semibold text-[#065f46]">Wed</div>
            <div className="font-semibold text-[#065f46]">Thu</div>
            <div className="font-semibold text-[#065f46]">Fri</div>
            <div className="font-semibold text-[#065f46]">Sat</div>
          </div>
          <div className="grid grid-cols-7 gap-4 text-center border-t border-l">
            {getCalendarDays(currentDate).map((day, index) => (
              <div key={index} className="border-t border-l">
                <span className="block">{day.day}</span>
                {events.map(
                  (event, eventIndex) =>
                    event.date === day.date && (
                      <div key={eventIndex} className="text-[#065f46]">
                        {event.title}
                      </div>
                    ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getCalendarDays(date) {
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();
  const startDate = new Date(date.getFullYear(), date.getMonth(), 1);

  return Array.from({ length: daysInMonth }, (_, index) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index);
    return {
      day: currentDate.getDate(),
      date: currentDate.toISOString().split("T")[0],
    };
  });
}
