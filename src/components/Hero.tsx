// src/components/Hero.tsx
import Button from '../../src/ui/Button';

type HeroProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, className }) => (
  <div className={`flex flex-col items-center text-center py-8 ${className || ''}`}>
    <h4 className="text-4xl font-bold">{title}</h4>
    {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
    <Button title="Read More" className="mt-6" />
  </div>
);

export default Hero;
