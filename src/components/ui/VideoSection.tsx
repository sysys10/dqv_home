'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface YouTubeVideoProps {
  videoId: string
}

export default function VideoSection({ videoId = 'Mw_x4HYXHhI' }: YouTubeVideoProps) {
  return (
    <motion.div
      className="w-full mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      }}
    >
      <motion.div
        className="aspect-video w-full overflow-hidden rounded-lg shadow-lg"
        whileHover={{
          scale: 1.02,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </motion.div>
  )
}
