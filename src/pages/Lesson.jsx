import LessonCard from "../components/LessonCard/LessonCard";
import "./Lesson.css"
// import {data} from "./components/helper/data.js"
const Lesson = ({ data }) => {
  return (
    <div>
      <h1 className="h1">Lesson Reminder</h1>
    <div className="container">
      
      {data.map((item)=>(
 <LessonCard key={item.id} {...item} />
      ))}
     
    </div>
    </div>
  );
};
export default Lesson;
