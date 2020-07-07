import Realm from 'realm'

interface SessionTypes {
  thumbnail: string
  title: string
  duration: string
}

class Session implements SessionTypes {
  public static schema: Realm.ObjectSchema = {
    name: 'session',
    properties: {
      thumbnail: 'string',
      title: 'string',
      duration: 'string'
    }
  }
  public duration: string
  public thumbnail: string
  public title: string

  constructor(duration: string, thumbnail: string, title: string) {
    this.duration = duration
    this.thumbnail = thumbnail
    this.title = title
  }
}

export default Session
