"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Loader2,
  Mail,
  Calendar,
  AlertCircle,
  CheckCircle,
  User,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export default function ProfileComponent() {
  const { user, error, isLoading } = useUser();

  const fullName = `${user?.given_name || ""} ${user?.family_name || ""}`;
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-lg text-foreground">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen p-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Authentication Required</AlertTitle>
          <AlertDescription>
            Please log in to view your profile.
          </AlertDescription>
        </Alert>
        <Button asChild className="mt-4">
          <a href="/api/auth/login">Log In</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            User Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={user.picture || "/placeholder.svg?height=128&width=128"}
                alt={user.name || "User avatar"}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-foreground"></h2>
              <p className="text-sm text-muted-foreground">@{user.nickname}</p>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Mail className="w-4 h-4 mr-2" />
              <span>{user.email}</span>
              {user.email_verified && (
                <Badge variant="secondary" className="ml-2">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="w-4 h-4 mr-2" />
              <span>ID: {user.sub}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              <span>
                Last updated: {new Date(user.updated_at || "").toLocaleString()}
              </span>
            </div>
            <Button asChild variant="outline" className="mt-4">
              <a href="/api/auth/logout">Log Out</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
