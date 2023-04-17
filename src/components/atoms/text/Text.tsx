type Props = {
  /**
   * Text value
   */
  children: string;
};

export const Text = (props: Props) => {
  const { children } = props;

  return <p>{children}</p>;
};
