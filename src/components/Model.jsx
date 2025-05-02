"use client";

import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export default function Model() {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions["Experiment"];
    if (action) {
      action.reset().play().setLoop(THREE.LoopRepeat, Infinity);
    }
  }, [actions]);

  return <primitive ref={group} object={scene} />;
}
