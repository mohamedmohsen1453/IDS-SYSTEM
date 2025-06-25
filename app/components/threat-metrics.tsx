"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Globe, Wifi, Lock, Zap, TrendingUp, TrendingDown } from "lucide-react"

export default function ThreatMetrics() {
  const metrics = [
    {
      name: "Malicious URLs",
      current: 156,
      total: 200,
      change: 12,
      trend: "up",
      icon: Globe,
      color: "text-red-400",
      bgColor: "bg-red-900/20",
    },
    {
      name: "IoT Attacks",
      current: 89,
      total: 150,
      change: -5,
      trend: "down",
      icon: Wifi,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
    },
    {
      name: "Ransomware",
      current: 23,
      total: 50,
      change: 8,
      trend: "up",
      icon: Lock,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
    },
    {
      name: "DoS Attacks",
      current: 67,
      total: 100,
      change: -3,
      trend: "down",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
    },
  ]

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Shield className="h-5 w-5 mr-2 text-blue-400" />
          Threat Metrics
        </CardTitle>
        <CardDescription className="text-slate-400">Real-time threat detection statistics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          const percentage = (metric.current / metric.total) * 100

          return (
            <div key={index} className={`p-4 rounded-lg ${metric.bgColor} border border-slate-600`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="text-sm font-medium text-slate-200">{metric.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-white">{metric.current}</span>
                  <Badge variant={metric.trend === "up" ? "destructive" : "secondary"} className="text-xs">
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(metric.change)}%
                  </Badge>
                </div>
              </div>
              <Progress value={percentage} className="h-2" />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>{metric.current} detected</span>
                <span>{percentage.toFixed(1)}% of capacity</span>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
