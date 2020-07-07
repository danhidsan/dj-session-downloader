import Realm from 'realm'

export interface SessionTypes {
  id: string
  title: string
  duration?: string
  file?: string
  image: string
}

class Session implements SessionTypes {
  public static schema: Realm.ObjectSchema = {
    name: 'session',
    properties: {
      id: { type: 'string', indexed: true },
      image: 'string',
      title: 'string',
      duration: 'string',
      file: 'string'
    }
  }

  public id: string
  public duration: string
  public image: string
  public title: string
  public file: string

  constructor(
    id: string,
    duration: string,
    image: string,
    title: string,
    file: string
  ) {
    this.id = id
    this.duration = duration
    this.image = image
    this.title = title
    this.file = file
  }
}

export default Session
