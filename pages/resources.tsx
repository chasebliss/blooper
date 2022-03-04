import Heading from 'components/Heading';
import Grid from 'components/Grid';

import { ResourcesParticles } from 'styles/particles';
import { useTheme } from 'next-themes';

const headingContent = `
# Resources

Blooper was designed to encourage free, experimental, and personalized looping. And with great freedom comes great confusion, sometimes.

The resources below should help you get comfortable.
`;

export const Resources = () => {
  const { theme } = useTheme();

  return (
    <div className="lg:p-16 flex flex-col items-center">
      <Heading content={headingContent} />
      <Grid />
      {theme === 'dark' && <ResourcesParticles />}
    </div>
  );
};

export default Resources;
