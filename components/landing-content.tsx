"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, MessageSquare, Music, VideoIcon, Zap } from "lucide-react";

const features = [
  {
    title: "Conversation",
    icon: MessageSquare,
    description: "Advanced natural language processing for engaging and intelligent conversations.",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    title: "Image Generation",
    icon: ImageIcon,
    description: "Turn your text prompts into stunning, high-quality images in seconds.",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    title: "Video Generation",
    icon: VideoIcon,
    description: "Create compelling videos from simple text descriptions instantly.",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    title: "Music Generation",
    icon: Music,
    description: "Compose original music tracks tailored to your specific mood and style.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Code Generation",
    icon: Code,
    description: "Generate efficient code snippets and solve complex programming challenges.",
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
  {
    title: "Fast Performance",
    icon: Zap,
    description: "Experience lightning-fast response times powered by cutting-edge AI models.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  }
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-zinc-900 font-extrabold mb-10">
        Unlock Infinite Possibilities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item) => (
          <Card key={item.title} className={cn("bg-white border-zinc-200 text-slate-900 shadow-sm hover:shadow-md transition duration-300", item.bgColor)}>
            <CardHeader>
              <CardTitle className="flex items-center gap-x-3 text-xl">
                <div className={cn("p-2 w-fit rounded-md bg-white/50", item.color)}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold">{item.title}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-6 text-zinc-700 text-sm leading-relaxed font-medium">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}