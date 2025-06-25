"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Activity, Zap, Target, TrendingUp } from "lucide-react"

export default function PerformanceMetrics() {
  const modelMetrics = {
    accuracy: 97.8,
    precision: 97.9,
    recall: 97.6,
    f1Score: 97.8,
    trainingTime: 5.5,
    predictionTime: 0.2,
  }

  const systemPerformance = {
    throughput: 1247,
    latency: 23,
    uptime: 99.9,
    errorRate: 0.1,
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Activity className="h-5 w-5 mr-2 text-green-400" />
          Performance Metrics
        </CardTitle>
        <CardDescription className="text-slate-400">ML model and system performance indicators</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* ML Model Performance */}
        <div>
          <h4 className="text-white font-medium mb-3 flex items-center">
            <Target className="h-4 w-4 mr-2 text-blue-400" />
            ML Model Metrics
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Accuracy</span>
                <span className="text-white font-medium">{modelMetrics.accuracy}%</span>
              </div>
              <Progress value={modelMetrics.accuracy} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Precision</span>
                <span className="text-white font-medium">{modelMetrics.precision}%</span>
              </div>
              <Progress value={modelMetrics.precision} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Recall</span>
                <span className="text-white font-medium">{modelMetrics.recall}%</span>
              </div>
              <Progress value={modelMetrics.recall} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">F1-Score</span>
                <span className="text-white font-medium">{modelMetrics.f1Score}%</span>
              </div>
              <Progress value={modelMetrics.f1Score} className="h-2" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-3 rounded-lg bg-slate-700/50 border border-slate-600">
              <div className="text-sm text-slate-300">Training Time</div>
              <div className="text-lg font-bold text-white">{modelMetrics.trainingTime}s</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-700/50 border border-slate-600">
              <div className="text-sm text-slate-300">Prediction Time</div>
              <div className="text-lg font-bold text-white">{modelMetrics.predictionTime}ms</div>
            </div>
          </div>
        </div>

        {/* System Performance */}
        <div>
          <h4 className="text-white font-medium mb-3 flex items-center">
            <Zap className="h-4 w-4 mr-2 text-yellow-400" />
            System Performance
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-100 text-sm">Throughput</span>
                <TrendingUp className="h-4 w-4 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">{systemPerformance.throughput}</div>
              <div className="text-xs text-green-300">requests/min</div>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100 text-sm">Latency</span>
                <Activity className="h-4 w-4 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">{systemPerformance.latency}ms</div>
              <div className="text-xs text-blue-300">avg response time</div>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-100 text-sm">Uptime</span>
                <Badge className="bg-green-600 text-white text-xs">Excellent</Badge>
              </div>
              <div className="text-2xl font-bold text-white">{systemPerformance.uptime}%</div>
              <div className="text-xs text-purple-300">last 30 days</div>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-orange-100 text-sm">Error Rate</span>
                <Badge className="bg-green-600 text-white text-xs">Low</Badge>
              </div>
              <div className="text-2xl font-bold text-white">{systemPerformance.errorRate}%</div>
              <div className="text-xs text-orange-300">last 24 hours</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
