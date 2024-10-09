import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { motion } from "framer-motion"

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      className={className}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "light" ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}