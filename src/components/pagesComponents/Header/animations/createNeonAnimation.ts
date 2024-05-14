import { usePrefersReducedMotion } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const neonEffect = keyframes`
  from { text-shadow: none; }
  to { text-shadow: 0 0 6px rgba(202, 228, 225, 0.98), 0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(191, 226, 255, 0.58), 0 0 22px rgba(191, 226, 255, 0.84), 0 0 38px rgba(191, 226, 255, 0.88), 0 0 60px #FFF }
`;
export const createNeonAnimation = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${neonEffect} 4s ease-in-out infinite alternate`;
  return animation;
};
