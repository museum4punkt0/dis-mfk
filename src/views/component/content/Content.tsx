import { useRef, useEffect } from "react";

import { Card } from "components/moleculs";

import { apiDataType, langType, ComponentProps } from "types";

import { setDate } from "./helper";

import "./style.scss";

type Props = {
  /**
   * data for timeline items
   */
  data: apiDataType;
  /**
   * current language
   */
  currentLang: langType;
  /**
   * Action to show/hide modal window or toggle content
   */
  onClickAction: (
    show: boolean,
    content: { data: string | undefined; title: string }
  ) => void;
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
                item.type !== 1
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
                onClickAction(true, {
                  data: item.glbJson
                    ? //each .glb file with information in related json should be located in separate folder.
                      //folder name is the id of current object from apiData
                      `${item.id}/glb-${currentLang as langType}.json`
                    : undefined,
                  title: `${item.title[currentLang as langType]} (${setDate(
                    item.startDate,
                    item.endDate
                  )})`,
                });
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
