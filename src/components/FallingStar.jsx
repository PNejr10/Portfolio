import '../index.css'; 

const FallingStars = () => {
  const numberOfStars = 50;

  const getRandomSize = () => {
    const sizes = ['small', 'medium', 'large'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const stars = Array.from({ length: numberOfStars }, (_, index) => {
    const sizeClass = getRandomSize();
    const leftPosition = Math.random() * 100;
    const animationDuration = Math.random() * 15 + 3 + 's';
    const animationDelay = Math.random() * 5 + 's';

    return (
      <div
        key={index}
        className={`star ${sizeClass}`}
        style={{
          left: `${leftPosition}vw`,
          animationDuration,
          animationDelay,
          zIndex: 20, 
        }}
      />
    );
  });

  return <>{stars}</>;
};

export default FallingStars;
