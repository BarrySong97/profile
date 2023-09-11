import Image from "next/image";
import TimeLine, { Timeline } from "./components/Timeline";
import Avatar from "../assets/avatar.png";
import "./page.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Barry Song's online Resume profile",
  description: "Barry Song's resume profile",
};

export default function Home() {
  const timeline: Timeline[] = [
    {
      title: "成都索贝数码科技股份有限公司",
      startDate: "2022-04",
      endDate: "2023-03",
      position: "前端工程师",
      link: "http://www.sobey.com/",
      loc: "四川 成都",
      description:
        "作为行业的专业媒体技术领军企业、融合媒体建设主力和数字经济代表性企业",
    },
    {
      title: "成都深瑞同华科技有限公司",
      startDate: "2020-07",
      loc: "四川 成都",
      endDate: "2022-03",
      link: "https://www.qcc.com/weblogin?back=%2Ffirm%2F4c9593959858b0a3c294ef70c245617c.html",
      position: "前端工程师",
      description:
        "深瑞同华产品以强大的业务数据化共享平台及智能便捷的专业服务，打造电力服务行业领先的业务云平台生态系统",
    },
    {
      title: "上海电机学院",
      startDate: "2016-09",
      endDate: "2020-06",
      position: "软件工程",
      description: "统招本科",
      loc: "上海",
      link: "https://www.sdju.edu.cn/",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-center">
      <article className="card lg:mr-16 mb-5 lg:mb-0 shadow-xl">
        <div className="background bg-image">
          <Image src={Avatar} alt="profile"  className="object-cover" />
        </div>
        <div className="content">
          <h2>Barry Song</h2>
          <ul className="chips">
            <li className="chip">React.js</li>
            <li className="chip">nest.js</li>
            <li className="chip">Flutter</li>
          </ul>
          <p>
            我是Barry
            Song，一个全栈工程师，当然在公司里还只是做过前端工程师，实际上我私下写的很多项目都是全栈。我喜欢高效率的工作，不喜欢加班。如果你正在找一个前端或者nodejs技术站的全栈工作人员，可以联系我
          </p>
          <p>邮箱：524000659@qq.com</p>
          <div className="action-buttons">
            {/* <a href="#book-a-mentor" title="Book a lector">
              Book a lector
            </a> */}
            <a
              href="http://barrysong4real.cc/"
              className="secondary"
              title="Learn More"
            >
              个人博客
            </a>
          </div>
        </div>
      </article>
      <TimeLine data={timeline} />
    </div>
  );
}
