import { Space } from "antd"
import { useEffect, useState } from "react";

export const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          // Calculate if we're near the bottom of the page
          const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
          
          // Show or hide the footer based on scroll position
          if (scrolledToBottom) {
            setShowFooter(true);
          } else {
            setShowFooter(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        showFooter &&
        <Space
            style={{
                paddingBottom: 10,
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%",
                color: "white",
                textAlign: "left",
                marginLeft:10,
                opacity: showFooter ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
    pointerEvents: showFooter ? 'auto' : 'none',
            }}
        >
            Armughan Saeed . saeed@signatureapp.de . 0157 31 355 159 . Cologne,
            Germany  ♥
        </Space>
    )
}
