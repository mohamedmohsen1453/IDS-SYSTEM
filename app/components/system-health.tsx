"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Server, Database, Cpu, HardDrive, Wifi, Activity, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

export default function SystemHealth() {
  const systemMetrics = {
    cpu: { usage: 34, status: "normal" },
    memory: { usage: 67, status: "warning" },
    disk: { usage: 23, status: "normal" },
    network: { usage: 45, status: "normal" },
  }

  const services = [
    { name: "ML Detection Engine", status: "running", uptime: "99.9%" },
    { name: "Database Server", status: "running", uptime: "99.8%" },
    { name: "API Gateway", status: "running", uptime: "99.7%" },
    { name: "Alert System", status: "running", uptime: "99.9%" },
    { name: "Log Aggregator", status: "warning", uptime: "98.5%" },
    { name: "Backup Service", status: "stopped", uptime: "0%" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "running":
        return <CheckCircle className="h-4 w-4 text-green-400" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />
      case "stopped":
        return <XCircle className="h-4 w-4 text-red-400" />
      default:
        return <Activity className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "running":
        return "bg-green-600 text-white"
      case "warning":
        return "bg-yellow-600 text-white"
      case "stopped":
        return "bg-red-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const getProgressColor = (usage: number) => {
    if (usage > 80) return "bg-red-500"
    if (usage > 60) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <div className="space-y-6">
      {/* System Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Cpu className="h-5 w-5 text-blue-400" />
              <Badge className={getStatusColor(systemMetrics.cpu.status)}>{systemMetrics.cpu.status}</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">CPU Usage</span>
                <span className="text-white">{systemMetrics.cpu.usage}%</span>
              </div>
              <Progress value={systemMetrics.cpu.usage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Server className="h-5 w-5 text-purple-400" />
              <Badge className={getStatusColor(systemMetrics.memory.status)}>{systemMetrics.memory.status}</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Memory</span>
                <span className="text-white">{systemMetrics.memory.usage}%</span>
              </div>
              <Progress value={systemMetrics.memory.usage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <HardDrive className="h-5 w-5 text-green-400" />
              <Badge className={getStatusColor(systemMetrics.disk.status)}>{systemMetrics.disk.status}</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Disk Usage</span>
                <span className="text-white">{systemMetrics.disk.usage}%</span>
              </div>
              <Progress value={systemMetrics.disk.usage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Wifi className="h-5 w-5 text-orange-400" />
              <Badge className={getStatusColor(systemMetrics.network.status)}>{systemMetrics.network.status}</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Network I/O</span>
                <span className="text-white">{systemMetrics.network.usage}%</span>
              </div>
              <Progress value={systemMetrics.network.usage} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services Status */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Database className="h-5 w-5 mr-2 text-blue-400" />
            System Services
          </CardTitle>
          <CardDescription className="text-slate-400">Status and uptime of critical system services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(service.status)}
                    <span className="text-white font-medium">{service.name}</span>
                  </div>
                  <Badge className={getStatusColor(service.status)}>{service.status}</Badge>
                </div>
                <div className="text-sm text-slate-400">
                  Uptime: <span className="text-slate-200">{service.uptime}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Alerts */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">System Alerts</CardTitle>
          <CardDescription className="text-slate-400">Current system health alerts and warnings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="bg-yellow-900/20 border-yellow-600">
            <AlertTriangle className="h-4 w-4 text-yellow-400" />
            <AlertDescription className="text-yellow-100">
              Memory usage is above 60%. Consider optimizing resource allocation.
            </AlertDescription>
          </Alert>

          <Alert className="bg-red-900/20 border-red-600">
            <XCircle className="h-4 w-4 text-red-400" />
            <AlertDescription className="text-red-100">
              Backup service is currently stopped. Manual intervention required.
            </AlertDescription>
          </Alert>

          <Alert className="bg-blue-900/20 border-blue-600">
            <CheckCircle className="h-4 w-4 text-blue-400" />
            <AlertDescription className="text-blue-100">
              All critical security services are running normally.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
