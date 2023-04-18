import { Header, Card } from "components/moleculs";
import { mockData } from "api/mockData";

import "./style.scss";

export default function Main() {
  return (
    <div>
      <Header />
      <div className="mfk-wrapper">
        <div className="mfk-timeline--container">
          {mockData.map((item, idx) => (
            <div
              key={`${item.date}-idx`}
              className={`mfk-timeline--block mfk-timeline--block-${
                idx % 2 === 0 ? "right" : "left"
              }`}
            >
              <div className="mfk-timeline--marker"></div>
              <Card
                type={item.type}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
