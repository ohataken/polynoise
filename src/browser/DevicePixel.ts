export default class DevicePixel {

  readonly devicePixelRatio: number

  constructor(devicePixelRatio: number) {
    this.devicePixelRatio = devicePixelRatio
  }

  scaleX(x: number): number {
    return x * this.devicePixelRatio
  }

  scaleY(y: number): number {
    return y * this.devicePixelRatio
  }

}
