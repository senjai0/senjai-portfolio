import heroPortrait from './WebBG_of_Senjai.png'

type PortraitProps = {
  className?: string
}

export default function Portrait({ className = '' }: PortraitProps) {
  return (
    <div
      className={`aspect-[2/3] h-[44svh] max-h-[420px] w-auto max-w-none ${className}`}
      aria-hidden="true"
    >
      <img
        src={heroPortrait}
        alt=""
        className="pointer-events-none block h-full w-full object-contain object-bottom"
      />
    </div>
  )
}
