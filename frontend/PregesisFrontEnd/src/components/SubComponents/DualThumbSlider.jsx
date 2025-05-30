import { useState, useRef } from 'react';

const DualThumbSlider = ({ 
  min = 0, 
  max = 100, 
  initialValues = [25, 75], 
  onChange = () => {},
  className = "" 
}) => {
  const [values, setValues] = useState(initialValues);
  const [activeThumb, setActiveThumb] = useState(null);
  const sliderRef = useRef(null);

  const getPercentage = (value) => ((value - min) / (max - min)) * 100;

  const getValueFromPosition = (clientX) => {
    if (!sliderRef.current) return 0;
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    return Math.round(min + (percentage / 100) * (max - min));
  };

  const handleMouseDown = (thumbIndex) => (e) => {
    e.preventDefault();
    setActiveThumb(thumbIndex);
    
    const handleMouseMove = (e) => {
      const newValue = getValueFromPosition(e.clientX);
      const newValues = [...values];
      
      if (thumbIndex === 0) {
        newValues[0] = Math.max(min, Math.min(newValue, values[1]));
      } else {
        newValues[1] = Math.min(max, Math.max(newValue, values[0]));
      }
      
      setValues(newValues);
      onChange(newValues);
    };

    const handleMouseUp = () => {
      setActiveThumb(null);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const leftPercentage = getPercentage(values[0]);
  const rightPercentage = getPercentage(values[1]);

return (
    <div className={className} style={{ position: 'relative' }}>
        <div style={{ marginBottom: '10px', fontWeight: '' }}>
            Difficulty
        </div>
        <div
            ref={sliderRef}
            style={{
                position: 'relative',
                height: '8px',
                backgroundColor: '#9ca3af',
                borderRadius: '9999px'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    height: '100%',
                    backgroundColor: '#454545',
                    borderRadius: '9999px',
                    left: `${leftPercentage}%`,
                    width: `${rightPercentage - leftPercentage}%`
                }}
            />
            
            <div
                style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#000',
                    borderRadius: '50%',
                    cursor: 'grab',
                    transform: 'translate(-50%, -50%)',
                    left: `${leftPercentage}%`,
                    top: '50%'
                }}
                onMouseDown={handleMouseDown(0)}
            />
            
            <div
                style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#000',
                    borderRadius: '50%',
                    cursor: 'grab',
                    transform: 'translate(-50%, -50%)',
                    left: `${rightPercentage}%`,
                    top: '50%'
                }}
                onMouseDown={handleMouseDown(1)}
            />
        </div>
        <div style={{display:"flex" ,justifyContent:"space-between"}}>
            <div min={min} max={values[1]}>{Math.round(values[0]/10)}</div>
            <div min={values[0]} max={max}>{Math.round(values[1]/10)}</div>

        </div>
    </div>
);
};

export default DualThumbSlider;