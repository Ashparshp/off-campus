import React, { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { Play, Pause, Settings, Maximize, MinimizeIcon, Volume2, VolumeX, Loader2 } from 'lucide-react'

export default function Component() {
  const videoRef = useRef(null)
  const hlsRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [quality, setQuality] = useState('auto')
  const [qualityLevels, setQualityLevels] = useState(['auto'])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const hls = new Hls()
    hlsRef.current = hls

    hls.loadSource('https://d1x6q4m9kni4a2.cloudfront.net/Outputs/SVID_20200717_102349_1.m3u8')
    hls.attachMedia(video)

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      const availableQualities = hls.levels.map((level) => `${level.height}p`)
      setQualityLevels(['auto', ...availableQualities])
      setIsLoading(false)
    })

    hls.on(Hls.Events.ERROR, (_, data) => {
      if (data.fatal) {
        setIsLoading(false)
      }
    })

    hls.on(Hls.Events.LEVEL_SWITCHED, (_, data) => {
      const newQuality = hls.levels[data.level]
      setQuality(newQuality ? `${newQuality.height}p` : 'auto')
    })

    video.addEventListener('loadedmetadata', () => {
      setDuration(video.duration)
    })

    video.addEventListener('timeupdate', () => {
      setCurrentTime(video.currentTime)
    })

    video.addEventListener('waiting', () => {
      setIsLoading(true)
    })

    video.addEventListener('canplay', () => {
      setIsLoading(false)
    })

    return () => {
      hls.destroy()
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (newVolume) => {
    if (videoRef.current) {
      videoRef.current.volume = newVolume[0]
      setVolume(newVolume[0])
      setIsMuted(newVolume[0] === 0)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleQualityChange = (newQuality) => {
    const hls = hlsRef.current
    if (hls) {
      if (newQuality === 'auto') {
        hls.currentLevel = -1 // Auto quality
      } else {
        const newLevel = hls.levels.findIndex((level) => `${level.height}p` === newQuality)
        if (newLevel !== -1) {
          hls.currentLevel = newLevel
        }
      }
      setQuality(newQuality)
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="relative mx-auto bg-white video-aspect">
      <video ref={videoRef} className="" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-white">
        <Slider
          value={[currentTime]}
          max={duration}
          step={1}
          onValueChange={(value) => {
            if (videoRef.current) {
              videoRef.current.currentTime = value[0]
            }
          }}
          className="w-full"
        />
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            <Button size="icon" variant="ghost" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <Button size="icon" variant="ghost" onClick={toggleMute}>
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume]}
              max={1}
              step={0.1}
              onValueChange={handleVolumeChange}
              className="w-24"
            />
            <span className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Settings className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Playback</DropdownMenuItem>
                <DropdownMenuItem>Accessibility</DropdownMenuItem>
                <DropdownMenuItem>Audio</DropdownMenuItem>
                <DropdownMenuItem>Captions</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Quality: {quality}</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    {qualityLevels.map((q) => (
                      <DropdownMenuItem key={q} onSelect={() => handleQualityChange(q)}>
                        {q}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="icon" variant="ghost" onClick={toggleFullscreen}>
              {isFullscreen ? <MinimizeIcon className="h-6 w-6" /> : <Maximize className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}