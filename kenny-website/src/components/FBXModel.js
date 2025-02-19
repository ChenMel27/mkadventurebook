import { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextureLoader } from "three";

export default function FBXModel({ url, textureUrl }) {
  const fbx = useLoader(FBXLoader, url);
  const texture = useLoader(TextureLoader, textureUrl);
  const ref = useRef();

  useEffect(() => {
    if (fbx) {
      fbx.scale.set(0.01, 0.01, 0.01); // Adjust scale if needed
      fbx.traverse((child) => {
        if (child.isMesh) {
          child.material.map = texture;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [fbx, texture]);

  return <primitive object={fbx} ref={ref} />;
}
