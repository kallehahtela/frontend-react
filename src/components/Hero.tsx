// src/components/Hero.tsx
import Button from '../../src/ui/Button';
import BorderButton from '../ui/BorderButton';

type HeroProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, className }) => {
  const titleParts = title.split('<br />');

  return (
    <div className={`relative flex flex-col items-center text-center py-8${className || ''}`}>
      <h4 className="text-4xl font-bold text-left">
        {titleParts.map((part, index) => (
          <span key={index}>
            {part}
            {index < titleParts.length - 1 && <br />}
          </span>
        ))}
      </h4>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}

      {/* Button Styles */}
      <div className='flex'>
        <div className='flex gap-4 mr-12 mt-5'>
          <Button title="Read More"/>
          <BorderButton title="Let's Work"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
