"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Globe, AlertTriangle } from "lucide-react"

export default function ThreatMap() {
  const threatLocations = [
    { country: "United States", city: "New York", threats: 45, severity: "high", lat: 40.7128, lng: -74.006 },
    { country: "China", city: "Beijing", threats: 67, severity: "critical", lat: 39.9042, lng: 116.4074 },
    { country: "Russia", city: "Moscow", threats: 34, severity: "medium", lat: 55.7558, lng: 37.6176 },
    { country: "Germany", city: "Berlin", threats: 23, severity: "medium", lat: 52.52, lng: 13.405 },
    { country: "Brazil", city: "São Paulo", threats: 19, severity: "low", lat: -23.5505, lng: -46.6333 },
    { country: "India", city: "Mumbai", threats: 41, severity: "high", lat: 19.076, lng: 72.8777 },
    { country: "Japan", city: "Tokyo", threats: 28, severity: "medium", lat: 35.6762, lng: 139.6503 },
    { country: "United Kingdom", city: "London", threats: 31, severity: "medium", lat: 51.5074, lng: -0.1278 },
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

  const totalThreats = threatLocations.reduce((sum, location) => sum + location.threats, 0)
  const criticalLocations = threatLocations.filter((l) => l.severity === "critical").length
  const highRiskLocations = threatLocations.filter((l) => l.severity === "high").length

  return (
    <div className="space-y-6">
      {/* Geographic Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-red-900/50 to-red-800/30 border-red-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm">Global Threats</p>
                <p className="text-2xl font-bold text-white">{totalThreats}</p>
              </div>
              <Globe className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 border-orange-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Critical Zones</p>
                <p className="text-2xl font-bold text-white">{criticalLocations}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 border-yellow-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm">High Risk Areas</p>
                <p className="text-2xl font-bold text-white">{highRiskLocations}</p>
              </div>
              <MapPin className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* World Map Visualization */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Globe className="h-5 w-5 mr-2 text-blue-400" />
            Global Threat Map
          </CardTitle>
          <CardDescription className="text-slate-400">
            Geographic distribution of security threats and attacks
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Simplified world map representation */}
          <div className="relative bg-slate-900 rounded-lg p-8 h-96 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900"></div>

            {/* Threat markers */}
            {threatLocations.map((location, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${((location.lng + 180) / 360) * 100}%`,
                  top: `${((90 - location.lat) / 180) * 100}%`,
                }}
              >
                <div className="relative group">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      location.severity === "critical"
                        ? "bg-red-500 animate-pulse"
                        : location.severity === "high"
                          ? "bg-orange-500"
                          : location.severity === "medium"
                            ? "bg-yellow-500"
                            : "bg-blue-500"
                    } shadow-lg`}
                  ></div>

                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                    <div className="font-medium">
                      {location.city}, {location.country}
                    </div>
                    <div>{location.threats} threats detected</div>
                    <div className="capitalize">{location.severity} severity</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-slate-800/80 rounded-lg p-3 space-y-2">
              <div className="text-white text-sm font-medium mb-2">Threat Levels</div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-xs text-slate-300">Critical</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-xs text-slate-300">High</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-xs text-slate-300">Medium</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-slate-300">Low</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Threat Locations List */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Threat Locations</CardTitle>
          <CardDescription className="text-slate-400">
            Detailed breakdown of threats by geographic location
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {threatLocations.map((location, index) => (
              <div key={index} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <span className="text-white font-medium">{location.city}</span>
                    <span className="text-slate-400">{location.country}</span>
                  </div>
                  <Badge className={getSeverityColor(location.severity)}>{location.severity}</Badge>
                </div>
                <div className="text-sm text-slate-300">
                  <span className="font-medium">{location.threats}</span> threats detected
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Coordinates: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
