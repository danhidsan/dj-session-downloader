import { Song } from '../types'
import Constants from '../constants'

export function searchSong(text: string): Promise<Array<Song>> {
  return new Promise<Array<Song>>((resolve, reject) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=20&q=${text} 2018&type=video&key=${Constants.apiKey}`
    )
      .then((result: Response) => {
        return result.json()
      })
      .then((data) => {
        const songs: Song[] = data.items.map((item: any) => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            image: item.snippet.thumbnails.default.url
          }
        })
        resolve(songs)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
