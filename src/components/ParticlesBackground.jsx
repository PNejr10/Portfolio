// ParticleBackground.jsx
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = (main) => {
    console.log('Particles Initialized:', main);
  };

  const particlesLoaded = (container) => {
    console.log('Particles Loaded:', container);

    // Ensure container has methods or properties to access particles
    if (container) {
      // Check if the container object has the 'particles' or similar method
      console.log('Container methods:', Object.keys(container));
      
      // Use available methods or properties to get particle count
      try {
        if (container.particles) {
          console.log(`Number of particles: ${container.particles._array.length}`);
        } else {
          console.error('Particles property not found on container');
        }
      } catch (error) {
        console.error('Error accessing particles:', error);
      }
    } else {
      console.error('Container is not available');
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#080b12',  // Dark background
          },
        },
        particles: {
          color: {
            value: '#d1d1e9',  // Light color for particles
          },
          links: {
            color: '#d1d1e9',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,  // Ensure enough particles
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: 'star',  // Star shape for particles
          },
          size: {
            value: { min: 10, max: 100 },  // Adjust size range
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
