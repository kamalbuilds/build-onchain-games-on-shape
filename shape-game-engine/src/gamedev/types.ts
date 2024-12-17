import * as THREE from 'three'

export interface EnvironmentSettings {
  type: 'environment'
  assetIdentifier: string
  gravity: number
  sky_color: string
  ambient_light: number
  player_speed: number
  player_mass: number
  player_size: number
  player_jump: number
  player_flycontrol: boolean
  stars: boolean
  env_music: string
  player_music: string
}

export interface GameObject {
  type: 'object'
  assetIdentifier: string
  assetLink: string
  position: THREE.Vector3
  quaternion: THREE.Quaternion
  scale: THREE.Vector3
  worldMatrix: THREE.Matrix4
  initialVelocity?: number
  followPlayer?: boolean
  scaleFactor: number
  scaleFactorPivot: number
  fixed: boolean
  mass?: number
  colliders: 'no' | 'cuboid' | 'hull' | 'ball' | 'trimesh'
  OnClick?: string
  OnHover?: string
  OnCollision?: string
}

export interface LightObject {
  type: 'light'
  assetIdentifier: string
  position: THREE.Vector3
  color: string
  intensity: number
}

export interface TaskObject {
  type: 'task'
  assetIdentifier: string
}

export type GameObjectType = GameObject | LightObject | TaskObject | EnvironmentSettings

export interface GlobalState {
  objectMaster: GameObjectType[]
  currentObjectIdentifier: string
  assetMaster: any[]
} 