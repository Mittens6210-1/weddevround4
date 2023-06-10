import{ useState, useEffect } from 'react';

const ColorToggle = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleBackgroundColor = () => {
    setBackgroundColor(generateRandomColor());
  };

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--random-color', backgroundColor);
  }, [backgroundColor]);

  return (
    <div className="color-toggle">
      <button className="btn" onClick={toggleBackgroundColor}>
        Toggle Background Color
      </button>
    </div>
  );
};

export default ColorToggle;
