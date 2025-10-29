"use client";

import * as React from "react";
import { X, Info, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BannerVariant = "info" | "warning" | "success" | "error";

interface NotificationBannerProps {
  variant?: BannerVariant;
  title?: string;
  message: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const variantConfig = {
  info: {
    icon: Info,
    className: "border-bleu-200 bg-bleu-50 text-bleu-900",
    iconClassName: "text-bleu-600",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-jaune-200 bg-jaune-50 text-jaune-900",
    iconClassName: "text-jaune-600",
  },
  success: {
    icon: CheckCircle,
    className: "border-vert-200 bg-vert-50 text-vert-900",
    iconClassName: "text-vert-600",
  },
  error: {
    icon: AlertCircle,
    className: "border-rouge-200 bg-rouge-50 text-rouge-900",
    iconClassName: "text-rouge-600",
  },
};

export default function NotificationBanner({
  variant = "info",
  title,
  message,
  action,
  dismissible = true,
  onDismiss,
  className,
}: NotificationBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  const config = variantConfig[variant];
  const Icon = config.icon;

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <Alert
      className={cn(
        "relative border-l-4 shadow-sm",
        config.className,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", config.iconClassName)} />
        
        <div className="flex-1 min-w-0">
          {title && (
            <div className="font-semibold mb-1">
              {title}
            </div>
          )}
          <AlertDescription className="text-sm leading-relaxed">
            {message}
          </AlertDescription>
          
          {action && (
            <div className="mt-3">
              {action.href ? (
                <a
                  href={action.href}
                  className="inline-flex text-sm font-medium underline hover:no-underline"
                >
                  {action.label}
                </a>
              ) : (
                <button
                  onClick={action.onClick}
                  className="inline-flex text-sm font-medium underline hover:no-underline"
                >
                  {action.label}
                </button>
              )}
            </div>
          )}
        </div>

        {dismissible && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="h-6 w-6 p-0 hover:bg-black/5 flex-shrink-0"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </Button>
        )}
      </div>
    </Alert>
  );
}

// Convenience exports for specific banner types
export function InfoBanner(props: Omit<NotificationBannerProps, "variant">) {
  return <NotificationBanner variant="info" {...props} />;
}

export function WarningBanner(props: Omit<NotificationBannerProps, "variant">) {
  return <NotificationBanner variant="warning" {...props} />;
}

export function SuccessBanner(props: Omit<NotificationBannerProps, "variant">) {
  return <NotificationBanner variant="success" {...props} />;
}

export function ErrorBanner(props: Omit<NotificationBannerProps, "variant">) {
  return <NotificationBanner variant="error" {...props} />;
}
