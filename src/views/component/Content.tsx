import { useRef, useEffect } from "react";

import { Text } from "components/atoms";
import { Card } from "components/moleculs";

import { mockDataType, langType } from "types";

import { setDate } from "./helper";

type Props = {
  /**
   * data for timeline items
   */
  data: mockDataType;
  /**
   * current language
   */
  currentLang: langType;
  /**
   * Action to show/hide modal window or toggle content
   */
  onClickAction: (show: boolean, link: string | undefined) => void;
};

export const Content = (props: Props) => {
  const { data, currentLang, onClickAction } = props;

  const refContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (refContainer.current) {
      refContainer.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="mfk-wrapper">
      <div className="mfk-timeline--container">
        {data.map((item, idx) => (
          <div
            key={`${item.id}-idx`}
            ref={
              window.location.search === `?id=${item.id}` ? refContainer : null
            }
            className={`mfk-timeline--block mfk-timeline--block-${
              idx % 2 === 0 ? "right" : "left"
            }`}
          >
            <Text
              type="caption"
              additionalClass={`mfk-timeline--date ${
                item.type === 1
                  ? "mfk-timeline--date-light"
                  : "mfk-timeline--date-dark"
              }`}
            >
              {setDate(item.startDate, item.endDate)}
            </Text>
            <div
              className={`mfk-timeline--marker ${
                item.type === 1
                  ? "mfk-timeline--marker-light"
                  : "mfk-timeline--marker-dark"
              }`}
            ></div>
            <Card
              id={item.id}
              type={item.type}
              title={item.title[currentLang as langType]}
              description={item.description[currentLang as langType]}
              onClick={() => {
                onClickAction(
                  true,
                  item.glbJson
                    ? //each .glb file with information in related json should be located in separate folder.
                      //folder name is the id of current object from mockData
                      `${item.id}/${item.glbJson[currentLang as langType]}`
                    : undefined
                );
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
