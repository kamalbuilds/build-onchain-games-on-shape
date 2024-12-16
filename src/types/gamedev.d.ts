declare module '*.jsx' {
  const content: any
  export default content
}

declare module '@gamedev/components' {
  export interface TaskControlsProps {
    tasks: Array<{
      id: string
      name: string
      completed: boolean
    }>
  }

  export function PlayerControls(): JSX.Element
  export function TaskControls(props: TaskControlsProps): JSX.Element
  export function ObjectControls(): JSX.Element
}

declare module '*.json' {
  const value: any
  export default value
}

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.png' {
  const value: string
  export default value
} 