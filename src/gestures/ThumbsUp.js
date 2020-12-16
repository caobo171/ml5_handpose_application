import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture 👍
const description = new GestureDescription('thumbs_up');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
description.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
description.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
description.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
description.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  description.addCurl(finger, FingerCurl.FullCurl, 1.0);
  description.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  description.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

export default description;
