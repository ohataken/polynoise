import Point from './Point';
import Rectangular from './Rectangular';

export default class RelativeRectangle implements Point, Rectangular {

  readonly origin: Point;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;

  constructor(origin: Point, x: number, y: number, width: number, height: number) {
    this.origin = origin;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  getRelativeX(): number {
    return this.x + this.origin.x;
  }

  getRelativeY(): number {
    return this.y + this.origin.y;
  }

  getRelativePoint(): Point {
    return {
      x: this.getRelativeX(),
      y: this.getRelativeY(),
    };
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

}
