
import clsx from "clsx";
import Image from "next/image";

const ACTIONS = {
  IDLE: 'idle',
  THINKING: 'thinking',
  SPEAKING: 'speaking',
  LISTENING: 'listening',
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning',
  LOADING: 'loading',
}

export default function AstraCharacter({className, action}: {className: string, action?: string}) {
  return (
    <Image
      src="/astra-character/astra-lightbulb.webp"
      alt="Astra"
      width={200}
      height={200}
      className={
        clsx(
          'astra-character',
          {
            'astra-default': !action,
            'astra-idle': action === ACTIONS.IDLE,
            'astra-thinking': action === ACTIONS.THINKING,
            'astra-speaking': action === ACTIONS.SPEAKING,
            'astra-listening': action === ACTIONS.LISTENING,
            'astra-error': action === ACTIONS.ERROR,
            'astra-success': action === ACTIONS.SUCCESS,
            'astra-warning': action === ACTIONS.WARNING,
            'astra-loading': action === ACTIONS.LOADING,
          },
          className
        )
      }
    />
  )
}