import { useTranslation } from "react-i18next";
import { Text } from "components/atoms";
import { BiChevronsDown } from "react-icons/bi";

import "./style.scss";

type Props = {
  /**
   * Action to hide landing content
   */
  onClickAction: () => void;
};

export const Landing = (props: Props) => {
  const { onClickAction } = props;

  const { t } = useTranslation();

  return (
    <div className="mfk-landing">
      {/* <Text>{t("title")}</Text> */}
      <div className="mfk-landing--content">
        <Text type="title">
          AT: Waves, Codes and Cables (clutter) The road to communication in
          your pocket
        </Text>
        <div className="mfk-landing--description">
          <Text type="subtitle1">
            Networking, global communications and a media revolution – a series
            of 19th-century technical developments facilitated totally new types
            of private and commercial communication. In just 200 years,
            groundbreaking inventions using electricity, codes, and cable
            technologies overcame spatial and temporal distances around the
            world. These include prototypes that may never have become fully
            marketable products but still significantly influenced further
            developments, civilian devices permanently changing daily life and
            some military technologies top secret in their own day. Today, we
            largely communicate via our smartphones – just one single device for
            everything from voice mails and emails to a jukebox and a coding and
            encoding module for banking services. In fractions of a second, we
            can contact the world's remotest places. Using objects in the Museum
            Foundation Post and Telecommunication collection, we take you down
            the road that led to today's omnipresent pocket-size communication
            device. On the way, you'll also find out about historical contexts,
            technical functionalities and how they relate to the present day.
          </Text>
        </div>
      </div>
      <div className="mfk-landing--btn" onClick={onClickAction}>
        <BiChevronsDown />
      </div>
    </div>
  );
};
