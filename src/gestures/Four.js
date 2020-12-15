import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const description = new GestureDescription('four');


// thumb:
description.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
description.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
description.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
description.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
description.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
description.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
description.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
description.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
description.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
description.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
description.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
description.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
description.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.75);

// pinky:
description.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
description.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
description.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.75);

// give additional weight to index and ring fingers
description.setWeight(Finger.Index, 2);
description.setWeight(Finger.Middle, 2);
description.setWeight(Finger.Ring, 2);
description.setWeight(Finger.Pinky, 2);

export default description;
