import axios, { AxiosResponse } from "axios";
import { ISync } from "./Type/ISync";
import { IInfoCard } from "./Type/IInfoCard";
import { DataClass } from "../dataClass/dataClass";
import { IHeaders } from "./Type/IHeaders";

class SendClass extends DataClass {
  async postSync(
    headers: IHeaders
  ): Promise<{ data: ISync | string; isError: boolean }> {
    let result: { data: ISync | string; isError: boolean } = {
      data: "",
      isError: true,
    };
    await axios
      .post(
        "https://api.hamsterkombatgame.io/clicker/sync",
        {},
        { headers: { ...headers } }
      )
      .then((data) => {
        result.data = data.data;
        result.isError = false;
      })
      .catch(() => {
        result.isError = true;
      });
    return result;
  }

  async postTap(sync: ISync, headers: IHeaders): Promise<boolean> {
    let isError = true;
    const data = {
      count: sync.clickerUser.availableTaps,
      availableTaps: 20,
      timestamp: new Date().getTime(),
    };
    await axios
      .post("https://api.hamsterkombatgame.io/clicker/tap", data, {
        headers: { ...headers },
      })
      .then((data) => {
        isError = false;
      })
      .catch(() => {
        isError = true;
      });
    return isError;
  }

  async postInfoCard(headers: IHeaders) {
    let result: { data: IInfoCard | string; isError: boolean } = {
      data: "",
      isError: true,
    };

    await axios
      .post(
        "https://api.hamsterkombatgame.io/clicker/upgrades-for-buy",
        {},
        { headers: { ...headers } }
      )
      .then((data) => {
        result.data = data.data;
        result.isError = false;
      })
      .catch(() => {
        result.isError = true;
      });
    return result;
  }

  async postBuy(id: string, headers: IHeaders): Promise<boolean> {
    let isError = true;
    await axios
      .post(
        "https://api.hamsterkombatgame.io/clicker/buy-upgrade",
        {
          upgradeId: id,
          timestamp: 0,
        },
        { headers: { ...headers } }
      )
      .then((data) => {
        isError = false;
      })
      .catch(() => {
        isError = true;
      });
    return isError;
  }
}

export const send = new SendClass();
