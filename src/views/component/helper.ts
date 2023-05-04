export const setDate = (start: string, end: string | undefined) =>
  end ? `${start} - ${end}` : start;
