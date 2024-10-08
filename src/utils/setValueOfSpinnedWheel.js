export function setValueOfSpinnedWheel(initialDeg, rotateWheel) {
	switch (true) {
		case (initialDeg + rotateWheel) % 360 >= 0 && (initialDeg + rotateWheel) % 360 <= 22.5:
			return 500
		case (initialDeg + rotateWheel) % 360 > 22.5 && (initialDeg + rotateWheel) % 360 <= 45:
			return 200
		case (initialDeg + rotateWheel) % 360 > 45 && (initialDeg + rotateWheel) % 360 <= 67.5:
			return 700
		case (initialDeg + rotateWheel) % 360 > 67.5 && (initialDeg + rotateWheel) % 360 <= 90:
			return 100
		case (initialDeg + rotateWheel) % 360 > 90 && (initialDeg + rotateWheel) % 360 <= 112.5:
			return 400
		case (initialDeg + rotateWheel) % 360 > 112.5 && (initialDeg + rotateWheel) % 360 <= 135:
			return 150
		case (initialDeg + rotateWheel) % 360 > 135 && (initialDeg + rotateWheel) % 360 <= 157.5:
			return 800
		case (initialDeg + rotateWheel) % 360 > 157.5 && (initialDeg + rotateWheel) % 360 <= 180:
			return 250
		case (initialDeg + rotateWheel) % 360 > 180 && (initialDeg + rotateWheel) % 360 <= 202.5:
			return 350
		case (initialDeg + rotateWheel) % 360 > 202.5 && (initialDeg + rotateWheel) % 360 <= 225:
			return 200
		case (initialDeg + rotateWheel) % 360 > 225 && (initialDeg + rotateWheel) % 360 <= 247.5:
			return 600
		case (initialDeg + rotateWheel) % 360 > 247.5 && (initialDeg + rotateWheel) % 360 <= 270:
			return 100
		case (initialDeg + rotateWheel) % 360 > 270 && (initialDeg + rotateWheel) % 360 <= 292.5:
			return 300
		case (initialDeg + rotateWheel) % 360 > 292.5 && (initialDeg + rotateWheel) % 360 <= 315:
			return 150
		case (initialDeg + rotateWheel) % 360 > 315 && (initialDeg + rotateWheel) % 360 <= 337.5:
			return 1000
		case (initialDeg + rotateWheel) % 360 > 337.5 && (initialDeg + rotateWheel) % 360 <= 360:
			return 0
	}
}
