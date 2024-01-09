/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function animation({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 0.1, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 3 }}
      className="relative flex justify-center items-center z-10"
    >
      <div className="absolute border border-red-500 rounded-full h-[100px] w-[100px] mt-5 animate-ping" />
      <div className="absolute border border-red-500 rounded-full h-[150px] w-[150px] mt-5" />
      <div className="absolute border border-red-500 rounded-full h-[250px] w-[250px] mt-5" />
      <div className="absolute border border-red-500 rounded-full h-[300px] w-[300px] mt-5 animate-pulse" />
      <div className="absolute border border-red-500 rounded-full h-[350px] w-[350px] mt-5" />
      {' '}

    </motion.div>
  );
}

export default animation;
