import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = (main) => {
    console.log('Particles Initialized:', main);
  };

  const particlesLoaded = (container) => {
    console.log('Particles Loaded:', container);


    if (container) {
      console.log('Container methods:', Object.keys(container));
    
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
            value: '#080b12', 
          },
        },
        particles: {
          color: {
            value: '#d1d1e9', 
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
            speed: 5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 200, 
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 5,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: 'star', 
          },
          size: {
            value: { min: 50, max: 1000 },  
            animation: {
              enable: true,
              speed: 10,
              minimumValue: 10,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
