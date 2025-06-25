"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Activity, AlertTriangle, Shield, Clock } from "lucide-react"

interface Incident {
  id: string
  type: string
  severity: "low" | "medium" | "high" | "critical"
  source: string
  timestamp: Date
  description: string
}

export default function RealTimeMonitor() {
  const [incidents, setIncidents] = useState<Incident[]>([])

  useEffect(() => {
    // Simulate real-time incidents
    const generateIncident = (): Incident => {
      const types = ["DoS Attack", "Malware", "Phishing", "Ransomware", "Brute Force", "SQL Injection"]
      const severities: ("low" | "medium" | "high" | "critical")[] = ["low", "medium", "high", "critical"]
      const sources = ["192.168.1.100", "10.0.0.50", "172.16.0.25", "203.0.113.1", "198.51.100.10"]

      return {
        id: Math.random().toString(36).substr(2, 9),
        type: types[Math.floor(Math.random() * types.length)],
        severity: severities[Math.floor(Math.random() * severities.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        timestamp: new Date(),
        description: `Detected suspicious activity from source IP`,
      }
    }

    const interval = setInterval(() => {
      setIncidents((prev) => {
        const newIncident = generateIncident()
        const updated = [newIncident, ...prev].slice(0, 10) // Keep only last 10
        return updated
      })
    }, 3000)

    // Initial incidents
    setIncidents(Array.from({ length: 5 }, generateIncident))

    return () => clearInterval(interval)
  }, [])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-600 text-white"
      case "high":
        return "bg-orange-600 text-white"
      case "medium":
        return "bg-yellow-600 text-white"
      case "low":
        return "bg-blue-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
      case "high":
        return <AlertTriangle className="h-3 w-3" />
      case "medium":
        return <Activity className="h-3 w-3" />
      case "low":
        return <Shield className="h-3 w-3" />
      default:
        return <Activity className="h-3 w-3" />
    }
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Activity className="h-5 w-5 mr-2 text-green-400 animate-pulse" />
          Real-Time Monitor
        </CardTitle>
        <CardDescription className="text-slate-400">Live security incidents and threats</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-3">
            {incidents.map((incident) => (
              <div
                key={incident.id}
                className="p-3 rounded-lg bg-slate-700/50 border border-slate-600 hover:bg-slate-700/70 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Badge className={getSeverityColor(incident.severity)}>
                      {getSeverityIcon(incident.severity)}
                      <span className="ml-1 capitalize">{incident.severity}</span>
                    </Badge>
                    <span className="text-sm font-medium text-white">{incident.type}</span>
                  </div>
                  <div className="flex items-center text-xs text-slate-400">
                    <Clock className="h-3 w-3 mr-1" />
                    {incident.timestamp.toLocaleTimeString()}
                  </div>
                </div>

                <div className="text-sm text-slate-300 mb-1">
                  Source: <span className="font-mono text-blue-300">{incident.source}</span>
                </div>

                <div className="text-xs text-slate-400">{incident.description}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
