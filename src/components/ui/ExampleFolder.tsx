'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ExampleFolderProps {
  folder: string
  name: string
  desc: string
  type: string
  href: string
}

export default function ExampleFolder({ folder, name, desc, type, href }: ExampleFolderProps) {
  const lines = desc.split('\n')

  return (
    <motion.div
      className="w-full relative shadow-md bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      }}
    >
      <motion.div
        className="bg-[#5667B6] rounded-t-lg h-7 font-bold -z-10 absolute top-0 -translate-y-full left-4 py-1 pl-4 pr-3 text-white text-sm"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {folder}
        <div className="absolute -top-1 left-14 right-0 -z-20 h-full">
          <div className="bg-[#5667B6] h-full w-16 rounded-l-full rotate-45 transform origin-top-left"></div>
        </div>
      </motion.div>
      <motion.div
        className="bg-[#647AE1] rounded-t-lg py-2.5 text-white text-xl font-bold text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {name}
      </motion.div>

      <motion.div
        className="p-6 bg-[#F4F4F4] text-base rounded-b-lg text-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="mb-2"
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
          >
            {line}
          </motion.div>
        ))}
      </motion.div>

      {type === 'link' && (
        <motion.div
          className="p-4 bg-gray-100 flex justify-center"
          whileHover={{ backgroundColor: '#ebedf9' }}
          transition={{ duration: 0.2 }}
        >
          <motion.a
            href={href}
            className="bg-[#202F76] text-lg text-white py-2 px-4 rounded font-medium w-full text-center"
            whileHover={{
              scale: 1.03,
              backgroundColor: '#344297',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            제품 사이트 →
          </motion.a>
        </motion.div>
      )}
    </motion.div>
  )
}
