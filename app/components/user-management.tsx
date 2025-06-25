"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Plus, Edit, Trash2, Shield, Eye, Settings } from "lucide-react"

export default function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "admin",
      email: "admin@adminis.com",
      role: "admin",
      status: "active",
      lastLogin: "2024-01-15 14:30:25",
      permissions: ["read", "write", "admin"],
    },
    {
      id: 2,
      username: "analyst",
      email: "analyst@adminis.com",
      role: "analyst",
      status: "active",
      lastLogin: "2024-01-15 13:45:10",
      permissions: ["read", "write"],
    },
    {
      id: 3,
      username: "viewer",
      email: "viewer@adminis.com",
      role: "viewer",
      status: "active",
      lastLogin: "2024-01-15 12:20:45",
      permissions: ["read"],
    },
    {
      id: 4,
      username: "security_team",
      email: "security@adminis.com",
      role: "analyst",
      status: "inactive",
      lastLogin: "2024-01-14 16:15:30",
      permissions: ["read", "write"],
    },
  ])

  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    role: "viewer",
    password: "",
  })

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-600 text-white"
      case "analyst":
        return "bg-blue-600 text-white"
      case "viewer":
        return "bg-green-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "inactive":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin":
        return <Shield className="h-4 w-4" />
      case "analyst":
        return <Settings className="h-4 w-4" />
      case "viewer":
        return <Eye className="h-4 w-4" />
      default:
        return <Users className="h-4 w-4" />
    }
  }

  const handleAddUser = () => {
    const user = {
      id: users.length + 1,
      ...newUser,
      status: "active",
      lastLogin: "Never",
      permissions:
        newUser.role === "admin"
          ? ["read", "write", "admin"]
          : newUser.role === "analyst"
            ? ["read", "write"]
            : ["read"],
    }
    setUsers([...users, user])
    setNewUser({ username: "", email: "", role: "viewer", password: "" })
    setIsAddUserOpen(false)
  }

  const toggleUserStatus = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: user.status === "active" ? "inactive" : "active" } : user,
      ),
    )
  }

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* User Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-white">{users.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Active Users</p>
                <p className="text-2xl font-bold text-white">{users.filter((u) => u.status === "active").length}</p>
              </div>
              <Shield className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Administrators</p>
                <p className="text-2xl font-bold text-white">{users.filter((u) => u.role === "admin").length}</p>
              </div>
              <Settings className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 border-orange-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Analysts</p>
                <p className="text-2xl font-bold text-white">{users.filter((u) => u.role === "analyst").length}</p>
              </div>
              <Eye className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Management Table */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-400" />
                User Management
              </CardTitle>
              <CardDescription className="text-slate-400">Manage user accounts, roles, and permissions</CardDescription>
            </div>

            <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-800 border-slate-700">
                <DialogHeader>
                  <DialogTitle className="text-white">Add New User</DialogTitle>
                  <DialogDescription className="text-slate-400">
                    Create a new user account with appropriate permissions
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="username" className="text-slate-200">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value={newUser.username}
                      onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-200">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="text-slate-200">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={newUser.password}
                      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-slate-200">
                      Role
                    </Label>
                    <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="viewer" className="text-white">
                          Viewer
                        </SelectItem>
                        <SelectItem value="analyst" className="text-white">
                          Analyst
                        </SelectItem>
                        <SelectItem value="admin" className="text-white">
                          Administrator
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={handleAddUser} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Create User
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-slate-600 overflow-hidden">
            <Table>
              <TableHeader className="bg-slate-700">
                <TableRow className="border-slate-600">
                  <TableHead className="text-slate-200">User</TableHead>
                  <TableHead className="text-slate-200">Role</TableHead>
                  <TableHead className="text-slate-200">Status</TableHead>
                  <TableHead className="text-slate-200">Last Login</TableHead>
                  <TableHead className="text-slate-200">Permissions</TableHead>
                  <TableHead className="text-slate-200">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} className="border-slate-600 hover:bg-slate-700/50">
                    <TableCell>
                      <div>
                        <div className="font-medium text-white">{user.username}</div>
                        <div className="text-sm text-slate-400">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRoleColor(user.role)}>
                        {getRoleIcon(user.role)}
                        <span className="ml-1 capitalize">{user.role}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-300">{user.lastLogin}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {user.permissions.map((permission) => (
                          <Badge key={permission} variant="secondary" className="text-xs bg-slate-600 text-slate-200">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleUserStatus(user.id)}
                          className="text-slate-300 hover:text-white hover:bg-slate-600"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteUser(user.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
