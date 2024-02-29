import style from "./projectResours.module.css";
import user1 from "../../../public/assets/user1.svg";
import user2 from '../../../public/assets/user2.svg';
import user3 from '../../../public/assets/user3.svg';
import PieCart from "../Graphs/pieCart";
import Image from "next/image";

const ProjectResours = () => {

  // let secondColor = { '#5CDBD3'}


  return (
    <>
    <div className={style.Heading}>
        <h3>Project Resources</h3>
        </div>
      
      <div className="flex gap-8">
        <div className={style.projectResourseCard}>
          <div className="flex gap-6">
            <Image src={user1} alt="" />
            <div className={style.userInfo}>
              <h2>Angela Moss</h2>
              <p>Project Manager</p>
            </div>
          </div>
          <div className={style.taskDocument}>
            <div>
              <h1>Current Task-User Document</h1>
              <p>Total Task - 10</p>
            </div>
            <div className={style.pie}>
              <PieCart />
            </div>
          </div>
        </div>
        <div className={style.projectResourseCard}>
          <div className="flex gap-6">
            <Image src={user2} alt="" />
            <div className={style.userInfo}>
              <h2>Andy Law</h2>
              <p>UI</p>
            </div>
          </div>
          <div className={style.taskDocument}>
            <div>
              <h1>Current Task-User Document</h1>
              <p>Total Task - 10</p>
            </div>
            <div className={style.pie}>
              <PieCart />
            </div>
          </div>
        </div>
        <div className={style.projectResourseCard}>
          <div className="flex gap-6">
            <Image src={user3} alt="" />
            <div className={style.userInfo}>
              <h2>Benny Kenn</h2>
              <p>API</p>
            </div>
          </div>
          <div className={style.taskDocument}>
            <div >
              <h1>Current Task-User Document</h1>
              <p>Total Task - 10</p>
            </div>
            <div className={style.pie}>
              <PieCart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectResours;
