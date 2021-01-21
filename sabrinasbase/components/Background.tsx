import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import "../styles/components/Background.module.scss";

const Background = () => {
  const [height, setHeight] = useState(0);

  useEffect(() =>{
    setHeight(window.innerHeight - 10);
  })

  return (
    <div className="background">
      <Particles
        height={height}
        options={{
          background: {
            color: {
              value: "rgb(255, 255, 255)",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#FFFF00", "#f00", "#0f0", "#00f"],
            },
            links: {
              color: "#A0A0A0",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 90,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["triangle", "square", "circle"],
            },
            size: {
              random: true,
              value: 8,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background;
