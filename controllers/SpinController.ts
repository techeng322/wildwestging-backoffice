import { Request, Response } from "express";
import { SpinMethods } from "../lib/const";

export const getSpinResultsHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { method } = req.body

    let result = {} as any

    switch(method) {
      case SpinMethods.createPlayer:
        result = createPlayer()
        break;
      case SpinMethods.addFreeRounds:
        result = addFreeRounds()
        break;
      case SpinMethods.deleteFreeRounds:
        result = deleteFreeRounds()
        break;
      case SpinMethods.getGameList:
        result = getGameList()
        break;
      case SpinMethods.getFreeRounds:
        result = getFreeRounds()
        break;
      case SpinMethods.getGame:
        result = getGame()
        break;
      case SpinMethods.getGameDemo:
        result = getGameDemo()
        break;
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

// currently, only mock data returns
// we need to add logic in below functions in the future 

const createPlayer = () => ({
	"error": 0,
	"response": {
		"id": 51,
		"username": "yourPlayerId9959",
		"balance": "0.00",
		"currencycode": "USD",
		"created": "2023-10-10T11:44:22.000000Z",
		"agent_balance": null
	}
})

export const addFreeRounds = () => ({
  "error": 0,
  "response": {
    "id": 7,
    "player_id": 57,
    "game_id": "softswiss\/LuckyCrew",
    "freespins": 12,
    "freespins_wallet": 0,
    "freespins_performed": 0,
    "bet_level": 0,
    "currency": "USD",
    "operator_id": 4,
    "valid_until": "2023-10-17T12:19:16.700332Z",
    "created_at": "2023-10-10T12:19:16.700360Z",
    "updated_at": "2023-10-10T12:19:16.700363Z",
    "active": true
  }
})

export const deleteFreeRounds = () => ({
  "api_login" : "d13b1ceb-6209-4163-b1cf-f304c28b81ec",
  "api_password": "dqRin2nfLosij2n88",
  "method": "deleteAllFreeRounds",
  "user_username": "yourPlayerId9959",
  "user_password": "superSecretPlayerPassword",
  "currency": "USD"
})

export const getGameList = () => ({
  "error": 0,
  "response": [
    {
      "id": 483,
      "name": "Fruits On Ice Collection 40 Lines",
      "type": "video-slots",
      "category": "spinomenal",
      "subcategory": "video-slots",
      "details": [],
      "new": false,
      "mobile": true,
      "id_hash": "spinomenal/FruitsOnIceCollection40Lines",
      "id_hash_parent": "spinomenal/FruitsOnIceCollection40Lines",
      "freerounds_supported": false,
      "featurebuy_supported": false,
      "has_jackpot": false,
      "play_for_fun_supported": true,
      "image": "https://cdn2.softswiss.net/bets/i/s3/spinomenal/FruitsOnIceCollection40Lines.webp",
      "image_square": "https://cdn2.softswiss.net/bets/i/s3/spinomenal/FruitsOnIceCollection40Lines.webp",
      "image_portrait": "https://cdn2.softswiss.net/bets/i/s4/spinomenal/FruitsOnIceCollection40Lines.webp",
      "image_long": "https://cdn2.softswiss.net/bets/i/s6/spinomenal/FruitsOnIceCollection40Lines.webp",
      "currency": "USD"
    },
    {
      "id": 20,
      "name": "Wild Chicago",
      "type": "video-slots",
      "category": "bgaming",
      "subcategory": "video-slots",
      "details": [],
      "new": false,
      "mobile": true,
      "id_hash": "softswiss/WildChicago",
      "id_hash_parent": "softswiss/WildChicago",
      "freerounds_supported": false,
      "featurebuy_supported": false,
      "has_jackpot": false,
      "play_for_fun_supported": true,
      "image": "https://cdn2.softswiss.net/bets/i/s3/softswiss/WildChicago.webp",
      "image_square": "https://cdn2.softswiss.net/bets/i/s3/softswiss/WildChicago.webp",
      "image_portrait": "https://cdn2.softswiss.net/bets/i/s4/softswiss/WildChicago.webp",
      "image_long": "https://cdn2.softswiss.net/bets/i/s6/spinomenal/FruitsOnIceCollection40Lines.webp",
      "currency": "USD"
    }
]
})

export const getFreeRounds = () => ({
  "error": 0,
  "response": [
  {
    "id": 7,
    "game_id": "softswiss/LuckyCrew",
    "currency": "USD",
    "player_id": 57,
    "freespins": 48,
    "freespins_bet": 0,
    "freespins_wallet": 0,
    "freespins_performed": 0,
    "bet_level": 0,
    "extra_data": null,
    "active": true,
    "operator_id": 4,
    "valid_until": "2023-10-17 12:19:16",
    "created_at": "2023-10-10 12:19:16"
  }
  ]
})

export const getGame = () => ({
  "error": 0,
  "response": "https://client-mga.spinshield.net/i?play=aHR0cHM6Ly9jbGllbnQtbWdhLnNwaW5zaGllbGQubmV0L3BsYXkvOGI1NGVkZjRmMWQ0YzNlZmRhZmQ5MGU1ZmQ5MmM5OWQvMzcxOTgyMy9zb2Z0c3dpc3MvRGljZUJvbmFuemE=",
  "session_id": "8b54edf4f1d4c3efdafd90e5fd92c99d"
})

export const getGameDemo = () => ({
  "error": 0,
  "response": "https://client-mga.spinshield.net/i?play=aHR0cHM6Ly9jbGllbnQtbWdhLnNwaW5zaGllbGQubmV0L3BsYXkvOGI1NGVkZjRmMWQ0YzNlZmRhZmQ5MGU1ZmQ5MmM5OWQvMzcxOTgyMy9zb2Z0c3dpc3MvRGljZUJvbmFuemE=",
  "session_id": "8b54edf4f1d4c3efdafd90e5fd92c99d"
})