interface HomeData {
  survivors: Array<People>
}

interface People {
  id: string
  name: string
  attribute: string
  email: string
  infectado: boolean
}