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
        <div className='w-[840px] h-[380px] bg-zinc-800/80 rounded-2xl '>
          <div ref={containerRef} className='typingConatiner w-full h-full overflow-scroll p-4 '>
            <p className={cn("",className)}>{displayText}</p>
          </div>
        </div>
        );
};

export default Typewriter;
