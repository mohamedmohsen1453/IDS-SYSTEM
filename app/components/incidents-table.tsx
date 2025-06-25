"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Eye, Shield } from "lucide-react"

export default function IncidentsTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const incidents = [
    {
      id: "INC-001",
      timestamp: "2024-01-15 14:30:25",
      type: "DoS Attack",
      severity: "critical",
      sourceIP: "192.168.1.100",
      targetIP: "10.0.0.50",
      status: "active",
      confidence: 97.8,
    },
    {
      id: "INC-002",
      timestamp: "2024-01-15 14:28:15",
      type: "Malware",
      severity: "high",
      sourceIP: "203.0.113.1",
      targetIP: "172.16.0.25",
      status: "blocked",
      confidence: 89.2,
    },
    {
      id: "INC-003",
      timestamp: "2024-01-15 14:25:10",
      type: "Phishing",
      severity: "medium",
      sourceIP: "198.51.100.10",
      targetIP: "192.168.0.15",
      status: "investigating",
      confidence: 76.5,
    },
    {
      id: "INC-004",
      timestamp: "2024-01-15 14:22:45",
      type: "Brute Force",
      severity: "high",
      sourceIP: "172.217.1.100",
      targetIP: "10.0.0.25",
      status: "resolved",
      confidence: 94.1,
    },
    {
      id: "INC-005",
      timestamp: "2024-01-15 14:20:30",
      type: "SQL Injection",
      severity: "critical",
      sourceIP: "209.85.200.50",
      targetIP: "192.168.1.200",
      status: "active",
      confidence: 98.7,
    },
  ]

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
        return "bg-red-100 text-red-800 border-red-200"
      case "blocked":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "investigating":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "resolved":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredIncidents = incidents.filter(
    (incident) =>
      incident.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.sourceIP.includes(searchTerm),
  )

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Shield className="h-5 w-5 mr-2 text-blue-400" />
          Security Incidents
        </CardTitle>
        <CardDescription className="text-slate-400">
          Detailed view of all security incidents and threats
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search incidents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
          </div>
          <Button variant="outline" className="bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="rounded-md border border-slate-600 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-700">
              <TableRow className="border-slate-600">
                <TableHead className="text-slate-200">Incident ID</TableHead>
                <TableHead className="text-slate-200">Timestamp</TableHead>
                <TableHead className="text-slate-200">Type</TableHead>
                <TableHead className="text-slate-200">Severity</TableHead>
                <TableHead className="text-slate-200">Source IP</TableHead>
                <TableHead className="text-slate-200">Target IP</TableHead>
                <TableHead className="text-slate-200">Status</TableHead>
                <TableHead className="text-slate-200">Confidence</TableHead>
                <TableHead className="text-slate-200">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredIncidents.map((incident) => (
                <TableRow key={incident.id} className="border-slate-600 hover:bg-slate-700/50">
                  <TableCell className="font-mono text-blue-300">{incident.id}</TableCell>
                  <TableCell className="text-slate-300">{incident.timestamp}</TableCell>
                  <TableCell className="text-white font-medium">{incident.type}</TableCell>
                  <TableCell>
                    <Badge className={getSeverityColor(incident.severity)}>{incident.severity}</Badge>
                  </TableCell>
                  <TableCell className="font-mono text-slate-300">{incident.sourceIP}</TableCell>
                  <TableCell className="font-mono text-slate-300">{incident.targetIP}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(incident.status)}>
                      {incident.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-white font-medium">{incident.confidence}%</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-600">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
