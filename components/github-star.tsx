"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export function GithubStar() {

    return (
        <Link href="https://github.com/supernova3339/openquiz">
            <Button  variant="outline" size="icon">
                <Star className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                <span className="sr-only">Star on GitHub</span>
            </Button>
        </Link>
    )
}