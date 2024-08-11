import { data } from "./class/dataClass/dataClass";
import { hamster } from "./class/hamsterClass/hamsterClass";

// isBuy
setInterval(async () => {
  try {
    for (let i = 0; i < data.JWT.length; i++) {
      if (data.actions.isSwipe === true) {
        await hamster.buy({
          ...data.account,
          Authorization: data.JWT[i],
        });
      }
    }
  } catch (e: any) {
    console.log(e.message);
  }
}, 60000 * 30);

// isTap
setInterval(async () => {
  try {
    for (let i = 0; i < data.JWT.length; i++) {
      if (data.actions.isTap === true) {
        await hamster.tap({
          ...data.account,
          Authorization: data.JWT[i],
        });
      }
    }
  } catch (e: any) {
    console.log(e.message);
  }
}, 60000 * 40);

function randomSeconds(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
