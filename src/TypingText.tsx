import { Typography } from "antd";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const { Title } = Typography

interface TypingTextProps {
    text: string
}
export const TypingText = ({ text }:TypingTextProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [inView, setInView] = useState(false);
    const textRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        },
        { threshold: 0.5 } // Adjust this threshold as needed
      );
      
      if (textRef.current) {
        observer.observe(textRef.current);
      }
  
      return () => {
        if (textRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(textRef.current);
        }
      };
    }, []);
  
    useEffect(() => {
      if (inView) {
        setDisplayedText(""); // Reset displayed text
        setCharIndex(0); // Reset character index
      }
    }, [inView]);
  
    useEffect(() => {
      if (inView && charIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[charIndex]);
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }, [charIndex, text, inView]);
  
    return (
      <motion.span
        ref={textRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.2 }}
      >
        <Title style={{ color: "#fff" }} level={1}>
          {displayedText}
        </Title>
      </motion.span>
    );
  };