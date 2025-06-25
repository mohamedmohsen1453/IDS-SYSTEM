"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Shield,
  AlertTriangle,
  Activity,
  Users,
  Server,
  Lock,
  Zap,
  Target,
  MapPin,
  Bell,
  Download,
  RefreshCw,
} from "lucide-react"
import ThreatMetrics from "./components/threat-metrics"
import RealTimeMonitor from "./components/real-time-monitor"
import SecurityChart from "./components/security-chart"
import IncidentsTable from "./components/incidents-table"
import AlertsPanel from "./components/alerts-panel"
import SystemHealth from "./components/system-health"
import UserManagement from "./components/user-management"
import ThreatMap from "./components/threat-map"
import PerformanceMetrics from "./components/performance-metrics"

export default function AdminisDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isConnected, setIsConnected] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  useEffect(() => {
    // Simulate connection status
    setIsConnected(true)
    const interval = setInterval(() => {
      setLastUpdate(new Date())
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const refreshData = () => {
    setLastUpdate(new Date())
    // Trigger refresh for all components
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <div>
                <h1 className="text-xl font-bold text-white">Adminis Security Platform</h1>
                <p className="text-xs text-slate-400">Advanced Threat Detection & Analysis</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <div className={`h-2 w-2 rounded-full ${isConnected ? "bg-green-400" : "bg-red-400"}`} />
              <span>{isConnected ? "Connected" : "Disconnected"}</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={refreshData}
              className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>

            <Badge variant="outline" className="bg-slate-800 border-slate-600 text-slate-200">
              Last Update: {lastUpdate.toLocaleTimeString()}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-8 bg-slate-800 border-slate-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">
              <Activity className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="threats" className="data-[state=active]:bg-red-600">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Threats
            </TabsTrigger>
            <TabsTrigger value="incidents" className="data-[state=active]:bg-orange-600">
              <Target className="h-4 w-4 mr-2" />
              Incidents
            </TabsTrigger>
            <TabsTrigger value="alerts" className="data-[state=active]:bg-yellow-600">
              <Bell className="h-4 w-4 mr-2" />
              Alerts
            </TabsTrigger>
            <TabsTrigger value="map" className="data-[state=active]:bg-green-600">
              <MapPin className="h-4 w-4 mr-2" />
              Geo Map
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-purple-600">
              <Server className="h-4 w-4 mr-2" />
              System
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-indigo-600">
              <Users className="h-4 w-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-pink-600">
              <Download className="h-4 w-4 mr-2" />
              Reports
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-100">Total Threats</CardTitle>
                  <Shield className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">1,247</div>
                  <p className="text-xs text-blue-300">+12% from last hour</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-900/50 to-red-800/30 border-red-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-red-100">Critical Alerts</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">23</div>
                  <p className="text-xs text-red-300">+3 in last 10 min</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-100">Blocked IPs</CardTitle>
                  <Lock className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">89</div>
                  <p className="text-xs text-green-300">Auto-blocked today</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-100">Detection Rate</CardTitle>
                  <Zap className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">97.8%</div>
                  <p className="text-xs text-purple-300">ML Model Accuracy</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ThreatMetrics />
              <RealTimeMonitor />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-2 bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Security Events Timeline</CardTitle>
                  <CardDescription className="text-slate-400">
                    Real-time threat detection over the last 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SecurityChart />
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">System Status</CardTitle>
                  <CardDescription className="text-slate-400">Current system health metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">CPU Usage</span>
                      <span className="text-white">34%</span>
                    </div>
                    <Progress value={34} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Memory</span>
                      <span className="text-white">67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Network I/O</span>
                      <span className="text-white">23%</span>
                    </div>
                    <Progress value={23} className="h-2" />
                  </div>

                  <div className="pt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">ML Model</span>
                      <Badge className="bg-green-600 text-white">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Auto Detection</span>
                      <Badge className="bg-green-600 text-white">Running</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Database</span>
                      <Badge className="bg-green-600 text-white">Connected</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Threats Tab */}
          <TabsContent value="threats" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <ThreatMetrics />
              <PerformanceMetrics />
            </div>
            <SecurityChart />
          </TabsContent>

          {/* Incidents Tab */}
          <TabsContent value="incidents" className="space-y-6">
            <IncidentsTable />
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <AlertsPanel />
          </TabsContent>

          {/* Map Tab */}
          <TabsContent value="map" className="space-y-6">
            <ThreatMap />
          </TabsContent>

          {/* System Tab */}
          <TabsContent value="system" className="space-y-6">
            <SystemHealth />
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <UserManagement />
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Generate Security Reports</CardTitle>
                <CardDescription className="text-slate-400">
                  Create comprehensive security analysis reports
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF Report
                  </Button>
                  <Button variant="outline" className="bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600">
                    <Download className="h-4 w-4 mr-2" />
                    Export LaTeX Report
                  </Button>
                </div>

                <Alert className="bg-slate-700/50 border-slate-600">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle className="text-white">Report Generation</AlertTitle>
                  <AlertDescription className="text-slate-300">
                    Reports include threat analysis, incident summaries, and security recommendations.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
