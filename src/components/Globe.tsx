"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { FaJsSquare, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiPostgresql, SiGithub, SiMongodb } from "react-icons/si";

function OrbitingSkillIcons() {
  const orbitRefs = useRef<Array<THREE.Group | null>>([]);

  const icons = [
    { Icon: SiReact, color: "#61DAFB" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: FaJsSquare, color: "#F7DF1E" },
    { Icon: SiNextdotjs, color: "#9effb8" },
    { Icon: SiNodedotjs, color: "#3C873A" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: FaAws, color: "#FF9900" },
    { Icon: SiTailwindcss, color: "#06B6D4" },
    { Icon: SiPostgresql, color: "#336791" },
    { Icon: SiGithub, color: "#8bbf99" },
  ];

  const orbitConfigs = useMemo(() => {
    const baseRadius = 0.80 ;
    return icons.map((_, idx) => {
      const lane = idx % 4;
      const radius = baseRadius + lane * 0.045;
      const tiltX = (-30 + lane * 20) * (Math.PI / 180);
      const tiltZ = (idx * 137.5 * Math.PI) / 180;
      const phase = (idx / icons.length) * Math.PI * 2;
      const speed = 0.35;
      return { radius, tiltX, tiltZ, phase, speed };
    });
  }, []);

  useFrame((_, delta) => {
    orbitRefs.current.forEach((orbitGroup, idx) => {
      if (!orbitGroup) return;
      orbitGroup.rotation.y += delta * orbitConfigs[idx].speed;
    });
  });

  return (
    <group>
      {icons.map(({ Icon, color }, idx) => {
        const orbit = orbitConfigs[idx];
        return (
          <group key={idx} rotation={[orbit.tiltX, 0, orbit.tiltZ]}>
            <group
              ref={(el) => {
                orbitRefs.current[idx] = el;
              }}
              rotation={[0, orbit.phase, 0]}
            >
              {Array.from({ length: 80 }).map((_, tailIdx) => {
                const t = tailIdx;
                const tailLength = 80;
                const opacity = 0.85 * (1 - tailIdx / tailLength);
                const scale = 0.0048 * (1 - tailIdx / (tailLength + 20));
                return (
                  <group key={tailIdx} rotation={[0, -t * 0.015, 0]}>
                    <mesh position={[orbit.radius, 0, 0]} scale={scale}>
                      <sphereGeometry args={[1, 8, 8]} />
                      <meshBasicMaterial color="#ffbc57" transparent opacity={opacity} />
                    </mesh>
                  </group>
                );
              })}
              <Html position={[orbit.radius, 0, 0]} sprite>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent leading-none">
                  <Icon size={23} color={color} />
                </div>
              </Html>
            </group>
          </group>
        );
      })}
    </group>
  );
}

function DottedGlobe() {
  const globeRef = useRef<THREE.Group>(null);

  const dotPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    const radius = 0.72;

    for (let lat = -75; lat <= 75; lat += 15) {
      for (let lng = -180; lng < 180; lng += 15) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lng + 180) * (Math.PI / 180);
        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        positions.push([x, y, z]);
      }
    }

    return positions;
  }, []);

  useFrame(() => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y += 0;
  });

  return (
    <group ref={globeRef}>
      <Sphere args={[0.7, 64, 64]}>
        <meshStandardMaterial
          color="#0a2b1f"
          emissive="#0f5038"
          emissiveIntensity={0.35}
          transparent
          opacity={0.18}
          metalness={0.1}
          roughness={0.6}
        />
      </Sphere>

      <Sphere args={[0.705, 64, 64]}>
        <meshBasicMaterial color="#1cd47f" wireframe transparent opacity={0.22} />
      </Sphere>

      {dotPositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.006, 6, 6]} />
          <meshBasicMaterial color="#3dfc9f" transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

export function Globe() {
  return (
    <div className="mx-auto h-[35rem] w-full max-w-full bg-transparent">
      <Canvas
        camera={{ position: [0, 0, 3.05], fov: 48 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.35} color="#2cff9d" />
        <directionalLight position={[1.8, 2, 2]} intensity={0.7} color="#d7ffe9" />
        <pointLight position={[-2, -1.5, -2]} intensity={0.65} color="#2cff9d" />

        <DottedGlobe />
        <OrbitingSkillIcons />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
