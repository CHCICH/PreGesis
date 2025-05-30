import React from 'react';

const Test = ({screenSize}) => {
  const ballData = [
    { text: "Prepare better.", delay: "0s" },
    { text: "Practice smarter.", delay: "0.7s" },
    { text: "Perform with confidence.", delay: "1.4s" }
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#f3f4f6',
      padding: '32px',
    }}>
      <div style={{
        display: 'flex',
        gap: screenSize <900 ? "10px": "48px",
        flexDirection:screenSize <900 ? "column": "row"
      }}>
        {ballData.map((ball, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div 
              style={{
                color: 'white',
                fontSize: '22px',
                fontWeight: '600',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                animation: `float 3s ease-in-out infinite`,
                animationDelay: ball.delay,
                height:"8vw"
              }}
            >
              {ball.text}
            </div>
            <div 
              style={{
                width: '4vw',
                height: '4vw',
                backgroundColor: 'rgb(222, 232, 241)',
                borderRadius: '50%',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                animation: `bounce 2s ease-in-out infinite`,
                animationDelay: ball.delay
              }}
            ></div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-15px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Test;