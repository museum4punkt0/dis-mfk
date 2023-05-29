import { useRef, useEffect } from "react";

import { Card } from "components/moleculs";

import { mockDataType, langType, ComponentProps } from "types";

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
} & ComponentProps;

export const Content = (props: Props) => {
  const { data, currentLang, onClickAction, identifier } = props;

  const refContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (refContainer.current) {
      refContainer.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="mfk-wrapper" data-testid={identifier}>
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
              date={setDate(item.startDate, item.endDate)}
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
