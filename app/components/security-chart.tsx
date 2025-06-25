"use client"

import { useState, useEffect } from "react"

export default function SecurityChart() {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    // Generate sample data for the last 24 hours
    const generateData = () => {
      return Array.from({ length: 24 }, () => Math.floor(Math.random() * 100))
    }

    setData(generateData())

    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev.slice(1), Math.floor(Math.random() * 100)]
        return newData
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const maxValue = Math.max(...data)

  return (
    <div className="h-64 flex items-end space-x-1">
      {data.map((value, index) => (
        <div
          key={index}
          className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
          style={{
            height: `${(value / maxValue) * 100}%`,
            minHeight: "4px",
          }}
          title={`Hour ${index}: ${value} incidents`}
        />
      ))}
    </div>
  )
}
