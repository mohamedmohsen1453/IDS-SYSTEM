"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Bell, AlertTriangle, CheckCircle, Eye } from "lucide-react"

export default function AlertsPanel() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: "Critical DoS Attack Detected",
      description: "High volume traffic from 192.168.1.100 targeting server infrastructure",
      severity: "critical",
      timestamp: "2024-01-15 14:30:25",
      status: "active",
      category: "security",
    },
    {
      id: 2,
      title: "Suspicious Login Attempts",
      description: "Multiple failed login attempts detected from IP 203.0.113.1",
      severity: "high",
      timestamp: "2024-01-15 14:25:10",
      status: "acknowledged",
      category: "authentication",
    },
    {
      id: 3,
      title: "Malware Signature Match",
      description: "Known malware signature detected in network traffic",
      severity: "high",
      timestamp: "2024-01-15 14:20:45",
      status: "active",
      category: "malware",
    },
    {
      id: 4,
      title: "Unusual Network Activity",
      description: "Abnormal data transfer patterns detected on port 443",
      severity: "medium",
      timestamp: "2024-01-15 14:15:30",
      status: "investigating",
      category: "network",
    },
    {
      id: 5,
      title: "System Resource Alert",
      description: "CPU usage exceeded 90% threshold on security server",
      severity: "medium",
      timestamp: "2024-01-15 14:10:15",
      status: "resolved",
      category: "system",
    },
  ])

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-red-400"
      case "acknowledged":
        return "text-yellow-400"
      case "investigating":
        return "text-blue-400"
      case "resolved":
        return "text-green-400"
      default:
        return "text-gray-400"
    }
  }

  const acknowledgeAlert = (id: number) => {
    setAlerts((prev) => prev.map((alert) => (alert.id === id ? { ...alert, status: "acknowledged" } : alert)))
  }

  const resolveAlert = (id: number) => {
    setAlerts((prev) => prev.map((alert) => (alert.id === id ? { ...alert, status: "resolved" } : alert)))
  }

  const activeAlerts = alerts.filter((alert) => alert.status === "active").length
  const criticalAlerts = alerts.filter((alert) => alert.severity === "critical").length

  return (
    <div className="space-y-6">
      {/* Alert Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-red-900/50 to-red-800/30 border-red-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm">Active Alerts</p>
                <p className="text-2xl font-bold text-white">{activeAlerts}</p>
              </div>
              <Bell className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 border-orange-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Critical</p>
                <p className="text-2xl font-bold text-white">{criticalAlerts}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 border-yellow-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm">Acknowledged</p>
                <p className="text-2xl font-bold text-white">
                  {alerts.filter((a) => a.status === "acknowledged").length}
                </p>
              </div>
              <Eye className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Resolved</p>
                <p className="text-2xl font-bold text-white">{alerts.filter((a) => a.status === "resolved").length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Bell className="h-5 w-5 mr-2 text-red-400" />
            Security Alerts
          </CardTitle>
          <CardDescription className="text-slate-400">Real-time security alerts and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-4">
              {alerts.map((alert) => (
                <Alert key={alert.id} className="bg-slate-700/50 border-slate-600">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className={getSeverityColor(alert.severity)}>{alert.severity}</Badge>
                        <Badge variant="outline" className="bg-slate-600 border-slate-500 text-slate-200">
                          {alert.category}
                        </Badge>
                        <span className={`text-sm ${getStatusColor(alert.status)}`}>{alert.status}</span>
                      </div>

                      <h4 className="text-white font-medium mb-1">{alert.title}</h4>
                      <AlertDescription className="text-slate-300 mb-2">{alert.description}</AlertDescription>

                      <p className="text-xs text-slate-400">{alert.timestamp}</p>
                    </div>

                    <div className="flex space-x-2 ml-4">
                      {alert.status === "active" && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => acknowledgeAlert(alert.id)}
                            className="bg-yellow-600 border-yellow-500 text-white hover:bg-yellow-700"
                          >
                            Acknowledge
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => resolveAlert(alert.id)}
                            className="bg-green-600 border-green-500 text-white hover:bg-green-700"
                          >
                            Resolve
                          </Button>
                        </>
                      )}

                      {alert.status === "acknowledged" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => resolveAlert(alert.id)}
                          className="bg-green-600 border-green-500 text-white hover:bg-green-700"
                        >
                          Resolve
                        </Button>
                      )}
                    </div>
                  </div>
                </Alert>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
