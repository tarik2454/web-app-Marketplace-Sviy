export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case '':
      return <svg></svg>;

    default:
      return 'SVG not found';
  }
};
