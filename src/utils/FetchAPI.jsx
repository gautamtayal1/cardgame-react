import { useEffect, useState } from "react"

export function useFetchAPI() {

  const API_URL = "https://api.giphy.com/v1/gifs/search?api_key=g7I0s0BK1l3Dvt784tzAdQms5B46vpAG&q=pokemon&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

  const [cardData, setCardData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL)
      const json = await response.json()
      console.log(json.data)
      setCardData(json.data) // Set cardData to the array of objects
    }
    fetchData()
  }, [])

  return cardData
}