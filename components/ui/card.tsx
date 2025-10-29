import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-white border border-slate-200 shadow-sm overflow-hidden transition-shadow hover:shadow-md",
        className
      )}
      {...props}
    />
  )
}

function CardImage({ 
  src, 
  alt, 
  className,
  aspectRatio = "video", // "video" (16:9), "square", or "wide" (21:9)
  ...props 
}: React.ComponentProps<typeof Image> & { aspectRatio?: "video" | "square" | "wide" }) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]"
  }
  
  return (
    <div className={cn("relative w-full overflow-hidden", aspectClasses[aspectRatio])}>      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        {...props}
      />
    </div>
  )
}

function CardBadges({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-badges"
      className={cn("flex flex-wrap gap-2", className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-2 px-6 pt-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-xl font-semibold text-bleu-600 leading-tight", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-slate-600 text-base leading-relaxed", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 pb-6 pt-6", className)}
      {...props}
    />
  )
}

function CardStat({ 
  value, 
  label,
  icon,
  className,
  ...props 
}: React.ComponentProps<"div"> & { 
  value: string | number
  label: string
  icon?: React.ReactNode
}) {
  return (
    <div
      data-slot="card-stat"
      className={cn("flex flex-col gap-2 p-6", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="text-4xl md:text-5xl font-bold text-slate-800 leading-none">
          {value}
        </div>
        {icon && (
          <div className="text-bleu-500 flex-shrink-0">
            {icon}
          </div>
        )}
      </div>
      <p className="text-slate-600 text-base leading-relaxed">
        {label}
      </p>
    </div>
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardImage,
  CardBadges,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardStat,
  CardFooter,
}
