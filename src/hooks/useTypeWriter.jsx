import { useState, useEffect,useRef} from 'react';
import { cn } from '../lib/utils';

export const useTypewriter = (text, speed= 100) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(typingTimeout);
    }
  }, [index, text, speed]);

  return displayText;
};


const Typewriter = ({ text, speed = 100,className }) => {
  const displayText = useTypewriter(text, speed);
  const containerRef = useRef(null);

    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, [displayText]);
  
  return(
        <div className='w-full h-auto bg-white commonShadow rounded-2xl flex flex-col justify-center items-start gap-3 py-4 px-1 '>
          <h1 className='text-2xl font-semibold text-zinc-900 px-7'>Caption:</h1>
          <div ref={containerRef} className='scroll-container typingConatiner w-full h-[320px] overflow-scroll px-7  '>
            <p className={cn("text-zinc-700",className)}>{displayText}</p>
          </div>
        </div>
        );
};

export default Typewriter;
