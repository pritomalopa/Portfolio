import {
  Code2,
  TerminalSquare,
  Cpu,
  Globe,
  Database,
  Layers,
  Box,
  Braces,
  Bug,
  Hash,
  Workflow,
  Server,
  FileCode,
  Binary,
  Container,
  Puzzle,
  Zap,
  Antenna
} from 'lucide-react'

// Elegant floating icons - balanced visibility with professional look
export default function FloatingIcons() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blueprint/70 via-blueprint/50 to-blueprint-deep opacity-40" />

      {/* Large prominent icons - clearly visible */}
      <Code2
        className="animate-float-a absolute -right-12 top-24 text-paper/[0.12]"
        size={280}
        strokeWidth={0.6}
      />
      <TerminalSquare
        className="animate-float-b absolute left-0 top-[45%] text-paper/[0.10]"
        size={220}
        strokeWidth={0.6}
      />
      <Bug
        className="animate-float-c absolute bottom-24 right-[10%] text-paper/[0.08]"
        size={180}
        strokeWidth={0.6}
      />

      {/* Medium icons - visible but subtle */}
      <Cpu
        className="animate-float-b absolute left-[15%] top-[18%] text-paper/[0.07]"
        size={70}
        strokeWidth={0.7}
      />
      <Globe
        className="animate-float-c absolute right-[8%] top-[55%] text-paper/[0.06]"
        size={60}
        strokeWidth={0.7}
      />
      <Database
        className="animate-float-a absolute left-[40%] bottom-[25%] text-paper/[0.06]"
        size={55}
        strokeWidth={0.7}
      />
      <Layers
        className="animate-float-b absolute right-[25%] top-[20%] text-paper/[0.07]"
        size={65}
        strokeWidth={0.7}
      />
      <Box
        className="animate-float-c absolute left-[8%] bottom-[38%] text-paper/[0.06]"
        size={50}
        strokeWidth={0.7}
      />

      {/* Small decorative icons */}
      <Braces
        className="animate-float-a absolute left-[28%] top-[12%] text-paper/[0.05]"
        size={40}
        strokeWidth={0.7}
      />
      <Zap
        className="animate-float-b absolute right-[5%] top-[35%] text-paper/[0.05]"
        size={38}
        strokeWidth={0.7}
      />
      <Hash
        className="animate-float-c absolute left-[48%] top-[50%] text-paper/[0.05]"
        size={42}
        strokeWidth={0.7}
      />
      <Workflow
        className="animate-float-a absolute right-[32%] bottom-[18%] text-paper/[0.05]"
        size={45}
        strokeWidth={0.7}
      />
      <Server
        className="animate-float-b absolute left-[60%] top-[30%] text-paper/[0.05]"
        size={40}
        strokeWidth={0.7}
      />
      <FileCode
        className="animate-float-c absolute right-[18%] top-[68%] text-paper/[0.05]"
        size={44}
        strokeWidth={0.7}
      />
      <Binary
        className="animate-float-a absolute left-[22%] top-[62%] text-paper/[0.04]"
        size={35}
        strokeWidth={0.7}
      />
      <Container
        className="animate-float-b absolute right-[42%] top-[42%] text-paper/[0.04]"
        size={36}
        strokeWidth={0.7}
      />
      <Puzzle
        className="animate-float-c absolute left-[52%] top-[72%] text-paper/[0.04]"
        size={32}
        strokeWidth={0.7}
      />
      <Antenna
        className="animate-float-a absolute right-[5%] top-[80%] text-paper/[0.04]"
        size={30}
        strokeWidth={0.7}
      />
    </div>
  )
}
